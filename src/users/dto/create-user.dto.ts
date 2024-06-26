import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MinLength } from 'class-validator';

@InputType()
export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  @Field()
  name: string;

  @ApiProperty()
  @IsString()
  @MinLength(3)
  @Field()
  email: string;

  @ApiProperty()
  @IsString()
  @MinLength(6)
  @Field()
  password: string;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Field()
  age: number;
}

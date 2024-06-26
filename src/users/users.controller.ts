import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ValidateFilterObjectPipe } from 'src/utils/validate-filter-object/validate-filter-object.pipe';
import { ListUserDto } from './dto/list-user.dto';

@ApiTags('users')
@Controller('users')
@ApiBearerAuth()
export class UsersController {
  constructor(private usersService: UsersService) {}
  //API REST ENDPOINTS FOR USERS - with JWT authentication
  @Get('/')
  listUsers(@Query(ValidateFilterObjectPipe) query: ListUserDto) {
    console.log(query);
    return this.usersService.listUsers(query);
  }

  @Get('/:id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }

  @Post('/')
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }

  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.usersService.updateUser(id, user);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}

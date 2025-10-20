import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('createUser')
  create(@Payload() dto: CreateUserDto) {
    console.log('[Users Microservice] createUser called with:', dto);
    return this.userService.create(dto);
  }

  @MessagePattern('findAllUser')
  findAll() {
    console.log('[Users Microservice] findAllUser called');
    return this.userService.findAll();
  }

  @MessagePattern('findOneUser')
  findOne(@Payload() payload: { id: number }) {
    console.log('[Users Microservice] findOneUser called with id:', payload.id);
    return this.userService.findOne(payload.id);
  }

  @MessagePattern('updateUser')
  update(@Payload() payload: { id: number; dto: UpdateUserDto }) {
    console.log('[Users Microservice] updateUser called with:', payload);
    return this.userService.update(payload.id, payload.dto);
  }

  @MessagePattern('removeUser')
  remove(@Payload() payload: { id: number }) {
    console.log('[Users Microservice] removeUser called with id:', payload.id);
    return this.userService.remove(payload.id);
  }
}

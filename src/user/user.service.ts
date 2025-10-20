import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private users: User[] = [];
  private idCounter = 1;

  create(dto: CreateUserDto): User {
    const newUser: User = { id: this.idCounter++, ...dto };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }

  update(id: number, dto: UpdateUserDto): User | null {
    const user = this.findOne(id);
    if (!user) return null;
    Object.assign(user, dto);
    return user;
  }

  remove(id: number): User | null {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) return null;
    return this.users.splice(index, 1)[0];
  }
}

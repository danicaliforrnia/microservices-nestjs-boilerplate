import {ClassSerializerInterceptor, Controller, UseInterceptors} from '@nestjs/common';
import {UsersService} from './users.service';
import {MessagePattern} from '@nestjs/microservices';
import {User} from "../models/user";
import {UserDto} from "../dtos/user-dto";

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }

    @MessagePattern({cmd: "find_all_users"})
    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @MessagePattern({cmd: "find_user_by_username"})
    findByUsername(username: string): Promise<User> {
        return this.usersService.findByUsername(username);
    }

    @MessagePattern({cmd: "create_user"})
    create(user: UserDto): Promise<User> {
        return this.usersService.create(user);
    }

    @MessagePattern({cmd: "update_user"})
    update(id: number, user: UserDto): Promise<User> {
        return this.usersService.update(id, user);
    }

    @MessagePattern({cmd: "delete_user"})
    delete(id: number): Promise<number> {
        return this.usersService.delete(id);
    }

}

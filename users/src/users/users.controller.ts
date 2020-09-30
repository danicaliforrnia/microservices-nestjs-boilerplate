import {Controller} from '@nestjs/common';
import {UsersService} from './users.service';
import {MessagePattern} from '@nestjs/microservices';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }

    @MessagePattern({cmd: "find_all_users"})
    findAll(): any[] {
        return this.usersService.findAll();
    }

    @MessagePattern({cmd: "find_user_by_username"})
    findByUsername(username: string): any {
        return this.usersService.findByUsername(username);
    }

    @MessagePattern({cmd: "create_user"})
    create(user: any): any {
        return this.usersService.create(user);
    }

    @MessagePattern({cmd: "update_user"})
    update(user: any): any {
        return this.usersService.update(user);
    }

    @MessagePattern({cmd: "delete_user"})
    delete(usrId: number) {
        return this.usersService.delete(usrId);
    }

}

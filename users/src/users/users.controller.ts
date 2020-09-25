import {Controller, Get} from '@nestjs/common';
import {UsersService} from "./users.service";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }

    @Get()
    findAll(): { id: number, name: string, username: string }[] {
        return this.usersService.getUsers();
    }

}

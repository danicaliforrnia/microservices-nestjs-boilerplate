import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UsersService} from "./users.service";
import {MessagePattern} from "@nestjs/microservices";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }

    @MessagePattern({ cmd: "find_all_users" })
    findAll(): any[] {
        return this.usersService.findAll();
    }

    // @Get('username/:username')
    @MessagePattern({ cmd: "find_user_by_username" })
    findByUsername(@Param() username: string): any {
        return this.usersService.findByUsername(username);
    }

    @MessagePattern({ cmd: "create_user" })
    create(@Body() user: any): any {
        return this.usersService.create(user);
    }

    @MessagePattern({ cmd: "update_user" })
    update(@Body() user: any): any {
        return this.usersService.update(user);
    }

    // @Delete(':usrId')
    @MessagePattern({ cmd: "delete_user" })
    delete(@Param() usrId: number) {
        return this.usersService.delete(usrId);
    }

}

import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UsersService} from "./users.service";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }

    @Get()
    findAll(): any[] {
        return this.usersService.findAll();
    }

    @Get('username/:username')
    findByUsername(@Param() username: string): any {
        return this.usersService.findByUsername(username);
    }

    @Post()
    create(@Body() user: any): any {
        return this.usersService.create(user);
    }

    @Put()
    update(@Body() user: any): any {
        return this.usersService.update(user);
    }

    @Delete(':usrId')
    delete(@Param() usrId: number) {
        return this.usersService.delete(usrId);
    }

}

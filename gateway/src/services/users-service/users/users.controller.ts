import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UsersService} from './users.service';

@Controller('users-api/v1/users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }

    @Get()
    async findAll(): Promise<any[]> {
        return this.usersService.findAll();
    }

    @Get('username/:username')
    async findByUsername(@Param() username: string): Promise<any> {
        return await this.usersService.findByUsername(username);
    }

    @Post()
    async create(@Body() user: any): Promise<any> {
        return await this.usersService.create(user);
    }

    @Put()
    async update(@Body() user: any): Promise<any> {
        return await this.usersService.update(user);
    }

    @Delete(':usrId')
    async delete(@Param() usrId: number): Promise<void> {
        await this.usersService.delete(usrId);
    }

}

import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../models/user";
import {Repository} from "typeorm";
import {UserDto} from "../dtos/user-dto";
import {Role} from "../models/role";

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>,
                @InjectRepository(Role) private readonly rolesRepository: Repository<Role>) {
    }

    async findAll(): Promise<User[]> {
        return await this.usersRepository.find({relations: ['role']});
    }

    async findByUsername(username: string): Promise<User> {
        return await this.usersRepository.findOne({
            where: {
                username
            }
        });
    }

    async create(newUser: UserDto): Promise<User> {
        const user = new User({
            username: newUser.username,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            role: await this.rolesRepository.findOne(newUser.role),
        });
        return await this.usersRepository.save(user);
    }

    async update(id: number, userToUpdate: UserDto): Promise<User> {
        const user = await this.usersRepository.findOne(id);
        user.username = userToUpdate.username;
        user.firstName = userToUpdate.firstName;
        user.lastName = userToUpdate.lastName;
        user.role = await this.rolesRepository.findOne(userToUpdate.role);
        return await this.usersRepository.save(user);
    }

    async delete(id: number): Promise<number> {
        return (await this.usersRepository.delete(id)).affected;
    }
}

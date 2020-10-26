import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Role} from "../models/role";
import {Repository} from "typeorm";

@Injectable()
export class RolesService {

    constructor(@InjectRepository(Role) private readonly rolesRepository: Repository<Role>) {
    }

    async findAll(): Promise<Role[]> {
        return await this.rolesRepository.find();
    }
}

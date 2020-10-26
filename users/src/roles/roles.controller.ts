import {Controller} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {MessagePattern} from "@nestjs/microservices";
import {Role} from "../models/role";

@Controller('roles')
export class RolesController {

    constructor(private readonly rolesService: RolesService) {
    }

    @MessagePattern({cmd: "find_all_roles"})
    findAll(): Promise<Role[]> {
        return this.rolesService.findAll();
    }
}

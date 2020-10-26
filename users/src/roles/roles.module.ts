import {Module} from '@nestjs/common';
import {RolesController} from './roles.controller';
import {RolesService} from './roles.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Role} from '../models/role';

@Module({
    imports: [TypeOrmModule.forFeature([Role])],
    controllers: [RolesController],
    providers: [RolesService]
})
export class RolesModule {
}

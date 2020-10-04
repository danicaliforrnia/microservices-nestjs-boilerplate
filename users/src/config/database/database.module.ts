import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../../models/user";
import {Role} from "../../models/role";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '12345678',
            database: 'microservices',
            entities: [User, Role],
            synchronize: true
        })
    ]
})
export class DatabaseModule {
}

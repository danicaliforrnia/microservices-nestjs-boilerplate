import {Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {UsersService} from './users.service';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'USERS_SERVICE',
                transport: Transport.TCP,
                options: {
                    host: "127.0.0.1",
                    port: 8080
                }
            }
        ])
    ],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {
}

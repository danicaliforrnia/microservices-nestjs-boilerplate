import {Module} from '@nestjs/common';
import {UsersModule} from './users/users.module';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {RolesModule} from './roles/roles.module';
import {ConfigModule} from './config/config.module';

@Module({
    imports: [
        ConfigModule,
        UsersModule,
        RolesModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
}

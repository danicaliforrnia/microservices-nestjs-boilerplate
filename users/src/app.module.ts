import {Module} from '@nestjs/common';
import {UsersModule} from './users/users.module';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {RolesModule} from './roles/roles.module';
import {ConfigModule} from './config/config.module';
import {AutomapperModule} from 'nestjsx-automapper'

@Module({
    imports: [
        ConfigModule,
        AutomapperModule.withMapper(),
        UsersModule,
        RolesModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
}

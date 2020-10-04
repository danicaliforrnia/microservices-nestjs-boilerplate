import {Inject, Injectable} from "@nestjs/common";
import {ClientProxy} from '@nestjs/microservices';

@Injectable()
export class UsersService {

    constructor(@Inject('USERS_SERVICE') private readonly usersServiceClient: ClientProxy) {
    }

    async findAll(): Promise<any[]> {
        return await this.usersServiceClient.send({cmd: 'find_all_users'}, {}).toPromise();
    }

    async findByUsername(username: string): Promise<any> {
        return await this.usersServiceClient.send<string>({cmd: 'find_user_by_username'}, username).toPromise();
    }

    async create(user: any): Promise<any> {
        return await this.usersServiceClient.send<any>({cmd: 'create_user'}, user).toPromise();
    }

    async update(user: any): Promise<any> {
        return await this.usersServiceClient.send<any>({cmd: 'update_user'}, user).toPromise();
    }

    async delete(usrId: number): Promise<void> {
        await this.usersServiceClient.send<number>({cmd: 'delete_user'}, usrId).toPromise();
    }

}

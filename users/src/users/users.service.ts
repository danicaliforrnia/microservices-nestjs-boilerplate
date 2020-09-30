import {Injectable} from '@nestjs/common';

@Injectable()
export class UsersService {

    findAll(): any[] {
        return [{id: 1, name: 'Daniel', username: 'danicalifornia'}]
    }

    findByUsername(username: string): any {
        console.log(username);
        return {};
    }

    create(user: any): any {
        return user;
    }

    update(user: any): any {
        return user;
    }

    delete(usrId: number): void {
        console.log(usrId);
    }
}

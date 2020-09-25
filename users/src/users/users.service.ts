import {Injectable} from '@nestjs/common';

@Injectable()
export class UsersService {

    getUsers(): { id: number, name: string, username: string }[] {
        return [
            {id: 1, name: 'Daniel', username: 'danicalifornia'}
        ]
    }
}

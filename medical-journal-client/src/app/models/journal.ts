import { User } from './user';

export class Journal {
    id: number;
    name: string;
    description: string;
    file: string;
    publisher: User[];
}

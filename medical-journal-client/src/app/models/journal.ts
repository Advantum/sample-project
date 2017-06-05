import { User } from './user';

export interface Journal {
    id: number;
    name: string;
    description: string;
    file: string;
    publisher: User;
}

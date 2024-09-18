import { UserType } from 'dto';

export interface IUser extends UserType {
  age: number;
  fullName: string;
}

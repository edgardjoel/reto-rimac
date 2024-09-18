import { calculateAge } from '@utilities/utils';

import { IUser } from '@interfaces/User';
import { UserType } from '@dto/index';

export function transformUserData(data: UserType): IUser {
  return {
    age: calculateAge(data.birthDay),
    birthDay: data.birthDay,
    fullName: `${data.name} ${data.lastName}`,
    lastName: data.lastName,
    name: data.name,
  };
}

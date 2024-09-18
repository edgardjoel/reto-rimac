import { transformUserData } from '@adapters/http/user/transformUserData';
import apiService from '@config/axiosConfig';
import { AxiosRequestConfig } from 'axios';

import { IUser } from '@interfaces/User';
import { UserType, UserSchema } from '@dto/index';

export async function getUsers(url: string, config?: AxiosRequestConfig): Promise<IUser> {
  const response = await apiService.get<UserType>(url, config);

  // Validar los datos de la API usando Zod
  const validatedData = UserSchema.safeParse(response.data);

  if (validatedData.success) {
    // Transformar los datos después de validarlos
    const transformedUsers = transformUserData(validatedData.data);

    return transformedUsers;
  } else {
    throw new Error(validatedData.error.message);
  }
}

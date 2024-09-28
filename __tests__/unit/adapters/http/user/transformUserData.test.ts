// Asegúrate de usar la ruta correcta
import { calculateAge } from '@utilities/utils'; // Mockearemos esta función
import { UserType } from '@dto/index';
import { IUser } from '@interfaces/User';
import { transformUserData } from '@adapters/index';

jest.mock('@utilities/utils', () => ({
  calculateAge: jest.fn(),
}));

describe('transformUserData', () => {
  it('debería transformar los datos del usuario correctamente', () => {
    // Configuración del mock para calculateAge
    (calculateAge as jest.Mock).mockReturnValue(30);

    // Datos de entrada simulados (UserType)
    const userData: UserType = {
      birthDay: '1993-09-20',
      name: 'John',
      lastName: 'Doe',
    };

    // Resultado esperado (IUser)
    const expectedOutput: IUser = {
      age: 30, // La edad es mockeada a 30
      birthDay: '1993-09-20',
      fullName: 'John Doe',
      lastName: 'Doe',
      name: 'John',
    };

    // Llamada a la función que estamos probando
    const result = transformUserData(userData);

    // Verificación del resultado
    expect(result).toEqual(expectedOutput);

    // Asegurarse de que calculateAge se haya llamado con el birthDay correcto
    expect(calculateAge).toHaveBeenCalledWith('1993-09-20');
  });
});

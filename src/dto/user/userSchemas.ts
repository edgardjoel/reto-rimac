import { z } from 'zod';

// Esquema de validación para el usuario
export const UserSchema = z.object({
  name: z.string(),
  lastName: z.string(),
  birthDay: z.string().regex(/^\d{2}-\d{2}-\d{4}$/, {
    message: 'La fecha de nacimiento debe tener el formato dd-mm-yyyy',
  }),
});

export type UserType = z.infer<typeof UserSchema>;

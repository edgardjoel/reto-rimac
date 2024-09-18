// src/schemas/userFormSchema.ts
import { z } from 'zod';

export const documentOptions = ['DNI', 'RUC'];
const documentNumberSchema = z
  .string()
  .min(1, 'Número de documento es requerido')
  .regex(/^\d*$/, 'Número de documento debe contener solo números');

// Define el esquema de formulario
export const formSchema = z
  .object({
    documentType: z.string().min(1, 'Tipo de documento es requerido'),
    documentNumber: documentNumberSchema,
    phone: z
      .string()
      .min(1, 'Teléfono es requerido')
      .length(9, 'Teléfono debe tener exactamente 9 dígitos')
      .regex(/^\d+$/, 'Teléfono debe contener solo números'),
    termsAccepted: z.boolean().refine((val) => val === true, {
      message: 'Debe aceptar los términos',
    }),
    communicationsAccepted: z.boolean().refine((val) => val === true, {
      message: 'Debe aceptar las comunicaciones',
    }),
  })
  .superRefine((values, ctx) => {
    const { documentType, documentNumber } = values;

    const getDocumentNumberLength = (type: string) => {
      switch (type) {
        case 'DNI':
          return 8;
        case 'RUC':
          return 11;
        case 'Pasaporte':
          return { min: 9, max: 12 };
        default:
          return null;
      }
    };

    const requiredLength = getDocumentNumberLength(documentType);

    if (requiredLength === null) {
      return; // No valid document type
    }

    if (typeof requiredLength === 'number') {
      // For DNI and RUC
      if (documentNumber.length !== requiredLength) {
        ctx.addIssue({
          path: ['documentNumber'],
          message: `Número de documento debe tener exactamente ${requiredLength} dígitos para ${documentType}`,
          code: z.ZodIssueCode.custom,
        });
      }
    } else {
      // For Pasaporte
      if (
        documentNumber.length < requiredLength.min ||
        documentNumber.length > requiredLength.max
      ) {
        ctx.addIssue({
          path: ['documentNumber'],
          message: `Número de documento debe tener entre ${requiredLength.min} y ${requiredLength.max} caracteres para ${documentType}`,
          code: z.ZodIssueCode.custom,
        });
      }
    }
  });

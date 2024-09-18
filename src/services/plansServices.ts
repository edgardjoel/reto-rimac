import { transformPlanData } from '@adapters/index';
import apiService from '@config/axiosConfig';
import { AxiosRequestConfig } from 'axios';

import { PlansApiDataResponseType, PlansSchema } from '@dto/index';
import { IPlans } from '@interfaces/Plans';

//generame un enum indicando que 1 es para mi y 2 es para alguien mas
export enum StatePlanType {
  PERSONAL = 2, // Para individuos o familias
  OTHER = 1, // Para empresas, organizaciones, o cualquier otro tipo de entidad
}

export async function getPlans(
  applydiscount: StatePlanType,
  url: string,
  config?: AxiosRequestConfig,
): Promise<IPlans[]> {
  const {
    data: { list },
  } = await apiService.get<PlansApiDataResponseType>(url, config);

  // Validar los datos de la API usando Zod
  const validatedData = PlansSchema.safeParse(list);

  if (validatedData.success) {
    // Transformar los datos después de validarlos
    const transformedPlans = validatedData?.data.map((e) => transformPlanData(e, 5, applydiscount));

    return transformedPlans;
  } else {
    throw new Error(validatedData.error.message);
  }
}

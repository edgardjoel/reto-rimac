import { z } from 'zod';

const PlanSchema = z.object({
  name: z.string(),
  price: z.number(),
  description: z.array(z.string()),
  age: z.number().int().min(0).max(100),
});

// Esquema para la lista de planes
export const PlansSchema = z.array(PlanSchema);

// Tipo derivado del esquema de un solo plan
export type PlanType = z.infer<typeof PlanSchema>;

// Esquema de respuesta de la API
export const PlansApiDataResponseSchema = z.object({
  list: z.array(PlanSchema), // 'list' contiene un array de planes
});

// Tipo derivado del esquema de respuesta de la API
export type PlansApiDataResponseType = z.infer<typeof PlansApiDataResponseSchema>;

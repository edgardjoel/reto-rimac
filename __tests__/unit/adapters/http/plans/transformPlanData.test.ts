import { transformPlanData } from '@adapters/index';
import { dataPlans } from '@data/circleItems';
import { PlanType } from '@dto/index';
import { IPlans } from '@interfaces/Plans';
import { StatePlanType } from '@services/plansServices';

// Mock de los datos de un plan
const mockPlan: PlanType = dataPlans[0];

describe('transformPlanData', () => {
  it('debería aplicar el descuento correctamente cuando el estado del plan es PERSONAL', () => {
    const discountPercentage = 5; // 5% de descuento
    const result: IPlans = transformPlanData(mockPlan, discountPercentage, StatePlanType.PERSONAL);

    // El nuevo precio debería ser 37.05
    expect(result.discount).toBe('37.05');
  });

  it('debería devolver el plan sin cambios cuando el estado del plan no es PERSONAL', () => {
    const discountPercentage = 10;
    const result: IPlans = transformPlanData(mockPlan, discountPercentage, StatePlanType.OTHER);

    // Debería devolver el plan sin cambios
    expect(result).toEqual(mockPlan);
  });

  it('debería manejar correctamente un porcentaje de descuento de 0%', () => {
    const discountPercentage = 0;
    const result: IPlans = transformPlanData(mockPlan, discountPercentage, StatePlanType.PERSONAL);

    // El precio debería mantenerse igual, ya que el descuento es 0%
    expect(result.discount).toBe('39');
  });
});

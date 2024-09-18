import { PlanType } from '@dto/index';
import { IPlans } from '@interfaces/Plans';
import { StatePlanType } from '@services/plansServices';

export const transformPlanData = (
  plan: PlanType,
  discountPercentage: number,
  applydiscount: StatePlanType,
): IPlans => {
  if (applydiscount == StatePlanType.PERSONAL) {
    const discountAmount = plan.price * (discountPercentage / 100);
    // Calcular el nuevo precio
    const newPrice = plan.price - discountAmount;
    return {
      ...plan,

      discount: newPrice.toString(),
    };
  }
  return plan;
};

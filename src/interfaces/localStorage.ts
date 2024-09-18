import { IPlans } from './Plans';
import { IUser } from './User';

interface Progress {
  totalSteps: number;
  currentStep: number;
}

export interface UserInfo extends IUser, Pick<IPlans, 'price'> {
  dni: string;
  phoneNumber: string;
  progress: Progress;
  namePlan: string;
  typeDocument: string;
}

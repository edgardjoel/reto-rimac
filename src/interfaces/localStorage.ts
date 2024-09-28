import { IPlans } from './Plans';
import { IUser } from './User';

interface Progress {
  totalSteps: number;
  currentStep: number;
}

export interface UserInfo extends IUser {
  dni: string;
  phoneNumber: string;
  progress: Progress;
  namePlan: string;
  typeDocument: string;
  price?: number;
}

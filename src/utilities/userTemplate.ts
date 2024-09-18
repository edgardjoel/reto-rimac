import { circleItems } from '@data/circleItems';
import { UserInfo } from '@interfaces/localStorage';

export const usersTemplate: UserInfo = {
  dni: '',
  phoneNumber: '',
  progress: {
    totalSteps: circleItems.length,
    currentStep: 0,
  },
  age: 0,
  fullName: '',
  name: '',
  lastName: '',
  birthDay: '',
  namePlan: '',
  price: 0,
  typeDocument: '',
};

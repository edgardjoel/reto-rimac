import { PlanCardProps } from '@components/Molecules/PlanCard/PlanCard';
import { useAuth } from '@hooks/useAuth';

const useBack = () => {
  const { userInfo, logout, setUserInfo } = useAuth();

  const Back = () => {
    if (userInfo?.progress.currentStep == 0) {
      logout();
    }

    if (userInfo?.progress.currentStep == 1) {
      setUserInfo({ ...userInfo, progress: { ...userInfo.progress, currentStep: 0 } });
    }
  };
  const Next = (data: PlanCardProps) => {
    if (userInfo?.progress.currentStep == 0) {
      setUserInfo({
        ...userInfo,
        progress: { ...userInfo.progress, currentStep: 1 },
        namePlan: data.title,
        price: data.discount ? data.discount : data.price,
      });
    }
  };

  return { Back, Next };
};

export default useBack;

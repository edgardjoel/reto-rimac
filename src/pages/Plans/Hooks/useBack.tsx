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
  const Next = (data: any) => {
    if (userInfo?.progress.currentStep == 0) {
      setUserInfo({
        ...userInfo,
        progress: { ...userInfo.progress, currentStep: 1 },
        namePlan: data.title,
        price: data.price,
      });
    }
  };

  return { Back, Next };
};

export default useBack;

import { PlanCardProps } from '@components/Molecules/PlanCard/PlanCard';
import { QuoteOptionProps } from '@components/Molecules/QuoteOption/QuoteOption';
import { plansApiUrl } from '@config/apiConfig';
import { quoteOptionsData } from '@data/circleItems';
import { useAuth } from '@hooks/useAuth';
import { getPlans } from '@services/plansServices';
import { transformAndLabelPlans } from '@utilities/utils';
import { useEffect, useState } from 'react';

// Hook para la selección de tipo de seguro
const useInsuranceTypes = () => {
  const { userInfo } = useAuth();
  const [insuranceTypes, setInsuranceTypes] = useState<PlanCardProps[]>([]); // Tipos de seguros
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [quoteOptionsCard, setQuoteOptionsDataCard] = useState<QuoteOptionProps[]>([]);
  // Simular la obtención de tipos de seguro
  const fetchInsuranceTypes = async (selectOption: QuoteOptionProps) => {
    try {
      const newSelectOption = quoteOptionsCard.map((option: QuoteOptionProps) => {
        if (option.id === selectOption.id) {
          option.active = true;
        } else {
          option.active = false;
        }
        return option;
      });

      setQuoteOptionsDataCard(newSelectOption);

      setLoading(true);

      const response = await getPlans(selectOption?.id ?? 0, plansApiUrl);

      const resultPlan = transformAndLabelPlans(response, userInfo?.birthDay);

      setInsuranceTypes(resultPlan);
    } catch (err) {
      setError(err as string);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setQuoteOptionsDataCard(quoteOptionsData);
  }, []);

  const resetOptions = () => {
    setInsuranceTypes([]);
    setError(null);
    setLoading(false);
    setQuoteOptionsDataCard((prev) =>
      prev.map((option) => ({
        ...option,
        active: false, // Cambiar el estado a inactivo
      })),
    );
  };

  useEffect(() => {
    if (userInfo) {
      resetOptions();
    }
  }, [userInfo]);

  return {
    insuranceTypes,
    loading,
    error,
    fetchInsuranceTypes,
    quoteOptionsCard,
    setQuoteOptionsDataCard,
    resetOptions,
  };
};

export default useInsuranceTypes;

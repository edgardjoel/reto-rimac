import { plansApiUrl, userApiUrl } from '@config/apiConfig';
import { useAuth } from '@hooks/useAuth';
import { UserInfo } from '@interfaces/localStorage';
import { IUser } from '@interfaces/User';
import { getUsers } from '@services/userService';
import { usersTemplate } from '@utilities/userTemplate';
import { setUserInfo } from '@utilities/utils';
import { useState } from 'react';

const useUsers = () => {
  const { setUserInfo } = useAuth();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const onSubmit = async (values: {
    documentType: string;
    documentNumber: string;
    phone: string;
    termsAccepted: boolean;
    communicationsAccepted: boolean;
  }) => {
    try {
      const { documentType: typeDocument, documentNumber: dni, phone: phoneNumber } = values;
      setLoading(false);
      const users = await getUsers(userApiUrl);
      setLoading(true);
      const userInfo = { ...usersTemplate, ...users, typeDocument, dni, phoneNumber };
      setUserInfo(userInfo);
    } catch (error) {
      setError(error as string);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, onSubmit };
};

export default useUsers;

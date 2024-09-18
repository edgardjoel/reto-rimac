import { AxiosRequestConfig } from 'axios';
import { useState, useEffect } from 'react';

interface FetchData<T> {
  (url: string, config?: AxiosRequestConfig): Promise<T>;
}

const useData = <T>(fetchData: FetchData<T>, url: string, config?: AxiosRequestConfig) => {
  const [data, setData] = useState<T | T[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await fetchData(url, config);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [url, config, fetchData]);

  return { data, loading, error };
};

export default useData;

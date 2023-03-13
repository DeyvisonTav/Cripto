import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

interface Asset {
  id: string;
  rank: string;
  symbol: string;
  name: string;
}

export function useFetch() {
  const [data, setData] = useState<Asset[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  const url = 'https://api.coincap.io/v2/assets';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<{ data: Asset[] }> = await axios.get(url);
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, []);

  return { data, isFetching };
}

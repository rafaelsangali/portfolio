import axios from "axios";
import { useEffect, useState } from "react";

const requestApi = axios.create({
  baseURL: "https://api.github.com",
});

export default function useFecth<T = unknown>(url: string) {
  const [isFecthing, setIsFecthing] = useState(true);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    requestApi
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .finally(() => setIsFecthing(false));
  }, []);
  return { data, isFecthing };
}

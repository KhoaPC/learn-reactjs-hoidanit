import { useEffect, useState } from "react";
import axios from "axios";
import { formatDate } from "./index";

const useFetch = (url, isCovidData) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await axios.get(url, {});

        let data = res && res.data ? res.data : [];
        if (data && data.length > 0 && isCovidData === true) {
          data.map((item) => {
            item.Date = formatDate("DD/MM/YYYY", item.Date);
            return item;
          });
          data = data.reverse();
        }
        setData(data);
        setIsLoading(false);
        setIsError(false);
      } catch (err) {
        setIsError(true);
        setIsLoading(false);
      }
    }

    const job = setTimeout(() => {
      fetchData();
    }, 2000);

    return () => {
      console.log("Request canceled by user");
      // Hủy request khi chuyển route
      window.clearTimeout(job);
    };
  }, [url]);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useFetch;

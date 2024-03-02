import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      setisPending(false);
    } catch (error) {
      setisPending(false);
      setError(error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
    // eslint-disable-next-line
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;

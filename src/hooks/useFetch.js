import { useState, useEffect } from 'react';

function useFetch(uri) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (!uri) return;

    async function getRecipies() {
      try {
        setLoading(true);

        const response = await fetch(uri);
        const data = await response.json();

        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getRecipies();
  }, [uri]);

  return {
    loading,
    data,
    error,
  };
}

export default useFetch;

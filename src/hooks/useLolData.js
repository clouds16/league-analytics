import { useState, useEffect } from "react";
import championsData from "../data/twoChampsData.json";

const useLolData = (championName) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate an async operation to mimic API behavior
    setTimeout(() => {
      if (championsData[championName]) {
        setData(championsData[championName]);
        setLoading(false);
      } else {
        setError("Champion not found");
        setLoading(false);
      }
    }, 100); // 100ms delay to simulate network request
  }, [championName]);

  return { data, loading, error };
};

export default useLolData;

import { useState, useEffect } from "react";
import { fetchCoinData, fetchHistoricalData } from "../actions/coinApi";

const useCoinData = (coinId, currency) => {
  const [coinData, setCoinData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await fetchCoinData(coinId);
      setCoinData(data);
      setLoading(false);
    };

    getData();
  }, [coinId, currency]);

  return { coinData, loading };
};

const useHistoricalData = (coinId, currency) => {
  const [historicalData, setHistoricalData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHistoricalData = async () => {
      setLoading(true);
      const data = await fetchHistoricalData(coinId, currency);
      setHistoricalData(data);
      setLoading(false);
    };

    getHistoricalData();
  }, [coinId, currency]);

  return { historicalData, loading };
};

export { useCoinData, useHistoricalData };

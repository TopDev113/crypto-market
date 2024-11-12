import { useState, useEffect } from "react";
import { fetchCoinData, fetchHistoricalData } from "../actions/coinApi";

const useCoinData = (coinId) => {
  const [coinData, setCoinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await fetchCoinData(coinId);
      setCoinData(data);
      setLoading(false);
    };

    getData();
  }, [coinId]);

  return { coinData, loading };
};

const useHistoricalData = (coinId) => {
  const [historicalData, setHistoricalData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHistoricalData = async () => {
      setLoading(true);
      const data = await fetchHistoricalData(coinId);
      setHistoricalData(data);
      setLoading(false);
    };

    getHistoricalData();
  }, [coinId]);

  return { historicalData, loading };
};

const useCoinSearch = (allCoins) => {
  const [input, setInput] = useState("");
  const [displayCoin, setDisplayCoin] = useState(allCoins);

  const inputHandler = (event) => {
    const value = event.target.value;
    setInput(value);
    if (value === "") {
      setDisplayCoin(allCoins); // Reset when input is empty
    }
  };

  const searchHandler = (event) => {
    event.preventDefault();
    const filteredCoins = allCoins.filter((coin) =>
      coin.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(filteredCoins);
  };

  useEffect(() => {
    if (allCoins) {
      console.log("----allcoins----", allCoins);
      setDisplayCoin(allCoins);
    }
  }, [allCoins, setDisplayCoin]);
  return { input, inputHandler, searchHandler, displayCoin, setDisplayCoin };
};

export { useCoinData, useHistoricalData, useCoinSearch };

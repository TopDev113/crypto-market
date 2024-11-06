import { useState, useEffect } from "react";

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

  return { input, inputHandler, searchHandler, displayCoin, setDisplayCoin };
};

const useDisplayCoins = (allCoins, setDisplayCoin) => {
  useEffect(() => {
    setDisplayCoin(allCoins); // Update display when allCoins changes
  }, [allCoins, setDisplayCoin]);
};
export { useCoinSearch, useDisplayCoins };

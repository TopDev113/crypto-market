const fetchAllCoin = async (currency) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-RPq1szJCmY5LejoNSmPnqGjJ",
    },
  };

  return fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
    options
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data; // Return data for later use
    })
    .catch((err) => console.error(err));
};

const fetchCoinData = async (coinId) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-RPq1szJCmY5LejoNSmPnqGjJ",
    },
  };

  fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));
};

const fetchHistoricalData = async (coinId, currency) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-RPq1szJCmY5LejoNSmPnqGjJ",
    },
  };

  fetch(
    `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));
};

export { fetchCoinData, fetchHistoricalData, fetchAllCoin };

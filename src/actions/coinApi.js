const fetchCoinData = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-RPq1szJCmY5LejoNSmPnqGjJ",
    },
  };

  fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
    .then((response) => response.json())
    .then((response) => setCoinData(response))
    .catch((err) => console.error(err));
};

const fetchHistoricalData = async () => {
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
    .then((response) => setHistoricalData(response))
    .catch((err) => console.error(err));
};

export { fetchCoinData, fetchHistoricalData };

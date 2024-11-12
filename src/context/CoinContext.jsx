import { createContext, useEffect, useState } from "react";
import { fetchAllCoin } from "../actions/coinApi";
import useInterval from "../hooks/useInterval";
// import PropTypes from "propTypes";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });
  useInterval(() => {
    fetchAllCoin(currency).then((data) => {
      setAllCoin(data);
    });
  }, 3000);

  const contextValue = {
    allCoin,
    currency,
    setCurrency,
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

// CoinContextProvider.propTypes = {
//     children: PropTypes.node.isRequired,
//   };

export default CoinContextProvider;

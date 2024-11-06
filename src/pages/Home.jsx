import { useContext, useEffect, useState } from "react";
import "../styles/Home.css";
import { CoinContext } from "../context/CoinContext";
import { useCoinSearch, useDisplayCoins } from "../hooks/useCoin";
import { Link } from "react-router-dom";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const { input, inputHandler, searchHandler, displayCoin, setDisplayCoin } =
    useCoinSearch(allCoin);
  useDisplayCoins(allCoin, setDisplayCoin);
  return (
    <div className="home">
      <div className="hero">
        <h1>
          <span style={{ color: "#D4AF37" }}>Crypto &nbsp;&nbsp;</span>
          Mining Place
        </h1>
        <p>
          Welcome to the Crypto Mining. explore Great Opportunity{" "}
          <span style={{ color: "#DAA520" }}>₿</span> Coins 💰🤑
        </p>
        <form onSubmit={searchHandler}>
          <input
            onChange={inputHandler}
            list="coinList"
            value={input}
            type="text"
            placeholder="Search Any Crypto"
            required
          />

          <datalist id="coinList">
            {allCoin.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
          </datalist>

          <button type="submit">Search</button>
        </form>
        <div className="crypto-table">
          <div className="table-layout">
            <p>#</p>
            <p>Coins</p>
            <p>Symbol</p>
            <p>Price</p>
            <p style={{ textAlign: "center" }}>24H Change</p>
            <p className="market-cap">Market Cap</p>
            <p>Operate</p>
          </div>
          {displayCoin.slice(0, 10).map((item, index) => (
            <div className="table-layout" key={index}>
              <p>{item.market_cap_rank}</p>
              <div className="coin-name">
                <img src={item.image} alt="coin-image" />
                <p>{item.name}</p>
              </div>
              <p>{item.symbol}</p>
              <p>
                {currency.symbol} {item.current_price}
              </p>
              <p
                className={
                  item.price_change_percentage_24h > 0 ? "green" : "red"
                }
              >
                {Math.floor(item.price_change_percentage_24h * 100) / 100}%
              </p>
              <p className="market-cap">
                {currency.symbol}
                {item.market_cap.toLocaleString()}
              </p>
              <button className="operate-button">Trade</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

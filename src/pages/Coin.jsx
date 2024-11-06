import "../styles/Coin.css";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../components/CoinContext";
import LineChart from "../components/LineChart";
import { DownArrow, UpArrow } from "../components/Icon";
import { fetchCoinData, fetchHistoricalData } from "../actions/coinApi.js";
import { useCoinData, useHistoricalData } from "../hooks/useCoin.js";

const Coin = () => {
  const { coinId } = useParams();
  const { currency } = useContext(CoinContext);
  const { coinData, loading: coinDataLoading } = useCoinData(coinId, currency);
  const { historicalData, loading: historicalDataLoading } = useHistoricalData(
    coinId,
    currency
  );
  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency]);

  return (
    <div className="coin">
      {coinData && historicalData ? (
        <>
          <div className="coin-name2">
            <img
              className="coin-image"
              src={coinData.image.large}
              alt={`${coinData.name} image`}
            />
            <p>
              <b className="coin-name-b">
                {coinData.name} ({coinData.symbol.toUpperCase()})
              </b>
            </p>
          </div>
          <div className="coin-chart">
            <LineChart historicalData={historicalData} />
          </div>

          <div className="coin-info">
            <ul>
              <li>Crypto Market Rank</li>
              <li>{coinData.market_cap_rank}</li>
            </ul>
            <ul>
              <li>Price</li>
              <li>
                {currency.symbol}{" "}
                {coinData.market_data.current_price[
                  currency.name
                ].toLocaleString()}
              </li>
            </ul>
            <ul>
              <li>Market Cap</li>
              <li>
                {currency.symbol}{" "}
                {coinData.market_data.market_cap[
                  currency.name
                ].toLocaleString()}
              </li>
            </ul>
            <ul>
              <li>24 Hour High</li>
              <li>
                <UpArrow
                  className="icon"
                  style={{ textAlign: "center", display: "flex" }}
                />
                {currency.symbol}{" "}
                {coinData.market_data.high_24h[currency.name].toLocaleString()}
              </li>
            </ul>
            <ul>
              <li>24 Hour Low</li>
              <li>
                <DownArrow
                  className="icon"
                  style={{ textAlign: "center", display: "flex" }}
                />
                {currency.symbol}{" "}
                {coinData.market_data.low_24h[currency.name].toLocaleString()}
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div className="spinner">
          <div className="spin"></div>
        </div>
      )}
    </div>
  );
};

export default Coin;

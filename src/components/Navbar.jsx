import "../styles/Navbar.css";
import Logo from "../assets/logo.png";
import arrow from "../assets/arrow.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CoinContext } from "../context/CoinContext";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "Є" });
        break;
      }
      case "pkr": {
        setCurrency({ name: "pkr", symbol: "Rs." });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  const connectWallet = () => {
    console.log("connect wallet");
  };
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={Logo} alt="Cryptoverse" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="navbar-right">
        <button onClick={connectWallet}>
          connect
          <img src={arrow} alt="arrow" />
        </button>
        <ul>
          <li>Login</li>
          <li>Sign up</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

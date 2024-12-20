import { Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Features from "./components/Features";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        {/* <Route path="/coin/:coinId" element={<Coin />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

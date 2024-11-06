import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <ul>
          <li>Terms & Privacy</li>
          <li>Privacy Policy</li>
          <li>Contact Us</li>
        </ul>
        <p>
          Copyright @ 2024, <Link to="/">Cryptoverse</Link> - All Rights
          Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;

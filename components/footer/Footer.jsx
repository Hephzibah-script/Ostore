import "./footer.css";
import footerLogo from "/icons8-cart-48.png";
import whatsApp from "/icons8-whatsapp-50.png";
import instagram from "/icons8-instagram-50.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLogo">
        <img src={footerLogo} alt="logo" />
      </div>
      <ul className="footerLinks">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footerSocials">
        <div className="footerIcons">
          <img src={whatsApp} alt="whatApp" />
        </div>
        <div className="footerIcons">
          <img src={instagram} alt="instagram" />
        </div>
      </div>
      <div className="footerCopyright">
        <hr />
        <p>Copywright @ 2025 All right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

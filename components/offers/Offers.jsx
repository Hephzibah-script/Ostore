import "./offers.css";
import exclusiveImg from "../Assets/prod_5.jpg";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offersLeft">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offersRight">
        <img className="offersImg" src={exclusiveImg} alt="exclusive" />
      </div>
    </div>
  );
};

export default Offers;

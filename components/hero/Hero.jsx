import handIcon from "/icons8-waving-hand-emoji-48.png";
import arrowIcon from "/icons8-chevron-49.png";
import afroBabe from "/afroBabe.png";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroLeft">
        <p className="newAO">NEW ARRIVALS ONLY</p>
        <div>
          <div className="handIcon">
            <p>new</p>
            <img src={handIcon} alt="handIcon" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="heroBtn">
          <div>Latest Collection</div>
          <img src={arrowIcon} className="arrowIcon" alt="arrowIcon" />
        </div>
      </div>
      <div className="heroRight">
        <img src={afroBabe} alt="afroBabe" className="afroBabe" />
      </div>
    </div>
  );
};

export default Hero;

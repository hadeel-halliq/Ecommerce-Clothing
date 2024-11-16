import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";


export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand hand-icon">
            <p>new</p>
            <p>collections</p>
            <p>for everyone</p>
          </div>
        </div>
        <div className="hero-latest-btn">
          <p>Latest Collection</p>
          <img src={arrow_icon} />
        </div>
      </div>
    </div>
  );
}

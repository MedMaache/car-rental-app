import image1 from "./data/car_icon1.jpg";
import image2 from "./data/car_icon2.jpg";
import image3 from "./data/car_icon3.jpg";
import "./styles/About.css";

export function About() {
  return (
    <>
      <div className="About">
        <div className="AText">
          <h3>Plan your trip now</h3>
          <h1>Quick & easy car rental</h1>
        </div>
        <div className="BText">
          <div className="description">
            <img src={image1} className="car-icon1"></img>
            <h6>Select a car</h6>
            <p>
              We offer a wide range of vehicles for all your needs. We have the
              perfect car for you.
            </p>
          </div>
          <div className="description">
            <img src={image2} className="car-icon2"></img>
            <h6>Contact operator</h6>
            <p>
              Our knowledgeable and friendly opperators are always ready to help
              with any question.
            </p>
          </div>
          <div className="description">
            <img src={image3} className="car-icon3"></img>
            <h6>Drive</h6>
            <p>
              whether you&apos;re hitting the oppen road or just a visit the
              city, we got you covered.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

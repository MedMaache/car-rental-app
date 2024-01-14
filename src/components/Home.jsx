import "./styles/Home.css";
import image from "./data/blue_car.png";

export function Home({ bookRef, faqRef }) {
  const handleClick = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="Home">
      <div className="text">
        <h3>Plan your trip now</h3>
        <h1>
          Save <span className="big">big</span> on your <br /> rental car
        </h1>
        <p>
          Rent the car of your dreams. More budget for your travel. <br />{" "}
          Unbeatable prices. Flexible pick-up options and much more.
        </p>
        <button
          className="LButton"
          onClick={() => {
            handleClick(bookRef.current);
          }}
        >
          Book Ride
        </button>
        <button
          className="RButton"
          onClick={() => {
            handleClick(faqRef.current);
          }}
        >
          Learn More
        </button>
      </div>

      <div className="image">
        <img src={image} className="blue-car" alt="blue car"></img>
      </div>
    </div>
  );
}

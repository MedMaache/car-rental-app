import image1 from "./data/jofrey.png";
import image2 from "./data/gerald.png";
import "./styles/Testimonials.css";

export function Testimonials() {
  return (
    <>
      <div className="Testimonials">
        <div className="text">
          <h4>Reviewed by Customers</h4>
          <h1>Client&apos;s Testimonials</h1>
          <h5>
            Discover the positive impact we&apos;ve made on the our clients by
            through reading
            <br />
            their testimonials.Our clients have experienced our service and
            results, and they&apos;re eager
            <br />
            to share their positive experiences with you.
          </h5>
        </div>
        <div className="comments">
          <div className="comment-area">
            <p className="description">
              We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable.
            </p>
            <div className="profile">
              <img className="joe" src={image1}></img>
              <p>
                joffrey baratheon
                <br />
                <span className="country"> westeros</span>
              </p>
              {/* <img className="rating" src={image4}></img> */}
            </div>
          </div>
          <div className="comment-area">
            <p className="description">
              The car was in great condition and made our trip even better.
              Highly recommend for this car rental website!
            </p>
            <div className="profile">
              <img className="joe" src={image2}></img>
              <p>
                geralt of rivia
                <br />
                <span className="country">rivia</span>
              </p>
              {/* <img className="rating" src={image3}></img> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

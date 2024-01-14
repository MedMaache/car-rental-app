import image1 from "./data/googleapp.svg";
import image2 from "./data/appstore.svg";
import image3 from "./data/4.webp";
import "./styles/Download.css";

export function Download() {
  return (
    <>
      <div className="Download">
        <div className="text">
          <h1>Download our app to get most out of it</h1>
          <p>
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <img className="app" src={image1}></img>
          <img className="app" src={image2}></img>
        </div>
        <img className="phone" src={image3}></img>
      </div>
    </>
  );
}

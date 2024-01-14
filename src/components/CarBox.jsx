import "./styles/CarBox.css";

export function CarBox({ data, carID, bookRef }) {
  const handleClick = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className="carbox">
          {/* car image */}
          <div className="CarImage">
            <img src={car.img} alt="car picture" />
          </div>

          {/* car info */}
          <div className="info">
            <p>{car.price}$ / per day</p>
            <table>
              <tr>
                <td>model</td>
                <td>{car.model}</td>
              </tr>
              <tr>
                <td>Mark</td>
                <td>{car.mark}</td>
              </tr>
              <tr>
                <td>Year</td>
                <td>{car.year}</td>
              </tr>
              <tr>
                <td>Doors</td>
                <td>{car.doors}</td>
              </tr>
              <tr>
                <td>AC</td>
                <td>{car.air}</td>
              </tr>
              <tr>
                <td>Transmission</td>
                <td>{car.transmission}</td>
              </tr>
              <tr>
                <td>Fuel</td>
                <td>{car.fuel}</td>
              </tr>
            </table>
            <button
              onClick={() => {
                handleClick(bookRef.current);
              }}
            >
              BOOK NOW
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

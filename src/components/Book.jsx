import { forwardRef, useState } from "react";
import "./styles/Book.css";

export function Book({ bookRef }) {
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  return (
    <>
      <body className="bookBody">
        <div className="Book" ref={bookRef}>
          <h1>Book a car</h1>
          <form>
            <div className="inputBox">
              <label htmlFor="car">Select your car</label>
              <br />
              <select id="car">
                <option value="" disabled selected hidden>
                  Select your option
                </option>
                <option value="car 1">car 1</option>
                <option value="car 2">car 2</option>
                <option value="car 3">car 3</option>
                <option value="car 4">car 4</option>
                <option value="car 5">car 5</option>
              </select>
            </div>

            <div className="inputBox">
              <label htmlFor="PLocation">Pick-up</label>
              <br />
              <select id="PLocation">
                <option value="" disabled selected hidden>
                  Select pick up location
                </option>
                <option value="location 1">location 1</option>
                <option value="location 2">location 2</option>
                <option value="location 3">location 3</option>
                <option value="location 4">location 4</option>
                <option value="location 5">location 5</option>
              </select>
            </div>

            <div className="inputBox">
              <label htmlFor="DLocation">Drop-off</label>
              <br />
              <select id="DLocation">
                <option value="" disabled selected hidden>
                  Select drop off location
                </option>
                <option value="location 1">location 1</option>
                <option value="location 2">location 2</option>
                <option value="location 3">location 3</option>
                <option value="location 4">location 4</option>
                <option value="location 5">location 5</option>
              </select>
            </div>
            <div className="inputBox">
              <label htmlFor="PDate">Pick-up</label>
              <br />
              <input
                type="date"
                id="PDate"
                value={pickTime}
                onChange={handlePickTime}
              />
            </div>

            <div className="inputBox">
              <label htmlFor="DDate">Drop-off</label>
              <br />
              <input
                type="date"
                id="DDate"
                value={dropTime}
                onChange={handleDropTime}
              />
            </div>
            <button className="inputBox">Search</button>
          </form>
        </div>
      </body>
    </>
  );
}

export default forwardRef(Book);

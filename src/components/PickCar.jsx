import { CarBox } from "./CarBox";
import { useState } from "react";
import { CAR_DATA } from "./CarData";
import "./styles/PickCar.css";

export function PickCar({ bookRef }) {
  const [active, setActive] = useState("FirstCar");

  return (
    <>
      <div className="Models">
        <div className="buttons">
          <button id="car1" onClick={() => setActive("FirstCar")}>
            Audi A1 S-Line
          </button>
          <button id="car2" onClick={() => setActive("SecondCar")}>
            VW Golf 6
          </button>
          <button id="car3" onClick={() => setActive("ThirdCar")}>
            Toyota Camry
          </button>
          <button id="car4" onClick={() => setActive("ForthCar")}>
            BMW 320 ModenLine
          </button>
          <button id="car5" onClick={() => setActive("FifthCar")}>
            Mercedes-Benz GLK
          </button>
          <button id="car6" onClick={() => setActive("SixthCar")}>
            VW Passat CC
          </button>
        </div>
        <div className="Data">
          {active === "FirstCar" && (
            <CarBox data={CAR_DATA} carID={0} bookRef={bookRef} />
          )}
          {active === "SecondCar" && (
            <CarBox data={CAR_DATA} carID={1} bookRef={bookRef} />
          )}
          {active === "ThirdCar" && (
            <CarBox data={CAR_DATA} carID={2} bookRef={bookRef} />
          )}
          {active === "ForthCar" && (
            <CarBox data={CAR_DATA} carID={3} bookRef={bookRef} />
          )}
          {active === "FifthCar" && (
            <CarBox data={CAR_DATA} carID={4} bookRef={bookRef} />
          )}
          {active === "SixthCar" && (
            <CarBox data={CAR_DATA} carID={5} bookRef={bookRef} />
          )}
        </div>
      </div>
    </>
  );
}

/* eslint-disable no-unused-vars */
import "./App.css";
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Book } from "./components/Book";
import { Contact } from "./components/Contact";
import { Download } from "./components/Download";
import { FAQ } from "./components/FAQ";
import { Navbar } from "./components/Navbar";
import { PickCar } from "./components/PickCar";
import { Testimonials } from "./components/Testimonials";
import { Home } from "./components/Home";
import { useRef } from "react";

function App() {
  const bookRef = useRef(null);
  const faqRef = useRef(null);

  return (
    <>
      <Navbar />
      <Home bookRef={bookRef} faqRef={faqRef} />
      <Book bookRef={bookRef} />
      <About />
      <Banner />
      <PickCar bookRef={bookRef} />
      <Testimonials />
      <FAQ faqRef={faqRef} />
      <Download />
      <Contact />
    </>
  );
}

export default App;

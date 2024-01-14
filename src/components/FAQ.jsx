import { useState } from "react";
import "./styles/FAQ.css";

export function FAQ({ faqRef }) {
  const [activeQ, setActiveQ] = useState("Q1");

  function openQ(id) {
    setActiveQ(activeQ === id ? "" : id);
  }

  return (
    <>
      <div className="Faq" ref={faqRef}>
        <div className="text">
          <h4>FAQ</h4>
          <h1>Frequently Asked Questions</h1>
          <h5>
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to
            <br />
            Common Concerns and Inquiries.
          </h5>
        </div>
        <div className="questions">
          <div className="question-box">
            <div id="Q1" onClick={() => openQ("Q1")}>
              <p className={`QBox ${activeQ === "Q1" ? "active" : ""}`}>
                1. What is special about comparing rental car deals?
              </p>
            </div>
            <div>
              {activeQ === "Q1" ? (
                <p className={`answers ${activeQ === "Q1" ? "active" : ""}`}>
                  Comparing rental car deals is important as it helps find the
                  best deal that fits your budget and requirements, ensuring you
                  get the most value for your money. By comparing various
                  options, you can find deals that offer lower prices,
                  additional services, or better car models. You can find car
                  rental deals by researching online and comparing prices from
                  different rental companies.
                </p>
              ) : null}
            </div>
          </div>
          <br />
          <div className="question-box">
            <div id="Q2" onClick={() => openQ("Q2")}>
              <p className={`QBox ${activeQ === "Q2" ? "active" : ""}`}>
                2. How do I find the car rental deals?
              </p>
            </div>
          </div>
          <div>
            {activeQ === "Q2" ? (
              <p className={`answers ${activeQ === "Q2" ? "active" : ""}`}>
                You can find car rental deals by researching online and
                comparing prices from different rental companies. Websites such
                as Expedia, Kayak, and Travelocity allow you to compare prices
                and view available rental options. It is also recommended to
                sign up for email newsletters and follow rental car companies on
                social media to be informed of any special deals or promotions.
              </p>
            ) : null}
          </div>
          <br />
          <div className="question-box">
            <div id="Q3" onClick={() => openQ("Q3")}>
              <p className={`QBox ${activeQ === "Q3" ? "active" : ""}`}>
                3. How do I find such low rental car prices?
              </p>
            </div>
          </div>
          <div className={`ans ${activeQ === "Q3" ? "active" : ""}`}>
            {activeQ === "Q3" ? (
              <p className={`answers ${activeQ === "Q3" ? "active" : ""}`}>
                Book in advance: Booking your rental car ahead of time can often
                result in lower prices. Compare prices from multiple companies:
                Use websites like Kayak, Expedia, or Travelocity to compare
                prices from multiple rental car companies. Look for discount
                codes and coupons: Search for discount codes and coupons that
                you can use to lower the rental price. Renting from an
                off-airport location can sometimes result in lower prices.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

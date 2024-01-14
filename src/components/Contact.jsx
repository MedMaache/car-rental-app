import "./styles/Contact.css";

export function Contact() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">affiliate program</a>
                </li>
                <li>
                  <a href="#">(123) -456-789</a>
                </li>
                <li>
                  <a href="#">carex@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">locations</a>
                </li>
                <li>
                  <a href="#">payment options</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Hours</h4>
              <ul>
                <li>
                  <p>Mon - Thu: 9:00AM - 9:00PM</p>
                </li>
                <li>
                  <p>Sat: 9:00AM - 7:00PM</p>
                </li>
                <li>
                  <p>Sun: 9:00AM - 5:00PM</p>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Subscribe</h4>
              <form className="subscribe-form">
                <ul>
                  <li>
                    <p>
                      Subscribe your Email address for latest news & updates.
                    </p>
                  </li>
                  <li>
                    <input
                      type="email"
                      placeholder="Enter Email Address"
                      aria-label="Email Address"
                    />
                  </li>
                  <li>
                    <button type="submit">Subscribe</button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

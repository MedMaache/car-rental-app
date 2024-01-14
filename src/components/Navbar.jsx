import "./styles/Navbar.css";

export function Navbar() {
  return (
    <>
      <header>
        <input type="checkbox" id="check" />
        <h1 className="logo">CAREX</h1>
        <nav>
          <ul className="nav_links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Vehicle Models</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <a href="#">
          <button className="Navbar-button">Register</button>
        </a>
        <label htmlFor="check" className="icon">
          <div className="navContainer">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </label>
      </header>
    </>
  );
}

import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");

  const handleClick = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div
          className="nav-logo"
          onClick={() => handleClick("hero")}
          style={{ cursor: "pointer" }}
        >
          EchoTrack
        </div>

        <div className="nav-links">
            <button
            className={active === "features" ? "active" : ""}
            onClick={() => handleClick("features")}
          >
            Features
          </button>
          
          <button
            className={active === "why" ? "active" : ""}
            onClick={() => handleClick("why")}
          >
            Why EchoTrack
          </button>

          <button
            className={active === "growth" ? "active" : ""}
            onClick={() => handleClick("growth")}
          >
            Insights
          </button>

          <button
            className={active === "preview" ? "active" : ""}
            onClick={() => handleClick("preview")}
          >
            Preview
          </button>
        </div>

        <button className="nav-cta">Get Started</button>
      </div>
    </nav>
  );
}

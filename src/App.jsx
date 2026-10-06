import React, { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">

        <div className="logo">
          ✦ NOVA
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </nav>

      {/* Hero */}
      <section id="home" className="hero">

        <div className="hero-content">

          <div className="badge">
            ✨ Welcome to the future
          </div>

          <h1>
            Build
            <span> Amazing </span>
            Experiences
          </h1>

          <p>
            Create beautiful, modern and fully animated
            websites using React.js.
          </p>

          <div className="buttons">

            <button className="primary-btn">
              Get Started →
            </button>

            <button className="secondary-btn">
              ▶ Explore
            </button>

          </div>

        </div>

        {/* Animated Card */}
        <div className="hero-animation">

          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>

          <div className="glass-card">

            <div className="card-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code">
              <p>
                <b>const</b> website =
              </p>

              <p className="indent">
                "Amazing React";
              </p>

              <p>
                <b>return</b> (
              </p>

              <p className="indent">
                &lt;Beautiful /&gt;
              </p>

              <p>
                );
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Features */}
      <section id="features" className="features">

        <div className="section-title">
          <span>FEATURES</span>

          <h2>
            Everything You Need
          </h2>

          <p>
            Modern design with powerful animations.
          </p>
        </div>

        <div className="feature-container">

          <div className="feature-card">
            <div className="icon">⚡</div>
            <h3>Fast</h3>
            <p>
              Lightning-fast React website with smooth
              performance.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">🎨</div>
            <h3>Beautiful</h3>
            <p>
              Modern UI with gradients, glass effects
              and animations.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon">🚀</div>
            <h3>Responsive</h3>
            <p>
              Works perfectly on mobile, tablet and
              desktop screens.
            </p>
          </div>

        </div>

      </section>

      {/* About */}
      <section id="about" className="about">

        <div className="about-box">

          <div>
            <span>ABOUT US</span>

            <h2>
              Turn Your Ideas
              Into Reality
            </h2>

            <p>
              This React website is created with pure
              React and CSS animations. You can use it
              as a portfolio, startup or business website.
            </p>

            <button className="primary-btn">
              Learn More →
            </button>
          </div>

          <div className="about-animation">
            <div className="pulse"></div>
            <div className="pulse"></div>
            <div className="core">✦</div>
          </div>

        </div>

      </section>

      {/* Contact */}
      <section id="contact" className="contact">

        <h2>
          Ready to Create Something Amazing?
        </h2>

        <p>
          Start building your next React project today.
        </p>

        <button className="primary-btn">
          Start Now →
        </button>

      </section>

      {/* Footer */}
      <footer>
        <div className="logo">
          ✦ NOVA
        </div>

        <p>
          © 2026 Nova. Built with React.js
        </p>
      </footer>

    </div>
  );
}

export default App;
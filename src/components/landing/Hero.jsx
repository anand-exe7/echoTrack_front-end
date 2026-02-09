import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const heroRef = useRef(null);
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScroll(entry.isIntersecting);
      },
      {
        threshold: 0.6, // hero must be ~60% visible
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} id="hero" className="section hero">
      <div>
        <h1>
          See effort
          <br />
          turn into growth.
        </h1>

        <p>
          EchoTrack helps you reflect on consistency — without streaks,
          comparison, or pressure.
        </p>

        <div className="hero-cta">
          <button>Start tracking your growth</button>
        </div>
      </div>

      {/* Weekly Reflection Card */}
      <div className="soft-card">
        <h3 style={{ marginBottom: "12px" }}>Weekly Reflection</h3>
        <p style={{ color: "#475569", fontSize: "14px" }}>
          Small effort, repeated calmly, compounds into meaningful growth.
        </p>

        <div
          style={{
            marginTop: "24px",
            height: "140px",
            borderRadius: "12px",
            padding: "16px",
            background:
              "linear-gradient(180deg, rgba(99,102,241,0.15), rgba(99,102,241,0.05))",
            overflow: "hidden",
          }}
        >
          <svg
            viewBox="0 0 400 140"
            width="100%"
            height="100%"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 110 
                 C 80 60, 140 130, 200 90 
                 C 260 50, 320 70, 390 30"
              style={{
                stroke: "#6366f1",
                strokeWidth: 3,
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeDasharray: 500,
                strokeDashoffset: 500,
                animation:
                  "drawLine 3s ease-out forwards, softPulse 6s ease-in-out infinite",
              }}
            />
          </svg>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`scroll-indicator ${!showScroll ? "hide" : ""}`}>
        <div className="mouse">
          <span className="wheel" />
        </div>
        <span className="scroll-text">Scroll To Discover</span>
      </div>

      {/* Inline keyframes */}
      <style>{`
        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes softPulse {
          0%, 100% {
            opacity: 0.9;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
}

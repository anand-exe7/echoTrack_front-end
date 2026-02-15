import { useEffect, useRef, useState } from "react";
import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiJavascript,
  SiFramer,
} from "react-icons/si";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.6 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const techLogos = [
    { node: <SiReact /> },
    { node: <SiVite /> },
    { node: <SiTailwindcss /> },
    { node: <SiJavascript /> },
    { node: <SiFramer /> },
  ];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen pt-32 px-8 max-w-7xl mx-auto relative"
    >
      <div className="grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            See effort <br />
            turn into{" "}
            <span
              className="
                bg-gradient-to-br
                from-purple-500
                via-indigo-600
                to-violet-600
                bg-clip-text
                text-transparent
              "
            >
              growth.
            </span>
          </h1>

          <p className="text-lg text-slate-600 max-w-xl">
            EchoTrack helps you reflect on consistency — without streaks,
            comparison, or pressure.
          </p>

          {/* CTA BUTTON */}
          <div className="mt-8">
            <button
              className="
                group flex items-center gap-3 px-8 py-4
                rounded-full font-semibold text-white
                bg-gradient-to-r from-indigo-600 to-purple-500
                hover:from-indigo-800 hover:to-purple-600
                transition-all duration-300
                shadow-lg hover:shadow-xl
                hover:scale-[1.03]
              "
            >
              <span>Start tracking your growth</span>
              <ArrowRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* TECH STACK */}
          <div className="mt-14 max-w-md">
            <h4 className="text-[11px] tracking-[0.35em] text-[#a8a5d6] uppercase mb-4">
              Tech Stack
            </h4>

            <LogoLoop
              logos={techLogos}
              speed={15}      // Faster loop
              logoHeight={22}
              gap={50}
              className="opacity-80"
            />
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="relative">

          {/* Glow background */}
          <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-[40px]" />

          <div
            className="
              relative p-10 rounded-[32px]
              border border-white/40
              bg-white/90 backdrop-blur-xl
              shadow-xl
              transition-all duration-500 ease-out
              hover:shadow-[0_25px_60px_-15px_rgba(99,102,241,0.45)]
              hover:-translate-y-2
              hover:border-indigo-200
            "
          >
            <h3
              className="
                font-semibold mb-3 text-lg
                bg-gradient-to-l
                from-purple-500
                to-indigo-600
                bg-clip-text
                text-transparent
              "
            >
              Weekly Reflection
            </h3>

            <p className="text-sm text-slate-600">
              Small effort, repeated calmly, compounds into meaningful growth.
            </p>

            <div
              className="
                mt-8 h-[150px] rounded-2xl p-6
                bg-gradient-to-bl
                from-indigo-600/20
                to-purple-400/10
              "
            >
              <svg viewBox="0 0 400 140" width="100%" height="120%">
                <path
                  d="M10 110 C 80 60, 140 130, 200 90 C 260 50, 320 70, 390 30"
                  stroke="#6366f1"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-draw"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div
        className={`
          absolute bottom-8 left-1/2 -translate-x-1/2
          flex flex-col items-center
          transition-all duration-1000 ease-out
          ${visible ? "opacity-60 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        <span className="text-[9px] tracking-[0.35em] text-slate-600 mb-2">
          SCROLL TO DISCOVER
        </span>

        <div className="w-6 h-9 border-2 border-slate-500 rounded-full flex justify-center relative">
          <div className="w-1.5 h-2 bg-indigo-800 rounded-full mt-2 animate-scroll" />
        </div>
      </div>
    </section>
  );
}

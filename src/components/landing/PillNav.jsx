import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PillNav = ({ logoText, items, activeHref }) => {
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);

  useEffect(() => {
    circleRefs.current.forEach((circle, i) => {
      if (!circle?.parentElement) return;

      const pill = circle.parentElement;
      const rect = pill.getBoundingClientRect();
      const { width: w, height: h } = rect;

      const R = ((w * w) / 4 + h * h) / (2 * h);
      const D = Math.ceil(2 * R) + 2;
      const delta =
        Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;

      circle.style.width = `${D}px`;
      circle.style.height = `${D}px`;
      circle.style.bottom = `-${delta}px`;

      gsap.set(circle, {
        xPercent: -50,
        scale: 0,
        transformOrigin: `50% ${D - delta}px`
      });

      const tl = gsap.timeline({ paused: true });

      tl.to(circle, {
        scale: 1.2,
        duration: 0.5,
        ease: "power3.out"
      });

      tlRefs.current[i] = tl;
    });
  }, [items]);

  const handleEnter = i => {
    tlRefs.current[i]?.play();
  };

  const handleLeave = i => {
    tlRefs.current[i]?.reverse();
  };

  return (
    <header className="fixed top-6 left-0 w-full z-50 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LEFT — LOGO */}
        <div className="text-xl font-bold tracking-wide">
          <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
            {logoText}
          </span>
        </div>

        {/* CENTER — MENU */}
        <nav className="hidden md:flex bg-white/70 backdrop-blur-xl rounded-full px-2 py-1 shadow-lg border border-white/40">
          <ul className="flex gap-2">
            {items.map((item, i) => {
              const isActive = activeHref === item.href;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                    className={`relative px-5 py-2 rounded-full text-sm font-semibold overflow-hidden transition-colors duration-300 ${
                      isActive
                        ? "text-indigo-600"
                        : "text-slate-700"
                    }`}
                  >
                    {/* Hover circle */}
                    <span
                      ref={el => (circleRefs.current[i] = el)}
                      className="absolute left-1/2 bottom-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                    />

                    <span className="relative z-10">
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* RIGHT — AUTH BUTTONS */}
        <div className="hidden md:flex items-center gap-4">

          {/* Login */}
          <button className="text-sm font-semibold text-slate-700 hover:text-indigo-600 transition-colors duration-300">
            Login
          </button>

          {/* Signup */}
          <button className="px-6 py-2 rounded-full text-white text-sm font-semibold
            bg-gradient-to-r from-indigo-500 to-purple-500
            hover:from-indigo-600 hover:to-purple-600
            transition-all duration-300 shadow-md hover:shadow-lg">
            Sign Up
          </button>

        </div>

      </div>
    </header>
  );
};

export default PillNav;

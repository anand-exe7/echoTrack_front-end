import { useEffect, useRef, useState } from "react";
import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiJavascript,
  SiFramer,
} from "react-icons/si";
import { ArrowRight, TrendingUp, Zap, Heart } from "lucide-react";
import { motion } from "framer-motion";
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
      className="min-h-screen pt-32 px-8 max-w-7xl mx-auto relative overflow-hidden"
    >

      
      {/* SUBTLE BACKGROUND DECORATIVE ELEMENTS */}
      
      {/* Floating circles - Top left */}
      <div className="absolute top-10 left-5 w-56 h-56 bg-[#4F772D]/3 rounded-full blur-3xl opacity-30 pointer-events-none animate-pulse" />
      
      {/* Floating circles - Bottom right */}
      <div className="absolute bottom-32 right-5 w-64 h-64 bg-[#90A955]/3 rounded-full blur-3xl opacity-30 pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Small accent dots - scattered */}
      <div className="absolute top-24 left-1/4 w-2 h-2 bg-[#4F772D]/20 rounded-full opacity-40 pointer-events-none" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-[#90A955]/15 rounded-full opacity-30 pointer-events-none" />
      <div className="absolute bottom-40 left-12 w-2.5 h-2.5 bg-[#31572C]/25 rounded-full opacity-35 pointer-events-none" />
      
      {/* Subtle gradient line accent - left side */}
      <div className="absolute left-0 top-1/3 w-1 h-32 bg-gradient-to-b from-[#4F772D]/10 via-[#4F772D]/5 to-transparent pointer-events-none" />
      
      {/* Subtle gradient line accent - right side */}
      <div className="absolute right-0 bottom-1/3 w-1 h-40 bg-gradient-to-t from-[#90A955]/10 via-[#90A955]/5 to-transparent pointer-events-none" />

      <div className="grid md:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT SIDE */}
        <div>
          {/* Small decorative elements above heading */}
          <div className="flex items-center gap-3 mb-6 opacity-60">
            <div className="w-1.5 h-1.5 bg-[#4F772D] rounded-full" />
            <span className="text-xs text-[#4F772D] font-semibold tracking-widest">GROWTH JOURNEY</span>
            <div className="w-1.5 h-1.5 bg-[#90A955] rounded-full" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            See effort <br />
            turn into{" "}
            <span
              className="
                bg-gradient-to-br
                from-[#4F772D]
                via-[#90A955]
                to-[#31572C]
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
          
             <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                group flex items-center gap-3 px-8 py-4
                rounded-full font-semibold text-white
                bg-gradient-to-r from-[#4F772D] to-[#90A955]
                hover:from-[#31572C] hover:to-[#4F772D]
                transition-all duration-300
                shadow-lg hover:shadow-xl
                hover:scale-[1.03]
              "
            >
              <span>Start tracking your growth</span>
               <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={22} />
              </motion.div>
            </motion.button>
          </div>

          {/* STATS SECTION */}
          

          {/* Small accent divider */}
          <div className="mt-10 flex items-center gap-4 opacity-50">
            <div className="h-px flex-1 bg-gradient-to-r from-[#4F772D]/30 to-transparent" />
          </div>

          {/* TECH STACK */}
          <div className="mt-14 max-w-md">
            <h4 className="text-[11px] tracking-[0.35em] text-[#4F772D] uppercase mb-4">
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
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >

          {/* Glow background */}
          <motion.div
            className="absolute inset-0 bg-[#90A955]/10 blur-3xl rounded-[40px]"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="
              relative p-10 rounded-[32px]
              border border-white/40
              bg-white/90 backdrop-blur-xl
              shadow-xl
              transition-all duration-500 ease-out
              hover:shadow-[0_25px_60px_-15px_rgba(79,119,45,0.45)]
              hover:border-[#ECF39E]
            "
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="
                font-semibold mb-3 text-lg
                bg-gradient-to-l
                from-[#4F772D]
                to-[#31572C]
                bg-clip-text
                text-transparent
              "
            >
              Weekly Reflection
            </motion.h3>

            <p className="text-sm text-slate-600 mb-6">
              Small effort, repeated calmly, compounds into meaningful growth.
            </p>

            {/* INTERACTIVE PROGRESS INDICATOR */}
            <div className="mb-6 space-y-3">
              {["Consistency", "Awareness", "Progress"].map((label, i) => (
                <motion.div
                  key={i}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-xs font-medium text-slate-600">{label}</span>
                    <span className="text-xs font-semibold text-[#4F772D]">{60 + i * 10}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#4F772D] to-[#90A955]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${60 + i * 10}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.15 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ANIMATED CHART */}
            <motion.div
              className="
                mt-4 h-[150px] rounded-2xl p-6
                bg-gradient-to-bl
                from-[#4F772D]/20
                to-[#90A955]/10
              "
            >
              <svg viewBox="0 0 400 140" width="100%" height="120%">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4F772D" />
                    <stop offset="100%" stopColor="#90A955" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M10 110 C 80 60, 140 130, 200 90 C 260 50, 320 70, 390 30"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                />
                {/* Animated dots on line */}
                {[0.25, 0.5, 0.75].map((pos, i) => (
                  <motion.circle
                    key={i}
                    cx={10 + pos * 380}
                    cy={110 - Math.sin(pos * Math.PI) * 40}
                    r="5"
                    fill="#4F772D"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 + i * 0.2 }}
                    viewport={{ once: true }}
                    animate={{ scale: [1, 1.3, 1] }}
                    whileHover={{ scale: 1.5 }}
                  />
                ))}
              </svg>
            </motion.div>
          </motion.div>

          {/* FLOATING BADGE */}
          <motion.div
            className="absolute -bottom-6 -right-6 px-6 py-3 rounded-2xl bg-white shadow-lg border border-[#ECF39E]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 bg-[#4F772D] rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-semibold text-[#4F772D]">Always Growing</span>
            </div>
          </motion.div>
        </motion.div>
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
          <div className="w-1.5 h-2 bg-[#31572C] rounded-full mt-2 animate-scroll" />
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function LogoLoop({
  logos,
  speed = 18,
  gap = 50,
  logoHeight = 22,
  className = "",
}) {
  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      <div
        className="flex items-center w-max animate-logoLoop"
        style={{
          gap: `${gap}px`,
          animationDuration: `${speed}s`,
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center flex-shrink-0
                       text-[#4F772D] opacity-70"
            style={{
              fontSize: `${logoHeight}px`,
              height: `${logoHeight}px`,
            }}
          >
            {logo.node}
          </div>
        ))}
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F5F8E8] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F5F8E8] to-transparent" />
    </div>
  );
}

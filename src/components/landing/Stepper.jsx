import { useState } from "react";

const steps = [
  {
    title: "Track what you actually do",
    description:
      "Log your daily effort without pressure. No streak anxiety. No performance show.",
  },
  {
    title: "See your quiet progress",
    description:
      "Not every day feels big. But over time, your effort builds something real.",
  },
  {
    title: "Understand your patterns",
    description:
      "Notice what works for you. Identify rhythms, energy cycles, and habits.",
  },
  {
    title: "Build consistency gently",
    description:
      "Progress grows from repetition — not motivation spikes.",
  },
  {
    title: "Focus on effort, not noise",
    description:
      "No likes. No comparison. Just you and your growth.",
  },
];

export default function Stepper() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < steps.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <div
      className="
        w-full
        max-w-3xl
        mx-auto
        rounded-3xl
        border border-[#ECF39E]
        bg-gradient-to-b from-white to-[#F5F8E8]
        backdrop-blur-md
        shadow-[0_20px_50px_-10px_rgba(79,119,45,0.15)]
        px-10 py-10
      "
    >
      {/* Step Circles */}
      <div className="flex items-center justify-between mb-10">

        {steps.map((_, index) => (
          <div key={index} className="flex items-center flex-1">

            {/* Circle */}
            <div
              className={`
                w-10 h-10
                rounded-full
                flex items-center justify-center
                text-sm font-semibold
                transition-all duration-300
                shadow-md
                ${
                  index === current
                    ? "bg-gradient-to-br from-[#4F772D] to-[#31572C] text-white shadow-[#90A955]/40"
                    : index < current
                    ? "bg-gradient-to-br from-[#90A955] to-[#4F772D] text-white shadow-[#90A955]/30"
                    : "bg-white text-slate-500 border border-slate-200"
                }
              `}
            >
              {index + 1}
            </div>

            {/* Line */}
            {index !== steps.length - 1 && (
              <div className="flex-1 h-[2px] bg-slate-200 mx-3"></div>
            )}

          </div>
        ))}

      </div>

      {/* Step Content */}
      <div className="text-center min-h-[120px]">

        <h3
          className="
            text-xl
            font-semibold
            mb-4
            bg-gradient-to-r
            from-[#4F772D]
            to-[#31572C]
            bg-clip-text
            text-transparent
          "
        >
          {steps[current].title}
        </h3>

        <p className="text-slate-600 leading-relaxed max-w-xl mx-auto">
          {steps[current].description}
        </p>

      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-10">

        <button
          onClick={prev}
          disabled={current === 0}
          className="
            text-slate-400
            hover:text-slate-600
            transition
            disabled:opacity-30
          "
        >
          Back
        </button>

        <button
          onClick={next}
          disabled={current === steps.length - 1}
          className="
            px-6 py-2.5
            rounded-full
            bg-gradient-to-br
            from-[#4F772D]
            to-[#31572C]
            text-white
            font-medium
            shadow-md
            hover:shadow-lg
            transition-all duration-300
            disabled:opacity-40
          "
        >
          Next
        </button>

      </div>
    </div>
  );
}

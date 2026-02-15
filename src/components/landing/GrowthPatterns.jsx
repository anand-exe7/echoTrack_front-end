import {
  FiTrendingUp,
  FiFeather,
  FiActivity,
  FiRefreshCcw,
} from "react-icons/fi";

export default function GrowthPatterns() {
  const items = [
    { icon: <FiTrendingUp />, label: "Momentum Waves" },
    { icon: <FiFeather />, label: "Quiet Progress" },
    { icon: <FiActivity />, label: "Energy Shifts" },
    { icon: <FiRefreshCcw />, label: "No Reset Penalty" },
  ];

  return (
    <section
      id="growth"
      className="min-h-[75vh] flex items-center px-[8%]"
    >
      <div className="max-w-[1200px] mx-auto text-center w-full">

        <h2 className="text-[clamp(2.6rem,4vw,3.4rem)] font-bold text-black mb-6 leading-tight">
          Growth is not a{" "}
          <span className="bg-gradient-to-br from-[#31572C] via-[#4F772D] to-[#31572C] bg-clip-text text-transparent">
            straight
          </span>{" "}
          line
        </h2>

        <p className="text-slate-600 text-[1.05rem] mb-16">
          EchoTrack helps you notice patterns in effort — not just outcomes.
        </p>

        <div className="flex flex-wrap justify-center gap-20">
          {items.map((item, index) => (
            <div key={index} className="group text-center">

              <div className="relative w-[110px] h-[110px] mx-auto">

                <div
                  className="absolute inset-0 rounded-[28px]
                  bg-gradient-to-br from-[#4F772D] to-[#31572C]
                  opacity-0
                  -translate-y-4 translate-x-4
                  rotate-[15deg]
                  transition-all duration-300 ease-out
                  group-hover:opacity-90
                  group-hover:-translate-y-6
                  group-hover:translate-x-6
                  group-hover:rotate-[25deg]"
                />

                <div
                  className="relative w-full h-full rounded-[28px]
                  bg-white/70 backdrop-blur-xl
                  border border-white/40
                  shadow-[0_20px_40px_rgba(79,119,45,0.18)]
                  flex items-center justify-center
                  text-[30px]
                  text-[#4F772D]
                  transition-all duration-300 ease-out
                  group-hover:text-white
                  group-hover:bg-gradient-to-br
                  group-hover:from-[#4F772D]
                  group-hover:to-[#31572C]
                  group-hover:-translate-y-1"
                >
                  {item.icon}
                </div>

              </div>

              <p className="mt-6 text-slate-700 text-[0.95rem]">
                {item.label}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

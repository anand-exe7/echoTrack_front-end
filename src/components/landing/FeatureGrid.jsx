import Stepper from "./Stepper";

export default function FeatureGrid() {
  return (
    <section id="features" className="pt-16 pb-24 px-[10%] text-center">

      {/* Main Heading */}
      <h2
        className="
          text-[clamp(2.4rem,4vw,3.2rem)]
          font-bold
          leading-[1.2]
          mb-4
          bg-gradient-to-r
          from-[#31572C]
          via-[#4F772D]
          to-[#90A955]
          bg-clip-text
          text-transparent
        "
      >
        Designed for real progress
      </h2>

      {/* Subtext */}
      <p className="text-slate-600 mb-12 text-lg">
        EchoTrack helps you focus on effort, not noise.
      </p>

      <Stepper />

    </section>
  );
}

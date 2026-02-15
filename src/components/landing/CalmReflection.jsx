export default function CalmReflection() {
  return (
    <section className="py-32 px-[8%] text-center">
      <div className="max-w-[900px] mx-auto">

        <span className="text-xs tracking-[0.25em] uppercase text-indigo-500">
          A Calmer System
        </span>

        <h2 className="mt-6 text-[clamp(2.4rem,4vw,3.2rem)] font-semibold text-slate-900 leading-tight">
          Growth deserves reflection,{" "}
          <span className="bg-gradient-to-br from-purple-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
            not pressure.
          </span>
        </h2>

        <p className="mt-6 text-slate-600 text-[1.05rem] leading-8">
          EchoTrack helps you notice effort, patterns, and progress —
          without streak anxiety, comparison, or noise.
        </p>

        <button
          className="mt-10
                     bg-gradient-to-br
                     from-indigo-600 to-purple-500
                     hover:from-indigo-700 hover:to-purple-600
                     text-white font-semibold
                     px-8 py-4 rounded-full
                     shadow-lg shadow-indigo-300/40
                     transition-all duration-300"
        >
          Start your EchoTrack journey
        </button>

      </div>
    </section>
  );
}

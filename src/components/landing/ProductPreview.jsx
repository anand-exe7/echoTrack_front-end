import Folder from "./Folder";

const CardContent = ({ text }) => {
  return (
    <div
      className="w-full h-full flex items-center justify-center
                 text-indigo-700 font-bold text-[1.2rem]
                 text-center px-6 leading-6"
    >
      {text}
    </div>
  );
};

export default function ProductPreview() {
  return (
    <section id="preview" className="py-32 px-[8%]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-24 items-center">

        {/* LEFT SIDE */}
        <div className="max-w-[420px]">

          {/* Minimal Label (Now aligned left) */}
          <span className="text-xs tracking-[0.25em] uppercase text-indigo-500">
            A Clearer View
          </span>

          <h2 className="text-[2.6rem] font-bold text-slate-800 mt-4 mb-6 leading-tight">
            See your effort clearly
          </h2>

          <p className="text-[1.05rem] text-slate-600 leading-8 mb-6">
            EchoTrack gives you a quiet, structured view of how
            effort accumulates over time — without dashboards
            that overwhelm or numbers that pressure.
          </p>

          <p className="text-[0.95rem] text-slate-500 leading-7 mb-10">
            What you see here isn’t performance.
            <br />
            It’s reflection.
          </p>

          <button
            className="bg-gradient-to-br
                       from-indigo-500 to-purple-500
                       hover:from-indigo-700 hover:to-purple-700
                       text-white font-semibold text-[1rem]
                       px-6 py-3 rounded-full
                       shadow-lg shadow-indigo-300/40
                       transition-all duration-300"
          >
            Explore the product →
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <Folder
            size={2.2}
            color="#6D4AFF"
            items={[
              <CardContent text="Daily Reflection 💜" />,
              <CardContent text="Weekly Growth Insights" />,
              <CardContent text="Progress Summary Overview" />,
            ]}
          />
        </div>

      </div>
    </section>
  );
}

import Folder from "./Folder";

const CardContent = ({ text }) => {
  return (
    <div
      className="w-full h-full flex items-center justify-center
                 text-[#4F772D] font-bold text-[1.2rem]
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
          <span className="text-xs tracking-[0.25em] uppercase text-[#4F772D]">
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
                       from-[#4F772D] to-[#90A955]
                       hover:from-[#31572C] hover:to-[#4F772D]
                       text-white font-semibold text-[1rem]
                       px-6 py-3 rounded-full
                       shadow-lg shadow-[#4F772D]/40
                       transition-all duration-300"
          >
            Explore the product →
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <Folder
            size={2.2}
            color="#ECF39E   "
            items={[
              <CardContent text="Daily Reflection 🌿" />,
              <CardContent text="Weekly Growth Insights" />,
              <CardContent text="Progress Summary Overview" />,
            ]}
          />
        </div>

      </div>
    </section>
  );
}

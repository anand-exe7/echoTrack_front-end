export default function Footer() {
  return (
    <footer
      className="py-14 px-[8%]
                 bg-[linear-gradient(180deg,_#F6F7FF_0%,_#EEF0FF_100%)]
                 border-t border-indigo-200/40"
    >
      <div
        className="max-w-[1100px] mx-auto
                   flex justify-between items-end
                   flex-wrap gap-8"
      >
        {/* Left Side */}
        <div className="flex flex-col gap-2">
          <span
            className="text-[1.2rem] font-semibold tracking-wide
                       bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500
                       bg-clip-text text-transparent"
          >
            EchoTrack
          </span>

          <p className="text-sm text-slate-500">
            Built for growth — not noise.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex gap-6 text-sm text-slate-500">
          <span>© 2026 EchoTrack</span>
          <span className="hover:text-slate-700 cursor-pointer">
            Privacy
          </span>
          <span className="hover:text-slate-700 cursor-pointer">
            Terms
          </span>
        </div>
      </div>
    </footer>
  );
}

const gradientMapping = {
  indigo: "linear-gradient(135deg,#6366f1,#4f46e5)",
  violet: "linear-gradient(135deg,#8b5cf6,#7c3aed)",
};

const GlassIcons = ({ items }) => {
  const getBackgroundStyle = (color) => ({
    background: gradientMapping[color],
  });

  return (
    <div className="grid gap-[5em] grid-cols-2 md:grid-cols-4 mx-auto py-[3em] overflow-visible">
      {items.map((item, index) => (
        <button
          key={index}
          type="button"
          className="relative w-[5.2em] h-[5.2em] group 
                     [perspective:900px] bg-transparent border-none cursor-pointer"
        >
          {/* 3D BACK PLATE */}
          <span
            className="absolute inset-0 rounded-[1.4em]
              opacity-0
              rotate-[15deg]
              translate-x-2 translate-y-2
              transition-all duration-300 ease-[cubic-bezier(0.83,0,0.17,1)]
              group-hover:opacity-100
              group-hover:rotate-[25deg]
              group-hover:translate-x-3 group-hover:translate-y-3"
            style={{
              ...getBackgroundStyle(item.color),
              boxShadow: "0.6em -0.6em 1em rgba(0,0,0,0.18)",
            }}
          />

          {/* GLASS CARD */}
          <span
            className="absolute inset-0 rounded-[1.4em]
              bg-white/70 backdrop-blur-[0.8em]
              border border-white/40
              flex items-center justify-center
              text-indigo-500 text-[1.6em]
              transition-all duration-300 ease-[cubic-bezier(0.83,0,0.17,1)]
              group-hover:text-white
              group-hover:[transform:translate3d(0,0,2em)]"
          >
            {item.icon}
          </span>

          {/* LABEL */}
          <span
            className="absolute top-full left-0 right-0 text-center mt-6
              text-sm text-slate-700"
          >
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default GlassIcons;

import { useState } from "react";

const darkenColor = (hex, percent) => {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;

  if (color.length === 3) {
    color = color.split("").map((c) => c + c).join("");
  }

  const num = parseInt(color, 16);

  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;

  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));

  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16)
      .slice(1)
      .toUpperCase()
  );
};

const Folder = ({
  color = "#90A955",
  size = 1,
  className = "",
}) => {
  const maxItems = 3;

  const items = [
    "Daily Reflection",
    "Progress Summary",
    "Weekly Growth Insights"
  ];

  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
  );

  const handleClick = () => {
    setOpen((prev) => !prev);

    if (open) {
      setPaperOffsets(
        Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
      );
    }
  };

  const handlePaperMouseMove = (e, index) => {
    if (!open) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;

    setPaperOffsets((prev) => {
      const updated = [...prev];
      updated[index] = { x: offsetX, y: offsetY };
      return updated;
    });
  };

  const handlePaperMouseLeave = (_, index) => {
    setPaperOffsets((prev) => {
      const updated = [...prev];
      updated[index] = { x: 0, y: 0 };
      return updated;
    });
  };

  const scaleStyle = { transform: `scale(${size})` };

  const getOpenTransform = (index) => {
    if (index === 0) return "translate(-120%, -70%) rotate(-15deg)";
    if (index === 1) return "translate(10%, -70%) rotate(15deg)";
    if (index === 2) return "translate(-50%, -100%) rotate(5deg)";
    return "";
  };

  return (
    <div style={scaleStyle} className={className}>
      <div
        className={`group relative transition-all duration-200 ease-in cursor-pointer ${
          !open ? "hover:-translate-y-2" : ""
        }`}
        style={{
          transform: open ? "translateY(-8px)" : undefined,
        }}
        onClick={handleClick}
      >
        <div
          className="relative w-[120px] h-[90px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[12px]"
          style={{
            background: `linear-gradient(135deg, ${color}, #90A955)`
          }}
        >
          {/* Floating shadow */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-6 bg-black/20 blur-xl rounded-full pointer-events-none"></div>

          {/* Folder tab */}
          <span
            className="absolute bottom-[98%] left-0 w-[35px] h-[12px] rounded-tl-[6px] rounded-tr-[6px]"
            style={{
              background: `linear-gradient(135deg, ${color}, #A855F7)`
            }}
          />

          {/* Click Me */}
          {!open && (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <span className="text-white font-semibold text-[13px] tracking-wide">
                Click me 💜
              </span>
            </div>
          )}

          {/* Papers */}
          {items.map((text, i) => {
            const transformStyle = open
              ? `${getOpenTransform(i)} translate(${paperOffsets[i].x}px, ${paperOffsets[i].y}px)`
              : undefined;

            return (
              <div
                key={i}
                onMouseMove={(e) => handlePaperMouseMove(e, i)}
                onMouseLeave={(e) => handlePaperMouseLeave(e, i)}
                className={`absolute bottom-[10%] left-1/2 -translate-x-1/2
                            transition-all duration-300 ease-in-out
                            ${
                              !open
                                ? "translate-y-[10%] group-hover:translate-y-0"
                                : "hover:scale-110"
                            }`}
                style={{
                  width: `${75 + i * 10}%`,
                  height: "85%",
                  background:
                    i === 0
                      ? "linear-gradient(135deg, #F5F3FF, #FFFFFF)"
                      : i === 1
                      ? "linear-gradient(135deg, #EDE9FE, #FFFFFF)"
                      : "linear-gradient(135deg, #F3F4F6, #FFFFFF)",
                  borderRadius: "14px",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.10)",
                  transform: open ? transformStyle : undefined,
                }}
              >
                <div className="flex items-center justify-center h-full text-center px-3">
                  <span
                    className="text-[13px] font-medium leading-5"
                    style={{
                      background: "linear-gradient(135deg,#6366F1,#A855F7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {text}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Folder flaps */}
          <div
            className={`absolute w-full h-full origin-bottom transition-all duration-300 ${
              !open ? "group-hover:[transform:skew(15deg)_scaleY(0.6)]" : ""
            }`}
            style={{
              background: `linear-gradient(135deg, ${color}, #A855F7)`,
              borderRadius: "6px 12px 12px 12px",
              ...(open && { transform: "skew(15deg) scaleY(0.6)" }),
            }}
          />

          <div
            className={`absolute w-full h-full origin-bottom transition-all duration-300 ${
              !open ? "group-hover:[transform:skew(-15deg)_scaleY(0.6)]" : ""
            }`}
            style={{
              background: `linear-gradient(135deg, ${color}, #A855F7)`,
              borderRadius: "6px 12px 12px 12px",
              ...(open && { transform: "skew(-15deg) scaleY(0.6)" }),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Folder;

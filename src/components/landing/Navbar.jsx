import { useState } from "react";
import { User } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("hero");

  const handleClick = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const navItems = [
    { id: "features", label: "Features" },
    { id: "why", label: "Why EchoTrack" },
    { id: "growth", label: "Insights" },
    { id: "preview", label: "Preview" },
  ];

  return (
    <nav className="fixed top-6 left-0 w-full z-50 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between rounded-full bg-white/10 backdrop-blur-lg border border-white/20 px-8 py-3 shadow-lg shadow-[#4F772D]/5 border-[#90A955]">

        {/* LEFT — LOGO */}
        <div
          onClick={() => handleClick("hero")}
          className="
            cursor-pointer
            text-xl font-bold
            bg-gradient-to-bl from-[#4F772D] to-[#31572C]
            bg-clip-text text-transparent
          "
        >
          EchoTrack
        </div>

        {/* CENTER — NAV PILLS */}
        <div className="
          hidden md:flex
          items-center gap-2
          px-2 py-2
          rounded-full
          bg-white/10 backdrop-blur-md
          border border-[#132A13 ]
          shadow-lg shadow-[#31572C ]/5
        ">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium
                transition-all duration-300
                ${
                  active === item.id
                    ? "bg-gradient-to-r from-[#4F772D] to-[#90A955] text-white shadow-md"
                    : "text-slate-700 hover:bg-black/10 hover:text-[#31572C]"
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* RIGHT — AUTH */}
        <div className="flex items-center gap-4">

          {/* LOGIN */}
          <button
            className="
              flex items-center gap-2
              px-4 py-2 rounded-full
              text-sm font-medium
              bg-white/20 backdrop-blur-md
              text-[#4F772D]
              border border-white/30
              hover:bg-white/30
              hover:border-white/40
              transition-all duration-300
            "
          >
            <User
              size={18}
              className="text-[#4F772D]"
            />
            Login
          </button>

          {/* SIGN UP */}
          <button
            className="
              px-5 py-2 rounded-full
              text-sm font-semibold text-white
              bg-gradient-to-r from-[#4F772D] to-[#90A955]
              hover:from-[#31572C] hover:to-[#4F772D]
              shadow-lg shadow-[#4F772D]/30 hover:shadow-xl hover:shadow-[#4F772D]/40
              transition-all duration-300
            "
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

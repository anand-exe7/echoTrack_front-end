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
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LEFT — LOGO */}
        <div
          onClick={() => handleClick("hero")}
          className="
            cursor-pointer
            text-xl font-bold
            bg-gradient-to-bl from-purple-400 to-indigo-600
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
          bg-white/80 backdrop-blur-xl
          shadow-lg shadow-slate-900/10
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
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                    : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
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
              bg-white/70 backdrop-blur-md
              text-slate-700
              border border-slate-200
              hover:bg-indigo-50
              hover:text-indigo-600
              transition-all duration-300
            "
          >
            <User
              size={18}
              className="text-indigo-600"
            />
            Login
          </button>

          {/* SIGN UP */}
          <button
            className="
              px-5 py-2 rounded-full
              text-sm font-semibold text-white
              bg-gradient-to-r from-indigo-500 to-purple-500
              hover:from-indigo-700 hover:to-purple-700
              shadow-md hover:shadow-lg
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

import { useState } from "react";
import { User } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("hero");
   const [showMenu, setShowMenu] = useState(false);
  const handleClick = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const navItems = [
    { id: "features", label: "Features" },
    { id: "why", label: "Journey" },
    { id: "growth", label: "Insights" },
    { id: "preview", label: "Badges" },
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
          border border-[#132A13]
          shadow-lg shadow-[#31572C]/5
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
          <button 
            onClick={() => setShowMenu(!showMenu)}
            className="w-10 h-10 rounded-full border-2 border-indigo-500 overflow-hidden hover:scale-105 transition-transform"
          >
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Akshay" alt="Profile" />
          </button>

          {showMenu && (
            <div className="absolute right-10 mt-60 w-56 bg-white rounded-2xl shadow-xl border border-indigo-50 p-4 z-[100] animate-in slide-in-from-top-2">
              <p className="text-[10px] font-bold text-indigo-400 uppercase">RA2511026020039</p>
              <p className="text-sm font-black text-indigo-900">Akshay P</p>
              <p className="text-[10px] text-slate-400 font-medium border-b border-indigo-50 pb-2 mb-2">Ramapuram, Chennai</p>
              <ul className="space-y-2 text-xs font-bold text-slate-600">
                <li className="hover:text-indigo-600 cursor-pointer">Account Settings</li>
                <li className="hover:text-indigo-600 cursor-pointer">Project Repository</li>
                <li className="hover:text-indigo-600 cursor-pointer">Privacy & Security</li>
                <li className="pt-2 text-red-500 hover:text-red-700 cursor-pointer border-t border-indigo-50">Sign Out</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

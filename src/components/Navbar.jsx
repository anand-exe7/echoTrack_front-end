import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="nav-container relative">
        <div className="nav-logo" onClick={() => handleClick("hero")} style={{ cursor: "pointer" }}>
          EchoTrack
        </div>

        <div className="nav-links">
          <button className={active === "features" ? "active" : ""} onClick={() => handleClick("features")}>Features</button>
          <button className={active === "why" ? "active" : ""} onClick={() => handleClick("why")}>Journey</button>
          <button className={active === "growth" ? "active" : ""} onClick={() => handleClick("growth")}>Insights</button>
          <button className={active === "preview" ? "active" : ""} onClick={() => handleClick("preview")}>Badges</button>
        </div>

        <div className="relative">
          <button 
            onClick={() => setShowMenu(!showMenu)}
            className="w-10 h-10 rounded-full border-2 border-indigo-500 overflow-hidden hover:scale-105 transition-transform"
          >
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Akshay" alt="Profile" />
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-indigo-50 p-4 z-[100] animate-in slide-in-from-top-2">
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

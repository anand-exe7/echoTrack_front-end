import React, { useState, useEffect } from 'react';

export default function AuthGateway() {
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState('');
  const [colleges, setColleges] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (search.length > 2) {
      fetch(`http://universities.hipolabs.com/search?name=${search}`)
        .then(res => res.json())
        .then(data => setColleges(data.slice(0, 10)))
        .catch(err => console.error("API Error:", err));
    }
  }, [search]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#F4F5FF] p-4 font-sans overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[10%] h-80 w-80 rounded-full bg-indigo-300/30 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[10%] h-[30rem] w-[30rem] rounded-full bg-blue-200/20 blur-[150px] animate-bounce [animation-duration:15s]"></div>
      </div>

      <div className="relative z-10 w-full max-w-xl rounded-[3.5rem] bg-white/90 backdrop-blur-xl p-10 md:p-14 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] border border-white">
        
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-black italic tracking-tighter text-indigo-950 uppercase leading-none">EchoTrack</h1>
          <p className="mt-3 text-[11px] font-bold tracking-[0.4em] text-slate-400 uppercase">
            {isLogin ? 'Security Portal' : 'Global Data Artist Registration'}
          </p>
        </div>

        <div className="mb-8 flex rounded-[2rem] bg-slate-100/80 p-1.5 border border-slate-200/50">
          <button onClick={() => setIsLogin(true)} className={`flex-1 rounded-[1.5rem] py-4 text-[10px] font-black uppercase tracking-widest transition-all ${isLogin ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-500'}`}>Login</button>
          <button onClick={() => setIsLogin(false)} className={`flex-1 rounded-[1.5rem] py-4 text-[10px] font-black uppercase tracking-widest transition-all ${!isLogin ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-500'}`}>Join</button>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {!isLogin ? (
            <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" required className="auth-input" />
                <input type="text" placeholder="Last Name" required className="auth-input" />
              </div>
              
              <input type="email" placeholder="Personal Email ID" required className="auth-input" />
              
              {/* FIXED Searchable Dropdown UI */}
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Search University"
                  value={selectedCollege || search}
                  onChange={(e) => { setSearch(e.target.value); setSelectedCollege(''); setIsOpen(true); }}
                  onFocus={() => setIsOpen(true)}
                  required
                  className="auth-input pr-14" // Added extra right padding
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-indigo-300 pointer-events-none">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                     <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                   </svg>
                </div>
                
                {isOpen && colleges.length > 0 && (
                  <div className="absolute z-50 mt-2 w-full max-h-60 overflow-y-auto rounded-3xl border border-indigo-50 bg-white p-2 shadow-2xl ring-1 ring-black/5">
                    {colleges.map((c, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => { setSelectedCollege(c.name); setIsOpen(false); setSearch(''); }}
                        className="w-full rounded-2xl px-5 py-4 text-left text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                      >
                        {c.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input type="email" placeholder="College Mail ID" required className="auth-input" />
                <input type="text" placeholder="Reg No (Optional)" className="auth-input border-dashed border-slate-300 bg-transparent" />
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-100 mt-4">
                <input type="password" required placeholder="Create PIN" className="auth-input !bg-indigo-50/50" />
                <input type="password" required placeholder="Confirm PIN" className="auth-input !bg-indigo-50/50" />
              </div>
            </div>
          ) : (
            <div className="space-y-4 animate-in fade-in">
              <input type="email" placeholder="College Mail ID" required className="auth-input" />
              <input type="password" placeholder="Enter Secure PIN" required className="auth-input" />
            </div>
          )}
          
          <button className="group mt-6 flex w-full items-center justify-center gap-3 rounded-[2rem] bg-indigo-600 py-6 text-sm font-black tracking-widest text-white shadow-2xl shadow-indigo-200 transition-all hover:bg-indigo-700 active:scale-95 uppercase">
            {isLogin ? 'Authorize Access' : 'Create Identity'}
          </button>
        </form>
      </div>

      <style jsx>{`
        .auth-input {
          width: 100%;
          border-radius: 1.5rem;
          border: 1px solid #f1f5f9;
          background-color: #f8fafc;
          padding: 1.25rem 1.75rem;
          font-size: 0.875rem;
          font-weight: 500;
          outline: none;
          transition: all 0.3s ease;
        }
        .auth-input:focus {
          border-color: #6366f1;
          background-color: white;
        }
      `}</style>
    </div>
  );
}

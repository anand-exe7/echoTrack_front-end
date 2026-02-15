import React, { useState, useEffect } from 'react';
import { fetchDashboardData } from '../../services/api';
import LevelCard from '../../components/dashboard/LevelCard';
import SkillCard from '../../components/dashboard/SkillCard';
import AIInsightSection from '../../components/dashboard/AIInsightSection';
import BadgesSection from '../../components/dashboard/BadgesSection';
import SkillTimeline from '../../components/dashboard/SkillTimeline';

export default function DashboardPage() {
  const [data, setData] = useState(null);
  const [modal, setModal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchDashboardData();
      setData(result);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAF5]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4F772D]"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAF5] p-16 space-y-12 pb-20">
      <section id="hero" className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <button onClick={() => setModal({ type: 'Global', current: data.ranks.global.current, leader: data.ranks.global.leader })} className="bg-gradient-to-br from-[#4F772D] to-[#31572C] p-8 rounded-3xl text-white shadow-lg relative overflow-hidden text-left hover:scale-[1.02] transition-transform">
            <p className="opacity-80 text-xs font-bold uppercase tracking-widest">Global Rank</p>
            <h2 className="text-5xl font-black mt-1">#{data.ranks.global.current}</h2>
            <p className="mt-4 text-sm font-medium">{data.profile.name} • {data.profile.regNo}</p>
            <div className="absolute -right-4 -bottom-4 text-9xl opacity-10 font-black italic">GLOB</div>
          </button>
          
          <button onClick={() => setModal({ type: 'University', current: data.ranks.university.current, leader: data.ranks.university.leader, isTeam: true })} className="bg-white p-8 rounded-3xl border border-[#90A955]/20 shadow-sm text-left relative overflow-hidden hover:scale-[1.02] transition-transform">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">University Rank</p>
            <h2 className="text-5xl font-black text-[#4F772D] mt-1">#{data.ranks.university.current}</h2>
            <p className="mt-4 text-sm font-bold text-[#4F772D] uppercase tracking-tight">Team 14 • Leading</p>
            <div className="absolute -right-4 -bottom-4 text-9xl opacity-5 font-black italic text-[#132A13]">UNI</div>
          </button>
        </div>
        <LevelCard xp={data.xp.total_xp} />
      </section>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Milestones restored by passing API data here */}
        <SkillTimeline skills={data.skills} />
        <AIInsightSection />
      </div>

      <section id="preview" className="max-w-6xl mx-auto">
        <BadgesSection badges={[
          { title: "First Step", icon: "🌱", earned: true, date: "Feb 01", requirement: "Upload first skill" },
          { title: "Streak Master", icon: "🔥", earned: true, date: "Feb 10", requirement: "10-day streak" },
          { title: "Data Artist", icon: "🎨", earned: true, date: "Feb 13", requirement: "Setup EchoTrack" },
          { title: "Terminal King", icon: "💻", earned: true, date: "Feb 09", requirement: "Termux init" },
          { title: "Team Player", icon: "🤝", earned: true, date: "Sep 28", requirement: "Join Team 14" },
          { title: "Crisis Watch", icon: "🚨", earned: true, date: "Jan 31", requirement: "Start Disaster Prediction app" },
          { title: "Hardware Guy", icon: "🛠️", earned: true, date: "Dec 04", requirement: "Upgrade SSD" },
          { title: "Code Ninja", icon: "🥷", earned: false, requirement: "Reach Level 10" }
        ]} />
      </section>

      {modal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#31572C]/20 backdrop-blur-md">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-lg w-full animate-in zoom-in duration-200">
            <h3 className="text-2xl font-black text-[#132A13] mb-6">{modal.type} Leaderboard</h3>
            <div className="space-y-2 max-h-[350px] overflow-y-auto pr-2">
              <div className="flex justify-between p-4 bg-[#ECF39E]/20 rounded-2xl border border-[#90A955] mb-4 font-black text-[#4F772D]">
                <span>#1 | {modal.leader}</span><span>24,500 XP</span>
              </div>
              {data.team.map((user, i) => (
                <div key={i} className={`flex justify-between p-4 rounded-2xl border ${user.name === "Akshay P" ? "bg-gradient-to-r from-[#4F772D] to-[#90A955] text-white shadow-lg" : "bg-white border-[#90A955]/20 text-slate-600"}`}>
                  <span className="font-black">#{user.rank} | {user.name}</span>
                  <span className="font-black">{user.xp} XP</span>
                </div>
              ))}
            </div>
            <button onClick={() => setModal(null)} className="mt-8 w-full py-4 bg-gradient-to-r from-[#4F772D] to-[#90A955] text-white rounded-2xl font-bold hover:from-[#31572C] hover:to-[#4F772D] transition-all">Back to Dashboard</button>
          </div>
        </div>
      )}
    </div>
  );
}

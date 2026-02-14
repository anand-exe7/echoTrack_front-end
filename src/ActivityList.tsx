// src/ActivityList.tsx
// EchoTrack — Timeline & Feed
// Theme: Light · Lavender Grid · Deep Navy · Purple Accent
// Stack: React + Tailwind CSS

import { useState } from "react";

// ─────────────────────────────────────────
// Types
// ─────────────────────────────────────────
type Category = "Programming" | "Design" | "Learning" | "Communication" | "Projects";

interface Activity {
  id: string;
  category: Category;
  title: string;
  note?: string;
  duration: number;
  xp: number;
  mood: string;
  timestamp: Date;
}

// ─────────────────────────────────────────
// Category Config — light palette
// ─────────────────────────────────────────
const CATEGORY_CONFIG: Record<
  Category,
  {
    icon: string;
    iconBg: string;
    iconColor: string;
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    accent: string;
    cardBorder: string;
    cardBg: string;
  }
> = {
  Programming: {
    icon: "PRG",
    iconBg: "#e8ecff",
    iconColor: "#4F46E5",
    badgeBg: "#ede9fe",
    badgeText: "#4F46E5",
    badgeBorder: "#c4b5fd",
    accent: "#4F46E5",
    cardBorder: "#ddd9f8",
    cardBg: "#fafafe",
  },
  Design: {
    icon: "DES",
    iconBg: "#f3e8ff",
    iconColor: "#7C3AED",
    badgeBg: "#f3e8ff",
    badgeText: "#7C3AED",
    badgeBorder: "#d8b4fe",
    accent: "#7C3AED",
    cardBorder: "#ead5fb",
    cardBg: "#fdfaff",
  },
  Learning: {
    icon: "LRN",
    iconBg: "#e0eaff",
    iconColor: "#3B6FD4",
    badgeBg: "#e0eaff",
    badgeText: "#3B6FD4",
    badgeBorder: "#b3c8f5",
    accent: "#3B6FD4",
    cardBorder: "#c8d9f8",
    cardBg: "#f8faff",
  },
  Communication: {
    icon: "COM",
    iconBg: "#eef0ff",
    iconColor: "#6366F1",
    badgeBg: "#eef0ff",
    badgeText: "#6366F1",
    badgeBorder: "#c7d2fe",
    accent: "#6366F1",
    cardBorder: "#dce0fd",
    cardBg: "#f9fafe",
  },
  Projects: {
    icon: "PRJ",
    iconBg: "#e6f0ff",
    iconColor: "#2563EB",
    badgeBg: "#dbeafe",
    badgeText: "#2563EB",
    badgeBorder: "#bfdbfe",
    accent: "#2563EB",
    cardBorder: "#c4d9fc",
    cardBg: "#f7faff",
  },
};

// ─────────────────────────────────────────
// Seed Data
// ─────────────────────────────────────────
const SEED_ACTIVITIES: Activity[] = [
  { id: "1", category: "Programming", title: "Built JWT authentication middleware with refresh token rotation", note: "Finally got the refresh cycle right — edge cases with concurrent requests were tricky.", duration: 90, xp: 180, mood: "High", timestamp: new Date(2026, 1, 11, 16, 20) },
  { id: "2", category: "Design", title: "Redesigned the onboarding flow — 3 screens in Figma", note: "Simplified the form from 6 fields to 2. Cleaner.", duration: 60, xp: 120, mood: "Good", timestamp: new Date(2026, 1, 11, 10, 45) },
  { id: "3", category: "Learning", title: "Read Clean Code chapters 6–7 — function naming principles", note: undefined, duration: 45, xp: 90, mood: "Good", timestamp: new Date(2026, 1, 10, 20, 0) },
  { id: "4", category: "Projects", title: "Set up CI/CD pipeline with GitHub Actions for the team repo", note: "Automated staging deploys on every PR merge. Took a while to configure secrets.", duration: 120, xp: 240, mood: "High", timestamp: new Date(2026, 1, 10, 14, 30) },
  { id: "5", category: "Communication", title: "Led sprint retrospective — facilitated discussion on blockers", note: undefined, duration: 45, xp: 90, mood: "Good", timestamp: new Date(2026, 1, 9, 11, 0) },
  { id: "6", category: "Programming", title: "Solved 3 dynamic programming problems on LeetCode", note: "Coin change, longest common subsequence, and climbing stairs.", duration: 60, xp: 120, mood: "Good", timestamp: new Date(2026, 1, 9, 8, 30) },
  { id: "7", category: "Learning", title: "Finished The Pragmatic Programmer — final chapters on careers", note: undefined, duration: 120, xp: 160, mood: "Good", timestamp: new Date(2026, 1, 8, 21, 0) },
  { id: "8", category: "Design", title: "Completed the Design Systems Fundamentals course", note: "Atomic design really clicked for me today.", duration: 90, xp: 180, mood: "High", timestamp: new Date(2026, 1, 7, 17, 15) },
];

// ─────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────
function fmtTime(d: Date) {
  return d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
}
function fmtDur(m: number) {
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60), r = m % 60;
  return r ? `${h}h ${r}m` : `${h}h`;
}
function dayLabel(d: Date) {
  const t = new Date(), y = new Date();
  y.setDate(y.getDate() - 1);
  if (d.toDateString() === t.toDateString()) return "Today";
  if (d.toDateString() === y.toDateString()) return "Yesterday";
  return d.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });
}
function groupByDay(arr: Activity[]) {
  const map = new Map<string, Activity[]>();
  for (const a of arr) {
    const k = a.timestamp.toDateString();
    if (!map.has(k)) map.set(k, []);
    map.get(k)!.push(a);
  }
  return map;
}

// ─────────────────────────────────────────
// Activity Card
// ─────────────────────────────────────────
function ActivityCard({ activity, index }: { activity: Activity; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const cfg = CATEGORY_CONFIG[activity.category];

  return (
    <div
      onClick={() => setExpanded((v) => !v)}
      className="group relative rounded-2xl border bg-white cursor-pointer transition-all duration-300 hover:shadow-[0_4px_24px_rgba(99,102,241,0.10)] hover:-translate-y-0.5"
      style={{
        borderColor: cfg.cardBorder,
        background: cfg.cardBg,
        animationDelay: `${index * 55}ms`,
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-5 right-5 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${cfg.accent}, transparent)` }}
      />

      <div className="p-5">
        {/* Main row */}
        <div className="flex items-start gap-3.5">
          {/* Icon */}
          <div
            className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-sm font-bold transition-transform duration-200 group-hover:scale-105"
            style={{ background: cfg.iconBg, color: cfg.iconColor }}
          >
            {cfg.icon}
          </div>

          {/* Body */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-[#0f0f2d] leading-snug tracking-[-0.01em] mb-2.5">
              {activity.title}
            </p>
            <div className="flex flex-wrap items-center gap-1.5">
              {/* Category badge */}
              <span
                className="text-[10px] font-semibold uppercase tracking-widest rounded-full px-2.5 py-1 border"
                style={{ background: cfg.badgeBg, color: cfg.badgeText, borderColor: cfg.badgeBorder }}
              >
                {activity.category}
              </span>
              {/* XP */}
              <span className="text-[10px] font-semibold tracking-wider text-[#4F46E5] bg-[#ede9fe] rounded-full px-2.5 py-1 border border-[#c4b5fd]">
                ⚡ +{activity.xp} XP
              </span>
              {/* Duration */}
              <span className="text-[10px] text-[#9ca3af] font-medium tracking-wide">
                {fmtDur(activity.duration)}
              </span>
              {/* Mood */}
            </div>
          </div>

          {/* Time + arrow */}
          <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
            <span className="text-[11px] text-[#9ca3af] font-medium tabular-nums">
              {fmtTime(activity.timestamp)}
            </span>
            {activity.note && (
              <span
                className="text-xs font-bold transition-transform duration-200"
                style={{
                  color: cfg.accent,
                  transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
                  display: "inline-block",
                }}
              >
                ›
              </span>
            )}
          </div>
        </div>

        {/* Note */}
        {expanded && activity.note && (
          <div
            className="mt-4 pt-4 text-[13px] text-[#6b7280] leading-relaxed"
            style={{ borderTop: "1px solid #f0f0f8" }}
          >
            <span className="font-bold mr-1.5" style={{ color: cfg.accent }}>›</span>
            {activity.note}
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// Day Section
// ─────────────────────────────────────────
function DaySection({ dateKey, activities, startIndex }: { dateKey: string; activities: Activity[]; startIndex: number }) {
  const totalXp = activities.reduce((s, a) => s + a.xp, 0);
  const totalMins = activities.reduce((s, a) => s + a.duration, 0);

  return (
    <div className="mb-8">
      {/* Date header */}
      <div className="flex items-center gap-3 mb-4">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0f0f2d]">
            {dayLabel(activities[0].timestamp)}
          </div>
          <div className="text-[10px] text-[#9ca3af] font-medium mt-0.5 tracking-wide">
            {activities.length} {activities.length === 1 ? "activity" : "activities"} · {fmtDur(totalMins)} · +{totalXp} XP
          </div>
        </div>
        <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg,#e0e0f5,transparent)" }} />
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-3">
        {activities.map((a, i) => (
          <ActivityCard key={a.id} activity={a} index={startIndex + i} />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// Filter Bar
// ─────────────────────────────────────────
function FilterBar({ active, onChange }: { active: Category | "All"; onChange: (c: Category | "All") => void }) {
  const options: (Category | "All")[] = ["All", "Programming", "Design", "Learning", "Communication", "Projects"];

  return (
    <div className="flex gap-2 flex-wrap">
      {options.map((opt) => {
        const isAll = opt === "All";
        const cfg = isAll ? null : CATEGORY_CONFIG[opt as Category];
        const isActive = active === opt;

        return (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className="text-[11px] font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full border transition-all duration-200"
            style={
              isActive
                ? isAll
                  ? { background: "#4F46E5", color: "#fff", borderColor: "#4F46E5" }
                  : { background: cfg!.badgeBg, color: cfg!.badgeText, borderColor: cfg!.badgeBorder }
                : { background: "white", color: "#9ca3af", borderColor: "#e5e7eb" }
            }
          >
            {isAll ? "All" : `${cfg!.icon} ${opt}`}
          </button>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────
// Empty State
// ─────────────────────────────────────────
function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[480px] text-center px-8 select-none">
      {/* Ring graphic */}
      <div className="relative mb-10">
        <div className="w-36 h-36 rounded-full border-2 border-dashed border-[#e0e0f5] flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border border-[#ebe8ff] bg-white flex items-center justify-center shadow-sm">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ede9fe] to-[#e0eaff] flex items-center justify-center">
              <span className="text-xl text-[#6366F1]">◎</span>
            </div>
          </div>
        </div>
        <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-[#c4b5fd] animate-pulse" />
        <div className="absolute bottom-4 left-1 w-2 h-2 rounded-full bg-[#bfdbfe] animate-pulse [animation-delay:400ms]" />
        <div className="absolute top-1/2 -right-1 w-1.5 h-1.5 rounded-full bg-[#a5b4fc] animate-pulse [animation-delay:800ms]" />
      </div>

      <h3 className="text-xl font-bold text-[#0f0f2d] tracking-[-0.02em] mb-2">
        No growth logged yet.
      </h3>
      <p className="text-sm text-[#9ca3af] leading-relaxed max-w-xs mb-8">
        Every expert was once a beginner. Log your first activity and watch your growth story begin.
      </p>

      {/* Skeleton preview */}
      <div className="w-full max-w-sm space-y-2.5 opacity-40 pointer-events-none">
        {[{ w: "72%", c: "#ede9fe" }, { w: "50%", c: "#f3e8ff" }, { w: "62%", c: "#dbeafe" }].map((s, i) => (
          <div key={i} className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 border border-[#eeeef8]">
            <div className="w-8 h-8 rounded-xl flex-shrink-0" style={{ background: s.c }} />
            <div className="flex-1 space-y-1.5">
              <div className="h-2.5 rounded-full bg-[#f0f0f8]" style={{ width: s.w }} />
              <div className="h-2 rounded-full bg-[#f5f5fb] w-1/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// Main Export
// ─────────────────────────────────────────
export default function ActivityList() {
  const [filter, setFilter] = useState<Category | "All">("All");
  const [showEmpty, setShowEmpty] = useState(false);

  const filtered = showEmpty
    ? []
    : filter === "All"
    ? SEED_ACTIVITIES
    : SEED_ACTIVITIES.filter((a) => a.category === filter);

  const totalXp = filtered.reduce((s, a) => s + a.xp, 0);
  const grouped = groupByDay(filtered);
  let cardIndex = 0;

  return (
    <div className="max-w-2xl mx-auto px-5 pb-24 pt-10">

        {/* ── Header ── */}
        <div className="mb-8 fade-in">
          <div className="flex items-start justify-between gap-4 mb-1">
            <div>
              <h1 className="text-3xl font-extrabold tracking-[-0.04em] text-[#0f0f2d]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                activity and timeline
              </h1>
              <p className="text-xs text-[#9ca3af] mt-1.5 font-medium tracking-wide">
                {filtered.length} activities ·{" "}
                <span className="text-[#4F46E5] font-semibold">+{totalXp} XP earned</span>
              </p>
            </div>

            {/* Dev toggle */}
            <button
              onClick={() => setShowEmpty((v) => !v)}
              className="text-[10px] font-semibold text-[#9ca3af] border border-[#e5e7eb] rounded-full px-3.5 py-2 bg-white hover:border-[#c4b5fd] hover:text-[#4F46E5] transition-colors whitespace-nowrap shadow-sm"
            >
              {showEmpty ? "◉ show data" : "○ empty state"}
            </button>
          </div>

          {/* Gradient rule */}
          <div className="h-px mt-5 mb-6" style={{ background: "linear-gradient(90deg,#c4b5fd 0%,#bfdbfe 40%,transparent 100%)" }} />

          {/* Filters */}
          <FilterBar active={filter} onChange={setFilter} />
        </div>

        {/* ── Content ── */}
        {filtered.length === 0 ? (
          <div className="fade-in"><EmptyState /></div>
        ) : (
          <>
            {Array.from(grouped.entries()).map(([key, acts]) => {
              const start = cardIndex;
              cardIndex += acts.length;
              return (
                <div key={key} className="fade-in">
                  <DaySection dateKey={key} activities={acts} startIndex={start} />
                </div>
              );
            })}

            <div className="mt-2 text-center fade-in">
              <button className="text-xs font-semibold text-[#9ca3af] border border-[#e5e7eb] rounded-full px-6 py-2.5 bg-white hover:border-[#c4b5fd] hover:text-[#4F46E5] transition-colors shadow-sm">
                Load earlier entries
              </button>
            </div>
          </>
        )}
      </div>
  );
}

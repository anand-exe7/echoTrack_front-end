// Mock API for EchoTrack - Student: Akshay P (RA2511026020039)
const MOCK_DELAY = 600;

export const fetchDashboardData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        profile: { 
          name: "Akshay P", 
          regNo: "RA2511026020039", 
          location: "Ramapuram, Chennai" 
        },
        xp: { total_xp: 480, streak: 12 },
        ranks: {
          global: { current: 360, leader: "Alex Johnson" },
          university: { current: 14, leader: "Sarah Miller" }
        },
        team: [
          { name: "Akshay P", rank: 14, xp: 1280, badges: 9 },
          { name: "Adwaith AN", rank: 18, xp: 1150, badges: 4 },
          { name: "Aazad", rank: 22, xp: 980, badges: 3 },
          { name: "Anuj", rank: 25, xp: 850, badges: 3 },
          { name: "Dhruv", rank: 30, xp: 720, badges: 2 }
        ],
        // Full Milestone History
        skills: [
          { skill_name: "EchoTrack Data Art", xp: 500, date_added: "2026-02-12" },
          { skill_name: "AI Skill Mentor", xp: 300, date_added: "2026-02-11" },
          { skill_name: "Frontend Dashboard", xp: 250, date_added: "2026-02-10" },
          { skill_name: "Termux Init", xp: 100, date_added: "2026-02-09" },
          { skill_name: "C-based Club App", xp: 450, date_added: "2026-02-03" },
          { skill_name: "CrisisWatch MVP", xp: 400, date_added: "2026-01-31" },
          { skill_name: "UI Frameworks", xp: 150, date_added: "2026-01-20" },
          { skill_name: "hashlo Brand Logo", xp: 200, date_added: "2025-12-21" },
          { skill_name: "JavaScript Logic", xp: 180, date_added: "2025-12-15" },
          { skill_name: "Crucial SSD Setup", xp: 120, date_added: "2025-12-04" },
          { skill_name: "Blue Dart Tracking", xp: 50, date_added: "2025-11-20" },
          { skill_name: "Malayalam News API", xp: 90, date_added: "2025-11-15" },
          { skill_name: "Advanced Mathematics", xp: 300, date_added: "2025-11-12" },
          { skill_name: "Phone Zones Order", xp: 60, date_added: "2025-11-09" },
          { skill_name: "Biryani Finder UI", xp: 40, date_added: "2025-11-04" },
          { skill_name: "HP Victus Config", xp: 110, date_added: "2025-10-19" },
          { skill_name: "Chemistry Reactor", xp: 220, date_added: "2025-10-10" },
          { skill_name: "Team 14 Init", xp: 80, date_added: "2025-09-28" },
          { skill_name: "Photography Suite", xp: 140, date_added: "2025-09-16" },
          { skill_name: "Classical Music Player", xp: 70, date_added: "2025-04-12" }
        ]
      });
    }, MOCK_DELAY);
  });
};

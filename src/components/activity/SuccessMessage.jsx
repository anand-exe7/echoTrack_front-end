'use client';

export default function SuccessMessage() {
  return (
    <div className="fixed top-8 left-1/2 transform -translate-x-1/2 pointer-events-none z-50">
      <div
        className="px-6 py-3 rounded-full shadow-2xl transform"
        style={{
          background: 'linear-gradient(135deg, #4F772D 0%, #90A955 100%)',
          animation: 'slideDown 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        }}
      >
        <style>{`
          @keyframes slideDown {
            0% {
              opacity: 0;
              transform: translateY(-50px) scale(0.8);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}</style>

        <div className="flex items-center gap-2">
          <span className="text-2xl">✅</span>
          <p className="text-white font-semibold text-sm">Activity Logged!</p>
        </div>
      </div>
    </div>
  );
}
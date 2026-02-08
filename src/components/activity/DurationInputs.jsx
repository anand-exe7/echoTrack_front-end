import React from 'react';

const DurationInputs = ({ hours, minutes, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-white mb-2">Duration</label>
      <div className="flex gap-4">
        <div className="flex-1">
          <input
            type="number"
            id="hours"
            name="hours"
            value={hours}
            onChange={onChange}
            min="0"
            max="23"
            placeholder="Hours"
            className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition"
          />
        </div>
        <div className="flex-1">
          <input
            type="number"
            id="minutes"
            name="minutes"
            value={minutes}
            onChange={onChange}
            min="0"
            max="59"
            placeholder="Minutes"
            className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition"
          />
        </div>
      </div>
    </div>
  );
};

export default DurationInputs;
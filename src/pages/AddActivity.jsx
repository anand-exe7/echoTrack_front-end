'use client';

import { useState } from 'react';
import CategorySelector from '../components/activity/CategorySelector';
import SuccessMessage from '../components/activity/SuccessMessage';

export default function AddActivity() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    hours: '0',
    minutes: '0',
    category: 'Programming',
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const categories = [
    { name: 'Programming', emoji: '💻', color: '#7C3AED' },
    { name: 'Design', emoji: '🎨', color: '#EC4899' },
    { name: 'Communication', emoji: '💬', color: '#8B9DC3' },
    { name: 'Learning', emoji: '📚', color: '#3B82F6' },
    { name: 'Projects', emoji: '🚀', color: '#EC4899' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategorySelect = (categoryName) => {
    setFormData((prev) => ({
      ...prev,
      category: categoryName,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Activity logged:', formData);
    setShowSuccess(true);
    setTimeout(() => {
      setFormData({
        title: '',
        description: '',
        hours: '0',
        minutes: '0',
        category: 'Programming',
      });
      setShowSuccess(false);
    }, 2000);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: '#5B6B7D' }}
    >
      {showSuccess && <SuccessMessage />}

      <div 
        className="w-full max-w-2xl rounded-3xl shadow-2xl p-10"
        style={{
          background: 'linear-gradient(180deg, #A8B5D1 0%, #B5C4DA 50%, #C5D0E3 100%)',
        }}
      >
        <h1 className="text-4xl font-bold text-white mb-2">Log Your Growth</h1>
        <p className="text-white/80 text-base mb-8">Track your activities and watch yourself grow</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-white mb-2">
              Activity Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="What did you accomplish?"
              className="w-full px-4 py-3 bg-white/25 backdrop-blur-sm border border-white/30 rounded-xl placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition"
              required
            />
          </div>

          {/* Description Input */}
          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-white mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe your activity in detail..."
              rows="4"
              className="w-full px-4 py-3 bg-white/25 backdrop-blur-sm border border-white/30 rounded-xl placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition resize-none"
            />
          </div>

          {/* Duration Input */}
          <div>
            <label className="block text-sm font-semibold text-white mb-2">Duration</label>
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="number"
                  id="hours"
                  name="hours"
                  value={formData.hours}
                  onChange={handleInputChange}
                  min="0"
                  max="23"
                  placeholder="Hours"
                  className="w-full px-4 py-3 bg-white/25 backdrop-blur-sm border border-white/30 rounded-xl placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition"
                />
              </div>
              <div className="flex-1">
                <input
                  type="number"
                  id="minutes"
                  name="minutes"
                  value={formData.minutes}
                  onChange={handleInputChange}
                  min="0"
                  max="59"
                  placeholder="Minutes"
                  className="w-full px-4 py-3 bg-white/25 backdrop-blur-sm border border-white/30 rounded-xl placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition"
                />
              </div>
            </div>
          </div>

          {/* Category Selector */}
          <div>
            <label className="block text-sm font-semibold text-white mb-3">Category</label>
            <CategorySelector
              categories={categories}
              selectedCategory={formData.category}
              onSelectCategory={handleCategorySelect}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl font-semibold text-white transition duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
            style={{
              background: 'linear-gradient(90deg, #7B68C8 0%, #9B8DD6 50%, #6B93D6 100%)',
              boxShadow: '0 4px 20px rgba(123, 104, 200, 0.4)',
            }}
          >
            Log Activity
          </button>
        </form>
      </div>
    </div>
  );
}

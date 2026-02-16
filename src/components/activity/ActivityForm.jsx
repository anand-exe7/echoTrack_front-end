import React, { useState } from 'react';
import CategorySelector from './CategorySelector';
import DurationInputs from './DurationInputs';

const ActivityForm = ({ onSubmit, categories }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    hours: '0',
    minutes: '0',
    category: 'Programming'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCategorySelect = (category) => {
    setFormData({
      ...formData,
      category
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-semibold text-white mb-2">
          Activity Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition"
          placeholder="What did you accomplish?"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-semibold text-white mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/30 backdrop-blur-sm border border-white/40 rounded-lg placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition resize-none"
          placeholder="Describe your activity in detail..."
          rows="4"
        ></textarea>
      </div>
      <DurationInputs 
        hours={formData.hours} 
        minutes={formData.minutes} 
        onChange={handleChange} 
      />
      <div>
        <label className="block text-sm font-semibold text-white mb-3">Category</label>
        <CategorySelector 
          categories={categories}
          selectedCategory={formData.category} 
          onSelectCategory={handleCategorySelect} 
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 px-4 rounded-lg font-semibold text-white transition duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
        style={{
          background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
          boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
        }}
      >
        Log Activity
      </button>
    </form>
  );
};

export default ActivityForm;
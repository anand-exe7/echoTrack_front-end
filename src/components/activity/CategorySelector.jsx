'use client';

export default function CategorySelector({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="grid grid-cols-5 gap-3">
      {categories.map((category) => (
        <button
          key={category.name}
          type="button"
          onClick={() => onSelectCategory(category.name)}
          className={`py-3 px-2 rounded-xl flex flex-col items-center gap-2 transition-all duration-300 transform ${
            selectedCategory === category.name
              ? 'scale-105'
              : 'hover:scale-105 opacity-90 hover:opacity-100'
          }`}
          style={
            selectedCategory === category.name
              ? {
                  backgroundColor: '#90A955',
                  border: '2px solid #4F772D',
                  boxShadow: '0 4px 15px rgba(79, 119, 45, 0.3)',
                }
              : {
                  backgroundColor: 'rgba(236, 243, 158, 0.3)',
                  border: '2px solid rgba(144, 169, 85, 0.4)',
                }
          }
        >
          <span className="text-3xl">{category.emoji}</span>
          <span className="text-xs font-semibold text-eco-dark text-center leading-tight">
            {category.name}
          </span>
        </button>
      ))}
    </div>
  );
}
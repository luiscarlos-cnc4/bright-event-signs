
import React from 'react';
import { GalleryCategory } from './types';

interface CategoryFiltersProps {
  categories: GalleryCategory[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  categories,
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-4 py-2 rounded-full transition-all duration-300 ${
          selectedCategory === null
            ? "bg-vegas-gold text-white"
            : "bg-white/10 hover:bg-vegas-gold/20"
        }`}
      >
        Todos
      </button>
      
      {categories.map((item, index) => {
        const Icon = item.icon;
        return (
          <button
            key={index}
            onClick={() => onSelectCategory(item.category)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === item.category
                ? "bg-vegas-gold text-white"
                : "bg-white/10 hover:bg-vegas-gold/20"
            }`}
          >
            <Icon className="w-4 h-4" />
            {item.category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilters;

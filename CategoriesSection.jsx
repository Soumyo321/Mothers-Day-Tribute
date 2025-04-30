import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, title: 'Mother’s Stories', image: '/assets/stories.jpg' },
  { id: 2, title: 'Mother’s Recipes', image: '/assets/recipes.jpg' },
  { id: 3, title: 'Gift Ideas', image: '/assets/gifts.jpg' },
  { id: 4, title: 'Life Lessons', image: '/assets/life-lessons.jpg' },
  { id: 5, title: 'Memorable Moments', image: '/assets/memories.jpg' },
  { id: 6, title: 'Mother-Daughter Bond', image: '/assets/bond.jpg' },
];

const CategoriesSection = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -250 : 250,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative my-8 px-4">
      {/* Arrows */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-200"
      >
        ◀
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-200"
      >
        ▶
      </button>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 px-10 scrollbar-hide"
      >
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="min-w-[140px] h-[140px] bg-black bg-cover bg-center text-white rounded-lg flex items-center justify-center shadow-md hover:scale-110 transition-all duration-300 cursor-pointer text-center font-semibold relative"
          >
            <Link to={`/category/${cat.id}`} className="w-full h-full flex items-center justify-center">
              <div className="bg-black/50 w-full h-full flex items-center justify-center rounded-lg p-2">
                {cat.title}
              </div>
            </Link>

            {/* Stars Animation */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="star-animation"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;

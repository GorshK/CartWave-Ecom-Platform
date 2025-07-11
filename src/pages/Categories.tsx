
import { useState } from 'react';
import Header from '@/components/Header';
import { getUniqueCategories } from '@/data/products';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [cartItemCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const categories = getUniqueCategories();

  const categoryDescriptions = {
    'Electronics': 'Discover the latest in technology and gadgets',
    'Fashion': 'Trendy clothing and accessories for all styles',
    'Home & Garden': 'Everything you need for your home and outdoor spaces',
    'Sports': 'Gear up for your favorite activities and sports',
    'Books': 'Expand your knowledge with our book collection',
    'Toys': 'Fun and educational toys for all ages'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItemCount={cartItemCount}
        onSearchChange={setSearchQuery}
        onCartClick={() => {}}
      />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop by Categories</h1>
          <p className="text-xl text-gray-600">Browse our carefully curated product categories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/products?category=${encodeURIComponent(category)}`}
              className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-brand-100 to-brand-200 p-8 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-brand-800 group-hover:text-brand-900 transition-colors">
                  {category}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {categoryDescriptions[category as keyof typeof categoryDescriptions] || 'Explore our products in this category'}
                </p>
                <span className="inline-flex items-center text-brand-600 font-semibold group-hover:text-brand-700">
                  Shop {category}
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Categories;

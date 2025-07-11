
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    image: "/placeholder.svg",
    category: "Electronics",
    rating: 4.5,
    reviews: 128,
    description: "High-quality wireless headphones with noise cancellation",
    inStock: true
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    image: "/placeholder.svg",
    category: "Electronics",
    rating: 4.8,
    reviews: 256,
    description: "Track your fitness goals with this advanced smartwatch",
    inStock: true
  },
  {
    id: 3,
    name: "Organic Coffee Beans",
    price: 24.99,
    image: "/placeholder.svg",
    category: "Food & Beverage",
    rating: 4.2,
    reviews: 89,
    description: "Premium organic coffee beans, freshly roasted",
    inStock: true
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItemCount, setCartItemCount] = useState(0);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = () => {
    setCartItemCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItemCount={cartItemCount}
        onSearchChange={setSearchQuery}
        onCartClick={() => {}}
      />

      <main>
        <HeroSection />

        {/* Featured Products */}
        <section id="products" className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Discover our most popular items</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No products found matching "{searchQuery}"
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

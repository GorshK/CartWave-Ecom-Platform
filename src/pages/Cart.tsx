
import { useState } from 'react';
import Header from '@/components/Header';
import ShoppingCart, { CartItem } from '@/components/ShoppingCart';
import Footer from '@/components/Footer';

const Cart = () => {
  // Sample cart items to demonstrate functionality
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      image: "/placeholder.svg",
      category: "Electronics",
      rating: 4.5,
      reviews: 128,
      description: "High-quality wireless headphones with noise cancellation",
      inStock: true,
      quantity: 2
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
      inStock: true,
      quantity: 1
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
      inStock: true,
      quantity: 3
    }
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }

    setCartItems(currentItems =>
      currentItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems(currentItems => 
      currentItems.filter(item => item.id !== productId)
    );
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        cartItemCount={cartItemCount}
        onSearchChange={setSearchQuery}
        onCartClick={() => {}}
      />

      <main className="container mx-auto px-4 py-12 flex-1">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Shopping Cart</h1>
          <p className="text-xl text-gray-600">Review and manage your selected items</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ShoppingCart
            isOpen={true}
            onClose={() => {}}
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            isPage={true}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;

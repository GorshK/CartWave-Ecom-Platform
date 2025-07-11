
import { Product } from '@/components/ProductCard';

export const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    category: "Electronics",
    rating: 4.5,
    reviews: 128,
    description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
    inStock: true
  },
  {
    id: 2,
    name: "Stylish Leather Backpack",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    category: "Fashion",
    rating: 4.2,
    reviews: 64,
    description: "Elegant leather backpack perfect for work and travel.",
    inStock: true
  },
  {
    id: 3,
    name: "Smart Watch Series 5",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    category: "Electronics",
    rating: 4.8,
    reviews: 256,
    description: "Advanced smartwatch with fitness tracking and health monitoring.",
    inStock: true
  },
  {
    id: 4,
    name: "Cozy Winter Sweater",
    price: 49.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=300&fit=crop",
    category: "Fashion",
    rating: 4.0,
    reviews: 89,
    description: "Comfortable and warm winter sweater made from premium materials.",
    inStock: false
  },
  {
    id: 5,
    name: "Professional Camera Lens",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
    category: "Photography",
    rating: 4.7,
    reviews: 45,
    description: "High-performance camera lens for professional photography.",
    inStock: true
  },
  {
    id: 6,
    name: "Ergonomic Office Chair",
    price: 249.99,
    originalPrice: 299.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    category: "Furniture",
    rating: 4.3,
    reviews: 112,
    description: "Comfortable ergonomic office chair with lumbar support.",
    inStock: true
  },
  {
    id: 7,
    name: "Organic Skincare Set",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop",
    category: "Beauty",
    rating: 4.6,
    reviews: 78,
    description: "Complete organic skincare routine with natural ingredients.",
    inStock: true
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
    category: "Electronics",
    rating: 4.4,
    reviews: 156,
    description: "Portable Bluetooth speaker with excellent sound quality.",
    inStock: true
  },
  {
    id: 9,
    name: "Designer Sunglasses",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop",
    category: "Fashion",
    rating: 4.1,
    reviews: 34,
    description: "Stylish designer sunglasses with UV protection.",
    inStock: true
  },
  {
    id: 10,
    name: "Fitness Tracker Band",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=300&fit=crop",
    category: "Electronics",
    rating: 4.2,
    reviews: 98,
    description: "Advanced fitness tracker with heart rate monitoring.",
    inStock: true
  },
  {
    id: 11,
    name: "Ceramic Coffee Mug Set",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=300&fit=crop",
    category: "Home",
    rating: 4.5,
    reviews: 67,
    description: "Beautiful ceramic coffee mug set for your morning routine.",
    inStock: true
  },
  {
    id: 12,
    name: "Yoga Mat Premium",
    price: 59.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
    category: "Sports",
    rating: 4.7,
    reviews: 123,
    description: "Premium yoga mat with excellent grip and comfort.",
    inStock: true
  }
];

export const getUniqueCategories = (): string[] => {
  return Array.from(new Set(sampleProducts.map(product => product.category)));
};

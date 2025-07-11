
# CartWave - Modern E-commerce Platform

A responsive, feature-rich e-commerce web application built with React and TypeScript. CartWave offers a seamless shopping experience with modern UI components, user authentication, and comprehensive product management.

## Features

### 🛍️ Shopping Experience
- **Product Catalog** - Browse through a curated selection of products
- **Advanced Filtering** - Filter by categories, price range, ratings, and availability
- **Smart Search** - Real-time product search functionality
- **Shopping Cart** - Add, remove, and manage items with persistent cart state
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices

### 🔐 User Management
- **User Authentication** - Secure login and registration system
- **Account Management** - User profile and account settings
- **Guest Shopping** - Browse and shop without registration

### 📱 Modern UI/UX
- **Clean Interface** - Modern, intuitive design with smooth animations
- **Dark/Light Themes** - Theme switching support
- **Toast Notifications** - Real-time feedback for user actions
- **Mobile-First** - Responsive design that works on all devices

## Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development experience
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - High-quality, accessible component library
- **Radix UI** - Headless UI primitives for complex components
- **Lucide React** - Beautiful, customizable icons

### State Management & Data
- **TanStack React Query** - Powerful data fetching and caching
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation

### Additional Libraries
- **React Router DOM** - Client-side routing
- **Date-fns** - Modern date utility library
- **Recharts** - Composable charting library
- **Sonner** - Beautiful toast notifications

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd cartwave
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components (shadcn/ui)
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   ├── ProductCard.tsx  # Product display component
│   └── ...
├── pages/               # Route components
│   ├── Index.tsx        # Homepage
│   ├── Products.tsx     # Product listing
│   ├── Cart.tsx         # Shopping cart
│   └── ...
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── data/                # Static data and types
└── ...
```

## Key Components

### Product Management
- **ProductCard** - Individual product display with add-to-cart functionality
- **ProductFilters** - Advanced filtering system for product discovery
- **ProductGrid** - Responsive grid layout for product listings

### Navigation & Layout
- **Header** - Responsive navigation with search and cart
- **Footer** - Contact information and site links
- **HeroSection** - Landing page hero with call-to-action

### User Interface
- **AccountMenu** - User authentication and account management
- **ShoppingCart** - Cart management with item controls
- **Contact** - Contact information modal

## Customization

### Styling
The project uses Tailwind CSS with a custom design system. Colors and spacing are defined in:
- `tailwind.config.ts` - Tailwind configuration
- `src/index.css` - Global styles and CSS variables

### Adding Products
Products are currently managed in `src/data/products.ts`. For a production environment, integrate with a headless CMS or e-commerce API.


## Development Guidelines

### Code Style
- Use TypeScript for all new files
- Follow React functional component patterns
- Implement proper error boundaries
- Use semantic HTML and accessibility best practices

### Component Creation
- Keep components small and focused
- Use composition over inheritance
- Implement proper TypeScript interfaces
- Follow the established naming conventions

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy automatically on push to main branch

### Netlify
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`


## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Performance Optimization

- **Code Splitting** - Automatic route-based code splitting
- **Image Optimization** - Lazy loading and responsive images
- **Bundle Analysis** - Use `npm run build -- --analyze` to analyze bundle size
- **Caching** - React Query handles data caching automatically

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Shadcn/ui](https://ui.shadcn.com/) for the component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Lucide](https://lucide.dev/) for the beautiful icons

---

**CartWave** - Your modern e-commerce solution 🚀

# Shopping-Bag 🛍️

A modern full-stack e-commerce application built with Next.js and NestJS, offering a seamless shopping experience with a clean, minimalist design philosophy.

## 📋 Overview

Shopping-Bag is an e-commerce platform that focuses on delivering carefully curated products with an emphasis on quality essentials and thoughtful design. The application features a responsive frontend built with Next.js and React, backed by a robust NestJS API.

## ✨ Features

- 🎨 Modern, responsive UI with Tailwind CSS and DaisyUI
- 🛒 Product browsing with category carousels
- 📱 Mobile-first responsive design
- 🔐 User authentication (Login/Register)
- 🏪 Shop and product detail pages
- 🎯 Featured products, new arrivals, and best sellers sections
- 📦 Shopping cart functionality
- 🎭 Clean and intuitive user interface

## 🛠️ Tech Stack

### Frontend

- **Framework:** Next.js 16 (React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, DaisyUI
- **State Management:** Zustand
- **UI Components:** Custom components with react-icons
- **Carousel:** Embla Carousel React
- **Package Manager:** pnpm

### Backend

- **Framework:** NestJS 11
- **Language:** TypeScript
- **Runtime:** Node.js
- **Package Manager:** pnpm

## 📁 Project Structure

```
shopping-bag/
├── frontend/              # Next.js frontend application
│   ├── src/
│   │   ├── app/          # Next.js app directory (pages & routes)
│   │   ├── components/   # Reusable React components
│   │   ├── store/        # Zustand state management
│   │   └── images/       # Static image assets
│   └── public/           # Public static files
├── backend/              # NestJS backend API
│   ├── src/
│   │   ├── app.module.ts
│   │   ├── app.controller.ts
│   │   ├── app.service.ts
│   │   └── main.ts
│   └── test/             # E2E tests
└── old-backend/          # Legacy backend (deprecated)
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/misbahul-alam/Shopping-Bag.git
   cd Shopping-Bag
   ```

2. **Install frontend dependencies**

   ```bash
   cd frontend
   pnpm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   pnpm install
   ```

### Running the Application

#### Development Mode

1. **Start the backend server**

   ```bash
   cd backend
   pnpm run start:dev
   ```

   The backend will run on `http://localhost:3000`

2. **Start the frontend development server**
   ```bash
   cd frontend
   pnpm run dev
   ```
   The frontend will run on `http://localhost:3000` (or next available port)

#### Production Mode

1. **Build and start the backend**

   ```bash
   cd backend
   pnpm run build
   pnpm run start:prod
   ```

2. **Build and start the frontend**
   ```bash
   cd frontend
   pnpm run build
   pnpm run start
   ```

## 📜 Available Scripts

### Frontend Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Backend Scripts

- `pnpm run start` - Start the application
- `pnpm run start:dev` - Start in watch mode
- `pnpm run start:debug` - Start in debug mode
- `pnpm run start:prod` - Start production build
- `pnpm run build` - Build the application
- `pnpm run test` - Run unit tests
- `pnpm run test:e2e` - Run end-to-end tests
- `pnpm run test:cov` - Run tests with coverage
- `pnpm run lint` - Run ESLint and fix issues
- `pnpm run format` - Format code with Prettier

## 🎨 Key Features in Detail

### Frontend Pages

- **Home Page** - Hero section with featured products, new arrivals, and best sellers
- **Shop Page** - Browse all products with filtering options
- **Product Detail** - Detailed product information and purchase options
- **Login/Register** - User authentication pages
- **Cart** - Shopping cart management

### Component Architecture

- **Layout Components** - Header, Footer, Drawer, MainLayout
- **UI Components** - Button, InputField, SelectField, TextArea
- **Feature Components** - ProductCard, CategoryCarousel

## 🔧 Configuration

### Environment Variables

Create `.env` files in both frontend and backend directories:

**Backend `.env`:**

```env
PORT=3000
# Add your environment variables here
```

**Frontend `.env.local`:**

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
# Add your environment variables here
```

## 🧪 Testing

Run tests in the backend:

```bash
cd backend
pnpm run test        # Unit tests
pnpm run test:e2e    # E2E tests
pnpm run test:cov    # Coverage report
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the UNLICENSED license.

## 👤 Author

**Misbahul Alam**

- GitHub: [@misbahul-alam](https://github.com/misbahul-alam)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- NestJS team for the robust backend framework
- The open-source community for the excellent tools and libraries

---

**Note:** This project is currently in active development. Some features may be incomplete or subject to change.

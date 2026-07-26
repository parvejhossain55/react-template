# React Production Template

A production-grade React template built with TypeScript, Vite, Tailwind CSS, and best practices for modern web development.

## Features

- ⚛️ **React 18** - Latest React with hooks and concurrent features
- 📘 **TypeScript** - Type-safe development with strict mode
- ⚡ **Vite** - Lightning-fast build tool with HMR
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧪 **Vitest** - Fast unit testing with Testing Library
- 🔄 **React Router** - Client-side routing
- 🗃️ **Zustand** - Lightweight state management
- 📏 **ESLint & Prettier** - Code quality and formatting
- 🪝 **Husky & lint-staged** - Git hooks for code quality
- 📝 **Commitlint** - Conventional commit messages
- 🚀 **CI/CD** - GitHub Actions workflow
- 🌍 **Environment Management** - Multi-environment support
- 🛡️ **Error Handling** - Error boundaries and logging

## Getting Started

### Prerequisites

- Node.js 18 or higher
- Yarn or npm

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd react-template
```

2. Install dependencies:

```bash
yarn install
```

3. Copy environment variables:

```bash
cp .env.example .env
```

4. Start the development server:

```bash
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix ESLint errors
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting
- `yarn test` - Run tests
- `yarn test:ui` - Run tests with UI
- `yarn test:coverage` - Run tests with coverage

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Route-level components
├── hooks/           # Custom React hooks
├── utils/           # Helper functions
├── services/        # API calls
├── contexts/        # React contexts
├── types/           # TypeScript types
├── constants/       # App constants
├── store/           # Zustand state management
├── router/          # React Router configuration
├── styles/          # Global styles
└── test/            # Test setup
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_DEBUG=false
VITE_APP_NAME=React Template
```

See `.env.example` for all available variables.

## Code Quality

This project uses several tools to maintain code quality:

- **ESLint** - Lints TypeScript and React code
- **Prettier** - Formats code consistently
- **Husky** - Runs git hooks
- **lint-staged** - Runs linters on staged files
- **Commitlint** - Enforces conventional commits

### Git Hooks

Pre-commit hooks run automatically to:

- Format code with Prettier
- Fix ESLint errors

Commit-msg hooks validate commit messages follow conventional commits format.

## Testing

Tests are written using Vitest and React Testing Library.

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test --watch

# Run tests with coverage
yarn test:coverage
```

## Deployment

### Build for Production

```bash
yarn build
```

The built files will be in the `dist` directory.

### Deploy to Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect Vite and configure the build
3. Deploy!

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `yarn build`
3. Set publish directory: `dist`
4. Deploy!

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - feel free to use this template for your projects.

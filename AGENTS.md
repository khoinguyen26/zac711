# AGENTS.md - Development Guidelines

## Commands
- **Development**: `npm run dev` or `npm start` (Vite dev server on port 3000)
- **Build**: `npm run build` (Vite production build)
- **Preview**: `npm run serve` (Preview production build)
- **TypeScript check**: `npx tsc --noEmit` (Type checking without emit)

## Framework & Tech Stack
- **Framework**: SolidJS (not React!) with TypeScript
- **Build tool**: Vite with vite-plugin-solid
- **Module system**: ESNext with bundler resolution
- **Target**: ESNext

## Code Style & Best Practices
- **Imports**: Named imports preferred, relative paths with extensions omitted
- **Components**: Use `Component` type from solid-js for typed components
- **JSX**: JSX pragma is `solid-js`, fragments use `<>` 
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Export**: Default exports for components, named for utilities
- **TypeScript**: Strict mode enabled, prefer explicit typing
- **Error handling**: Throw descriptive errors with context
- **Functions**: Pure functions where possible, avoid side effects in utilities
- **State**: Use SolidJS signals properly, batch updates when needed
- **CSS**: Use CSS custom properties (variables) for theming

## File Organization
```
src/
├── components/     # Reusable UI components
├── types/         # TypeScript type definitions
├── utils/         # Pure utility functions and helpers
├── styles/        # CSS files organized by feature
├── App.tsx        # Main application component
└── index.tsx      # Application entry point
```

## Architecture Principles
- **Separation of Concerns**: Business logic separate from UI components
- **Single Responsibility**: Each module should have one clear purpose
- **DRY (Don't Repeat Yourself)**: Extract common patterns into utilities
- **Type Safety**: Leverage TypeScript for better development experience
- **Performance**: Use SolidJS primitives efficiently (signals, memos, effects)

## Component Guidelines
- Keep components focused and small (< 150 lines when possible)
- Use TypeScript interfaces for props
- Extract complex logic into custom hooks/utilities
- Prefer composition over inheritance
- Use meaningful component and prop names

## Styling Guidelines
- Use CSS custom properties for theming (Everforest color scheme)
- Organize CSS by component or feature
- Use semantic class names (BEM methodology preferred)
- Avoid inline styles except for dynamic values
- Maintain consistent spacing and typography scales
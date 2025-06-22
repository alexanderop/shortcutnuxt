# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This project uses **pnpm** as the package manager.

### Core Commands

- `pnpm dev` - Start development server
- `pnpm dev:pwa` - Start development server with PWA enabled
- `pnpm build` - Build for production
- `pnpm generate` - Generate static site
- `pnpm preview` - Preview production build
- `pnpm start` - Start production server
- `pnpm start:generate` - Serve generated static files

### Code Quality

- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint and automatically fix issues
- `pnpm typecheck` - Run TypeScript type checking

**IMPORTANT**: After completing any coding tasks, always run both `pnpm lint:fix` and `pnpm typecheck` to ensure code quality and fix any issues before finishing.

## Architecture Overview

This is a **Nuxt 3** application based on the Vitesse template with the following stack:

### Core Technologies

- **Nuxt 3** - Vue.js meta-framework with SSR/SSG
- **TypeScript** - Type safety throughout
- **UnoCSS** - Atomic CSS engine for styling
- **Pinia** - State management
- **VueUse** - Composition utilities
- **PWA** - Progressive Web App capabilities

### Project Structure

- `app/` - Main application code (Nuxt 3 app directory)
  - `components/` - Vue components
  - `composables/` - Composition API utilities and stores
  - `config/` - Configuration files (PWA settings)
  - `constants/` - Application constants
  - `layouts/` - Layout components
  - `pages/` - File-based routing pages
- `server/` - Server-side code and API routes
- `public/` - Static assets

### Key Configuration Files

- `nuxt.config.ts` - Main Nuxt configuration with modules and build settings
- `eslint.config.js` - ESLint configuration using @antfu/eslint-config
- `uno.config.ts` - UnoCSS configuration with custom shortcuts and presets
- `package.json` - Uses pnpm workspaces and catalog dependencies

### State Management

- Pinia stores are located in `app/composables/`
- Example: `user.ts` demonstrates store pattern with HMR support
- Stores use composition API style with `defineStore()`

### Styling Approach

- UnoCSS with Wind4 preset (similar to Tailwind)
- Custom shortcuts defined in `uno.config.ts`:
  - `btn` - Standard button styling
  - `icon-btn` - Icon button styling
- Web fonts configured for DM Sans, DM Serif Display, and DM Mono

### PWA Configuration

- PWA settings in `app/config/pwa.ts`
- Includes offline support, caching strategies, and web manifest
- Development PWA can be enabled with `VITE_PLUGIN_PWA=true` environment variable

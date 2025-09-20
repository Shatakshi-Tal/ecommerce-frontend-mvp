# 📂 Project Structure

This document explains the foldering and responsibilities for each
directory in the **E-Commerce Frontend MVP** project.

------------------------------------------------------------------------

## Root Directory

    ├── src/
    │   ├── api/
    │   ├── components/
    │   ├── features/
    │   ├── hooks/
    │   ├── store/
    │   ├── styles/
    │   ├── tests/
    │   └── App.tsx
    ├── public/
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    ├── README.md
    ├── PRD.md
    └── Project-structure.md

------------------------------------------------------------------------

## Folder Details

### 1. **src/api/**

-   Contains API service definitions.\
-   Example: `productApi.ts` to handle `/products` and `/products/:id`
    endpoints.\
-   All network requests handled via Redux Toolkit Query or fetch
    wrapped in services.

### 2. **src/components/**

-   Reusable presentational components (stateless).\
-   Examples:
    -   `Button.tsx`\
    -   `Loader.tsx`\
    -   `Card.tsx`

### 3. **src/features/**

-   Feature-based folder structure.\
-   Each feature contains:
    -   React components (UI + container logic)\
    -   Redux slice (state management)\
-   Example:
    -   **products/** → `ProductList.tsx`, `ProductDetails.tsx`,
        `productSlice.ts`\
    -   **cart/** → `CartPage.tsx`, `cartSlice.ts`

### 4. **src/hooks/**

-   Custom React hooks.\
-   Example: `useFetchProducts.ts`, `useCart.ts`.

### 5. **src/store/**

-   Global Redux store setup.\
-   Configures slices from different features.\
-   Example: `store.ts` with `configureStore` and middleware.

### 6. **src/styles/**

-   Global CSS/SCSS files.\
-   Responsive layout helpers.\
-   Example: `global.css`, `variables.css`.

### 7. **src/tests/**

-   Unit tests using Jest + React Testing Library.\
-   Tests mirror the folder structure of `src/`.\
-   Example:
    -   `__tests__/ProductList.test.tsx`\
    -   `__tests__/cartSlice.test.ts`

### 8. **src/App.tsx**

-   Root application component.\
-   Handles global layout, routing, and Redux `Provider` integration.

### 9. **public/**

-   Public static assets (e.g., logos, icons).

------------------------------------------------------------------------

## Conventions

-   **TypeScript:** Strict mode enabled, no `any` types.\
-   **Naming:** `PascalCase` for components, `camelCase` for variables,
    `UPPER_CASE` for constants.\
-   **Imports:** Absolute imports configured for cleaner paths.\
-   **Testing:** Minimum 80% coverage across features and slices.

------------------------------------------------------------------------

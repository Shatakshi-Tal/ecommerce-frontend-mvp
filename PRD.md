# 📄 Product Requirements Document (PRD)

**Project:** E-Commerce Frontend Application (I3 Level)\
**Tech Stack:** React + TypeScript + Vite, Redux Toolkit (for state &
API layer), Jest + React Testing Library (unit tests)

------------------------------------------------------------------------

## 1. Purpose

This PRD defines requirements for building a simple yet robust
e-commerce frontend application using modern frontend practices. The
goal is to evaluate clean architecture, coding discipline, test
coverage, and production-ready code at **I3 developer level**.

------------------------------------------------------------------------

## 2. Scope

The application must allow users to:

-   Browse products\
-   View product details\
-   Add/update/delete items in a shopping cart

No authentication/authorization is required. Any user should be able to
access all features.

### Core Modules

1.  **Product Listing Page**\
2.  **Product Details Page**\
3.  **Shopping Cart Page**

------------------------------------------------------------------------

## 3. Functional Requirements

### 3.1 Product Listing Page

-   Displays a list of available products.\
-   Features:
    -   Search bar to filter products by name\
    -   Filter by category\
    -   Product cards showing: image, name, price\
    -   Pagination (page size = 6, configurable)\
    -   Loading state (spinner)\
    -   Error handling if API fails

------------------------------------------------------------------------

### 3.2 Product Details Page

-   Displays detailed product information.\
-   Features:
    -   Product image\
    -   Product name and price\
    -   Description\
    -   "Add to Cart" button\
    -   Loading state & error handling

------------------------------------------------------------------------

### 3.3 Shopping Cart Page

-   Displays list of items added by the user.\
-   Features:
    -   Item thumbnail, name, price\
    -   Update quantity\
    -   Remove button\
    -   Total amount calculation\
    -   Empty cart message\
    -   Error handling (e.g. update failure)

------------------------------------------------------------------------

## 4. Non-Functional Requirements

-   **Responsiveness:** Application must render properly across desktop,
    tablet, and mobile screens.\
-   **Error Management:**
    -   Show error messages (toast or inline alert) if API fails.\
    -   Retry button where applicable.\
-   **Loading State:**
    -   Use spinner/loader during API calls.\
-   **Performance:**
    -   Fetch data via Redux Toolkit Query with caching.\
-   **Accessibility (a11y):**
    -   Proper alt text for images.\
    -   Semantic HTML for buttons/inputs.

------------------------------------------------------------------------

## 5. Architecture (MVP)

### 5.1 Structure

-   **View (React Components)** → UI rendering\
-   **Presenter (Hooks/Containers)** → State & UI logic separation\
-   **Model (Redux + Services)** → API & Data layer

### 5.2 Suggested Project Structure

    src/
     ├── api/                # API service definitions (FakeStore API)
     ├── components/         # Reusable UI components (Button, Loader, Card, etc.)
     ├── features/           # Feature-based folders (products, cart, etc.)
     │    ├── products/      
     │    │     ├── ProductList.tsx
     │    │     ├── ProductDetails.tsx
     │    │     └── productSlice.ts
     │    ├── cart/
     │          ├── CartPage.tsx
     │          └── cartSlice.ts
     ├── hooks/              # Custom hooks (e.g., useFetchProducts)
     ├── store/              # Redux store setup
     ├── styles/             # Global and responsive styles
     ├── tests/              # Unit tests
     └── App.tsx             # Root component

------------------------------------------------------------------------

## 6. FakeStoreAPI Endpoints

Base URL: `https://fakestoreapi.com`

  Endpoint                      Method   Description
  ----------------------------- -------- -------------------------------
  `/products`                   GET      Get all products
  `/products/{id}`              GET      Get single product
  `/products/categories`        GET      Get product categories
  `/products/category/{name}`   GET      Get products by category
  `/carts`                      GET      Get all carts (for demo only)
  `/carts/{id}`                 GET      Get single cart
  `/carts`                      POST     Create new cart
  `/carts/{id}`                 PUT      Update existing cart
  `/carts/{id}`                 DELETE   Delete cart

*(For this assignment, only `/products`, `/products/{id}`, and local
cart state are required. Backend cart endpoints may be mocked or
simulated in Redux state.)*

------------------------------------------------------------------------

## 7. Coding Guidelines

1.  **TypeScript Rules**
    -   No `any` type allowed.\
    -   Use interfaces/types for props and API responses.\
    -   Strong typing for Redux slices and hooks.
2.  **Code Style**
    -   Use Prettier + ESLint (Airbnb or recommended React rules).\
    -   Consistent naming: `camelCase` for variables, `PascalCase` for
        components.\
    -   Keep components small (max 150 lines).
3.  **React Best Practices**
    -   Functional components only.\
    -   Use hooks (`useState`, `useEffect`, `useMemo`, `useCallback`).\
    -   Separate API logic into Redux slices (no API calls inside
        components).
4.  **Foldering**
    -   Feature-based structure.\
    -   Reusable components must go into `/components`.
5.  **Testing**
    -   Every slice, hook, and component must have unit tests.\
    -   Coverage ≥ 80%.

------------------------------------------------------------------------

## 8. Unit Testing Requirements

-   **Framework:** Jest + React Testing Library\
-   **Scope:**
    -   Components: render, props, UI behavior\
    -   Redux slices: reducers, actions, selectors\
    -   API calls: mock with `msw` or `jest-fetch-mock`\
-   **Examples:**
    -   ProductList renders product cards correctly\
    -   Cart reducer updates item quantity\
    -   Add to cart button dispatches correct action\
    -   Loader shown when fetching products

------------------------------------------------------------------------

## 9. Deliverables

-   GitHub **private repo** (shared with reviewers)\
-   Repo contents:
    -   `src/` (entire source code)\
    -   `README.md` (overview, setup, run instructions)\
    -   `Project-structure.md` (describe foldering & architecture)\
    -   `Copilot Chat Export.md` (if used with AI assistants)\
    -   Unit tests + coverage report (≥ 80%)

------------------------------------------------------------------------

## 10. Suggested Repo Name

`ecommerce-frontend-mvp`

(Alternative: `fakestore-react-ts` or `shopmate-frontend`)

# 🛒 E-Commerce Frontend MVP

This is a simple e-commerce frontend application built with **React +
TypeScript + Vite**, following MVP architecture.\
It uses **Redux Toolkit** for state management and API integration, and
**Jest + React Testing Library** for unit testing.

------------------------------------------------------------------------

## 🚀 Features

-   Browse product listings (with search, filter, pagination)
-   View product details
-   Add, update, and remove items from shopping cart
-   Responsive design (desktop, tablet, mobile)
-   Error handling & loading states
-   Unit test coverage (≥ 80%)

------------------------------------------------------------------------

## 🏗 Tech Stack

-   **Frontend:** React + TypeScript + Vite
-   **State Management & API Layer:** Redux Toolkit (RTK Query)
-   **Styling:** CSS (with responsive layouts)
-   **Testing:** Jest + React Testing Library
-   **API:** [FakeStoreAPI](https://fakestoreapi.com/docs)

------------------------------------------------------------------------

## 📂 Project Structure

Refer to [Project-structure.md](./Project-structure.md) for detailed
explanation.

    src/
     ├── api/                # API services
     ├── components/         # Reusable UI components
     ├── features/           # Feature-based folders (products, cart)
     ├── hooks/              # Custom hooks
     ├── store/              # Redux store setup
     ├── styles/             # Global and responsive styles
     ├── tests/              # Unit tests
     └── App.tsx             # Root component

------------------------------------------------------------------------

## ⚙️ Setup Instructions

### 1. Clone Repository

``` bash
git clone <repo-url>
cd ecommerce-frontend-mvp
```

### 2. Install Dependencies

``` bash
npm install
```

### 3. Run Development Server

``` bash
npm run dev
```

App will be available at `http://localhost:5173/`

### 4. Build for Production

``` bash
npm run build
npm run preview
```

------------------------------------------------------------------------

## ⚡️ Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

### 3. Run unit tests & generate coverage report
```bash
npm test -- --coverage
```
Coverage reports are stored in the `coverage/` folder.

---

## 🧩 Coding Guidelines
- Use functional components and hooks only.
- No API calls inside components; use Redux slices/services.
- Strong TypeScript typing (no `any`).
- Keep components small and reusable.
- Use SCSS files per component for styling.

---

## 🛠️ Scripts
- `npm run dev` — Start development server
- `npm test` — Run unit tests
- `npm test -- --coverage` — Run tests with coverage report

---

## 🔗 API Endpoints
- `/products` — Get all products
- `/products/:id` — Get single product
- `/products/categories` — Get product categories
- `/products/category/:name` — Get products by category

---

## 📝 Notes
- Cart state is managed locally in Redux (no backend cart integration).
- All features and foldering follow [PRD.md](./PRD.md) and [Project-structure.md](./Project-structure.md).

------------------------------------------------------------------------

## 📦 Deliverables

-   Source code under `src/`
-   [PRD.md](./PRD.md) --- Product Requirements Document
-   [Project-structure.md](./Project-structure.md) --- Foldering and
    responsibilities
-   `README.md` --- Setup & run instructions
-   Unit tests with coverage report
-   Copilot Chat Export (if used)

------------------------------------------------------------------------

## 👨‍💻 Suggested Repo Name

`ecommerce-frontend-mvp`

(Alternatives: `fakestore-react-ts`, `shopmate-frontend`)

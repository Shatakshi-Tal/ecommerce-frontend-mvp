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

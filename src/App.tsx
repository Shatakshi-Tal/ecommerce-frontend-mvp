
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './features/products/ProductList';
import ProductDetails from './features/products/ProductDetails';
import CartPage from './features/cart/CartPage';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <nav style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
          <Link to="/">Products</Link>
          <Link to="/cart">Cart</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

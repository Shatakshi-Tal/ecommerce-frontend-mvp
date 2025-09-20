import React from 'react';
import Loader from '../../components/Loader';
import Card from '../../components/Card';
import { useCartApi } from '../../hooks/useCartApi';
import styles from './ProductList.module.scss';
import { useFetchProducts } from '../../hooks/useFetchProducts';
import { useGetCategoriesQuery } from '../../api/productApi';

const ProductList: React.FC = () => {
  const {
    products,
    isLoading,
    error,
    search,
    setSearch,
    category,
    setCategory,
    page,
    setPage,
    totalPages,
  } = useFetchProducts();
  const { data: categories } = useGetCategoriesQuery();

  const userId = 1;
  const { getQuantity, addProductToCart, isAdding } = useCartApi(userId);

  if (isLoading) return <Loader />;
  if (error) return <div className={styles.error}>Error loading products.</div>;

  return (
    <div>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories?.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.productList}>
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            cartQuantity={getQuantity(product.id)}
            onAddToCart={(qty: number) => addProductToCart(product.id, qty)}
            isAdding={isAdding}
          />
        ))}
      </div>
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            style={{ margin: '0 0.25rem', fontWeight: page === i + 1 ? 'bold' : 'normal' }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
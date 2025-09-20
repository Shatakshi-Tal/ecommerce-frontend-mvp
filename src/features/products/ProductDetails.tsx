import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../api/productApi';
import Loader from '../../components/Loader';
import styles from './ProductDetails.module.scss';
import { useCartApi } from '../../hooks/useCartApi';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, error } = useGetProductQuery(Number(id));
  // For demo, use userId = 1
  const userId = 1;
  const { getQuantity, addProductToCart, isAdding } = useCartApi(userId);
  const cartQuantity = product ? getQuantity(product.id) : 0;

  if (isLoading) return <Loader />;
  if (error) return <div className={styles.error}>Error loading product.</div>;
  if (!product) return null;

  return (
    <div className={styles.details}>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <div>{`$${product.price}`}</div>
      {cartQuantity === 0 ? (
        <button onClick={() => addProductToCart(product.id)} disabled={isAdding}>
          {isAdding ? 'Adding...' : 'Add to Cart'}
        </button>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={() => addProductToCart(product.id, -1)}
            disabled={isAdding || cartQuantity <= 1}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span>Quantity in Cart: {cartQuantity}</span>
          <button
            onClick={() => addProductToCart(product.id, 1)}
            disabled={isAdding}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
import React from 'react';
import type { Product } from '../api/productApi';
import styles from './Card.module.scss';
import { Link } from 'react-router-dom';

interface CardProps {
  product: Product;
  cartQuantity?: number;
  onAddToCart?: (quantity?: number) => void;
  isAdding?: boolean;
}

const Card: React.FC<CardProps> = ({ product, cartQuantity = 0, onAddToCart, isAdding }) => (
  <div className={styles.card}>
    <Link to={`/products/${product.id}`}>
      <img src={product.image} alt={`Image of ${product.title}`} />
      <h3>{product.title}</h3>
      <div>{`$${product.price}`}</div>
    </Link>
    {onAddToCart && (
      cartQuantity === 0 ? (
        <button onClick={() => onAddToCart(1)} disabled={isAdding}>
          {isAdding ? 'Adding...' : 'Add to Cart'}
        </button>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={() => onAddToCart(-1)}
            disabled={isAdding || cartQuantity <= 1}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span>In Cart: {cartQuantity}</span>
          <button
            onClick={() => onAddToCart(1)}
            disabled={isAdding}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      )
    )}
  </div>
);

export default Card;
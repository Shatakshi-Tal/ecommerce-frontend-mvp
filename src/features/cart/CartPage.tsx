import React from 'react';
import { useCartApi } from '../../hooks/useCartApi';
import { useGetProductsQuery } from '../../api/productApi';
import styles from './CartPage.module.scss';

const CartPage: React.FC = () => {
  // For demo, use userId = 1
  const userId = 1;
  const { cart, isLoading, error, addProductToCart, isAdding, getQuantity } = useCartApi(userId);
  const { data: products, isLoading: isProductsLoading } = useGetProductsQuery();

  if (isLoading || isProductsLoading) return <div className={styles.empty}>Loading cart...</div>;
  if (error) return <div className={styles.empty}>Error loading cart.</div>;
  if (!cart || !cart.products || cart.products.length === 0) {
    return <div className={styles.empty}>Your cart is empty.</div>;
  }

  // Map productId to product details
  const getProductDetails = (productId: number) => products?.find((p) => p.id === productId);
  const total = cart.products.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={styles.cartPage}>
      {cart.products.map((item) => {
        const product = getProductDetails(item.productId);
        const quantity = getQuantity(item.productId);
        return (
          <div key={item.productId} className={styles.cartItem}>
            {product ? (
              <>
                <img src={product.image} alt={product.title} style={{ width: 60 }} />
                <div>{product.title}</div>
                <div>{`$${product.price}`}</div>
              </>
            ) : (
              <div>Product ID: {item.productId}</div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                onClick={() => addProductToCart(item.productId, -1)}
                disabled={isAdding || quantity <= 1}
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span>Quantity: {quantity}</span>
              <button
                onClick={() => addProductToCart(item.productId, 1)}
                disabled={isAdding}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>
        );
      })}
      <div className={styles.total}>Total items: {total}</div>
    </div>
  );
};

export default CartPage;
import cartReducer, { addToCart, removeFromCart, updateQuantity, clearCart } from '../../features/cart/cartSlice';
import type { Product } from '../../api/productApi';

describe('cartSlice', () => {
  const product: Product = {
    id: 1,
    title: 'Test Product',
    price: 10,
    description: 'desc',
    category: 'cat',
    image: 'img',
  };

  it('should add item to cart', () => {
    const state = cartReducer({ items: [] }, addToCart(product));
    expect(state.items.length).toBe(1);
    expect(state.items[0].product.id).toBe(product.id);
  });

  it('should update quantity', () => {
    const state = cartReducer({ items: [{ product, quantity: 1 }] }, updateQuantity({ id: 1, quantity: 3 }));
    expect(state.items[0].quantity).toBe(3);
  });

  it('should remove item from cart', () => {
    const state = cartReducer({ items: [{ product, quantity: 1 }] }, removeFromCart(1));
    expect(state.items.length).toBe(0);
  });

  it('should clear cart', () => {
    const state = cartReducer({ items: [{ product, quantity: 1 }] }, clearCart());
    expect(state.items.length).toBe(0);
  });
});

import type { RootState } from '../../store/store';

interface CartItem {
	product: { id: number };
	quantity: number;
}

export const selectCartQuantityByProductId = (state: RootState, productId: number): number => {
	const cart = state.cart as { items?: CartItem[] };
	const items: CartItem[] = Array.isArray(cart.items) ? cart.items : [];
	const item = items.find((item) => item.product.id === productId);
	return item ? item.quantity : 0;
};

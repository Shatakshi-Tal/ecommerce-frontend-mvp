import { useGetCartByUserQuery, useAddCartMutation, useUpdateCartMutation } from '../api/productApi';
import { useState, useEffect } from 'react';

export const useCartApi = (userId: number) => {
  const { data: carts, isLoading, error, refetch } = useGetCartByUserQuery(userId);
  const [addCart, { isLoading: isAdding }] = useAddCartMutation();
  const [updateCart, { isLoading: isUpdating }] = useUpdateCartMutation();

  // Get latest cart (FakeStore returns array)
  // Always use the 0th item from the API response
  const cart = carts && carts.length > 0 ? carts[0] : null;

  // Local state for instant quantity feedback
  const [localQuantities, setLocalQuantities] = useState<Record<number, number>>({});

  // Sync local state with API response
  useEffect(() => {
    if (cart && Array.isArray(cart.products)) {
      const newQuantities: Record<number, number> = {};
      cart.products.forEach((p) => {
        newQuantities[p.productId] = p.quantity;
      });
      setLocalQuantities(newQuantities);
    }
  }, [cart]);

  // Add product to cart (POST if no cart, PUT if cart exists)
  const addProductToCart = async (productId: number, quantity: number = 1) => {
    // Update local state instantly
    setLocalQuantities((prev) => {
      const current = prev[productId] || 0;
      const next = Math.max(current + quantity, 1);
      return { ...prev, [productId]: next };
    });
    // API call
    if (!cart) {
      await addCart({ userId, date: new Date().toISOString(), products: [{ productId, quantity }] });
      await refetch();
    } else {
      const products = cart.products.map((p) =>
        p.productId === productId
          ? { ...p, quantity: Math.max(p.quantity + quantity, 1) }
          : p
      );
      const existing = cart.products.find((p) => p.productId === productId);
      if (!existing && quantity > 0) {
        products.push({ productId, quantity });
      }
      const filteredProducts = products.filter((p) => p.quantity > 0);
      await updateCart({ id: 1, userId, date: new Date().toISOString(), products: filteredProducts });
      await refetch();
    }
  };

  // Get quantity for a product
  const getQuantity = (productId: number) => {
    // Use local state for instant feedback
    return localQuantities[productId] || 0;
  };

  return {
    cart,
    isLoading,
    error,
    addProductToCart,
    getQuantity,
    isAdding,
    isUpdating,
    refetch,
  };
};

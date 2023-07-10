import { defineStore } from 'pinia';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  photoURL: string;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as CartItem[] | null,
  }),

  actions: {
    addToCart(item: CartItem) {
      const cart = this.cart || [];
      const existingItem = cart.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ ...item, quantity: 1 });
      }
      this.cart = cart;
    },
    changeQuantity(id: string, quantity: number) {
      const cart = this.cart || [];

      const existingItem = cart.find((i) => i.id.startsWith(id));

      if (existingItem) {
        existingItem.quantity = quantity;
      }
      this.cart = cart;
    },
  },
});

import axios from 'axios';

import { useCartStore } from 'stores/cartStore';
const cart = useCartStore();

const getTotal = () => {
  let sum = 0;

  cart.cart?.forEach((item) => {
    sum += item.price * item.quantity;
  });

  console.log(sum);

  return sum;
};

export async function createStripeSession() {
  const res = await axios.post('https://h4b.shiemi.repl.co/add', {
    // Provide necessary data for creating a product
    name: 'Big daddy',
    prize: getTotal(),
    currency: 'inr',
  });
  return res.data;
}

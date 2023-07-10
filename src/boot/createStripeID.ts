import axios from 'axios';

export async function createStripeSession() {
  const res = await axios.post('https://h4b.shiemi.repl.co/add', {
    // Provide necessary data for creating a product
    name: 'Big daddy',
    prize: 9.99,
    currency: 'usd',
  });
  return res.data;
}

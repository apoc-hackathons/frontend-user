<template>
  <div>
    <stripe-checkout ref="checkoutRef" mode="payment" :pk="publishableKey" :line-items="lineItems"
      :success-url="successURL" :cancel-url="cancelURL" @loading="v => loading = v" />
    <q-btn @click="submit" label="Pay" color="primary" />
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  components: {
    StripeCheckout,
  },
  data() {
    this.publishableKey = 'pk_test_51NRzMoSBG4kK2AAHJ2UWHL85WNREvPO9uv7ZUBoE5RoVgb7HoTZbYchKLjRppNvFBQZREbxhi7TqJDwJYZrGl7rb00atFYMI4w'
    return {
      loading: false,
      lineItems: [
        {
          price: 'price_1NS2tcSBG4kK2AAH55Is3Hen', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: 'http://localhost:9000/#/success',
      cancelURL: 'http://localhost:9000/#/stripe_cancel',
    };
  },
  methods: {
    submit() {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>

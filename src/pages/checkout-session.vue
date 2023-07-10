<template>
  <div>
    <stripe-checkout ref="checkoutRef" mode="payment" :pk="publishableKey" :line-items="lineItems"
      :success-url="successURL" :cancel-url="cancelURL" @loading="v => loading = v" />

  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
import { createStripeSession } from 'boot/createStripeID'
export default {
  components: {
    StripeCheckout,
  },
  data() {
    this.publishableKey = 'pk_test_51NRzMoSBG4kK2AAHJ2UWHL85WNREvPO9uv7ZUBoE5RoVgb7HoTZbYchKLjRppNvFBQZREbxhi7TqJDwJYZrGl7rb00atFYMI4w'
    return {
      loading: false,

      successURL: 'https://swiftcart-app.netlify.app/#/success',
      cancelURL: 'https://swiftcart-app.netlify.app/#/cancelled',
      id: ''
    };
  },
  computed: {
    lineItems() {
      return [
        {
          price: this.id, // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ];
    },
  },
  async mounted() {

    let id = await createStripeSession()
    this.$refs.checkoutRef.redirectToCheckout();
    this.id = id.id
  }

};
</script>

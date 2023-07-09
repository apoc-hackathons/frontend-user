<template>
  <q-page class="q-pa-sm">
    <Banner />

    <CurrentStoreInfo />

    <div class="text-h5 text-weight-bold q-my-md">Your Cart</div>

    <div v-for="n in 5" :key="n">
      <CartItems name="sex" :price="n" :image="qr" :quantity="n" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { generateQR } from 'boot/qrcode';
import { handleAuthStore } from 'boot/handleAuthStore';

import CurrentStoreInfo from 'src/components/CurrentStoreInfo.vue';
import Banner from 'components/UserBanner.vue';
import CartItems from 'components/CartItem.vue';
let qr = ref('');

onMounted(async () => {
  handleAuthStore();

  let data = {
    name: 'BallPalace',
    photoURL: 'https://i.imgur.com/zdHr5JO.jpeg',
  };

  qr.value = await generateQR(JSON.stringify(data));
});
</script>

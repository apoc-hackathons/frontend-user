<template>
  <q-page class="q-pa-sm">
    <Banner />

    <CurrentStoreInfo />

    <div class="text-h5 text-weight-bold  q-ma-md">Scan Products</div>
    <div class="flex flex-center q-my-xl">
      <ScannerComp style="border-radius: 16px;" />
    </div>

    <div class="text-h5 text-weight-bold q-my-md">Your {{ cart.cart?.length === 0 ? "cart is empty!" : "Cart" }}</div>
    <div v-for="cartItem in cart.cart" :key="cartItem.id">
      <CartItems :name="cartItem.name" :price="cartItem.price" :image="cartItem.photoURL" :quantity="cartItem.quantity"
        :id="cartItem.id" />
    </div>

  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { generateQR } from 'boot/qrcode';

import { useCartStore } from 'stores/cartStore';

import ScannerComp from 'components/ScannerComp.vue';

const cart = useCartStore();
import CurrentStoreInfo from 'src/components/CurrentStoreInfo.vue';
import Banner from 'components/UserBanner.vue';
import CartItems from 'components/CartItem.vue';
let qr = ref('');

onMounted(async () => {
  let data = {
    id: 'sdfsdfgdfhfjgh',
    name: 'BallPalace v2',
    photoURL: 'https://i.imgur.com/zdHr5JO.jpeg',
    price: 100,
  };

  qr.value = await generateQR(JSON.stringify(data));
});
</script>

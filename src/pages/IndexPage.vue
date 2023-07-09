<template>
  <q-page class="q-pa-sm">
    <Banner />

    <div class="flex items-end q-mx-sm q-mt-md">
      <q-avatar size="50px">
        <q-img
          :src="user.user?.photoURL!"
          alt="test"
          referrerpolicy="no-referrer"
        />
      </q-avatar>

      <h2 class="text-h5 q-ma-none q-ml-sm text-bold">
        Welcome to BallPalace!
      </h2>
    </div>

    <div class="text-h5 text-weight-bold q-my-md">Your Cart</div>

    <div v-for="n in 5" :key="n">
      <CartItems name="sex" :price="n" :image="qr" :quantity="n" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { generateQR } from 'boot/qrcode';
import { userStore } from 'stores/userStore';

import Banner from 'components/UserBanner.vue';
import CartItems from 'components/CartItem.vue';

const user = userStore();
let qr = ref('');

onMounted(async () => {
  let data = {
    name: 'Balls',
    price: 3,
  };

  qr.value = await generateQR(JSON.stringify(data));
});
</script>

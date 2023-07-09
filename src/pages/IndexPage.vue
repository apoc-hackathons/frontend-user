<template>
  <q-page class="q-pa-sm">
    <Banner />

<<<<<<< HEAD
    <div class="flex items-end q-mx-sm q-mt-md">
      <q-avatar size="50px">
        <q-img :src="user.user?.photoURL!" alt="test" referrerpolicy="no-referrer" />
      </q-avatar>

      <h2 class="text-h5 q-ma-none q-ml-sm text-bold">
        Welcome to BallPalace!
      </h2>
    </div>
=======
    <CurrentStoreInfo />
>>>>>>> 998bd6ae8eb64ce5693c73329b7b43c30f41ac20

    <div class="text-h5 text-weight-bold q-my-md">Your Cart</div>

    <div v-for="n in 5" :key="n">
      <CartItems name="sex" :price="n" :image="qr" :quantity="n" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { generateQR } from 'boot/qrcode';

<<<<<<< HEAD
// import Banner from 'components/UserBanner.vue';
// import CartItems from 'components/CartItem.vue';
// import ScannerComp from 'components/ScannerComp.vue';

const user = userStore();
=======
import CurrentStoreInfo from 'src/components/CurrentStoreInfo.vue';
import Banner from 'components/UserBanner.vue';
import CartItems from 'components/CartItem.vue';
>>>>>>> 998bd6ae8eb64ce5693c73329b7b43c30f41ac20
let qr = ref('');

onMounted(async () => {
  let data = {
    name: 'BallPalace',
    photoURL: 'https://i.imgur.com/zdHr5JO.jpeg',
  };

  qr.value = await generateQR(JSON.stringify(data));
});
</script>
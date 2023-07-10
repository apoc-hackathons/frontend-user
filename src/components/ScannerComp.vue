<template>
  <div>
    <div class="fit">
      <qrcode-stream @decode="onDecode" @init="onInit" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCartStore } from 'stores/cartStore';

import { QrcodeStream } from 'vue-qrcode-reader';

// data
const result = ref('');
const cart = useCartStore();

// methods
const onDecode = (data: string) => {
  // methods
  result.value = data;
  cart.addToCart(JSON.parse(data));
};

const onInit = async () => {
  console.log('sex');
};
</script>


<template>
  <div>
    <div class="fit">
      <qrcode-stream @decode="onDecode" @init="onInit" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from 'stores/cartStore';

import { QrcodeStream } from 'vue-qrcode-reader';

// data
const cart = useCartStore();

// methods
const onDecode = (data: string) => {
  handleScan(data)
};

const handleScan = (data: string) => {
  cart.addToCart(JSON.parse(data))
}

const onInit = async () => {
  console.log('sex');
};
</script>


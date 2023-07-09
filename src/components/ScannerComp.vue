<template>
  <div>
    <p class="error">{{ error }}</p>

    <p class="decode-result">
      Last result: <b>{{ result }}</b>
    </p>

    <qrcode-stream @decode="onDecode" @init="onInit" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { QrcodeStream } from 'vue-qrcode-reader';

// data
const result = ref('');
const error = ref('');

// methods
const onDecode = (data: string) => (result.value = data);

const onInit = async () => {
  console.log('sex');
};
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}
</style>

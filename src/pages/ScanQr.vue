<template>
  <div>
    <p class="error">{{ error }}</p>

    {{ store.store?.name }}
    {{ result }}

    <qrcode-stream @decode="onDecode" @init="onInit" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { QrcodeStream } from 'vue-qrcode-reader';

import { currentStore } from 'stores/whatStoreStore';

// data
const result = ref<Store>();
const error = ref('');
const store = currentStore();

type Store = {
  name: string;
  photoURL: string;
};

// methods
const onDecode = (data: Store) => {
  result.value = data;
  store.joinStore(data);
};

const onInit = async () => {
  console.log('whatever');
};
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}
</style>

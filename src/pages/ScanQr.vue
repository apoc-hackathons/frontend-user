<template>
  <div>
    <div class="flex flex-center q-pa-lg">
      <qrcode-stream @decode="onDecode" @init="onInit" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { QrcodeStream } from 'vue-qrcode-reader';

import { currentStore } from 'stores/whatStoreStore';

// data
const result = ref();
const store = currentStore();
const router = useRouter();

type Store = {
  name: string;
  photoURL: string;
};

// methods
const onDecode = (data: string) => {
  result.value = data;
  store.joinStore(JSON.parse(data));
  router.push('/');
};

const onInit = async () => {
  console.log('whatever');
};
</script>

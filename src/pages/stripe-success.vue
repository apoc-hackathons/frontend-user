<template>
  <q-page padding>
    <div>
      <div class="text-h5 text-weight-bold  q-ma-md">Scan before you exit</div>
      <div class="flex flex-center q-pa-lg">
        <qrcode-stream @decode="onDecode" @init="onInit" />
        {{ result }}
        {{ store.store }}
      </div>
    </div>
  </q-page>
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

// methods
const onDecode = (data: string) => {
  handleScan(data);
};

const handleScan = (data: string) => {
  result.value = data;
  store.leaveStore()
  router.push('/scan');
}

const onInit = async () => {
  console.log('whatever');
};
</script>

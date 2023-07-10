<template>
  <div v-if="user.user?.uid">
    <div class="text-h5 text-weight-bold  q-ma-md">Join a Store</div>
    <div class="flex flex-center q-pa-lg">
      <qrcode-stream @decode="onDecode" @init="onInit" />
    </div>
  </div>

  <div v-if="!user.user?.uid" class="flex flex-center " style="min-height: 100vh;">
    <q-btn color="primary" icon="login" label="Login With Google" class="q-px-lg q-py-md" @click="user.login()" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { QrcodeStream } from 'vue-qrcode-reader';

import { currentStore } from 'stores/whatStoreStore';
import { userStore } from 'stores/userStore';

// data
const result = ref();
const store = currentStore();
const router = useRouter();
const user = userStore();

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

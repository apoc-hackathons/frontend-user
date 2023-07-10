<template>
  <q-page class="q-pa-sm">
    <div class="items-end gap-2 banner q-pa-md">
      <h2 class="text-h5 q-ma-none text-bold text-black">
        Order Canceled!!
      </h2>

      <div class="text-h6">Redirecting...</div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>

import { useRouter } from 'vue-router';

const router = useRouter();

setTimeout(() => {
  router.push('/');
}, 3000)

</script>

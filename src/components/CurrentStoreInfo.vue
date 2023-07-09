<template>
  <div class="flex items-end q-mx-sm q-mt-md">
    <q-avatar size="50px">
      <q-img
        :src="store.store?.photoURL"
        alt="test"
        referrerpolicy="no-referrer"
      />
    </q-avatar>

    <h2 class="text-h5 q-ma-none q-ml-sm text-bold">
      Welcome to {{ store.store?.name }}!
    </h2>
  </div>
</template>

<script setup lang="ts">
import { currentStore } from 'stores/whatStoreStore';
const store = currentStore();
</script>

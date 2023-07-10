<template>
  <q-page padding>
    <div>
      <div class="text-h4 text-weight-bold  q-ma-md">Success!</div>
      <div class="text-h6 text-weight-bold  q-ma-md">Redirecting...</div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
import { currentStore } from 'stores/whatStoreStore';

// data
const store = currentStore();

store.store = {
  name: '', photoURL: ''
}
router.push('/scan')

</script>

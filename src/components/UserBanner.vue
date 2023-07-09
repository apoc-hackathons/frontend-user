<template>
  <div class="flex items-end gap-2 banner q-pa-md q-mt-lg q-mx-sm">
    <q-avatar size="50px">
      <q-img
        :src="user.user?.photoURL!"
        alt="test"
        referrerpolicy="no-referrer"
      />
    </q-avatar>

    <h2 class="text-h6 q-ma-none q-ml-sm text-bold text-white">
      Welcome {{ user.user?.displayName }}!
    </h2>
  </div>
</template>

<script setup lang="ts">
import { userStore } from 'stores/userStore';
const user = userStore();
</script>

<style lang="scss" scoped>
.banner {
  border-radius: 16px;
  background: linear-gradient(226deg, #0284c7 0%, #10b981 82.09%);
}
</style>

<template>
  <q-page class="q-pa-sm">
    <div class="flex items-end gap-2 banner q-pa-md">
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

    <q-btn
      color="white"
      text-color="primary"
      :label="user.user?.uid ? 'Logout' : 'Login'"
      :icon="user.user?.uid ? 'logout' : 'login'"
      class="q-ma-none"
      @click="handleLogin()"
    />

    <q-img :src="qr" alt="" />
  </q-page>
</template>

<script setup lang="ts">
import { userStore } from 'stores/userStore';
import { generateQR } from 'boot/qrcode';

const user = userStore();

const qr = generateQR('sex');

const handleLogin = () => {
  user.user?.uid ? user.logout() : user.login();
};
</script>

<style lang="scss">
.banner {
  border-radius: 16px;
  background: linear-gradient(226deg, #0284c7 0%, #10b981 82.09%);
}
</style>

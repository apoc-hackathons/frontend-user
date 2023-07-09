<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-btn
        color="white"
        text-color="primary"
        :label="user.user?.uid ? 'Logout' : 'Login'"
        :icon="user.user?.uid ? 'logout' : 'login'"
        class="q-ma-none"
        @click="handleLogin()"
      />

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { userStore } from 'stores/userStore';
import { currentStore } from 'stores/whatStoreStore';

import { useRouter } from 'vue-router';
const user = userStore();
userStore().handleChange();

const store = currentStore();
const router = useRouter();

const handleLogin = () => {
  if (!user.user?.uid) {
    user.login();
    router.push('/scan');
  } else {
    user.logout();
    router.push('/login');
  }
};

router.push('/scan');
</script>

<template>
  <q-btn color="primary" icon="login" label="Login" @click="login()" />
</template>

<script lang="ts" setup>
import { userStore } from 'stores/userStore';
import { useRouter } from 'vue-router';

const router = useRouter();

const login = () => {
  user.login();
  router.push('/scan');
};

const user = userStore();
</script>

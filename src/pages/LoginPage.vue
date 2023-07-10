<template>
  <div class="absolute-center">
    <q-btn color="primary" icon="login" label="Login With Google" class="q-px-lg q-py-md" @click="login()" />
  </div>
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

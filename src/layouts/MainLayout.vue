<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>

      <q-header elevated class="header">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="500" bordered
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
        <q-scroll-area class="fit">
          <q-list>


            <q-item clickable v-ripple @click="handleLogin">
              <q-item-section avatar>
                <q-icon name="login" />
              </q-item-section>
              <q-item-section>
                {{ user.user?.uid ? 'Logout' : 'Login' }}
              </q-item-section>
            </q-item>


          </q-list>
        </q-scroll-area>
      </q-drawer>

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { userStore } from 'stores/userStore';

import { useRouter } from 'vue-router';
import { ref } from 'vue';

const user = userStore();
userStore().handleChange();

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
const drawer = ref(true);


</script>

<style lang="scss" scoped>
.header {
  background-color: #26a69a;
}
</style>

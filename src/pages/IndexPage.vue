<template>
  <q-page class="q-pa-sm">
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

    <!-- <q-btn
      color="white"
      text-color="primary"
      :label="user.user?.uid ? 'Logout' : 'Login'"
      :icon="user.user?.uid ? 'logout' : 'login'"
      class="q-ma-none"
      @click="handleLogin()"
    /> -->

    <div class="flex items-end q-mx-sm q-mt-md">
      <q-avatar size="50px">
        <q-img
          :src="user.user?.photoURL!"
          alt="test"
          referrerpolicy="no-referrer"
        />
      </q-avatar>

      <h2 class="text-h5 q-ma-none q-ml-sm text-bold">
        Welcome to BallPalace!
      </h2>
    </div>

    <div class="text-h5 text-weight-bold q-my-md">Your Cart</div>

    <div v-for="n in 5" :key="n">
      <q-card
        class="shadow-16 q-mb-sm"
        style="border-radius: 8px"
        flat
        bordered
      >
        <q-card-section horizontal>
          <q-img
            class="col-2"
            width="120px"
            :ratio="1 / 1"
            :src="user.user?.photoURL!"
          />
          <q-card-section>
            <div class="text-h5 text-weight-bold">Cow</div>
            <div class="text-h6 text-weight-medium">
              {{ n > 0 ? n : '' }}
              {{ n === 0 ? 'Free' : n === 1 ? 'Re.' : 'Rs.' }}
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { userStore } from 'stores/userStore';

const user = userStore();

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

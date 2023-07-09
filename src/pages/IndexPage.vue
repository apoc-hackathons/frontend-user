<template>
  <q-page padding>
    <div class="flex items-end gap-2 banner q-pa-md">
      <q-avatar size="70px">
        <q-img
          :src="user.user.photoURL"
          alt="test"
          referrerpolicy="no-referrer"
        />
      </q-avatar>

      <h2 class="text-h3 q-ma-none q-mx-sm text-bold">
        Welcome {{ user.user.displayName }} !
      </h2>
      <q-btn
        color="white"
        text-color="primary"
        label="Login"
        icon="login"
        class="q-ma-none"
        @click="user.login()"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { userStore } from 'stores/userStore';

export default defineComponent({
  name: 'IndexPage',

  setup() {
    const user = userStore();

    return {
      user,
    };
  },
});
</script>

<style lang="scss">
.banner {
  border-radius: 16px;
  background: linear-gradient(226deg, #0284c7 0%, #10b981 82.09%);
}
</style>

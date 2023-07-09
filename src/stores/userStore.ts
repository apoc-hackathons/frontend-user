import { defineStore } from 'pinia';
import { app } from 'boot/firebase';
import { useRouter } from 'vue-router';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import type { User } from 'firebase/auth';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const userStore = defineStore('user', {
  state: () => ({
    user: {} as User | null,
  }),

  actions: {
    login() {
      signInWithPopup(auth, provider);
      this.handleChange();
    },

    handleChange() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.user = user;
        } else {
          this.user = null;
        }
      });
    },

    logout() {
      signOut(auth);
      this.handleChange();
    },
  },
});

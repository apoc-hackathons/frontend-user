import { defineStore } from 'pinia';
import { app } from 'boot/firebase';
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
        this.user = user ? user : null;
      });
    },

    logout() {
      signOut(auth);
      this.handleChange();
    },
  },
});

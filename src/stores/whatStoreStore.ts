import { defineStore } from 'pinia';

type Store = {
  name: string;
  photoURL: string;
};

export const currentStore = defineStore('store', {
  state: () => ({
    store: {} as Store | null,
  }),

  actions: {
    joinStore(newStore: Store) {
      this.store = newStore;
    },
  },
});

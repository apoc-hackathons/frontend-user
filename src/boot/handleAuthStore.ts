import { userStore } from 'stores/userStore';
import { currentStore } from 'stores/whatStoreStore';

import { useRouter } from 'vue-router';

export const handleAuthStore = () => {
  const store = currentStore();
  const user = userStore();
  const router = useRouter();

  if (!user.user?.uid) {
    router.push('/login');
  }
  if (!store.store?.name) {
    router.push('/scan');
    console.log('going to scan');
  }
};

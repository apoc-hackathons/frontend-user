<template>
  <q-card class="shadow-16 q-mb-sm" style="border-radius: 8px" flat bordered>
    <q-card-section horizontal>
      <q-img class="col-2" width="120px" :ratio="1 / 1" :src="image" />


      <q-card-section>

        <q-card-section class="flex items-evenly  " style="width: 100%;">
          <div class="text-h5 text-weight-bold">{{ name }}</div>
          <q-space />
        </q-card-section>

        <q-card-section class="text-h6 text-weight-medium">
          {{ price > 0 ? price : '' }}
          {{ price === 0 ? 'Free' : price === 1 ? 'Re.' : 'Rs.' }}


        </q-card-section>
      </q-card-section>
    </q-card-section>


    <q-card-section aside>


    </q-card-section>

    <q-card-section class="flex items-center">
      Quantity:
      <q-select filled class="q-mx-sm" v-model="myQuantity" :options="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" />
      <q-btn color="red-14" icon="delete" @click="cart.deleteItem(id)" flat round />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { toRefs, ref, watchEffect } from 'vue';

import { useCartStore } from 'stores/cartStore';
const cart = useCartStore();

const props = defineProps<{
  name: string;
  price: number;
  image: string;
  quantity: number;
  id: string
}>();

const { name, price, image, quantity, id } = toRefs(props);

const myQuantity = ref(1);

watchEffect(() => {
  cart.changeQuantity(id.value, myQuantity.value)
});

</script>

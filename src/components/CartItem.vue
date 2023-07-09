<template>
  <q-card class="shadow-16 q-mb-sm" style="border-radius: 8px" flat bordered>
    <q-card-section horizontal>
      <q-img class="col-2" width="120px" :ratio="1 / 1" :src="image" />
      <q-card-section>
        <div class="text-h5 text-weight-bold">{{ name }}</div>
        <div class="text-h6 text-weight-medium">
          {{ price > 0 ? price : '' }}
          {{ price === 0 ? 'Free' : price === 1 ? 'Re.' : 'Rs.' }}
        </div>
      </q-card-section>
    </q-card-section>

    <q-card-section> Quantity: {{ quantity }} </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps<{
  name: string;
  price: number;
  image: string;
  quantity: number;
}>();

const { name, price, image } = toRefs(props);
</script>

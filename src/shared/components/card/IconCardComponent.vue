
<template>
  <div :class="iconClasses">
    <v-icon :name="props.icon" scale="2" />
    <div class="mt-3 lg:mt-0">
      <h4 v-if="props.title" v-text="props.title" />
      <p v-if="props.content" v-text="props.content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { IconCard } from '../../../interfaces';
import { Order } from '../../../interfaces/icon-card';

interface Props extends IconCard {
  order?: Order;
}

const props = withDefaults(defineProps<Props>(), {
  order: Order.Row,
});

const iconClasses = computed(() => ({
  'icon-container': true,
  'flex-col lg:flex-row pl-4 pr-8 text-center lg:text-left': props.order === Order.Row,
  'flex-col px-4 text-center justify-start lg:justify-normal': props.order === Order.Col,
}));

</script>
<template>
  <div class="icon-container">
    <v-icon :name="props.icon" scale="2" />
    <div>
      <h4 v-if="props.title" v-text="props.title" />
      <p v-if="props.content" v-text="props.content" />
    </div>
  </div>
</template>

<script setup lang="ts">

interface Props {
  title: string;
  content: string;
  icon: string;
}

const props = defineProps<Props>();
</script>
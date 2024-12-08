<script setup lang="ts">
import { onMounted } from 'vue';
import { Application } from 'pixi.js';

const initPixiApp = async () => {
  // create pixi app
  const pixiApp = new Application();

  // init pixi app
  await pixiApp.init({
    background: '#1099bb',
    resizeTo: window,
  });

  document.body.appendChild(pixiApp.canvas);
};

onMounted(() => {
  initPixiApp();
});
</script>

<template>
  <main></main>
</template>

<style scoped lang="scss"></style>

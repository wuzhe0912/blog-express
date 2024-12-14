<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Application, Graphics } from 'pixi.js';

// create pixi app & container
const pixiContainer = ref<HTMLDivElement | null>(null);
const pixiApp = ref<Application | null>(null);
const rectangle = ref<Graphics | null>(null);

const createGraphics = () => {
  rectangle.value = new Graphics();
  rectangle.value.rect(200, 200, 100, 100);
  rectangle.value.fill('#ff0000');
};

const initPixiApp = async () => {
  if (!pixiContainer.value) return;

  pixiApp.value = new Application();

  await pixiApp.value.init({
    background: '#1099bb',
    resizeTo: window,
  });

  pixiContainer.value.appendChild(pixiApp.value.canvas);

  // creat a graphics object
  createGraphics();

  if (rectangle.value && pixiApp.value) {
    pixiApp.value.stage.addChild(rectangle.value as Graphics);
  }
};

const cleanPixiApp = () => {
  if (pixiApp.value) {
    pixiApp.value.stop();

    pixiApp.value.destroy(true, {
      children: true, // destroy children
      texture: true, // destroy textures
    });
  }
};

onMounted(() => {
  initPixiApp();
});

onBeforeUnmount(() => {
  cleanPixiApp();
});
</script>

<template>
  <main ref="pixiContainer" class="pixi-container"></main>
</template>

<style scoped lang="scss"></style>

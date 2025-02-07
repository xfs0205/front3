<script setup lang="ts">
import { ref } from 'vue';
import MapComp from '@/components/LongComponents/MapComp.vue';

const map = ref(null);
</script>

<template>
  <!-- 背景图片 -->
  <div class="background-image">
    <!-- 地图组件 -->
    <MapComp />
  </div>
</template>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* 为背景图片定位提供参考 */
}
</style>

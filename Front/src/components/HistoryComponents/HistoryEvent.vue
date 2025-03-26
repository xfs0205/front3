<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import request from '@/utils/request';

interface Event {
  title: string; // 事件标题
  introduction: string; // 事件介绍
}

const route = useRoute();
const currentEvent = ref<Event | null>(null);

async function findData() {
  try {
    const response = await request.post('/backend/events_info/datas', { name: route.query.name }, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    currentEvent.value = response.data; // 确保接口返回的数据结构正确
  } catch (err) {
    console.error("Error fetching event data:", err);
    currentEvent.value = null; // 如果失败，设置为 null
  }
}

onMounted(() => {
  findData();
});
</script>

<template>
  <div class="event-container">
    <div class="event-detail">
      <div v-if="currentEvent" class="event-content">
        <div class="event-title-section">
          <h1 class="event-title">{{ currentEvent.title }}</h1>
        </div>
        <div class="event-intro-section">
          <p class="event-intro">{{ currentEvent.introduction }}</p>
        </div>
      </div>
      <div v-else class="loading">
        <p>加载中...</p>
      </div>
    </div>
    <div class="related-info">
      <div class="relations-canvas">
        <h2>相关人物</h2>
        <!-- 相关人物内容 -->
      </div>
      <div class="events-canvas">
        <h2>相关事件</h2>
        <!-- 相关事件内容 -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-container {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  position: relative;
}

.event-detail {
  flex: 5;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.event-content {
  display: flex;
  flex-direction: column;
  gap: 20px; /* 添加间距 */
}

.event-title-section {
  text-align: center;
}

.event-title {
  font-size: 24px;
  font-weight: bold;
  color: #8b4513;
}

.event-intro-section {
  text-align: justify; /* 使介绍内容对齐更美观 */
}

.event-intro {
  font-size: 16px;
  color: #555555;
}

.loading {
  font-size: 18px;
  color: #999999;
  text-align: center;
  margin-top: 50px;
}

.related-info {
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  height: 100%;
  background-color: #f9f9f9;
  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
}

.relations-canvas,
.events-canvas {
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  background-color: #ffffff;
  width: 100%;
  height: 400px; /* 设置固定高度为 500px */
  overflow-y: auto; /* 如果内容超出高度，添加滚动条 */
}

.relations-canvas h2,
.events-canvas h2 {
  margin-top: 0;
  color: #8b4513;
}
</style>
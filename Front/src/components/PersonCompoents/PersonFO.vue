<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

interface Hero {
  
  name: string;
  image: string;
  introduction: string;
  backgroundColor: string;
}

const heroes: Hero[] = [
  {
    
    name: '英雄1',
    image: new URL('@/assets/hero1.jpg', import.meta.url).href,
    introduction: '这是英雄1的简介，在xx领域有着非凡成就。',
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
  },
  {
    
    name: '英雄2',
    image: new URL('@/assets/hero2.jpg', import.meta.url).href,
    introduction: '英雄2在xx领域同样表现出色，为领域发展做出重要贡献。',
    backgroundColor: 'rgba(204, 153, 51, 0.1)',
  },
];

const route = useRoute();
const router = useRouter();
const currentHero = ref<Hero | null>(null);

onMounted(() => {
  const heroname = (route.query.name);
  currentHero.value = heroes.find(hero => hero.name === heroname) || null;
});

const goBack = () => {
  router.go(-1); // 返回上一页
};
</script>

<template>
  <div class="person-fo-container">
    <button class="back-button" @click="goBack">返回</button>
    <div class="person-fo">
      <div v-if="currentHero" class="hero-detail">
        <h1 class="hero-name">{{ currentHero.name }}</h1>
        <img :src="currentHero.image" alt="英雄图片" class="hero-image" />
        <p class="hero-intro">{{ currentHero.introduction }}</p>
      </div>
      <div v-else class="loading">
        <p>未找到对应的英雄信息。</p>
      </div>
    </div>
    <div class="related-info">
      <div class="relations-canvas">
        <h2>相关人物关系</h2>
        <!-- 将来在这里添加具体的关系内容 -->
      </div>
      <div class="events-canvas">
        <h2>相关事件关系</h2>
        <!-- 将来在这里添加具体的事件内容 -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.person-fo-container {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  position: relative;
}

.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 8px 16px;
  background: none; /* 无背景色 */
  color: #888; /* 灰色字体 */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: color 0.3s ease;
}

.back-button:hover {
  color: #555; /* 悬停时更深的灰色 */
}

.person-fo {
  flex: 5;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hero-detail {
  text-align: center;
}

.hero-name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #8b4513;
}

.hero-image {
  width: 200px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.hero-intro {
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

.relations-canvas, .events-canvas {
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  background-color: #ffffff;
  width: 100%;
  height: 40%;
}

.relations-canvas h2, .events-canvas h2 {
  margin-top: 0;
  color: #8b4513;
}
</style>
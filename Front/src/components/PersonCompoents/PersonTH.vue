<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import request from '@/utils/request';

// 跳转到personfo页面
const router = useRouter();
const route = useRoute();

interface Hero {
  name: string;
  image: string;
}

// 背景图片路径
const backgroundImage = ref(new URL('Front/public/person/heroback.jpg', import.meta.url).href);
const heroes = ref<Hero[]>([])

async function findData() {
  await request.post('/backend/persons_path/datas',
    { query: route.query.type, type: route.query.name },
    {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  ).then(re => {
        heroes.value = re.data
      }).catch(err => {
        console.error(err)
        heroes.value = []
      })
}

const goToPersonFO = (heroname: string) => {
  router.push({ name: 'personfo', query: { name: heroname } });
};

onMounted(() => {
  findData()
})

</script>

<template>
  <div class="hero-page" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="common-layout">
      <el-scrollbar class="scroll-container">
        <div class="header">
          <span class="red-line"></span>
          <h1>{{ route.query.name }}</h1>
          <span class="red-line"></span>
        </div>
        <el-container>
          <el-main>
            <div class="app-container">
              <!-- 网格目录 -->
              <div class="grid-container">
                <div v-for="hero in heroes" :key="hero.name" class="grid-item" @click="goToPersonFO(hero.name)">
                  <img style="height: 200px;width: 100%;background-size: cover;" :src="hero.image" alt="英雄图片"
                    class="grid-image" />
                  <div class="grid-text">{{ hero.name }}</div>
                </div>
              </div>
            </div>
          </el-main>
        </el-container>
      </el-scrollbar>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  width: 100%;
  height: 40px;
}

.red-line {
  flex-grow: 1;
  height: 4px;
  background-color: red;
  margin: 0 10px;
}

h1 {
  font-size: 36px;
  /* 增加标题字体大小 */
  font-weight: bold;
  color: #ec0202;
  font-family: "KaiTi", "SimSun", serif;
}


.hero-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-position: center;
}

.common-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); // 添加阴影效果
}

.scroll-container {
  height: 100%;
  overflow: auto;
}

.app-container {
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

// 网格目录样式
.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr); // 2列网格
  gap: 20px;
  margin-bottom: 20px;
}

.grid-item {
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
}

.grid-image {
  width: 100%;
  height: auto;
  aspect-ratio: 5 / 7;
  object-fit: cover;
  border-radius: 10px;
}

.grid-text {
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #333;
  background-color: rgba(255, 255, 255, 0.9);
}

// 弹窗样式
.el-dialog {
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  z-index: 1000; // 确保弹窗在最上层
}

.el-dialog__header {
  background-color: #f5f5f5;
  padding: 15px;
  border-bottom: 1px solid #ddd;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.el-dialog__title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.el-dialog__body {
  padding: 20px;
}

.hero-panel {
  display: flex;
  justify-content: space-between;
  background-color: white;
  height: 500px; // 高度限制为600px
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hero-panel:hover {
  transform: translateY(-5px); // 鼠标悬停时略微向上移动
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); // 增强阴影
}

.left-side {
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero-image {
  width: 100%;
  height: auto;
  aspect-ratio: 5 / 7;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.hero-panel:hover .hero-image {
  transform: scale(1.1);
}

.button-group {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}

.transparent-button {
  background-color: rgba(255, 255, 255, 0.7);
  color: #000;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 8px 12px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: scale(1.1);
  }
}

.right-side {
  width: 50%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-name {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2); // 添加轻微阴影
}

.hero-intro {
  font-size: 18px;
  line-height: 1.8;
  color: #555;
}
</style>
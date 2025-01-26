<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

interface Field {
  name: string;
  image: string;
}

const router = useRouter();

const fields = ref<Field[]>([
  { name: "军事领域", image: new URL('/public/person/hero.jpg', import.meta.url).href },
  { name: "文化领域", image: new URL('/public/person/hero.jpg', import.meta.url).href },
  { name: "政治领域", image: new URL('/public/person/hero.jpg', import.meta.url).href },
  { name: "科技领域", image: new URL('/public/person/hero.jpg', import.meta.url).href }
]);

const hoverField = (fieldName: string) => {
  console.log(`鼠标悬停在：${fieldName}`);
};

const leaveField = (fieldName: string) => {
  console.log(`鼠标离开：${fieldName}`);
};

const handleClick = (type:string,mininame:string,name:string) => {
  // 使用编程式导航跳转到子路由
  router.push({ name: 'personth' ,query:{
    type:type, name:name, mininame:mininame
  }}); // 修改为跳转到 personth 页面
};
</script>

<template>
  <el-main>
    <div class="app-container">
      <div class="header">
        <span class="red-line"></span>
        <h1>云南红色英雄人物</h1>
        <span class="red-line"></span>
      </div>
      <div class="field-grid">
        <div
          class="field-box"
          v-for="field in fields"
          :key="field.name"
          @mouseenter="hoverField(field.name)"
          @mouseleave="leaveField(field.name)"
          @click="handleClick('type',field.name, field.name+'英雄人物')"
        >
          <div class="field-content">
            <img src="/public/person/hero.jpg" alt="领域图片" class="field-image" />
          </div>
          <p class="field-name">{{ field.name }}</p>
        </div>
      </div>
    </div>
  </el-main>
</template>

<style scoped>
.common-layout {
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
}

.scroll-container {
  height: 100%;
  overflow: auto;
}

.app-container {
  width: 90%;
  margin: 0 auto;
  padding: 30px;
  box-sizing: border-box;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px; /* 增加标题高度 */
}

.red-line {
  flex-grow: 1;
  height: 4px;
  background-color: red;
  margin: 0 10px;
}

h1 {
  font-size: 36px; /* 增加标题字体大小 */
  font-weight: bold;
  color: #ec0202;
  font-family: "KaiTi", "SimSun", serif;
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;
}

.field-box {
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.field-box:hover {
  box-shadow: 0 0 15px 10px rgba(255, 255, 255, 0.8);
}

.field-content {
  width: 100%;
  padding-bottom: calc(100% * 7 / 5);
  position: relative;
}

.field-image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
}

.field-name {
  position: absolute;
  top: 50px;
  text-align: center;
  font-size: 30px;
  font-family: cursive;
  color: white;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  box-sizing: border-box;
}

.el-header {
  padding: 0;
  margin: 0;
  background-color: #e3f2fd;
  height: 230px;
}

.el-main {
  padding: 0;
  margin: 0;
  min-height: calc(100% - 230px);
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/public/person/heroback.jpg');
  background-size: cover;
  background-position: center;
}

.el-footer {
  text-align: center;
  padding: 15px 0;
  background-color: #e3f2fd;
  color: #424242;
  font-size: 16px;
}

.switch-button {
  text-align: right; /* 右对齐 */
  margin-bottom: 10px;
  margin-right: 50px; /* 向左移动按钮 */
}

.switch-button button {
  background: none; /* 无背景 */
  border: none; /* 无边框 */
  color: #4a4a4a; /* 更和谐的颜色，深灰色 */
  cursor: pointer;
  font-size: 14px;
  padding: 0;
}
</style>
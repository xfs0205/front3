<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const prefectures = ref([
  "昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "丽江市", "普洱市", "临沧市",
  "楚雄彝族自治州", "红河哈尼族彝族自治州", "文山壮族苗族自治州", "西双版纳傣族自治州",
  "大理白族自治州", "德宏傣族景颇族自治州", "怒江傈僳族自治州", "迪庆藏族自治州"
]);

const handleClick = (type: string, name: string) => {
  // 使用编程式导航跳转到子路由
  router.push({ name: 'personth',query:{
    type:type, name:name
  } }); // 修改为跳转到 personth 页面
};
</script>

<template>
  <div class="container">
    <div class="header">
        <span class="red-line"></span>
        <h1>云南红色英雄人物</h1>
        <span class="red-line"></span>
      </div>
    <div class="search-bar">
      <input type="text" placeholder="搜索..." class="search-input">
      <button class="search-button">🔍</button>
    </div>
    <div class="map-section">
      <div class="map">
        <img src="/public/person/map.jpg" alt="云南地图" style="width: 100%; height: 100%;" />
      </div>
      <div class="areas">
        <div class="area" v-for="(prefecture, index) in prefectures" :key="index" 
        @click="handleClick(prefecture, prefecture+'英雄人物')">
          {{ prefecture }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  max-width: 1450px;
  margin: 0 auto;
  padding: 20px;
  background-image: url('/public/person/person.jpg'); 
  background-size: cover;
  background-position: center;
  position: relative; /* 添加相对定位 */
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

.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.search-input {
  width: 500px; /* 调整宽度 */
  height: 35px; /* 调整高度 */
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.search-button {
  width: 40px; /* 调整宽度 */
  height: 35px; /* 调整高度 */
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #333;
}

.search-button:hover {
  background-color: #e0e0e0;
}

.map-section {
  display: flex;
  justify-content: space-between;
  height: 500px; 
  width: 70%;
  margin-left: 200px;
}

.map {
  width: 70%;
  border: 1px solid #000;
  padding: 0; 
  display: flex;
  align-items: center;
  justify-content: center;
}

.areas {
  width: 30%;
  border: 1px solid #000;
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.area {
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px dashed #000;
  flex: 0 0 auto;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.area:hover {
  background-color: #f0f0f0;
}
</style>
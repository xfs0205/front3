<script setup lang="ts">

</script>

<template>
  <div>
    <!-- 顶部标题 -->
    <div class="header">云南红色故事</div>
    <!-- 主容器 -->
    <div class="outer-container">
      <div class="container">
        <!-- 区域 1 -->
        <div class="area area1">云南的红色军民支援战</div>
        <!-- 区域 2 -->
        <div class="area area2">西南地下党的组织建立与活动</div>
        <!-- 区域 3 -->
        <div class="area area3">滇西抗战的革命斗争</div>
        <!-- 区域 4 -->
        <div class="area area4">云南的革命烈士</div>
        <!-- 区域 5 -->
        <div class="area area5">滇池保卫战</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 顶部标题样式 */
.header {
  text-align: center;
  color: rgb(203, 82, 82);
  /* 红色标题 */
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 20px;
  /* 距离页面顶部20px */
  height: 80px;
  /* 剩余80px给标题 */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 外层容器：确保内容居中 */
.outer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 100px);
  /* 上方留出100px */
  margin-top: 0;
  /* 不需要额外margin，已经有标题区域 */
  box-sizing: border-box;
}

/* 内层容器：缩小 90% */
.container {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  width: 90%;
  /* 宽度缩放90% */
  height: 90%;
  /* 高度缩放90% */
  transform: scale(0.9);
  /* 整体缩放至90% */
  box-sizing: border-box;
}

/* 每个区域的样式 */
.area {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  /* 多行文字居中 */
  box-sizing: border-box;
  transition: transform 0.3s, box-shadow 0.3s;
  /* 平滑过渡效果 */
  cursor: pointer;
  /* 鼠标变成小手 */
}

/* 鼠标悬停时放大和阴影效果 */
.area:hover {
  transform: scale(1.1);
  /* 放大10% */
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  /* 添加阴影 */
}

/* 区域样式 */
.area1 {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  background-image: url('@/assets/img1minzu.png');
  /* 引用 assets 文件夹下的图片，使用 Vue 的路径别名 */
  background-size: cover;
  /* 图片覆盖整个区域 */
  background-repeat: no-repeat;
  /* 不重复显示图片 */
  background-position: 50% 20%;
  opacity: 0.9;
  font-size: 25px;
}

.area2 {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  background-image: url('@/assets/img3dixiadang2.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0% 42%;
  opacity: 0.9;
  font-size: 25px;
}

.area3 {
  grid-row: 2 / 3;
  grid-column: 1 / 3;
  background-image: url('@/assets/img2dianxi.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 50%;
  opacity: 0.9;
  font-size: 25px;
}

.area4 {
  grid-row: 3 / 4;
  grid-column: 1 / 2;
  background-image: url('@/assets/img5yingxiong.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 20%;
  opacity: 0.8;
  font-size: 25px;
}

.area5 {
  grid-row: 3 / 4;
  grid-column: 2 / 3;
  background-image: url('@/assets/img4dianchi.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 20%;
  opacity: 0.9;
  font-size: 25px;
}
</style>
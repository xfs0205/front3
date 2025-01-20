<script setup lang="ts">
const handleClick = (box: string) => {
  alert(`You clicked ${box}`);
};
</script>

<template>
  <div class="container">
    <div class="header">
      <h1>红色文化景点</h1>
    </div>
    <div class="content">
      <div class="left">
        <div class="box large map-overview" @click="handleClick('Left Box 1')">地图总览</div>
      </div>
      <div class="right">
        <div class="box small celebrity-homes" @click="handleClick('Right Box 1')">名人故居</div>
        <div class="box small memorial-venues" @click="handleClick('Right Box 2')">纪念场馆</div>
        <div class="box small war-sites" @click="handleClick('Right Box 3')">抗战遗址</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

.header {
  width: 100%;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  height: 80px; 
  margin-bottom: 25px;
}

.header h1 {
  font-size: 30px;
  margin: 0; 
}

.content {
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
}

.left {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 40%;
  padding-left: 20px;
}

.right {
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 40%;
  padding-right: 20px;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  border: none; 
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3); 
  }
}

.large {
  height: 360px;
  width: 90%;
  font-size: 30px;
  background-size: cover; 
  background-position: center; 
}

.small {
  height: 120px;
  width: 90%;
  font-size: 30px;
  background-size: cover;
  background-position: center; 
}

/* 背景图片路径 */
.map-overview {
  background-image: url('src/assets/image1.jpg'); /* 地图总览的背景图片 */
}

.celebrity-homes {
  background-image: url('src/assets/image2.jpg'); /* 名人故居的背景图片 */
}

.memorial-venues {
  background-image: url('src/assets/image3.jpg'); /* 纪念场馆的背景图片 */
}

.war-sites {
  background-image: url('src/assets/image4.jpg'); /* 抗战遗址的背景图片 */
}
</style>
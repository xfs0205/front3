<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import request from '@/utils/request';

const router = useRouter();
const route = useRoute();

// 示例数据
const event = ref([
  {
    name: '广州起义',
    date: '12月11日',
    description: '意义：是在城市建立苏维埃政权的大胆尝试，起义虽然失败，但是战斗精神给人鼓舞，为革命保留了重要的革命火种',
  },
  {
    name: '广州起义',
    date: '12月11日',
    description: '意义：是在城市建立苏维埃政权的大胆尝试，起义虽然失败，但是战斗精神给人鼓舞，为革命保留了重要的革命火种',
  },
  {
    name: '广州起义',
    date: '12月11日',
    description: '意义：是在城市建立苏维埃政权的大胆尝试，起义虽然失败，但是战斗精神给人鼓舞，为革命保留了重要的革命火种',
  },
]);

const year = ref(''); // 存储年份

const selectBox = (event: any) => {
  console.log('选中了:', event);
  GoToEvent(event.name);
};

function GoToEvent(name: any) {
  router.push({ name: 'historyevent', query: { name: name } });
}

async function fetchDetails() {
  await request.post("/backend/history/datas", {
    year: route.query.year
  })
    .then(re => {
      event.value = re.data;
    })
    .catch(err => {
      console.error(err);
    });
}

onMounted(async () => {
  year.value = route.query.year as string; // 从路由查询参数中获取年份
  await fetchDetails();
  console.log(event.value);
});
</script>

<template>
  <div class="content-container">
    <h1 class="event-title">{{ year }}年红色历史事件</h1>
    <div class="event-list">
      <!-- 每行显示两个 event-box -->
      <div class="event-row" v-for="(group, index) in Math.ceil(event.length / 2)" :key="index">
        <!-- 第一个 event-box -->
        <div
          class="event-box"
          v-for="(item, idx) in event.slice(index * 2, (index + 1) * 2)"
          :key="item.name"
          @click="selectBox(item)"
        >
          <div class="event-date">{{ item.date }}</div>
          <h2>{{ item.name }}</h2>
          <p>{{ item.description }}</p>
        </div>
        <!-- 如果 event 数量为单数，补一个空的 event-box 占位 -->
        <div
          v-if="event.length % 2 !== 0 && index === Math.floor(event.length / 2)"
          class="event-box empty-box"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-container {
  display: flex;
  flex-direction: column;
  /* 垂直排列 */
  gap: 20px;
  /* 上下内容的间距 */
  padding: 50px 100px;
  /* 上下内边距，左右内边距为100px */
  background-image: url('/history/book1.jpg');
  /* 替换为你的背景图片路径 */
  background-attachment: fixed;
}

.event-title {
  font-size: 36px;
  /* 增加标题字体大小 */
  font-weight: bold;
  color: #ec0202;
  font-family: "KaiTi", "SimSun", serif;
  text-align: center;
  /* 标题居中 */
  position: relative;
  /* 用于定位伪元素 */
  margin-bottom: 20px;
  /* 与下方内容的间距 */
  user-select: none;
  /* 禁止选择和复制 */
}

.event-title::before,
.event-title::after {
  content: '';
  /* 伪元素内容为空 */
  position: absolute;
  top: 50%;
  /* 垂直居中 */
  height: 4px;
  /* 线条高度，加粗 */
  background-color: #ec0202;
  /* 红色线条 */
  width: 500px;
  /* 线条长度 */
}

.event-title::before {
  left: -120px;
  /* 左边线条的位置 */
}

.event-title::after {
  right: -120px;
  /* 右边线条的位置 */
}

.event-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f2d2bc89;
  min-height: 80vh;
}

.event-row {
  display: flex;
  gap: 30px; /* 每行两个 event-box 之间的间距 */
}

.event-box {
  background: #f9f9f9;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1; /* 每个 event-box 占据相等的宽度 */
  height: 200px;
  background-image: url('/public/history/事件框背景.jpg');
  background-size: cover;
  color: #efecec;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.empty-box {
  visibility: hidden; /* 隐藏空的 event-box */
}

.event-box h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.event-box p {
  font-size: 16px;
  color: #f0f0f0;
  line-height: 1.5;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.event-box:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.event-date {
  font-size: 14px;
  color: #efecec;
  margin-bottom: 20px;
}
</style>
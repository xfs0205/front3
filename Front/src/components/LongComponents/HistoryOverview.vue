<script setup lang="ts">
import { ref , onMounted} from 'vue';
import { useRouter, useRoute } from 'vue-router';
import request from '@/utils/request';

const router = useRouter();
const route = useRoute();


// 历史事件数据，添加更多事件数据，至少 12 个事件
const historyEvents = ref()

// 前往such页面
function GotoSuch(name: any) {
  router.push({ name: 'such', query: { name: name } })
}

async function getAllEvents() {
  await request.get("/backend/long/all_data")
    .then(re => {
      historyEvents.value = re.data
    })
    .catch(err => {
      console.log(err);

    })
}

onMounted(async () => {
  await getAllEvents();
})

</script>

<template>
  <div class="background-image">
    <div class="section-title">历史事件一览</div>
    <!-- 历史事件列表 -->
    <div class="history-events">
      <div class="event-item" v-for="(event, index) in historyEvents" :key="index">
        <div @click="GotoSuch(event.title)">
          <img :src="event.image" alt="Event Image" class="event-image" />
          <p class="event-title">{{ event.title }}</p>
        </div>
        <p class="event-description">{{ event.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section-title {
  padding-top: 10px;
  font-size: 32px;
  /* 加大字体 */
  font-weight: bold;
  /* 加粗字体 */
  margin: 0;
  /* 增加上下方向上的距离 */
  text-align: center;
  /* 文字居中 */
  color: #d64a4ae9;
}

.history-events {
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  width: 100%;
  padding: 30px;
  justify-content: center;
  /* 确保整个容器水平居中 */
}

.event-item {
  flex: 0 0 calc(25% - 20px);
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 20px;
}

a {
  display: block;
  text-decoration: none;
  color: #000000e0;
}

.event-image {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  border-radius: 8%;
}

.event-title {
  font-size: 24px;
  /* 加大字体 */
  font-weight: bold;
  /* 加粗字体 */
  margin-bottom: 20px;
  /* 增加与下方描述的距离 */
  text-align: center;
}

.event-description {
  font-size: 18px;
  /* 加大字体 */
  color: #333333;
  text-align: center;
  background-color: #feebd0;
  /* 背景颜色 */
  padding: 15px;
  /* 增加内边距 */
  margin: 0 10px;
  /* 左右方向上增加距离 */
  line-height: 1.5;
  border-radius: 12px;
}

.background-image {
  background-image: url('/public/long/book1.jpg');
  background-attachment: fixed;
  background-size: cover;
  opacity: 0.9;
}
</style>
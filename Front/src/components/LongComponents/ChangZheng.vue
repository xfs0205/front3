<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import request from '@/utils/request';
// import Map from 'Front/src/components/LongComponents/Map.vue';

const router = useRouter();
const route = useRoute();

const events = ref([
  { name: '长征开始', description: '1934年10月' },
  { name: '扎西会议', description: '1935年2月' },
  { name: '巧渡金沙江', description: '1935年4月' },
  { name: '乌蒙山回旋战', description: '1936年2月' },
  { name: '顺利挺进丽江', description: '1936年4月' },
  { name: '长征结束', description: '1936年10月' },
]);

type eventstype = {
  title: string | null;
  image: any | null;
  description: string | null;
}[];

//历史事件数据部分
const historyEvents = ref<eventstype>([]);

async function getEvents() {
  await request.get("/backend/long/data1")
    .then(re => {
      historyEvents.value = re.data
    })
    .catch(err => {
      console.log(err);

    })
}

onMounted(async () => {
  await getEvents()  
})

// 前往such页面
function GotoSuch(name: any) {
  router.push({ name: 'such', query: { name: name } })
}

//前往地图页Map2
function goToMap() {
  router.push({ name: 'Map2' });
}

//前往详情页HistoryOverview
function goToView() {
  router.push({ name: 'historyOverview' });
}

</script>


<template>
  <div class="common-layout">
    <el-scrollbar height="auto">
      <el-container>
        <el-main height="auto">
          <!-- 背景图片 -->
          <div class="background-image" style="height: 90vh;">
            <!-- 视频部分 -->
            <div class="video-placeholder">视频占位</div>
            <div class="bottom-description">在云南的群山之间，红军的足迹宛如一条红色的丝带，穿越了历史的长河，编织出一段段传奇。
              在云南的群山之间，红军的足迹宛如一条红色的丝带，穿越了历史的长河，编织出一段段传奇。
              他们从远方而来，带着对自由的渴望和对未来的憧憬，踏上了这片古老而神秘的土地。
              如今，当我们站在云南的群山之巅，回望那段波澜壮阔的历史，心中充满了敬意和感动。
              红军的长征精神，如同一座永恒的灯塔，照亮了我们前行的道路，激励着我们不断追求梦想，创造更加美好的未来。
            </div>
          </div>

          <!-- 板块名称 -->
          <div class="section-title">红军长征路线图</div>

          <!-- 视频 -->
          <div class="container">
            <video class="video-placeholder" controls>
              <source src="http://47.102.108.198:19999/backend/static_video/%E9%A3%9E%E7%BA%BF_1.mp4" type="video/mp4" />
              您的浏览器不支持视频标签。
            </video>
            <!-- 详情链接 -->
            <div @click="goToMap()" class="detail-link">
              详情显示
            </div>
          </div>

          <div class="march-route-container"></div>

          <!-- 时间线部分 -->
          <div class="section-title">红色历史大事件时间轴一览</div>
          <div class="timeline-container">
            <!-- 时间轴 -->
            <div class="timeline">
              <!-- 事件点 -->
              <div class="timeline-item" v-for="(event, index) in events" :key="index">
                <div class="timeline-point"></div>
                <div class="timeline-content">
                  <h3>{{ event.name }}</h3>
                  <p>{{ event.description }}</p>
                </div>
              </div>
            </div>
            <div class="timeline-line"></div>
          </div>

          <!-- 历史事件推送板块名称 -->
          <div class="section-title">历史事件推送</div>
          <!-- 历史事件列表 -->
          <div class="bottom-bg-image">
            <div class="history-events">
              <div class="event-item" v-for="(event, index) in historyEvents" :key="index">
                <div @click="GotoSuch(event.title)">
                  <img :src="event.image" alt="Event Image" class="event-image" />
                  <p class="event-title">{{ event.title }}</p>
                </div>
                <p class="event-description">{{ event.description }}</p>
              </div>
              <!-- 路由跳转按钮 -->
              <div @click="goToView()" class="history-overview-button">
                查看更多历史事件
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-scrollbar>
  </div>
</template>


<style scoped lang="scss">
.background-image {
  background-image: url('/public/long/红军战士2.jpg');
  /* 替换为你的背景图片路径 */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  height: 70vh;
  /* 根据需要调整高度 */
  opacity: 0.8;
  /* 设置透明度为0.5，即50%透明度 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  /* 为按钮定位提供参考 */
  padding: 20px;
}

.timeline-container {
  width: 100%;
  max-width: 95%;
  /* 限制时间线的最大宽度 */
  margin: 0 auto;
  /* 水平居中 */
  padding: 20px;
  background-color: rgba(214, 95, 95, 0.927);
  /* 半透明背景 */
  border-radius: 10px;
  /* 圆角边框 */
}

// .video-button-container {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   max-width: 1200px; /* 限制视频和按钮的最大宽度 */
//   margin: 30px auto; /* 水平居中 */
// }

.video-placeholder {
  width: 50%;
  /* 文字块宽度 */
  height: 400px;
  /* 文字块高度 */
  margin-top: auto;
  /* 文字块垂直居下 */
  background-color: rgba(0, 0, 0, 0.5);
  /* 半透明背景 */
  color: #ffffff;
  /* 文字颜色 */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  border-radius: 10px;
  /* 圆角边框 */
}

.history-overview-button {
  position: relative;
  /* 相对定位 */
  width: 370px;
  /* 设置按钮宽度 */
  height: 100px;
  /* 设置按钮高度 */
  font-size: 24px;
  /* 设置字体大小 */
  font-weight: bold;
  /* 加粗字体 */
  text-align: center;
  line-height: 95px;
  /* 垂直居中文字 */
  color: #ffffff;
  /* 设置文字颜色 */
  text-decoration: none;
  /* 取消下划线 */
  background-image: url('/public/long/按钮背景2.jpg');
  /* 替换为你的按钮背景图案路径 */
  background-size: cover;
  /* 背景图案覆盖整个按钮 */
  background-position: center;
  /* 背景图案居中 */
  border-radius: 10px;
  /* 圆角边框 */
  cursor: pointer;
  /* 鼠标指针样式 */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  /* 添加过渡效果 */
}

.history-overview-button:hover {
  transform: scale(1.05);
  /* 鼠标悬停时放大效果 */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  /* 添加阴影效果 */
}

.bottom-description {
  font-size: 20px;
  /* 设置字体大小 */
  color: #ffffff;
  /* 设置文字颜色 */
  text-align: left;
  /* 文字居左 */
  margin-top: auto;
  /* 与上方元素的距离 */
  margin-bottom: auto;
  /* 与下方元素的距离 */
  max-width: 81%;
  text-indent: 2em;
  line-height: 2;
  /* 设置行间距 */
  background-color: rgba(99, 89, 44, 0.155);
  /* 半透明背景 */
  border-radius: 20px;
  padding: 20px;
}

/* 其他样式... */
.el-header {
  padding: 0;
  margin: 0;
  background-color: #f0f0f0;
  height: 230px;
}

.el-main {
  padding: 0;
  margin: 0;
  overflow: hidden;
  height: auto;
  background-color: #f0f0f0;
}

.section-title {
  font-size: 35px;
  font-weight: bold;
  margin: 40px 0;
  text-align: center;
  color: #cb0505;
}

.march-route-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.march-route-image {
  width: 80%;
  /* 调整图片宽度 */
  height: auto;
}

.timeline {
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* 子元素水平居中 */
  align-items: center;
  padding: 10px;
  background-color: #f9d4b9;
  width: 100%;
  /* 让宽度自适应内容 */
  border-radius: 10px;

}

.timeline-line {
  flex: 1;
  height: 5px;
  width: 70%;
  background-color: #5e5e5e93;
  margin: 0 auto;
}

.timeline-item {
  position: relative;
  padding-left: 20px;
  margin-bottom: 20px;
}

.timeline-point {
  position: relative;
  left: -5px;
  top: 0px;
  width: 10px;
  height: 10px;
  background-color: #333;
  border-radius: 50%;
}

.timeline-content {
  margin-left: 15px;
}

// .timeline-labels {
//   display: flex;
//   flex-direction: row;
//   justify-content: center; /* 子元素水平居中 */
//   margin-top: -20px;
//   width: fit-content; /* 让宽度自适应内容 */
// }

// .timeline-label {
//   font-size: 14px;
//   color: #666;
//   margin: 0 10px;
// }

.history-events {
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  width: 100%;
  padding: 30px;
  justify-content: center;
  /* 确保整个容器水平居中 */
  margin-bottom: 50px;
}

.event-item {
  flex: 0 0 calc(25% - 20px);
  display: flex;
  flex-direction: column;
  text-align: center;
}

a {
  display: block;
  text-decoration: none;
  color: #000000e0;
}

.event-image {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 8%;
  cursor: pointer;
}

.event-title {
  font-size: 24px;
  /* 加大字体 */
  font-weight: bold;
  /* 加粗字体 */
  margin-bottom: 20px;
  /* 增加与下方描述的距离 */
  text-align: center;
  cursor: pointer;
}

.event-description {
  font-size: 18px;
  /* 加大字体 */
  color: #333333;
  text-align: center;
  background-color: #ffffff;
  /* 灰色背景 */
  padding: 15px;
  /* 增加内边距 */
  margin: 0 10px;
  /* 左右方向上增加距离 */
  line-height: 1.5;
  border-radius: 10%;
}

.bottom-bg-image {
  background-image: url('/public/long/book1.jpg');
  /* 替换为你的背景图片路径 */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  height: auto;
  /* 根据需要调整高度 */
  opacity: 0.9;
  /* 设置透明度为0.5，即50%透明度 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  /* 为按钮定位提供参考 */
  padding: 20px;
  background-attachment: fixed;
}

.container {
  display: flex;
  /* 使用Flexbox布局 */
  flex-direction: column;
  /* 子元素竖直排列 */
  justify-content: center;
  /* 竖直居中 */
  align-items: center;
  /* 水平居中 */
  height: 100vh;
  /* 容器高度为视口高度 */
  margin: 0;
  padding: 0;
}

.video-placeholder {
  width: 80%;
  /* 视频宽度 */
  height: 700px;
  /* 视频高度自适应 */
  margin-bottom: 60px;
  /* 视频和链接之间的间距 */
}

.detail-link {
  position: relative;
  /* 相对定位 */
  width: 370px;
  /* 设置按钮宽度 */
  height: 100px;
  /* 设置按钮高度 */
  font-size: 24px;
  /* 设置字体大小 */
  font-weight: bold;
  /* 加粗字体 */
  text-align: center;
  line-height: 95px;
  /* 垂直居中文字 */
  color: #ffffff;
  /* 设置文字颜色 */
  text-decoration: none;
  /* 取消下划线 */
  background-image: url('/public/long/按钮背景2.jpg');
  /* 替换为你的按钮背景图案路径 */
  background-size: cover;
  /* 背景图案覆盖整个按钮 */
  background-position: center;
  /* 背景图案居中 */
  border-radius: 10px;
  /* 圆角边框 */
  cursor: pointer;
  /* 鼠标指针样式 */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  /* 添加过渡效果 */
}

.detail-link:hover {
  transform: scale(1.05);
  /* 鼠标悬停时放大效果 */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  /* 添加阴影效果 */
}
</style>
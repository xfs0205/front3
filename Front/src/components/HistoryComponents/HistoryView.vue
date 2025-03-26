<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import historyRE from './historyRE.vue';

const router = useRouter();

const items = ref([
  { year: '1921', text: '-In the year 2014 I reached the age of 13-' },
  { year: '1922', text: '-In the year 2015 I reached the age of 14-' },
  { year: '1923', text: '-In the year 2015 I reached the age of 14-' },
  { year: '1924', text: '-In the year 2015 I reached the age of 14-' },
  { year: '1925', text: '-In the year 2015 I reached the age of 14-' },
  { year: '1926', text: '-In the year 2015 I reached the age of 14-' },
  { year: '1927', text: '-In the year 2015 I reached the age of 14-' },
  { year: '1928', text: '-In the year 2015 I reached the age of 14-' },
  { year: '1929', text: '-In the year 2015 I reached the age of 14-' },
  { year: '1930', text: '-In the year 2023 I reached the age of 21-' },
  { year: '1931', text: '-In the year 2023 I reached the age of 21-' },
  { year: '1934', text: '-In the year 2023 I reached the age of 21-' },
  { year: '1935', text: '-In the year 2023 I reached the age of 21-' },
  { year: '1936', text: '-In the year 2023 I reached the age of 21-' },
  { year: '1937', text: '-In the year 2023 I reached the age of 21-' },
  { year: '1938', text: '-In the year 2023 I reached the age of 21-' },
  { year: '1940', text: '-In the year 2023 I reached the age of 21-' },
  { year: '1941', text: '-In the year 2023 I reached the age of 21-' },
  { year: '1945', text: '-In the year 2023 I reached the age of 21-' },
  { year: '1947-1948', text: '-In the year 2023 I reached the age of 21-' },
  { year: '1949', text: '-In the year 2023 I reached the age of 21-' },
]);

const width = ref(0);
const height = ref(0);
const totalWidth = ref(0);
const margin = ref(20);
const currIndex = ref(Math.floor(items.value.length / 2));
const interval = ref(null);
const intervalTime = ref(3000);

// 跳转到详情页
function goToDetail(year) {
  router.push({ name: 'detail', query: { year: year } });
}

const resize = () => {
  width.value = Math.max(window.innerWidth * 0.2, 275);
  height.value = window.innerHeight * 0.5;
  totalWidth.value = width.value * items.value.length;
  document.querySelector('.shell_slider').style.width = totalWidth.value + 'px';
  document.querySelectorAll('.item').forEach(item => {
    item.style.width = (width.value - (margin.value * 2)) + 'px';
    item.style.height = height.value + 'px';
  });
};

const move = (index) => {
  if (index < 1) index = items.value.length;
  if (index > items.value.length) index = 1;
  currIndex.value = index;

  document.querySelectorAll('.item').forEach((item, i) => {
    const box = item.querySelector('.frame');
    if (i === (index - 1)) {
      item.classList.add('item--active');
      box.style.transform = 'perspective(1200px)';
    } else {
      item.classList.remove('item--active');
      box.style.transform = `perspective(1200px) rotateY(${i < (index - 1) ? 40 : -40}deg)`;
    }
  });

  document.querySelector('.shell_slider').style.transform = `translate3d(${(index * -width.value) + (width.value / 2) + window.innerWidth / 2}px, 0, 0)`;
  const frontBox = document.querySelectorAll('.item')[index - 1].querySelector('.front');
  document.body.style.backgroundImage = frontBox.style.backgroundImage.replace('url(\'', 'url(img/01.jpg)');
};

const timer = () => {
  clearInterval(interval.value);
  interval.value = setInterval(() => {
    move(++currIndex.value);
  }, intervalTime.value);
};

const prev = () => {
  move(--currIndex.value);
  timer();
};

const next = () => {
  move(++currIndex.value);
  timer();
};

const selectedYear = ref(null);

const selectYear = (year) => {
  const index = items.value.findIndex(item => item.year === year) + 1;
  move(index);
};

onMounted(() => {
  resize();
  move(currIndex.value);
  window.addEventListener('resize', resize);
  timer();
});

onUnmounted(() => {
  clearInterval(interval.value);
  window.removeEventListener('resize', resize);
});


</script>

<template>
  <div class="all">
    <div class="module-3">
      <historyRE></historyRE>
    </div>
    <div class="shell">
      <div class="header">
        <div class="selector">
          <select v-model="selectedYear" @change="selectYear(selectedYear)">
            <option disabled value="">选择年份</option>
            <option v-for="item in items" :key="item.year" :value="item.year">{{ item.year }}</option>
          </select>
        </div>
        <div class="search">
          <input type="text" placeholder="请输入...">
          <button type="button">搜索</button>
        </div>
      </div>
      <div class="shell_body">
        <div class="button">
          <div class="prev" @click="prev">
            <i class="iconfont icon-icon-backward-filled"></i>
          </div>
          <div class="next" @click="next">
            <i class="iconfont icon-icon-forward-filled"></i>
          </div>
        </div>
        <div class="shell_slider">
          <div class="item" v-for="(item, index) in items" :key="index"
            :class="{ 'item--active': index === currIndex - 1 }">
            <div class="frame">
              <div class="box front" @click="goToDetail(item.year)" style="cursor: pointer;">
                <h1>{{ item.year }}</h1>
                <span>{{ item.text }}</span>
              </div>
              <div class="box left"></div>
              <div class="box right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
@import url('../../assets/fonts/BackwardFont/iconfont-backward.css');
@import url('../../assets/fonts/ForwardFont/iconfont-forward.css');

* {
  padding: 0;
  margin: 0;
  font-family: "Source Sans Pro", sans-serif;
}

.all {
  display: flex;
  flex-direction: column;
  background-image: url('public/history/history1.jpg');
}

.module-3 {
  display: flex;
  width: 100%;
  /* height: 600px; */
  margin: 0;
  padding: 0;
  border: 0;
  background-color: rgba(47, 47, 47, 0.0);
}

.shell {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  box-sizing: border-box;
  background: rgba(99, 99, 99, 0.0);
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 40px;
  background: none;
}

.selector {
  margin-right: 20px;
  margin-right: 1px;
}

.selector select {
  padding: 10px 30px 10px 10px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  color: #999;
  cursor: pointer;
  width: 80px;
  appearance: none;
}

.selector select:not([value=""]) {
  color: #333;
}

.selector::after {
  content: "▼";
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  color: #999;
  /* 箭头颜色 */
  pointer-events: none;
}

.search {
  display: flex;
  align-items: center;
}

.search input {
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 5px 0 0 5px;
  background: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  color: #333;
  width: 300px;
}

.search button {
  padding: 10px 15px;
  background-color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 0 5px 5px 0;
  color: #333;
  cursor: pointer;
  font-size: 14px;
}

.search button:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

.button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 380px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  z-index: 1000;
}

.prev,
.next {
  transition: transform 0.25s ease;
  z-index: 99999;
  cursor: pointer;
}

.prev i,
.next i {
  font-size: 50px;
  color: #fff;
  cursor: pointer;
  text-shadow: 0 0 10px #ffffff;
}

.shell_body {
  width: 100%;
  transform: scale(0.8);
  padding: 20px 0 150px 0;
  position: relative;
}

.shell_slider {
  position: relative;
  transition: transform 1s ease-in-out;
  background: transparent;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.item {
  position: relative;
  margin: 0 20px;
  transition: transform 1s ease-in-out;
  height: 80%;
}

.front {
  box-shadow: 0 0 50px #ffffff;
  background-size: cover;
  background-position: center;
  background-image: url('public/history/history2.jpg');
}

.frame {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1s ease-in-out;
  transform-style: preserve-3d;
}

.frame:after {
  content: "";
  position: absolute;
  bottom: -16%;
  width: 100%;
  height: 60px;
  background: #ffffff1c;
  box-shadow: 0px 0px 15px 5px #ffffff1c;
  transform: rotateX(90deg) translate3d(0px, -20px, 0px);
}

.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid #ffffff;
  perspective: 1000px;
  transform-style: preserve-3d;
}

.box h1,
.box span {
  color: #fff;
  transform: translateZ(20px);
}

.box h1 {
  text-shadow: 0 0 30px #723a13ed;
  font-size: 40px;
  margin-top: 80px;
}

.box span {
  position: absolute;
  bottom: 20px;
  padding: 0 25px;
  text-shadow: 0 0 30px #723a13ed;
}

.front,
.left,
.right {
  box-shadow: 0 0 50px #ffffff;
  background-size: cover;
}

.left,
.right {
  top: 0;
  width: 60px;
  backface-visibility: hidden;
  background-color: #8B0000;
  box-shadow: 0 0 50px rgba(139, 0, 0, 0.5);
}

.left {
  left: 0;
  border-left-width: 5px;
  transform: translate3d(1px, 0, -60px) rotateY(-90deg);
  transform-origin: 0%;
}

.right {
  right: 0;
  border-right-width: 5px;
  transform: translate3d(-1px, 0, -60px) rotateY(90deg);
  transform-origin: 100%;
}
</style>
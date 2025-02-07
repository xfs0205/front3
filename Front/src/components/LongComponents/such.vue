<template>
    <div v-if="event">
        <div class="bg">{{ event.name }}</div>
        <div class="image_1">
            <div class="word">
                <div v-for="(p, index) in event.info" :key="index">
                    {{ p }}
                </div>
            </div>

        </div>
    </div>
    <div v-else>
        <div class="bg">信息获取错误</div>
    </div>

    <!-- <div class="bg">不怕水深江流急，更不怕山高路又长</div>
    <div class="image_2">
        <div class="word">{{ longtext2 }}</div>
    </div> -->
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import request from '@/utils/request';
const router = useRouter();
const route = useRoute();

const event = ref()

async function f1() {
    await request.post("/backend/long/datas", {
        name: route.query.name
    })
        .then(re => {
            event.value = re.data;
        })
        .catch(err => {
            console.error(err);
            event.value = false
        });
}


// 组件挂载时调用获取数据的函数
onMounted(async () => {
    await f1();
    console.log(event.value);

});
</script>

<style scoped>
/* 重置所有元素的内边距和外边距 */
* {
    padding: 0;
    margin: 0;
}

/* 图片背景样式 */
.image_1,
.image_2 {
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    width: 100%;
    opacity: 0.8;
    display: flex;
    /* 使用弹性布局 */
    justify-content: flex-end;
    /* 内容靠右 */
    align-items: flex-start;
    /* 内容靠上 */
    padding: 0px;
    /* 添加内边距，避免文字紧贴边缘 */
    box-sizing: border-box;
    /* 使内边距包含在宽度内 */
    min-height: 90vh;
    /* 设置最小高度 */
}

.image_1 {
    background-image: url(/long/丽江.jpg);
}


/* 文字内容，固定宽度，居中显示，白色，加粗，较大字体 */
.word {
    text-indent: 2em;
    width: 80%;
    /* 设置固定宽度 */
    padding: 30px;
    padding-left: 100px;
    padding-right: 100px;
    margin: 30px;
    margin-top: 0;
    margin-bottom: 0;
    border-radius: 25px;
    font-size: 20px;
    line-height: 2.2;
    color: rgb(201, 201, 201);
    text-align: left;
    /* 文本水平居中 */
    font-weight: normal;
    /* background-color: rgba(255, 255, 255, 0); */
    word-wrap: break-word;
    /* 允许长单词换行 */
    overflow-wrap: break-word;
    /* 确保文本在宽度不足时换行 */
    margin-left: auto;
    margin-right: auto;
    /* 或者使用以下方法进行垂直居中（如果父元素有高度） */
    /* display: flex;
    justify-content: center;
    align-items: center; */
    background-image: url(/long/背景3.jpg);
    background-size: contain;
}

/* 背景文字，居中显示，白色，加粗，较大字体，背景色 */
.bg {
    text-align: center;
    font-size: 46px;
    font-weight: bolder;
    height: 160px;
    line-height: 160px;
    background-color: #f7debd;
    color: rgba(215, 68, 68, 0.769);
}
</style>

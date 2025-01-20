<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  back_color: string;
}>();

</script>

<template>
    <div class="bg-card">
        <div class="name-card">
            <span>
                <slot name="Name"></slot>
            </span>
        </div>
        <div class="image-card" :style="{ backgroundColor: props.back_color }">
            <div class="image-element">
                <slot name="Imgs"></slot>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">

.bg-card {
    display: flex;
    flex: 1;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden; // 防止内容溢出
    cursor: pointer;

    .name-card {
        display: flex;
        flex-direction: column;
        writing-mode: vertical-rl;
        text-orientation: mixed;
        justify-content: center;
        align-items: center;
        background-color: antiquewhite;
        width: 30%;
        height: 50%;
        position: absolute; 
        top: 0%; 
        left: 10%; 
        transform: translate(0, 0); // 初始不进行任何平移
        transition: left 0.5s ease, top 0.5s ease, transform 0.5s ease; // 添加过渡效果
        pointer-events: none;
        font-family: "华文行楷", "楷体", "宋体", sans-serif;
        font-size: 30px;
        z-index: 100;
    }

    &:hover {
        .name-card {
            top: 50%; 
            left: 50%; 
            transform: translate(-50%, -50%); // 平移的对齐点
        }
    }
}



.image-card{
    display: flex;
    position: absolute;
    top:0;
    left: 0;
    background-color: rgb(255, 255, 134, 0.4);
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: end;
    background-size: contain;
    background-repeat: no-repeat; 
    
    .image-element {
        display: flex;
        width: 70%;
        height: 65%;
        background-color: black;
        transition: width 0.3s ease, height 0.3s ease; /* 添加过渡动画效果 */
    }

    &:hover .image-element {
        width: 100%;   
        height: 100%;  
    }
}






</style>

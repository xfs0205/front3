<script setup lang="ts">
import lookcard2 from '@/components/MainComponents/lookcard2.vue';
import { defineProps, ref } from 'vue'

const props = defineProps<{
  imgName: string;
  imgPath: string;
}>();

</script>

<template>
    <div class="bg-box" style="cursor: pointer;">
        <lookcard2 :back_color="'rgb(0,0,0,0)'" 
            :horn_color="'rgb(194, 194, 194)'" 
            :boder_color="'rgb(194, 194, 194)'"
            >
        </lookcard2>
        <div class="center-box">
            <div class="thick-corners">
                <div class="thick-box1" style="top: 0;left: 0;"></div>
                <div class="thick-box1" style="top: 0;right: 0;"></div>
                <div class="thick-box1" style="bottom: 0;left: 0;"></div>
                <div class="thick-box1" style="bottom: 0;right: 0;"></div>
                <div class="thick-box2" style="top: 0;left: 0;"></div>
                <div class="thick-box2" style="top: 0;right: 0;"></div>
                <div class="thick-box2" style="bottom: 0;left: 0;"></div>
                <div class="thick-box2" style="bottom: 0;right: 0;"></div>
            </div>
        </div>
        <div class="center-info" :style="{
            backgroundImage: `url(${props.imgPath})`
        }">
        </div>
        <div class="center-name">
            <span>{{ props.imgName }}</span>
        </div>
    </div>

</template>

<style scoped lang="scss">
.bg-box{
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(194, 194, 194, 0);
    border: 0;
    padding: 0;
    margin: 0;
    user-select: none;
    

    .thick-corners {
        position: relative;
        display: flex;
        background-color: rgb(0,0,0,0);
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    .thick-box1{
        position: absolute;
        width: 15%;
        height: 3px;
        background-color: rgb(201, 39, 39, 0);
        margin: 0;
        padding: 0;
        transition: background-color 0.5s ease;
    }

    .thick-box2{
        position: absolute;
        height: 15%;
        width: 3px;
        background-color: rgb(201, 39, 39, 0);
        margin: 0;
        padding: 0;
        transition: background-color 0.5s ease;
    }

    .center-box{
        display: flex;
        position: absolute;
        width: 80%;
        height: 80%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgb(0,0,0,0);
        transition: width 0.5s ease, height 0.5s ease; 
    }

    .center-info {
        display: flex;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 55%;
        height: 55%;
        background-color: rgb(167, 167, 167);
        transition: background-color 0.5s ease, transform 0.5s ease;
        z-index: 101;
        background-size: cover;
        align-items: end;
    }

    .center-name{
        display: flex;
        position: absolute;
        width: 55%;
        height: 20%;
        background-color: rgb(255, 255, 255);
        justify-content: center;
        align-items: center;
        text-align: center;
        top: 82%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &:hover .center-box{
        width: 100%;
        height: 100%;
    }

    &:hover .thick-box1{
        background-color: rgb(201, 39, 39, 1);
    }

    &:hover .thick-box2{
        background-color: rgb(201, 39, 39, 1);
    }

    &:hover .center-info{
        background-color: rgb(201, 39, 39, 1);
        animation: shake 0.5s ease forwards;
    }

    &:hover .center-name{
        color: rgb(201, 39, 39, 1);
    }
}


@keyframes shake {
    0%, 100% {
        transform: translate(-50%, -50%);
    }
    25% {
        transform: translate(-50%, -50%) rotate(-5deg);
    }
    50% {
        transform: translate(-50%, -50%) rotate(5deg);
    }
    75% {
        transform: translate(-50%, -50%) rotate(-2deg);
    }
}



</style>
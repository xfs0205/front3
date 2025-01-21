<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  back_color: string;
  horn_color: string;
  boder_color: string;
}>();

</script>

<template>
    <div class="thick-corners">
        <div class="thick-box1" style="top: 0;left: 0;" :style="{backgroundColor: props.horn_color}"></div>
        <div class="thick-box1" style="top: 0;right: 0;" :style="{backgroundColor: props.horn_color}"></div>
        <div class="thick-box1" style="bottom: 0;left: 0;" :style="{backgroundColor: props.horn_color}"></div>
        <div class="thick-box1" style="bottom: 0;right: 0;" :style="{backgroundColor: props.horn_color}"></div>
        <div class="thick-box2" style="top: 0;left: 0;" :style="{backgroundColor: props.horn_color}"></div>
        <div class="thick-box2" style="top: 0;right: 0;" :style="{backgroundColor: props.horn_color}"></div>
        <div class="thick-box2" style="bottom: 0;left: 0;" :style="{backgroundColor: props.horn_color}"></div>
        <div class="thick-box2" style="bottom: 0;right: 0;" :style="{backgroundColor: props.horn_color}"></div>

        <div class="thick-center" :style="{
            backgroundColor: props.back_color,borderColor: props.boder_color
        }">
            <slot name="center"></slot>
        </div>
    </div>

</template>

<style scoped lang="scss">
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
    background-color: black;
    margin: 0;
    padding: 0;
}

.thick-box2{
    position: absolute;
    height: 15%;
    width: 3px;
    background-color: black;
    margin: 0;
    padding: 0;
}

.thick-center{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 2.5px);
    width: calc(100% - 2.5px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(0,0,0,0);
    border: 0.8px solid rgb(0,0,0);
    margin: 0;
    padding: 0;
}


</style>
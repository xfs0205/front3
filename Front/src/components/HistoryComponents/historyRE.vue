<script setup lang="ts">
</script>

<template>
    <div class="bg-main">
        <div class="header">
            <span class="red-line"></span>
            <h1>云南红色历史</h1>
            <span class="red-line"></span>
        </div>
    </div>
</template>

<style scoped>
.bg-main {
    display: flex;
    position: relative;
    width: 100%;
    height: 80px;

    .bg-run {
        width: 100%;
        height: 75%;
        display: flex;
        position: absolute;
        top: 50px;
        padding: 0 15%;
        padding-top: 30px;
        margin: 0;
    }

    .header {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
        width: 100%;
        height: 40px;
    }

    .red-line {
        flex-grow: 1;
        height: 4px;
        background-color: red;
        margin: 0 10px;
    }

    h1 {
        font-size: 36px;
        /* 增加标题字体大小 */
        font-weight: bold;
        color: #ec0202;
        font-family: "KaiTi", "SimSun", serif;
    }

    .toor{
        display: flex;
        position: absolute;
        bottom: 35px;
        align-items: center;
        justify-content: center;
        color: #ec0202;
        height: 30px;
        width: 100%;
        margin: 0;
        user-select: none;
    }
}
</style>
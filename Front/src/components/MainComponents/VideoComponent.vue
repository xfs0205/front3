<script setup lang="ts">

</script>

<template>
    <div class="video-component">
        <div class="video-section">
            <video controls autoplay>
                <source src="http://127.0.0.1:5173/backend/static_video/test1.mp4" type="video/mp4">
            </video>
        </div>
        <div class="text-section">
            <span>
                &nbsp;&nbsp;“数字传承”强调利用现代信息技术，如互联网、数据库、多媒体等，来记录、保存、传播和教育后代关于这些红色记忆。这不仅有助于防止历史记忆的流失，还能让更多人，尤其是年轻一代，更便捷地接触和了解这些重要的文化遗产。
            </span>
            <br>
            <span>
                &nbsp;&nbsp;“探寻红色文化的精神密码”则暗示了对红色文化深层次价值和意义的挖掘与理解。这不仅仅是对历史事件的回顾，更是对其中蕴含的革命精神、爱国主义、集体主义等核心价值观的传承和发扬。
            </span>
        </div>
    </div>
</template>


<style scoped>
.video-component {
    padding-left: 50px;
    padding-right: 20px;
    margin-top: 50px;
    display: flex;

}

.video-section {
    flex: 1.2;
    margin-top: 30px;
}

.text-section {
    flex: 0.8;
    padding-left: 50px;
    padding-right: 20px;
    margin-top: 100px;
    color: rgb(0, 0, 0);
    font-size: 20px;
    font-family: '黑体';
    line-height: 1.5;
    letter-spacing: 1.2px; 
    user-select: none;
}
.video-component {
    display: flex;
    align-items: flex-start;
}

video {
    width: 90%; /* 视频宽度占满视频区域 */
    height: 100%; /* 保持视频的宽高比 */
    margin-left: 10%;
    border-radius: 5px;
}
</style>
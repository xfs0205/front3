<script setup lang="ts">
import VideoComponent from '@/components/MainComponents/VideoComponent.vue'

</script>

<template>
    <div class="bg-groud">
        <div class="module-1">
            <VideoComponent />
        </div>
    </div>
</template>
<style scoped>
.bg-groud {
    width: 100%;
    background-image: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), url('../../../public/lujun1.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: normal;
}

.module-1 {
    width: 100%;
    height: 900px;
    background-color: transparent;
}
</style>
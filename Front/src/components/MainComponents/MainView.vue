<script setup lang="ts">
import VideoComponent from '@/components/MainComponents/VideoComponent.vue'
import Module2 from '@/components/MainComponents/Module2.vue';
import Module3 from '@/components/MainComponents/Module3.vue';
import Module4 from '@/components/MainComponents/Module4.vue';

</script>

<template>
    <div class="bg-groud">
        <div class="module-1">
            <VideoComponent />
        </div>
    </div>
    <div class="module-2">
        <Module2></Module2>
    </div>
    <div class="module-3">
        <Module3></Module3>
    </div>
    <div class="module-4">
        <Module4></Module4>
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

.module-2{
    width: 100%;
    height: 500px;
    background-color: aqua;
}

.module-3{
    width: 100%;
    height: 500px;
    background-color: rgb(89, 228, 177);
}

.module-4{
    width: 100%;
    height: 500px;
    background-color: rgb(255, 252, 71);
}
</style>
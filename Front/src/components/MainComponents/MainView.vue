<script setup lang="ts">
import VideoComponent from '@/components/MainComponents/VideoComponent.vue'
import lookcard from '@/components/MainComponents/lookcard.vue';
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
        <div class="title2">
            <strong>功能总览</strong>
        </div>
        <div class="module-cards">
            <lookcard :back_color="'rgba(39, 60, 98)'">
                <template #Name>红色历史</template>
                <template #Imgs>
                    <img src="../../assets/people.jpg" style="height: 100%;width: 100%;
                            background-size: cover;background-repeat: no-repeat;
                            opacity: 0.5;">
                </template>
            </lookcard>
            <lookcard :back_color="'rgba(56, 94, 63)'">
                <template #Name>英雄人物</template>
                <template #Imgs>
                    <img src="../../assets/people.jpg" style="height: 100%;width: 100%;
                            background-size: cover;background-repeat: no-repeat;
                            opacity: 0.5;">
                </template>
            </lookcard>
            <lookcard :back_color="'rgba(116, 86, 65)'">
                <template #Name>云南长征</template>
                <template #Imgs>
                    <img src="../../assets/people.jpg" style="height: 100%;width: 100%;
                            background-size: cover;background-repeat: no-repeat;
                            opacity: 0.5;">
                </template>
            </lookcard>
            <lookcard :back_color="'rgba(115, 78, 123)'">
                <template #Name>知识图谱</template>
                <template #Imgs>
                    <img src="../../assets/people.jpg" style="height: 100%;width: 100%;
                            background-size: cover;background-repeat: no-repeat;
                            opacity: 0.5;">
                </template>
            </lookcard>
            <lookcard :back_color="'rgba(123, 78, 79)'">
                <template #Name>智能问答</template>
                <template #Imgs>
                    <img src="../../assets/people.jpg" style="height: 100%;width: 100%;
                            background-size: cover;background-repeat: no-repeat;
                            opacity: 0.5;">
                </template>
            </lookcard>
        </div>
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
    background-image: linear-gradient(to top, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 1)), url('../../../public/lujun1.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: normal;
}

.module-1 {
    width: 100%;
    height: 500px;
    background-color: transparent;
    position: relative;
}

.module-2 {
    width: 100%;
    height: 450px;
    background-color: transparent;
    position: relative;

    .title2{
        display: flex;
        margin: 30px;
        align-items: center;
        justify-content: center;
        font-family: "黑体";
        font-size: 30px;
    }

    .module-cards {
        position: absolute;
        display: flex;
        bottom: 0;
        width: 100%;
        height: 400px;
        background-color: rgba(123, 78, 79, 0);
        padding-left: 10%;
        padding-right: 10%;
        justify-content: flex-start;
        gap: 35px;
    }
}

.module-3 {
    width: 100%;
    background-color: rgb(89, 228, 177, 0);
}

.module-4 {
    width: 100%;
    background-color: rgb(255, 252, 71, 0);
}
</style>
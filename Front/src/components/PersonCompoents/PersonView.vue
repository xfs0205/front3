<script setup lang="ts">
import PersonFI from '@/components/PersonCompoents/PersonFI.vue';
import PersonSE from '@/components/PersonCompoents/PersonSE.vue';
import PersonRE from '@/components/PersonCompoents/PersonRE.vue';  

</script>

<template>
    <div class="module-1">
        <PersonRE></PersonRE>
    </div>

    <div class="module-2">
        <PersonFI></PersonFI>
    </div>

    <div class="module-3">
        <PersonSE></PersonSE>
    </div>

</template>

<style scoped lang="scss">
.module-1{
    display: flex;
    position: relative;
    width: 100%;
    // height: 500px;
    margin: 0;
    padding: 0;
    border: 0;
    background-color: antiquewhite;
}

.module-2{
    display: flex;
    position: relative;
    width: 100%;
    // height: 600px;
    margin: 0;
    padding: 0;
    border: 0;
    background-color: rgb(123, 120, 117);
}

.module-3{
    display: flex;
    position: relative;
    width: 100%;
    // height: 600px;
    margin: 0;
    padding: 0;
    border: 0;
    background-color: rgb(214, 222, 255);
}

</style>

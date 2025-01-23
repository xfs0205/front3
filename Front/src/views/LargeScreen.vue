<script setup lang="ts">
import request from '@/utils/request';
import { ref } from 'vue'

// const img = ref('/backend/static_image/tst1.jpg')

const img = ref()

request.get('/backend/tst')
    .then((res) => {
        img.value = res.data; // 将 URL 赋值给 img
        console.log(res);
        
    })
    .catch((err) => {
        console.error(err);
    });

</script>

<template>
数据大屏
{{ img }}
<img :src="img"/>
</template>

<style scoped lang="scss">

</style>

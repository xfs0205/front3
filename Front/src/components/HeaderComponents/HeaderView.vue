<script lang="ts" setup>
import { ref } from 'vue'

const title = ref('红色记忆的数字传承')

</script>

<template>
    <div class="common-layout">
        <el-container>
        <el-header>
            <div>
                <h1>{{ title }}</h1>
            </div>
        </el-header>
        </el-container>
    </div>
</template>

<style scoped lang="scss">

</style>
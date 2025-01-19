<script setup lang="ts">
import HeaderView from '@/components/HeaderComponents/HeaderView.vue'

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <HeaderView />
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.el-header {
  padding: 0;
  margin: 0;
  background-color: #f0f0f0;
}

</style>


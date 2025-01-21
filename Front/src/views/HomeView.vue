<script setup lang="ts">
import HeaderView from '@/components/HeaderComponents/HeaderView.vue'
import FooterView from '@/components/FooterComponents/FooterView.vue';
</script>

<template>
  <div class="common-layout">
    <el-scrollbar height="100vh">
      <el-container>
        <el-header>
          <HeaderView />
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
        <el-footer>
          <FooterView/>
        </el-footer>
      </el-container>
    </el-scrollbar>
  </div>
</template>

<style scoped lang="scss">
.el-header {
  padding: 0;
  margin: 0;
  background-color: #f0f0f0;
  height: 230px;
}

.el-main {
  padding: 0;
  margin: 0;
}

.el-footer{
  padding: 0;
  margin: 0;
}
</style>


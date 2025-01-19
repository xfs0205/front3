<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue';

const title = ref('红色记忆的数字传承')
const search = ref('')

</script>

<template>
    <div class="header-box">
        <div class="header-top">
            <span style="cursor: pointer;">昆明理工大学网站</span>
            <sapn style="position: absolute;left: 190px;display: flex;cursor: pointer;">简体</sapn>
            <div class="divider" style="left: 230px;"/>
            <sapn style="position: absolute;left: 240px;display: flex;cursor: pointer;">繁体</sapn>
            <span style="position: absolute;right: 0;display: flex;cursor: pointer;">个人登录中心</span>
            
        </div>
        <div class="header-logo"></div>
        <div class="header-title">
            <h1>{{ title }}</h1>
            <span style="position: absolute;right: 00px;"> --探寻红色文化的精神密码</span>
        </div>
        <div class="header-research">
            <el-input
                v-model="search"
                style="width: 450px; height: 50px;"
                placeholder="请输入你想搜索的内容"
                :suffix-icon="Search"
                />
        </div>
    </div>    
</template>

<style scoped lang="scss">
.header-box {
    background-color:antiquewhite;
    height: 230px;
    display: flex;

    .header-logo{
        position: absolute;
        background-image: url('../../../public/logo.png');
        background-size: contain; 
        background-repeat: no-repeat; 
        width: 80px;
        height: 80px;
        border-radius: 4px;
        top: 62px;
        left: 130px;
    }

    .header-title {
        width: 400px;
        position: absolute;
        top: 60px;
        left: 250px;
        user-select: none;
        h1 {
            font-size: 38px;
            color: #c94141;
        }
        span{
            font-size: 24px;
            color: #cc7171;
        }
    }

    .header-research{
        position: absolute;
        top: 75px;
        right: 200px;
    }

    .header-top{
        display: flex;
        position: absolute;
        left:60%;
        top: 5px;
        color: hsl(0, 31%, 58%);
        width: 450px;
        height: 50px;
        align-items: center;
        user-select: none;

        .divider{
            position: absolute;
            width: 1px;
            height: 13px;
            border-radius: 4px;
            background-color: #757272;
        }
    }
}

</style>
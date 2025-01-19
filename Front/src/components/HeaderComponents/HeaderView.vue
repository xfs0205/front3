<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue';

const title = ref('红色记忆的数字传承')
const search = ref('')

</script>

<template>
    <div class="header-box">
        <div class="header-top" style="font-size: 20px;">
            <span style="cursor: pointer;">昆明理工大学网站</span>
            <sapn style="position: absolute;left: 190px;display: flex;cursor: pointer;">简体</sapn>
            <el-divider direction="vertical" class="custom-divider" />
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
        <div class="header-down">
            <div class="section">
                <strong style="cursor: pointer;">首页</strong>
                <div class="underline"></div>
            </div>
            <div class="section">
                <strong style="cursor: pointer;">红色历史</strong>
                <div class="underline"></div>
            </div>
            <div class="section">
                <strong style="cursor: pointer;">英雄人物</strong>
                <div class="underline"></div>
            </div>
            <div class="section">
                <strong style="cursor: pointer;">云南长征</strong>
                <div class="underline"></div>
            </div>
            <div class="section">
                <strong style="cursor: pointer;">知识图谱</strong>
                <div class="underline"></div>
            </div>
            <div class="section">
                <strong style="cursor: pointer;">智能问答</strong>
                <div class="underline"></div>
            </div>
        </div>
    </div>    
</template>

<style scoped lang="scss">
.header-box {
    background-color:antiquewhite;
    height: 230px;
    display: flex;
    position: relative;

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
        left:55%;
        top: 5px;
        color: hsl(0, 31%, 58%);
        width: 480px;
        height: 50px;
        align-items: center;
        user-select: none;

        .custom-divider {
            position: absolute;
            left: 235px;
            height: 20px;
            margin: auto 0;
            background-color: #333; // 设置分割线颜色为深色
            width: 1px; // 设置分割线的宽度
        }
    }

    .header-down{
        position: absolute;
        display: flex;
        width: 100%;
        height: 50px;
        bottom: 0;
        background-color: #c70505;
        padding: 0 7%;

        .section {
            flex: 1;
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 19px;
            user-select: none;
        }

        .section:last-child {
            border-right: none;
        }

        .underline {
            display: flex;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 0;
            background-color: #fac9a6; 
            transition: height 0.3s; 
        }

        .section:hover .underline {
            height: 8px; /* 鼠标悬浮时的高度 */
        }
    }
}

</style>
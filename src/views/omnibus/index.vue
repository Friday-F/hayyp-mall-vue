<template>
    <div class="page omnibus">
        <div class="location">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ name: 'omnibus' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>数据统计</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="main-container">
            <div id="mind"></div>
        </div>
        
    </div>
</template>
<script>
import vm from './main.js'
export default vm
</script>
<style scoped lang="less">
@import './index.less';
</style>



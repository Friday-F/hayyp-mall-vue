<template>
    <div class="home">
        <el-container>
            <v-aside></v-aside>
            <el-container>
                <el-header></el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import vm from './main.js'
export default vm
</script>
<style scoped lang="less">
@import './index.less';
</style>



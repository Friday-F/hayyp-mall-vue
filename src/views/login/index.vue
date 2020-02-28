<template>
    <div class="login">
        <div class="login-content">
            <h3 class="title">HAPPY MMALL</h3>
            <el-form ref="form" :model="form" :rules="rules" class="login-form">
                <el-form-item prop="username">
                    <el-input @keyup.enter.native="submitForm('form')" v-model="form.username" placeholder='请输入用户名'></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type='password' @keyup.enter.native="submitForm('form')"  v-model="form.password" placeholder='请输入密码'></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="login-btn" type="primary" @click="submitForm('form')">立即登录</el-button>
                </el-form-item>
            </el-form>
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



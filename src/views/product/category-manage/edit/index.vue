<template>
   <div class="page product-edit">
        <div class="location">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ name: 'omnibus' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>商品管理</el-breadcrumb-item>
                <el-breadcrumb-item>查看详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="main-container" v-loading="getloading">
            <el-form ref="form" label-width="250px" :model="form" :rules="rules" class="form">
                <el-form-item prop="username" label="商品名称">
                    <el-input :disabled="type === 'watch'" v-model="form.name" placeholder='请输入用户名' class="inp"></el-input>
                </el-form-item>
                <el-form-item prop="subtitle" label='商品描述'>
                    <el-input :disabled="type === 'watch'"  class="inp" v-model="form.subtitle" placeholder='商品描述'></el-input>
                </el-form-item>
                <el-form-item prop="status" label='当前状态'>
                     <el-select :disabled="type === 'watch'" v-model="form.status" placeholder="请选择">
                        <el-option
                        v-for="item in statusOption"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item  label='所属分类'>
                    <el-select :disabled="type === 'watch'" v-model="form.parentCategoryId" placeholder="请选择">
                        <el-option
                        v-for="item in category"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select :disabled="type === 'watch'" v-model="form.categoryId" placeholder="请选择">
                        <el-option
                        v-for="item in parentCategory"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>

                </el-form-item>
                <el-form-item prop="price" label='商品价格'>
                    <el-input :disabled="type === 'watch'"  class="inp" v-model="form.price" placeholder='商品价格'>
                        <template slot="append">元</template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="stock" label='商品库存'>
                    <el-input :disabled="type === 'watch'"  class="inp" v-model="form.stock" placeholder='商品库存'>
                        <template slot="append">件</template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="mainImage" label='商品图片'>
                    <el-upload
                        :disabled="type === 'watch'" 
                        class="avatar-uploader"
                        :show-file-list="false"
                        :action="uploadPicUrl"
                        :before-upload="beforeUpload"
                        :on-success="handleAvatarSuccess"
                        :on-error="uploadError"
                        name='upload_file'
                        enctype='multipart/form-data'
                        >
                    <img v-if="dialogImageUrl" :src="dialogImageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    <div slot="tip" class="el-upload__tip">
                        <a href="javascript:;"
                        v-if="dialogImageUrl"
                        class="el-button el-button--text"
                        @click="viewPic">查看大图</a>
                    </div>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>
                <el-form-item prop="detail" label='商品详情'>
                    <el-input :disabled="type === 'watch'"  class="inp" type='textarea' v-model="form.detail" 
                    :placeholder="type==='watch'&&form.detail ===''?'暂无数据':'商品详情'"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button  v-show="type==='deit' && isRequest ===false" class="login-btn" type="primary" @click="submitForm('form')">提交</el-button>
                    <el-button  v-show="type==='deit' && isRequest ===true" :disabled="true" class="login-btn" type="primary">操作中</el-button>
                </el-form-item>
            </el-form>
        </div>
   </div>
</template>
<script>
import vm from './main.js'
export default vm
</script>
<style lang='less' scoped>
@import './index.less';
</style>



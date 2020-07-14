<template>
   <div class="page classify">
        <div class="location">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ name: 'omnibus' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>master分支改动，在dev创建之后</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="main-container">
            <div class="table">
                <el-table
                    v-loading="isLoading" :data="list" border style="width: 100%" :empty-text="currentText">
                    <el-table-column
                        prop="id"
                        label="id"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="名称"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="status"
                        label="操作">
                        <template slot-scope="props">
                            <el-button size='small' type="primary" @click="editName(props.row)">
                                修改名称
                            </el-button>
                            <router-link :to="`/home/product/deit/${props.row.id}`">
                                <el-button size='small' type='primary'>编辑</el-button>
                            </router-link>
                            
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <el-dialog
            title="修改名称"
            :visible.sync="dialogVisible"
            width="30%"
             @close="dialogClose">
            <el-form ref="form" :model="form" :rules="rules" class="login-form">
                <el-form-item prop="name">
                    <el-input  v-model="form.name" placeholder='名称'></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('form')">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import api from '../../../../api/api.js'
export default {
    name:"classify",
    data(){
        return{
            categoryId:0,
            isLoading:true,
            list:[],
            currentText:'暂无数据',
            dialogVisible:false,
            form:{
                name:""
            },
            rules: {
                name: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                  ],
            },
            currentName:"",
            currentId:""
        }
    },
    created(){
        this.getList()
    },
    methods:{
        dialogClose(){

        },
        getList(){
            api.getClassify({
               categoryId:this.categoryId 
            }).then(res=>{
                if(res.status === 0){
                    this.list = res.data
                }
                this.isLoading = false
            })
        },
        editName(data){
            let { id,name} = data;
            this.currentName = name;
            this.currentId = id;
            this.dialogVisible = true;
            this.form.name = name;
           
        },
         submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                   api.setClassifyName({
                       categoryName:this.form.name,
                       categoryId:this.currentId
                    }).then(res=>{
                        if(res.status === 0){
                            this.$notify({
                            message: res.data,
                            type: "success"
                          });
                          this.dialogVisible = false;
                          this.getList()
                        }
                    })
              }
            })
         }
    }
}
</script>


<template>
    <el-aside width="200px">
        <div class="aside-top">
            <h3 class="title"><span class="happy">HAPPY </span>MALL</h3>
        </div>
        <el-menu
            :default-active="currentActive"
            class="el-menu-vertical"
            @open="handleOpen"
            @close="handleClose"
            background-color="#2b2e33"
            text-color="#ffffff"
            active-text-color="#ffffff">
             <el-submenu :index="item.level" v-for="(item,index) in submenuData" :key='index'>
                <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
            </template>
                <el-menu-item-group v-for="(tag,tagIndex) in item.children" :key='tagIndex'>
                    <router-link :to="{path:tag.url}">
                        <el-menu-item :index="tag.level">{{tag.name}}</el-menu-item>
                    </router-link>
                    
                </el-menu-item-group>
            </el-submenu>
            <!-- <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-s-goods"></i>
                    <span>商品</span>
                </template>
                <el-menu-item-group>
                    <router-link :to="{name:'product'}">
                        <el-menu-item index="2-1">商品管理</el-menu-item>
                    </router-link>
                </el-menu-item-group>
                <el-menu-item-group>
                    <router-link :to="{name:'category'}"> 
                        <el-menu-item index="2-2">品类管理</el-menu-item>
                    </router-link>
                </el-menu-item-group>
            </el-submenu> -->
        </el-menu>
    </el-aside>
</template>
<script>
import submenuData from './submenu.js'
export default {
    data(){
        return{
            submenuData,
            currentActive:"1-1",
            currentName:""
        }
    },
    watch:{
        '$route.name'(newVal,oldVal){
            this.currentName = newVal;
            this.setCurrentSubmenu()
        }
    },
    created(){
        this.currentName = this.$route.name;
        this.setCurrentSubmenu()
        
    },
    methods:{
        setCurrentSubmenu(){
            this.submenuData.map(item=>{
                item.children.map(tag=>{
                    if(tag.url.indexOf(this.currentName) !== -1){
                        this.currentActive = tag.level
                    }
                })
            })
        },
         handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
    }
}
</script>
<style lang='less'>
.el-aside {
    background-color: #2b2e33;
    color: #333;
    text-align: center;
    line-height: 200px;
    .aside-top{
        height: 60px;
        .title{
            font-size: 30px;
            color:#fff;
            font-weight: bold;
            line-height: 60px;
            .happy{
                color:#2dafcb;
            }
        }
    }
  }
.el-menu-vertical{
    width: 200px;
    text-align: left;
    .el-submenu{
        width: 200px;
    }
}
.router-link-active{
    .is-active{
        background: #04b475 !important;
    }
    
}
</style>



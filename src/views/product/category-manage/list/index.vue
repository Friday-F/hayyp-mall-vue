<template>
    <div class="page category">
        <div class="location">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ name: 'omnibus' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="main-container">
            <div class='form-search'>
                <el-form ref="form" :model="form" class="search-form">
                    <el-form-item prop="username" class="inp">
                        <el-select v-model="type" placeholder="请选择">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item prop="password" class="inp">
                        <el-input v-model="inputVal" placeholder='关键词'></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button size='small' class="search-btn" type="primary" @click="submitForm('form')">搜索</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="table">
                <el-table
                    v-loading="loading" :data="list" border style="width: 100%" :empty-text="currentText">
                    <el-table-column
                        prop="id"
                        label="id"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="subtitle"
                        label="信息"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="price"
                        label="价格">
                    </el-table-column>
                    <el-table-column
                        prop="status"
                        label="状态">
                        <template slot-scope="props">
                            <el-button type="success" class="btn" size='small' v-show="props.row.status === 1" @click="setState(props.row.id,props.row.status)">在售</el-button>
                            <el-button type="warning" @click="setState(props.row.id,props.row.status)" class="btn" size='small' v-show="props.row.status === 2">下架</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="status"
                        label="操作">
                        <template slot-scope="props">
                            <router-link :to="`/home/product/watch/${props.row.id}`">
                                <el-button size='small' type="primary">
                                    查看
                                </el-button>
                            </router-link>
                            <router-link :to="`/home/product/deit/${props.row.id}`">
                                <el-button size='small' type='primary'>编辑</el-button>
                            </router-link>
                            
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="page-warp">
                <el-pagination
                @current-change="pageChange"
                background
                value-format="timestamp"
                :current-page="form.pageNum"
                :page-size="form.pageSize"
                layout="total, prev, pager, next, jumper"
                :total="total">
                </el-pagination>
            </div>
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



import fetch from '../libs/ajax'
export default {
    login(params){
        return fetch.post('/manage/user/login.do',params)
    },
    getOmnibus(params){
        return fetch.get('/manage/statistic/base_count.do')
    },
    getProductList(params){
        return fetch.get('/manage/product/search.do',params)
    },
    setProductStatus(params){
        return fetch.get('/manage/product/set_sale_status.do',params)
    },
    getProductInfo(params){
        return fetch.get('/manage/product/detail.do',params)
    },
    getClassification(params){
        return fetch.get('/manage/category/get_category.do',params)
    },
    setProductUpdate(params){
        return fetch.get('/manage/product/save.do',params)
    },
    getClassify(params){
        return fetch.get('/manage/category/get_category.do',params)
    },
    setClassifyName(params){
        return fetch.get('/manage/category/set_category_name.do',params)
    }
}

import api from '../../../../api/api'
export default {
    name:"product",
    data(){
        return{
            form:{
                listType:'search',
                pageNum:1,
                pageSize:10,
            },
            list:[],
            loading:false,
            currentText:'暂无数据',
            options: [{
                value: 'productId',
                label: '按照商品id查询'
              }, {
                value: 'productName',
                label: '按照商品名称查询'
              }],
              type: 'productId',
              total:0,
              inputVal:''
            
        }
    },
    created(){
        this.getList()
    },
    methods:{
        setState(id,status){
            api.setProductStatus({
                productId:id,
                status:status === 1 ? 2 : 1
            }).then(res=>{
                if(res.status === 0){
                    this.$notify({
                        message: res.data,
                        type: "success"
                      });
                    this.getList()
                }
            })
        },
        submitForm(){
            this.getList()
        },
        getList(){
            this.loading = true;
            let params = Object.assign({},this.form);
            params[this.type] = this.inputVal;
            api.getProductList(params)
                .then(res=>{
                    this.loading = false;
                    if(res.status === 0){
                        this.list = res.data.list
                        this.total = res.data.total;
                    }
                })
        },
        pageChange (page) {
            this.form.pageNum = page
            this.getList()
          },
    },
    
    mounted(){
        
    }
    
}
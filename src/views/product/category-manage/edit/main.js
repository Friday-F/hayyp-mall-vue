import api from '../../../../api/api'
export default{
    name:'produceEdit',
    data(){
        return{
            form:{
                name:'',
                subtitle:'',
                status:'',
                categoryId:'',
                parentCategoryId:'',
                price:'',
                stock:'',
                imageHost:'',
                subImages:'',
                detail:""
            },
            parentCategory:[],
            category:[],
            productId:"",
            type:"",
            rules:{
                name: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                  ], 
            },
            getloading:false,
            uploadPicUrl:'/manage/product/upload.do',
            dialogImageUrl:'',
            dialogVisible:false,
            isRequest:false,
            indexUpload:{
                url:'/manage/product/upload.do'
            },
            statusOption:[
                {
                    value: 1,
                    label: '在售'
                },
                {
                    value: 2,
                    label: '下架'
                }
            ]

            
            
        }
    },
    created(){
        this.type = this.$route.params.type
        this.productId = this.$route.params.id;
        this.getInfo()
    },
    methods:{
        submitForm(){
            this.isRequest = true;
            // let params = Object.assign({},this.form);
            let params = {}
            for(let k in this.form){
                if(this.form[k]!==''){
                    params[k] = this.form[k]
                }
            }
            delete params.updateTime
            delete params.imageHost
            delete params.mainImage
            api.setProductUpdate(params)
                .then(res=>{
                    if(res.status === 0){
                        this.$notify({
                            message: res.data,
                            type: "success"
                          });
                          this.$router.push({
                              name:'product'
                          })
                          
                    }
                    this.isRequest = false;
                })
        },
        beforeUpload(file, fileList) {
            this.$message({
             message: '正在上传',
             type: 'warning',
             center: true
           });
           this.file = file;
         },
         uploadError() {
            this.$message.error("文件上传失败");
          },
          handleAvatarSuccess(res, file) {
            this.$notify({
              title: "",
              message: "上传成功",
              type: "success"
            });
            this.dialogImageUrl = URL.createObjectURL(file.raw);
            this.form.subImages = res.data.uri;
          },
          viewPic(){
            this.dialogVisible = true;
          },
        getInfo(){
            this.getloading = true
            api.getProductInfo({
                productId:this.productId
            }).then(res=>{
                if(res.status === 0){
                    this.form = res.data;
                    this.dialogImageUrl = `${this.form.imageHost}${this.form.mainImage}`;
                    this.getOption()
                    this.getOption(this.form.parentCategoryId)
                }
            })
        },
        getOption(id = 0){
            api.getClassification({
                categoryId:id
            }).then(res=>{
                if(res.status === 0){
                    if(id === 0){
                        let list = res.data
                        this.category = list.map(item=>{
                            return{
                                label:item.name,
                                value:item.id
                            }
                        })
                    }else{
                        let list = res.data
                        this.parentCategory = list.map(item=>{
                            return{
                                label:item.name,
                                value:item.id
                            }
                        })
                    }
                    this.getloading = false;
                }
            })
        },
    }
}
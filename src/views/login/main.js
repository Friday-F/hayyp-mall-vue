
import api from '../../api/api'
import util from '../../libs/util'
export default {
    name:"login",
    data(){
        return{
            form:{
                username:'',
                password:''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                  ],
                  password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                  ],
            }
        }
    },
    created(){

    },
    methods:{
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                api.login(this.form)
                    .then(response=>{
                        if(response.status === 0){
                            util.freshLogin(response.data.username)
                            this.$router.push({
                                name:'home'
                            })
                        }
                    })
              } else {
                return false;
              }
            });
          }
    }
}
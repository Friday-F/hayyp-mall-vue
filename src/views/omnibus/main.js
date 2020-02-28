
import api from '../../api/api'
var echarts = require('echarts');
export default {
    name:"omnibus",
    data(){
        return{
            dataObj:{
                orderCount:'',
                productCount:'',
                userCount:''
            },
            option:{
                title : {
                    text: 'HAPPY AMLL',
                    subtext: '数据概况',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['用户总数','商品总数','订单总数']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            // {value:335, name:'用户总数'},
                            // {value:310, name:'商品总数'},
                            // {value:234, name:'订单总数'},
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
            
        }
    },
    created(){
        this.initData()
    },
    methods:{
      initData(){
        api.getOmnibus()
            .then(res=>{
                if(res.status === 0){
                    this.dataObj = Object.assign({},this.dataObj,res.data)
                    let list = [];
                    for(let k in this.dataObj){
                        list.push({
                            name:this.getKey(k),
                            value:this.dataObj[k]
                        })
                    }
                    this.option.series[0].data = list;
                    this._setInitChart()

                }
            })
      },
      getKey(type){
          let result = ''
        switch(type){
            case 'orderCount':
            result = '订单总数'
            break;
            case 'productCount':
            result = '商品总数'
            break;
            case 'userCount':
            result = '用户总数'
            break;
            default :
            result = type
        }
        return result
      },
      _setInitChart(){
            var myChart = echarts.init(document.getElementById('mind'));
            myChart.setOption(this.option)
        },
    },
    
    mounted(){
        
    }
    
}
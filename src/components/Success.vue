<template>
    
    <div>
    
            <div class="success">

                <img src="../assets/images/success.png">

                <div class="s_right">
                    <h2>支付成功</h2>
                    <p>期待您再次光临</p>
                </div>
            </div>

            <ul class="list">

                <li>

                    <div class="left">
                        订单状态
                    </div>
                    <div class="right">
                        已完成
                    </div>
                </li>
                <li>

                    <div class="left">
                       桌号
                    </div>
                    <div class="right">
                       {{list.uid}}
                    </div>
                </li>
                <li>

                    <div class="left">
                        人数
                    </div>
                    <div class="right">
                        {{list.p_num}}
                    </div>
                </li>
                
                <li>

                    <div class="left">
                        支付金额
                    </div>
                    <div class="right">
                        {{list.total_price}}
                    </div>
                </li>
            </ul>
    </div>
</template>


<script>
import Config from '../model/config.js'

import storage from '../model/storage.js'
export default{

    data () {
    return {
        api: Config.api,
        list: []
    }
    },
    methods: {
        // 反显支付成功后的详情
        finalSuccess () {
            var uid = storage.get('roomid')

            var api = this.api + 'api/success?uid=' + uid

            this.$http.get(api).then((response) => {
                this.list = response.body.result[0]
            }, (error) => {
                console.log(error)
            })
        }
      },
      mounted () {
        this.finalSuccess()
    }
}
</script>

<style lang="scss">
    .success{
        width: 15rem;
        margin: 4rem auto;
        display:flex;
        border:1px solid #eee;
        border-radius: 20px;
        background: #fff;
        img{
            width: 6rem;
            height: 6rem;
        }
        .s_right{
            padding-left: 1rem;
            flex: 1;
            padding-top:1rem;
        }
    }

    .list{
        background: #fff;
        padding:10px;

        li{
            display: flex;
            line-height: 2;

            .left{
                width: 100px;
            }
            .right{
                flex: 1;
                text-align: right;
            }
        }
    }
</style>
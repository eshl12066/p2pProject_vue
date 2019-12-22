<template>
<div>
  <span>你的余额：{{user.usable_amount}}</span>
  <el-form ref="form" :model="form" label-width="80px"  >
    <el-form-item label="充值金额" style="background-color:lightgrey;margin-top:60px;margin-left: 50px">
      <el-input v-model="alipayForm.WIDtotal_amount" placeholder="请输入你要充值的金额"></el-input>
    </el-form-item>

    <!--    <el-form-item label="银行卡号" style="background-color:lightgrey;margin-top: 50px;margin-left: 50px">-->
    <!--      <el-input  placeholder="请输入银行卡号"></el-input>-->
    <!--    </el-form-item>-->
    <el-form-item label="">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="我同意并接受《亿人宝投资咨询与管理服务电子协议》" name="type"></el-checkbox>

      </el-checkbox-group>
    </el-form-item>

    <el-form-item>
      <el-button type="danger" style="margin-left: -30px" @click="alipay">立即充值</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        user: {
          members_id:'',
          trade_time:'',
          amount:'',
          trade_code:'',
          usable_amount:''
        },
        alipayForm:{
          WIDout_trade_no:'',//商户订单号
          WIDtotal_amount:'',//付款金额
          WIDsubject:'',   //订单名称
          WIDbody:''  //商品描述
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      editJE(){
        var url = this.axios.urls.SYSTEM_ASSET_RECHARGE_UPDATEJE;
        this.axios.post(url, this.user).then((response) => {

        }).catch((response) => {
          console.log(response);
        });
      },
      alipay(){
        var url = this.axios.urls.ALIPAY_PAY;
        this.axios.post(url, this.alipayForm).then((response) => {
          this.editJE();
          this.user.amount = this.alipayForm.WIDtotal_amount;
          this.user.trade_time = this.getTime();
          var url3 = this.axios.urls.SYSTEM_ASSET_RECHARGE_ADD;
          this.axios.post(url3, this.user).then((response) => {

          }).catch((response) => {
            console.log(response);
          });
          var jsp= response.config.url+"?"+response.config.data;
          window.open(jsp);
        }).catch((response) => {
          console.log(response);
        });
      },
      getDateNow(){
        var vNow = new Date();
        var sNow = "";
        sNow += String(vNow.getFullYear());
        sNow += String(vNow.getMonth() + 1);
        sNow += String(vNow.getDate());
        sNow += String(vNow.getHours());
        sNow += String(vNow.getMinutes());
        sNow += String(vNow.getSeconds());
        sNow += String(vNow.getMilliseconds());
        this.alipayForm.WIDout_trade_no =  sNow;
        this.alipayForm.WIDsubject = "测试";
        this.alipayForm.WIDbody="充值测试"
      },
      getTime(){
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        //以下代码依次是获取当前时间的年月日时分秒
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var minute = date.getMinutes();
        var hour = date.getHours();
        var second = date.getSeconds();
        //固定时间格式
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        if (hour >= 0 && hour <= 9) {
          hour = "0" + hour;
        }
        if (minute >= 0 && minute <= 9) {
          minute = "0" + minute;
        }
        if (second >= 0 && second <= 9) {
          second = "0" + second;
        }
        var currentdate =  year + seperator1 + month + seperator1 + strDate
          + " " + hour + seperator2 + minute + seperator2 + second;
        return currentdate;
      }
    },
    created() {

      var url2 = this.axios.urls.SYSTEM_ASSET_RECHARGE_SELECTZFB;
      var  id = this.$store.getters.getUserMembers.id;//会员                             /////id******************************************
      this.user.members_id = id;
      this.getDateNow();
      this.axios.post(url2, {members_id:id}).then((response) => {
        this.user.trade_code = response.data.trade_code;
        this.user.usable_amount = response.data.usable_amount;
        console.log(this.user.members_id)
      }).catch((response) => {
        console.log(response);
      });
    }
  }
</script>

<style scoped>

</style>

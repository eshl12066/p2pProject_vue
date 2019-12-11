<template>
  <div>
    <span>你的余额：{{form.usable_amount}}</span>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="提现金额">
        <el-input v-model="form.je"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即提现</el-button>
      </el-form-item>
    </el-form>

    <!--弹出框-->
    <el-dialog title="提现" :visible.sync="zlVisibledel" width="35%" :before-close="handleClose">
      <span>您的提现申请已经交给管理员审核，请等待通知！</span>
      <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="czOk">确 定</el-button>
       </span>

    </el-dialog>
  </div>

</template>

<script>
    export default {
      data() {
        return {
          zlVisibledel:false,
          form: {
            je:'',
            jian: '',
            membersId: '',
            tradeCode:'',
            state:2,
            applyTime:'',
            amount:'',
            fee:'',
            usable_amount:'',
            remark:''
          },
          form2: {
            je:'',
            jian: '',
            members_id: '',
            trade_code:'',
            state:2,
            apply_time:'',
            fee:''
          }
        }
      },
      methods: {
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        },
        czOk(){
          this.zlVisibledel = false;
        },
        onSubmit() {

          var url2 = this.axios.urls.SYSTEM_ASSET_WITHDRAW_ADD;
          this.form.applyTime = this.getTime();
          this.form.amount = this.form.je;
          this.form.fee = this.form.je*0.01;
          this.form.jian = this.form.je - this.form.fee;
          this.axios.post(url2, this.form).then((response) => {

            this.zlVisibledel = true;

          }).catch((response) => {
            console.log(response);
          });
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
        },



      },
      created() {

        var url2 = this.axios.urls.SYSTEM_ASSET_RECHARGE_SELECTZFB;
        var  id = this.$store.getters.getUserMembers.id;//会员                               /////id******************************************
        this.form.membersId = id;
        this.axios.post(url2, {members_id:id}).then((response) => {
          this.form.tradeCode = response.data.trade_code;
          this.form.usable_amount = response.data.usable_amount;
        }).catch((response) => {
          console.log(response);
        });
      }
    }
</script>

<style scoped>

</style>

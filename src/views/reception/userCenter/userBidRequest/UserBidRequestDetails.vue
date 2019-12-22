<template>
    <el-main>
      <el-card class="box-card" style="border-left-width: 66px;border-right-width: 66px;border-top-width: 36px;">
      <strong>我 的 还 款</strong><br/><br/><br/>

      <!--列表数据展示-->
      <el-table :data="tableData" border style="width: 100%" v-if="isShowData.basicInformation">
        <el-table-column prop="bid_request_title" label="借款表标题" width="180" align="center" sortable></el-table-column>
        <el-table-column prop="total_amount" label="本期还款总金额" width="180" align="center"></el-table-column>
        <el-table-column prop="month_index" label="第几期" width="180" align="center" sortable></el-table-column>
        <el-table-column prop="pay_date" label="本期还款截止日期" width="180" align="center"></el-table-column>
        <el-table-column label="操  作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="reimbursement">还 款</el-button>
          </template>
        </el-table-column>

        <!--  2、步骤二   这是确认信息模块   -->
        <el-row v-if="isShowData.confirm">
          <el-card class="box-card" style="background-color: whitesmoke;">
            <!--  头 部  -->
            <div slot="header" class="clearfix">
              <p>确 认 还 款 信 息 ：</p>
            </div><br/><br/><br/>
            <!--  主 体  -->
            <div class="text item">
              <el-col :span="3">&nbsp;</el-col>
              <el-col :span="8">本 期 还 款 总 金 额:{{detail.totalAmount}} ￥</el-col>
              <el-col :span="6"></el-col>
              <el-col :span="6"></el-col>
            </div><br/><br/><br/><br/><br/>
          </el-card>
          <p align="left"><el-button @click="cancle" type="default">取消还款</el-button></p>
          <div style="float: right; margin: 20px;">
            <el-button @click="next" icon="el-icon-check" type="success">确认还款</el-button>
          </div>
        </el-row>

        <!--这是还款成功提示-->
      </el-table><br/><br/>
        <div style="text-align: center;margin-top: 40px;" v-if="isShowData.carryOut">
          <i class="el-icon-circle-check" style="font-size: 38px; color: green;">还款成功</i><br/><br/>
          <p>您的还款成功，感谢您选择有望金借贷平台，祝您生活愉快！</p><br/>
          <el-button @click="toRouter" style="margin-top: 53px;" type="text" >返回首页</el-button>
        </div>
      </el-card>
    </el-main>

</template>

<script>
  export default {
    name: "UserBidRequest",
    data() {
      return {
        tableData: [],
        userMembers:null,
        detail:{
          totalAmount:null
        },
        //步骤条 默认为第一步
        stepsActive:1,
        isShowData:{//步骤条的变动
          basicInformation:true,
          confirm:false,
          carryOut:false
        }
      }
    },
    created(){//用户的贷款 数据展示
      this.userMembers = this.$store.getters.getUserMembers;//用户的
      this.detail.id = this.bidD.id;


      let url = this.axios.urls.SYSTEM_REFUNDDETAIL_SELECTREFDPAGER;
      this.axios.post(url,{"id":this.userMembers.id}).then((response)=>{
        this.tableData = response.data;
        this.detail.totalAmount = this.tableData.totalAmount;
      }).catch(function(error){//carch则是异常
        console.log(error);
      });
    },
    //取消还款  返回上一界面
    cancle(){
      this.$router.go(-1);//返回上一层

    },
    reimbursement(){
      this.isShowData.basicInformation = false;
      this.isShowData.confirm = true;
      this.stepsActive = 2;
    },
    next() {//还款
      let url = this.axios.urls.SYSTEM_BID_SELECTONE;
      this.axios.post(url, {"id":id}).then((response) => {
        let data = response.data;
        this.$store.commit('setBidDetails', {//设置信息
          bidDetails:data
        });
        let d = this.$store.getters.getBidDetails;
        // 跳转路由 去投标界面 Bidding
        this.$router.push({
          path: '/reception/Bidding'
        });
      }).catch((response) => {//carch则是异常
        console.log(response);
      });
    }
  }
</script>

<style scoped>

</style>

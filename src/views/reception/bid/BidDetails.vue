<template>
  <el-main>
  <!--  投标信息展示模块  -->
    <h4>投标基本信息：</h4>
    <el-row><br/>
      <el-card class="box-card" style="background-color: whitesmoke;">
        <!--  头 部  -->
        <div slot="header" class="clearfix">
          <p align="left">总 额：{{detail.bidRequestAmount}} ￥ ， 已 有 {{detail.bidCount}} 人 进 行 投 资 , 共 投 资 ：{{detail.currentSum}} 元</p><br/>
          <span style="color:green;" v-if="detail.bidRequestAmount == detail.currentSum ">&nbsp;已 满 标 ！</span>
          <span v-if="detail.bidRequestAmount != detail.currentSum ">&nbsp;还可投资：{{detail.myAmount}}￥</span>
          <p align="right">—— 借款人：{{detail.name}}</p>
        </div>
        <!--  主 体  -->
        <div class="text item">
          <span style="color:green;">安全分数：{{detail.score}}</span><br/><br/>
          <span>利息率：{{detail.rate}}</span><br/><br/>
          <span>月 数：{{detail.month}}</span><br/><br/>
        </div>
      </el-card>
      <!--  下一步   按钮  -->
      <el-col :span="24">
        <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-button @click="cancle" type="default">返回</el-button></p>
        <p align="right">
          <el-button v-if="detail.bidRequestAmount != detail.currentSum" size="medium" type="success" @click="handleBidding(detail.id)" round>进 行 投 资</el-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
  export default {
    name: "BidDetails",
    data:function(){
      return {
        bidD:null,//从投标界面传过来的值
        detail:{
          id:null,
          bidRequestAmount:null,
          bidCount:null,
          currentSum:null,
          myAmount:null,
          name:null,
          score:null,
          rate:null,
          month:null,
        },
      }
    },
    created(){
      this.bidD = this.$store.getters.getBidDetails;
      //给detail赋值
      this.detail.id = this.bidD.id;
      this.detail.bidRequestAmount = this.bidD.bid_request_amount;//借款总额
      this.detail.currentSum = this.bidD.current_sum;//已收到的投资总额
      this.detail.bidCount = this.bidD.bid_count;//已有多少人投资
      this.detail.myAmount = (this.detail.bidRequestAmount - this.detail.currentSum);//我的投资总额
      this.detail.name = this.bidD.name;
      this.detail.score = this.bidD.note;
      this.detail.rate = this.bidD.current_rate;
      this.detail.month = this.bidD.monthes_return;
    },
    methods:{
      //取消投标  返回上一界面
      cancle(){
        this.$router.go(-1);//返回上一层
      },
      handleBidding(id) {//直接投标按钮
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
  }
</script>

<style scoped>

</style>

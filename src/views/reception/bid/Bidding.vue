<template>
  <el-main>
    <el-card class="box-card" style="border-left-width: 66px;border-right-width: 66px;border-top-width: 36px;">
      <div class="clearfix" slot="header">
        <p style="color: green;"><strong> 投 资 理 财 </strong>&nbsp;&nbsp;&nbsp;<i class="el-icon-s-promotion"></i></p>
        <!--  步骤条  -->
        <el-steps :active="stepsActive" align-center finish-status="success">
          <el-step title="投 资 详 情" icon="el-icon-reading" description="请知悉您要投资的信息，确认无误后请点击下一步！"></el-step>
          <el-step title="确 认 投 资" icon="el-icon-d-arrow-right" description="已确认无误，请点击投资即可！"></el-step>
          <el-step title="投 资 成 功" icon="el-icon-finished" description="2019-10-17"></el-step>
        </el-steps>
      </div>
      <!--  1、步骤一  这是投标信息展示模块  -->
      <el-form v-if="isShowData.basicInformation">
        <el-row>
          <el-card class="box-card" style="background-color: whitesmoke;">
            <!--  头 部  -->
            <div slot="header" class="clearfix">
              <p align="left">总 额 ：{{detail.bidRequestAmount}}￥ ， 已 有 {{detail.bidCount}} 人 进 行 投 标 ,  共 投 资 ： {{detail.currentSum}} 元</p><br/>
            &nbsp;我 的 投 资：<input style="width: 66px;" v-model="detail.myAmount" />￥
              <p align="right">—— 借款人：{{detail.name}}</p>
            </div>
            <!--  主 体  -->
            <div class="text item">
              <span style="color:green;">安全分数 ：{{detail.score}}</span><br/><br/>
              <span>利 息 率 ：{{detail.rate}}</span><br/><br/>
              <span>月   数 ：{{detail.month}}</span><br/><br/>
                <p align="right" style="color: red;">可赚总利息：{{allRate}}</p>
            </div>
          </el-card>
          <!--  下一步   按钮  -->
          <el-col :span="24">
            <p align="left"><el-button @click="cancle" type="default">取消投标</el-button></p>
            <p style="color: green;" align="right">我已熟知投标信息&nbsp;&nbsp;<i class="el-icon-bottom-right"></i>&nbsp;&nbsp;&nbsp;&nbsp;
              <el-button type="success" round @click="toConfirm" style="float: right">下一步</el-button>
            </p>
          </el-col>
        </el-row>
      </el-form><br/>

      <!--  2、步骤二   这是确认信息模块   -->
      <el-row v-if="isShowData.confirm">
        <el-card class="box-card" style="background-color: whitesmoke;">
          <!--  头 部  -->
          <div slot="header" class="clearfix">
            <p>确 认 投 标 信 息 ：</p>
          </div><br/><br/><br/>
          <!--  主 体  -->
          <div class="text item">
            <el-col :span="3">&nbsp;</el-col>
            <el-col :span="8">我 的 投 资 总 额 :{{detail.myAmount}} ￥</el-col>
            <el-col :span="6">利 息 率 : {{detail.rate*100}} %</el-col>
            <el-col :span="6">可 获 利 息 : {{allRate}} ￥</el-col>
          </div><br/><br/><br/><br/><br/>
        </el-card>
        <p align="left"><el-button @click="cancle" type="default">取消投标</el-button></p>
        <div style="float: right; margin: 20px;">
          <el-button @click="back" type="default">修改投标金额</el-button>
          <el-button @click="next" icon="el-icon-check" type="success">申请投标</el-button>
        </div>
      </el-row>

      <!--  3、步骤三  这是申请成功页  -->
      <div style="text-align: center;margin-top: 40px;" v-if="isShowData.carryOut">
        <i class="el-icon-circle-check" style="font-size: 38px; color: green;">申请成功</i><br/><br/>
        <p>您的投标已提交成功，资金将会在XXX年XXX月XXX日返回到您的账户！</p><br/>
        <el-button @click="toRouter" style="margin-top: 53px;" type="text" >返回首页</el-button>
      </div>
    </el-card>
  </el-main>
</template>

<script>
  export default {
    name: "Bidding",
    data:function(){
      return {
        userMembers:null,
        bidD:null,//从投标界面传过来的值
        detail:{
          id:null,
          bidbidRequestAmount:null,
          bidCount:null,
          currentSum:null,
          myAmount:null,
          name:null,
          score:null,
          rate:null,
          month:null,
        },
        info:{
          //增加  投标表
          availableAmount:null,//我投标的额度
          bidRequestId:null,
          membersId:null,
          //修改  借贷表
          bidCount:null,//投资人数
          bidRequestAmount:null,//借款总额
          currentSum:null,//当前投标额度
          id:null,
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
    computed:{
      //在计算属性定义的时候,是可以获取到Vue实例中定义任何变量
      allRate(){
        return this.detail.rate*this.detail.myAmount*this.detail.month;
      }
    },
    created(){
      this.userMembers = this.$store.getters.getUserMembers;//用户的
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
      //返回首页
      toRouter(){
        // 跳转路由 返回首页
        this.$router.push({
          path: '/Reception/ReceptionHome'
        });
      },
      //取消投标  返回上一界面
      cancle(){
        this.$router.go(-1);//返回上一层

      },
      //确认投标
      toConfirm(){
        this.isShowData.basicInformation = false;
        this.isShowData.confirm = true;
        this.stepsActive = 2;
      },
      //步骤条 返回修改投标金额 上一步
      back(){
        this.isShowData.basicInformation = true;
        this.isShowData.confirm = false;
        this.stepsActive = 1;
      },
      //步骤条  投标
      next(){
        //增加  投标表
        this.info.availableAmount = this.detail.myAmount;//我的投标金额
        this.info.bidRequestId = this.detail.id;//投标表的bidRequestId
        this.info.membersId = this.userMembers.id;//模拟登录 投资人的id 我的id
        ////////////////////////
        //修改  借贷表
        this.info.bidCount = this.detail.bidCount;//投标人数
        this.info.bidRequestAmount = this.detail.bidRequestAmount;// 总 投标金额
        this.info.currentSum = this.detail.currentSum;//当前投标金额
        let url = this.axios.urls.SYSTEM_BID_BIDADD;
        let url1 = this.axios.urls.SYSTEM_BID_BIDADD1;
        this.axios.post(url,this.info).then((response)=>{
          this.axios.post(url1,this.info).then((response)=>{

          })
          alert("投标成功！");
          this.isShowData.confirm = false;
          this.isShowData.carryOut = true;
          this.stepsActive = 3;
        }).catch(function(error){//carch则是异常
          console.log("投资失败："+error);
      });
      }
    }
  }
</script>

<style scoped>

</style>

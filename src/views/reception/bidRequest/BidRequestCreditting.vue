<template>
  <el-main>
    <el-card class="box-card">
      <div class="clearfix" slot="header">
        <el-steps :active="stepsActive">
          <el-step title="信 用 贷 详 情" icon="el-icon-edit" description="请知悉您要贷款的信息，确认无误后请点击下一步！"></el-step>
          <el-step title="信 用 贷 申 请" icon="el-icon-edit" description="请认真填写贷款信息！"></el-step>
          <el-step title="确 认 贷 款" icon="el-icon-star-off" description="请确认您的贷款信息，确认无误后请点贷款按钮！"></el-step>
          <el-step title="提 交 成 功" icon="el-icon-circle-check" description="2019-10-17"></el-step>
        </el-steps>
      </div>

      <!--  1、步骤一  这是贷款信息展示模块  -->
      <el-form v-if="isShowData.Information">
        <el-row>
          <el-card class="box-card" style="background-color: whitesmoke;">
            <!--  头 部  -->
            <div slot="header" class="clearfix">
              &nbsp;<strong>投资总额：<input style="width: 60px;" v-model="bidMoney" /> </strong> ￥
              <p align="right">—— 借款人：XX</p>
            </div>
            <!--  主 体  -->
            <div class="text item">
              <span style="color:green;"><strong>安全分数：78</strong></span><br/><br/>
              <span><strong>利息率：2.27%</strong></span><br/><br/>
              <p align="right" style="color: red;"><strong>总利息：210 ￥</strong></p>
            </div>
          </el-card>
          <!--  下一步   按钮  -->
          <el-col :span="24">
            <p align="left"><el-button @click="cancle" type="default">取消贷款</el-button></p>
            <p style="color: green;" align="right">我已熟知贷款信息&nbsp;&nbsp;<i class="el-icon-bottom-right"></i>&nbsp;&nbsp;&nbsp;&nbsp;
              <el-button type="success" round @click="toConfirm" style="float: right">我要贷款</el-button>
            </p>
          </el-col>
        </el-row>
      </el-form>

      <!--  2、步骤二  这是填写贷款信息模块  -->
      <el-form v-if="isShowData.basicInformation"  :model="dictForm" :rules="dictRules" ref="dictForm">
        <el-row>
          <el-col :span="6">
            <el-form-item label=" 借 款 人：" label-width="100px">
              <el-input disabled="false" placeholder="XXX(用户名)" ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="18">
            <el-form-item label="借款标题" label-width="100px">
              <el-input v-model="input" placeholder="请输入借款标题"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="借款金额" label-width="100px">
              <el-input v-model="input" placeholder="请输入借款金额"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="年利率" label-width="100px">
              <el-input v-model="input" placeholder="请输入年利率"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="还款方式" label-width="100px">
              <el-radio-group v-model="radio" size="medium">
                <el-radio border label="一次付清" value="0"></el-radio>
                <el-radio border label="等额本息" value="1"></el-radio>
                <el-radio border label="等额本金" value="2"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="还款月数" label-width="100px">
              <el-select style="width: 100%;" value="1" @focus="focus" placeholder="sdaf">
                <el-option label="一月" value="1"></el-option>
                <el-option label="一月" value="2"></el-option>
                <el-option label="一月" value="3"></el-option>
                <el-option label="一月" value="4"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="利息" label-width="100px">
              <el-input disabled="false" placeholder="本金 X 利息 X 月数"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="借款说明" label-width="100px">
              <el-input type="textarea" :rows="4">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-button @click="last" style="float: left">上一步</el-button>
          </el-col>
          <el-col :span="12">
            <el-button @click="next" style="float: right">下一步</el-button>
          </el-col>
        </el-row>
      </el-form>

      <!--  3、步骤三  这是确认贷款页  -->
      <el-row v-if="isShowData.confirm"><br/>
        <p align="left">
              贷款总额:  <strong> 1100 ￥  &nbsp;&nbsp;&nbsp;&nbsp;</strong>  &nbsp;&nbsp;&nbsp;&nbsp;
              贷款利率:  <strong> 2.12 %   &nbsp;&nbsp;&nbsp;&nbsp;</strong>  &nbsp;&nbsp;&nbsp;&nbsp;
              总 利 息 : <strong>  110 ￥  &nbsp;&nbsp;&nbsp;&nbsp;</strong>  &nbsp;&nbsp;&nbsp;&nbsp;
              应还本金:  <strong> 12100 ￥ &nbsp;&nbsp;&nbsp;&nbsp;</strong>  &nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <div style="float: right; margin: 20px;">
          <el-button @click="back" type="default">修改贷款信息</el-button>
          <el-button @click="toCarryOut" icon="el-icon-success" type="success">申请贷款</el-button>
        </div>
      </el-row>

      <!--4、步骤四  这是申请成功页  -->
      <div v-if="isShowData.carryOut" style="text-align: center;margin-top: 40px;">
        <i class="el-icon-circle-check" style="font-size: 38px; color: rgb(14, 239, 59);">申请成功</i>
        <p style="color: rgb(153, 153, 153);">您的申请提交成功,申请结果将会在24小时内 短息/平台 同步,请耐心等待</p>
        <p style="color: rgb(153, 153, 153);">如有疑问 请致电 18874374737,很高效为您服务</p>
        <el-button @click="toRouter" style="margin-top: 53px;" type="text" >返回首页</el-button>
      </div>
    </el-card>
  </el-main>
</template>

<script>
  export default {
    name: "BidRequestCreditting",
    data:function(){
      return {
        stepsActive:1,
        isShowData:{
          Information:true,
          basicInformation:false,
          confirm:false,
          carryOut:false
        },
        radio: null,//单选框
      }
    },
    methods:{
      //返回首页
      toRouter(){
        // 跳转路由 返回首页
        this.$router.push({
          path: '/Reception'
        });
      },
      //取消投标  返回上一界面
      cancle(){
        this.$router.go(-1);//返回上一层
      },
      // 查看完贷款信息后 点击按钮“我要贷款” 到 步骤二
      toConfirm(){
        this.isShowData.Information = false;
        this.isShowData.basicInformation = true;
        this.isShowData.confirm = false;
        this.stepsActive = 2;

      },
      // 在填写贷款信息界面 点击按钮“上一步” 返回到 步骤一
      last(){
        this.isShowData.information = true;
        this.isShowData.basicInformation = false;
        this.isShowData.confirm = false;
        this.stepsActive = 1;
      },
      // 填写完贷款信息后 点击按钮“下一步” 到 步骤三
      next(){
        this.isShowData.basicInformation = false;
        this.isShowData.confirm = true;
        this.stepsActive = 3;
      },
      // 修改贷款信息 点击按钮“修改贷款信息” 到 步骤二
      back(){
        this.isShowData.Information = false;
        this.isShowData.basicInformation = true;
        this.isShowData.confirm = false;
        this.stepsActive = 2;

      },
      // 确认贷款信息无误后 点击按钮“申请贷款” 到 步骤四
      toCarryOut(){
        this.isShowData.confirm = false;
        this.isShowData.carryOut = true;
        this.stepsActive = 4;
      }
    },
    created() {
      commonUtils.init(this);
    }
  }
</script>

<style scoped>

</style>

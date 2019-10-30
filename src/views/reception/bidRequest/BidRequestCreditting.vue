<template>
  <el-main>
    <el-card class="box-card">
      <div class="clearfix" slot="header">
        <el-steps :active="stepsActive">
          <el-step title="信 用 贷 详 情" icon="el-icon-date" description="请知悉您要贷款的信息，确认无误后请点击下一步！"></el-step>
          <el-step title="信 用 贷 申 请" icon="el-icon-edit" description="请认真填写您要贷款的信息！"></el-step>
          <el-step title="确 认 贷 款" icon="el-icon-star-off" description="请确认您的贷款信息，确认无误后请点贷款按钮！"></el-step>
          <el-step title="提 交 成 功" icon="el-icon-circle-check" description="2019-10-17"></el-step>
        </el-steps>
      </div>

      <!--  1、步骤一  这是 信用贷款信息  展示 模块  -->
      <el-form v-if="isShowData.Information">
        <el-row><br/>
          <!-- 1.1 贷款条件 -->
          <el-col :span="7">
            <el-card class="box-card" style="background-color: lightyellow;">
              <!--  头 部  -->
              <div slot="header" class="clearfix" style="color: orangered"><strong>贷 款 条 件：</strong></div><br/><br/><br/>
              <!--  主 体  -->
              <div class="text item">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;基本资料填写&nbsp;&nbsp;&nbsp;&nbsp;<el-button type="danger" size="mini" icon="el-icon-check" circle></el-button></span><br/><br/><br/>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;身份认证通过&nbsp;&nbsp;&nbsp;&nbsp;<el-button type="danger" size="mini" icon="el-icon-check" circle></el-button></span><br/><br/><br/>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;资料认证完善&nbsp;&nbsp;&nbsp;&nbsp;<el-button type="danger" size="mini" icon="el-icon-check" circle></el-button></span><br/><br/><br/>
              </div><br/>
            </el-card>
          </el-col>
          <el-col :span="1">&nbsp;</el-col><!--  间隙  -->
          <!-- 1.2 贷款须知 -->
          <el-col :span="7">
            <el-card class="box-card" style="background-color: lightyellow;">
              <!--  头 部  -->
              <div slot="header" class="clearfix" style="color: orangered"><strong>贷 款 须 知：</strong></div><br/>
              <!--  主 体  -->
              <div class="text item">
                <p>1. 必须满足贷款的条件方可进行贷款</p>
                <p>2. 贷款申请需申请人认真并酌情填写</p>
                <p>3. 贷款申请内容须遵守一定的规范</p>
                <p>4. 贷款申请人最高可贷 10000 元</p>
                <p>5. 申请有流程，请耐心等待，♪(^∇^*)</p>
                <p>6. 关于贷款，我方具有绝对的解释权</p>
              </div><br/>
            </el-card>
          </el-col>
          <el-col :span="1">&nbsp;</el-col><!--  间隙  -->
          <!-- 1.3 贷款流程 -->
          <el-col :span="8">
            <el-card class="box-card" style="background-color: lightyellow;">
              <!--  头 部  -->
              <div slot="header" class="clearfix" style="color: orangered"><strong>贷 款 流 程：</strong></div><br/>
              <!--  主 体  -->
              <div class="text item">
                <p align="left">1、贷款申请填写、提交</p>
                <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i style="color: orangered;font-size: 34px" class="el-icon-bottom"></i></p>
                <p align="left">2、工作人员进行审核</p>
                <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i style="color: orangered;font-size: 34px" class="el-icon-bottom"></i></p>
                <p align="left">3、审核通过，资金到账</p>
                <p align="right" style="color: palevioletred;"><i class="el-icon-warning-outline"></i> 贷款申请不合格，不予通过！</p>
              </div>
            </el-card>
          </el-col>
        </el-row><br/><br/>
        <el-row>
          <el-col :span="2">&nbsp;</el-col>
          <!-- 1.4    按钮  -->
          <el-col :span="2">
            <p align="left"><el-button @click="cancle" type="default">取消贷款</el-button></p>
          </el-col>
          <el-col :span="20">
            <p style="color: green;" align="right">我已熟知贷款信息&nbsp;&nbsp;<i style="font-size: 18px" class="el-icon-bottom-right"></i>&nbsp;&nbsp;&nbsp;&nbsp;
              <el-button type="success" round @click="toConfirm" style="float: right">我要贷款</el-button>
            </p>
          </el-col>
        </el-row>
      </el-form>

      <!--  2、步骤二  这是  填写 信用贷款信息 模块  -->
      <el-form v-if="isShowData.basicInformation"  :model="dictForm" :rules="dictRules" ref="dictForm">
        <p><strong>贷 款 信 息 ：</strong></p>
        <el-row>
          <el-col :span="6">
            <el-form-item label=" 借 款 人 ：" label-width="100px">
              <el-input disabled="false" placeholder="XXX(用户名)" ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="18">
            <el-form-item label="借 款 标 题 :" label-width="100px">
              <el-input v-model="input" placeholder="请输入借款标题"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="借 款 金 额 :" label-width="100px">
              <el-input v-model="input" placeholder="请输入借款金额"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="年 利 率 :" label-width="100px">
              <el-input v-model="input" placeholder="请输入年利率"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="还 款 方 式 :" label-width="100px">
              <el-radio-group v-model="radio" size="medium">
                <el-radio border label="一 次 付 清" value="0"></el-radio>
                <el-radio border label="等 额 本 息" value="1"></el-radio>
                <el-radio border label="等 额 本 金" value="2"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="还 款 月 数 :" label-width="100px">
              <!--  信用贷款 -->
              <el-select style="width: 100%;" value="1" @focus="focus" placeholder="sdaf">
                <el-option label="一 月" value="1"></el-option>
                <el-option label="二 月" value="2"></el-option>
                <el-option label="三 月" value="3"></el-option>
                <el-option label="四 月" value="4"></el-option>
                <el-option label="五 月" value="5"></el-option>
                <el-option label="半 年" value="6"></el-option>
                <el-option label="七 月" value="7"></el-option>
                <el-option label="八 月" value="8"></el-option>
                <el-option label="九 月" value="9"></el-option>
                <el-option label="十 月" value="10"></el-option>
                <el-option label="一 年" value="12"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="总 利 息 :" label-width="100px">
              <el-input disabled="false" placeholder="本金 X 利息 X 月数"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="借 款 说 明 :" label-width="100px">
              <el-input type="textarea" :rows="4">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2">&nbsp;</el-col>
          <el-col :span="8"><br/><br/>
            <p align="left"><el-button @click="cancle" type="default">取消贷款</el-button></p>
          </el-col>
          <el-col :span="12"><br/><br/><br/>
            <el-button @click="next" style="float: right">下一步</el-button>
          </el-col>
        </el-row>
      </el-form>

      <!--  3、步骤三  这是  确认  信用贷款  页  -->
      <el-row v-if="isShowData.confirm"><br/><br/><br/><br/>
        <p align="left">
              贷款总额 :  <strong> 1100 ￥  &nbsp;&nbsp;&nbsp;&nbsp;</strong>  &nbsp;&nbsp;&nbsp;&nbsp;
              贷款利率 :  <strong> 2.12 %   &nbsp;&nbsp;&nbsp;&nbsp;</strong>  &nbsp;&nbsp;&nbsp;&nbsp;
              总 利 息 : <strong>  110 ￥  &nbsp;&nbsp;&nbsp;&nbsp;</strong>  &nbsp;&nbsp;&nbsp;&nbsp;
              应还本金 :  <strong> 12100 ￥ &nbsp;&nbsp;&nbsp;&nbsp;</strong>  &nbsp;&nbsp;&nbsp;&nbsp;
        </p><br/><br/>
        <p align="center">
          贷款方式 :   信用贷   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          还款方式 :   一次付清 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          还款月数 :   110 ￥   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p><br/><br/><br/><br/><br/><br/>
        <div style="float: right; margin: 20px;">
          <p align="right">已确认我的贷款申请&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i style="color: green;font-size: 24px" class="el-icon-bottom"></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <el-button @click="back" type="default">修改贷款信息</el-button>
          <el-button @click="toCarryOut" icon="el-icon-success" type="success">申请贷款</el-button>
        </div>
        <p align="left"><el-button @click="cancle" type="default">取消贷款</el-button></p>
      </el-row>

      <!--4、步骤四  这是  信用贷款 申请成功  页  -->
      <div v-if="isShowData.carryOut" style="text-align: center;margin-top: 40px;"><br/><br/><br/>
        <i class="el-icon-circle-check" style="font-size: 38px; color: rgb(14, 239, 59);">申请成功！</i><br/><br/>
        <p style="color: rgb(153, 153, 153);">您的申请提交成功,我方平台已接受处理中。。。。申请结果将会在24小时内 短息/平台 同步,请耐心等待</p>
        <p style="color: rgb(153, 153, 153);">如有疑问 请致电 ,很高效为您服务</p>
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
          path: '/Reception/ReceptionHome'
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

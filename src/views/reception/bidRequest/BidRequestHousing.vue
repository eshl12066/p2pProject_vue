<template>
  <el-main>
    <el-card class="box-card">
      <div class="clearfix" slot="header">
        <el-steps :active="stepsActive">
          <el-step title="房 贷 详 情" icon="el-icon-date" description="请知悉您要贷款的信息，确认无误后请点击下一步！"></el-step>
          <el-step title="房 产 抵 押" icon="el-icon-edit" description="请认真填写您要抵押的房子信息！"></el-step>
          <el-step title="房 贷 申 请" icon="el-icon-edit" description="请认真填写您要贷款的信息！"></el-step>
          <el-step title="确 认 贷 款" icon="el-icon-star-off" description="请确认您的贷款信息，确认无误后请点贷款按钮！"></el-step>
          <el-step title="提 交 成 功" icon="el-icon-circle-check" description="2019-10-17"></el-step>
        </el-steps>
      </div>

      <!--  1、步骤一  这是 房贷贷款信息 展示  模块  -->
      <el-form v-if="isShowData.Information">
        <el-row>
          <!-- 1.1 贷款条件 -->
          <el-col :span="7">
            <el-card class="box-card" style="background-color: lightyellow;">
              <!--  头 部  -->
              <div slot="header" class="clearfix" style="color: orangered"><strong>贷 款 条 件：</strong></div><br/><br/>
              <!--  主 体  -->
              <div class="text item">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;基本资料填写&nbsp;&nbsp;&nbsp;&nbsp;<el-button type="danger" size="mini" icon="el-icon-check" circle></el-button></span><br/><br/><br/>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;身份认证通过&nbsp;&nbsp;&nbsp;&nbsp;<el-button type="danger" size="mini" icon="el-icon-check" circle></el-button></span><br/><br/><br/>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;资料认证完善&nbsp;&nbsp;&nbsp;&nbsp;<el-button type="danger" size="mini" icon="el-icon-check" circle></el-button></span><br/><br/><br/>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;进行房产抵押&nbsp;&nbsp;&nbsp;&nbsp;<el-button type="danger" size="mini" icon="el-icon-check" circle></el-button></span><br/><br/><br/>
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
                <p>2. 房产抵押信息需申请人如实填写</p>
                <p>3. 贷款申请需申请人认真并酌情填写</p>
                <p>4. 贷款申请人最高可贷 80000 元</p>
                <p>5. 申请有流程，请耐心等待，♪(^∇^*)</p>
                <p>6. 关于贷款，我方具有绝对的解释权</p>
              </div><br/><br/><br/>
            </el-card>
          </el-col>
          <el-col :span="1">&nbsp;</el-col><!--  间隙  -->
          <!-- 1.3 贷款流程 -->
          <el-col :span="8">
            <el-card class="box-card" style="background-color: lightyellow;">
              <!--  头 部  -->
              <div slot="header" class="clearfix" style="color: orangered"><strong>贷 款 流 程：</strong></div>
              <!--  主 体  -->
              <div class="text item">
                <p align="left">1、抵押房产信息填写</p>
                <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i style="color: orangered;font-size: 24px" class="el-icon-bottom"></i></p>
                <p align="left">2、贷款申请填写、提交</p>
                <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i style="color: orangered;font-size: 24px" class="el-icon-bottom"></i></p>
                <p align="left">3、工作人员进行审核</p>
                <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i style="color: orangered;font-size: 24px" class="el-icon-bottom"></i></p>
                <p align="left">4、审核通过，资金到账</p>
                <p align="right" style="color: palevioletred;"><i class="el-icon-warning-outline"></i> 抵押房产信息填写有误 或 贷款申请不合格，不予通过！</p>
              </div>
            </el-card>
          </el-col>
        </el-row><br/>
        <el-row>
          <el-col :span="2">&nbsp;</el-col>
          <!-- 1.4    按钮  -->
          <el-col :span="2">
            <p align="left"><el-button @click="cancle" type="default">取消贷款</el-button></p>
          </el-col>
          <el-col :span="20">
            <p style="color: green;" align="right">我已熟知贷款信息&nbsp;&nbsp;<i style="font-size: 18px" class="el-icon-bottom-right"></i>&nbsp;&nbsp;&nbsp;&nbsp;
              <el-button type="success" round @click="toHome" style="float: right">房产抵押</el-button>
            </p>
          </el-col>
        </el-row>
      </el-form>

      <!--  2、步骤二  这是  填写 房产抵押信息  模块  -->
      <el-form v-if="isShowData.homeBasicInformation">
        <p><strong>房 产 信 息 ：</strong></p><br/><br/>
        <el-row><!--  第一行  -->
          <el-col :span="1">&nbsp;</el-col><!--  间隙  -->
          <el-col :span="6">
            <el-form-item label="房 屋 总 价 ：" label-width="100px">
              <el-input v-model="input1" placeholder="请输入您的房屋总价"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2">&nbsp;</el-col><!--  间隙  -->
          <el-col :span="6">
            <el-form-item label="房 屋 首 付 ：" label-width="100px">
              <el-input v-model="input2" placeholder="请输入您的房屋首付"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2">&nbsp;</el-col><!--  间隙  -->
          <el-col :span="6">
            <el-form-item label="房 龄 :" label-width="100px">
              <el-input v-model="input3" placeholder="请输入您的房龄"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="1">&nbsp;</el-col><!--  间隙  -->
        </el-row>
        <el-row><!--  第二行  -->
          <el-col :span="1">&nbsp;</el-col><!--  间隙  -->
          <el-col :span="7">
            <el-form-item label="保 险 情 况 :" label-width="100px">
              <el-radio-group v-model="radio1" size="medium">
                <el-radio border label="有 保 险" value="0"></el-radio>
                <el-radio border label="无 保 险" value="1"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="1">&nbsp;</el-col><!--  间隙  -->
          <el-col :span="7">
            <el-form-item label="损 坏 情 况 :" label-width="100px">
              <el-radio-group v-model="radio2" size="medium">
                <el-radio border label="有 损 坏" value="0"></el-radio>
                <el-radio border label="无 损 坏" value="1"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="1">&nbsp;</el-col><!--  间隙  -->
          <el-col :span="7">
            <el-form-item label="新 旧 程 度 :" label-width="100px">
              <el-radio-group v-model="radio3" size="medium">
                <el-radio-button label="很新" name="type"></el-radio-button>
                <el-radio-button label="新" name="type"></el-radio-button>
                <el-radio-button label="较旧" name="type"></el-radio-button>
                <el-radio-button label="旧" name="type"></el-radio-button>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row><!--  第三行  -->
          <el-col :span="2">&nbsp;</el-col><!--  间隙  -->
          <el-col :span="20">
            <el-form-item label="房 屋 地 址 :" label-width="100px">
              <el-input v-model="input4" placeholder="请输入您的房屋地址"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2">&nbsp;</el-col><!--  间隙  -->
        </el-row><br/>
        <el-row><!--  第四行  -->
          <el-col :span="2">&nbsp;</el-col><!--  间隙  -->
          <el-col :span="20">
            <el-form-item label="房 屋 描 述 :" label-width="100px">
              <el-input v-model="hometext" readonly="readonly" type="textarea" :rows="4"></el-input></el-form-item>
          </el-col>
          <el-col :span="2">&nbsp;</el-col><!--  间隙  -->
        </el-row>
        <el-row><!--  按钮  -->
          <el-col :span="2">&nbsp;</el-col><!--  间隙  -->
          <el-col :span="2">
            <p align="left"><el-button @click="cancle" type="default">取消贷款</el-button></p>
          </el-col>
          <el-col :span="16"><br/>
            <el-button @click="next1" style="float: right">下一步</el-button>
          </el-col><br/>
      </el-row>
      </el-form>

      <!--  3、步骤三  这是 填写 房贷贷款信息 模块  -->
      <el-form v-if="isShowData.basicInformation">
        <p><strong>贷 款 信 息 ：</strong></p>
        <el-row><br/>
          <el-col :span="6">
            <el-form-item label=" 借 款 人 ：" label-width="100px">
              <el-input readonly="readonly" v-model="homeInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="18">
            <el-form-item label="借 款 标 题 :" label-width="100px">
              <el-input placeholder="请输入借款标题" v-model="homeInfo.title"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="借 款 金 额 :" label-width="100px">
              <!--  房贷贷款  金额限制 -->
              <el-select @change="gets"  style="width: 100%;" value="1" v-model="homeInfo.bidRequestAmount">
                <el-option label="小 额 房 贷" disabled></el-option>
                <el-option label="20,0000    ￥" value="200000"></el-option>
                <el-option label="30,0000    ￥" value="300000"></el-option>
                <el-option label="60,0000    ￥" value="600000"></el-option>
                <el-option label="80,0000    ￥" value="800000"></el-option>
                <el-option label="高 额 房 贷" disabled></el-option>
                <el-option label="100,0000   ￥" value="1000000"></el-option>
                <el-option label="120,0000   ￥" value="1200000"></el-option>
                <el-option label="150,0000   ￥" value="1500000"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="年 利 率 :" label-width="100px">
              <el-select @change="gets"  style="width: 100%;" placeholder="利率选择需谨慎！" v-model="homeInfo.currentRate">
                <el-option label="小 额 利 率" disabled></el-option>
                <el-option label="0.06" value="0.06"></el-option>
                <el-option label="0.08" value="0.08"></el-option>
                <el-option label="0.10" value="0.10"></el-option>
                <el-option label="0.12" value="0.12"></el-option>
                <el-option label="0.14" value="0.14"></el-option>
                <el-option label="高 额 利 率" disabled></el-option>
                <el-option label="0.16" value="0.16"></el-option>
                <el-option label="0.20" value="0.20"></el-option>
                <el-option label="0.22" value="0.22"></el-option>
                <el-option label="0.24" value="0.24"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="还 款 方 式 :" label-width="100px">
              <el-radio-group size="medium" v-model="homeInfo.returnType">
                <el-radio border :label="0" >一 次 付 清</el-radio>
                <el-radio border :label="1" >等 额 本 息</el-radio>
                <el-radio border :label="2" >等 额 本 金</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="还 款 月 数 :" label-width="100px">
              <!--  房贷贷款 -->
              <el-select @change="gets" style="width: 100%;" value="1" v-model="homeInfo.monthesReturn">
                <el-option label="一 月" value="1"></el-option>
                <el-option label="三 月" value="3"></el-option>
                <el-option label="五 月" value="5"></el-option>
                <el-option label="六 月" value="6"></el-option>
                <el-option label="七 月" value="7"></el-option>
                <el-option label="九 月" value="9"></el-option>
                <el-option label="十 月" value="10"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="总 利 息 :" label-width="100px">
              <el-input readonly="readonly" placeholder="本金 X 利息 X 月数" v-model="homeInfo.totalRewardAmount"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="借 款 说 明 :" label-width="100px">
              <el-input type="textarea" :rows="4" v-model="homingtext"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2">&nbsp;</el-col><!--  间隙  -->
          <el-col :span="8"><br/>
            <p align="left"><el-button @click="cancle" type="default">取消贷款</el-button></p>
          </el-col>
          <el-col :span="6"><br/><br/>
            <el-button @click="last1" style="float: right">上一步</el-button>
          </el-col>
          <el-col :span="4"><br/><br/>
            <el-button @click="next2" style="float: right">下一步</el-button>
          </el-col><br/>
        </el-row>
      </el-form>

      <!--  4、步骤四  这是 确认 房贷贷款  页  -->
      <el-row v-if="isShowData.confirm"><br/><br/><br/><br/>
        <p align="left">
          借 款 人 ：   {{homeInfo.name}}&nbsp;&nbsp;&nbsp;&nbsp;
          贷款总额 :   {{homeInfo.bidRequestAmount}} ￥  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          贷款利率 :   {{homeInfo.currentRate}}%   &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;
          总 利 息 :   {{homeInfo.totalRewardAmount}} ￥  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        </p><br/><br/>
        <p align="center">
          <!--还款方式 ：{{homeInfo.stype}}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-->
          贷款方式 :   房 贷 贷 款   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          还款月数 :   {{homeInfo.monthesReturn}}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p><br/><br/>
        <p align="right">借 款 标 题 ：{{homeInfo.title}}</p>
        <div style="float: right; margin: 20px;">
          <p align="right">已确认我的贷款申请&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i style="color: green;font-size: 24px" class="el-icon-bottom"></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <el-button @click="last2" type="default">修改贷款信息</el-button>
          <el-button @click="toCarryOut" icon="el-icon-success" type="success">申请贷款</el-button>
        </div>
        <p align="left"><el-button @click="cancle" type="default">取消贷款</el-button></p>
      </el-row>

      <!--5、步骤五  这是 申请成功 页  -->
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
    name: "BidRequestHousing",
    data:function(){
      return {
        //步骤条
        stepsActive:1,
        isShowData:{
          Information:true,
          homeBasicInformation:false,
          basicInformation:false,
          confirm:false,
          carryOut:false
        },
        //步骤二  填写房产信息 文本框
        input1:"待填",
        input2:"待填",
        input3:"待填",
        input4:"待填",
        //步骤二  填写房产信息 单选框
        radio1: "待填",//单选框
        radio2: "待填",//单选框
        radio3: "待填",//单选框
        //步骤三：填写房贷贷款基本信息 步骤四：确认房产贷款基本信息
        homein:null,//房产描述
        homingtext:null,//借款说明
        homeInfo:{//房产表单信息填写
          name:"蛋蛋",
          title:null,
          bidRequestAmount:null,
          currentRate:null,
          returnType:null,
          bidRequestType:2,//房贷
          monthesReturn:null,
          totalRewardAmount:null,
          description:"",
          // disableDate:null,//投标截止时间
          membersId:308,//模拟用户登录
        },
      }
    },
    computed:{
      //车辆信息描述  步骤二
      hometext(){
        var str = "房屋总价："+this.input1+";***\t\t\t房屋首付："+this.input2+";***\t\t\t房龄:"+this.input3+ ";***\n房屋地址:"+this.input4+
          ";***\n保险情况 :"+this.radio1+";***\t\t\t损坏情况 :："+this.radio2+";***\t\t\t新旧程度："+this.radio3;
        this.homein = str;//车辆信息描述
        return str;
      }
    },
    created() {
      commonUtils.init(this);
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
      gets(val) {
        //计算利息
        if (this.homeInfo.bidRequestAmount != null && this.homeInfo.currentRate != null && this.homeInfo.monthesReturn) {
          this.homeInfo.totalRewardAmount = this.homeInfo.bidRequestAmount * this.homeInfo.currentRate * this.homeInfo.monthesReturn;
        }
      },
      // 查看 完房贷贷款信息后 点击按钮“房产抵押” 到 步骤二
      toHome(){
        this.isShowData.Information = false;
        this.isShowData.homeBasicInformation = true;
        this.isShowData.basicInformation = false;
        this.isShowData.confirm = false;
        this.stepsActive = 2;
      },
      // 在填写贷款信息界面 点击按钮“上一步” 返回到 步骤二
      last1(){
        this.isShowData.information = false;
        this.isShowData.homeBasicInformation = true;
        this.isShowData.basicInformation = false;
        this.isShowData.confirm = false;
        this.stepsActive = 2;
      },
      // 在确认贷款信息界面 点击按钮“上一步” 返回到 步骤三
      last2(){
        this.isShowData.information = false;
        this.isShowData.homeBasicInformation = false;
        this.isShowData.basicInformation = true;
        this.isShowData.confirm = false;
        this.stepsActive = 3;
      },
      // 填写完  房产抵押信息 后 点击按钮“下一步” 到 步骤三
      next1(){
        this.isShowData.information = false;
        this.isShowData.homeBasicInformation = false;
        this.isShowData.basicInformation = true;
        this.isShowData.confirm = false;
        this.stepsActive = 3;
      },
      // 填写完  贷款信息 后 点击按钮“下一步” 到 步骤四
      next2(){
        this.homeInfo.description = this.homingtext + "***\t\n" + this.homein;//贷款描述
        this.isShowData.information = false;
        this.isShowData.homeBasicInformation = false;
        this.isShowData.basicInformation = false;
        this.isShowData.confirm = true;
        this.stepsActive = 4;
      },
      // 确认贷款信息无误后 点击按钮“申请贷款” 到 步骤五
      toCarryOut(){
        //增加贷款 车贷
        let url = this.axios.urls.SYSTEM_BIDREQUEST_INSERTBIDREQUEST;
        this.axios.post(url,this.homeInfo).then((response)=>{
          alert("房贷贷款申请成功！");
          this.isShowData.confirm = false;
          this.isShowData.carryOut = true;
          this.stepsActive = 5;
        }).catch(function(error){//carch则是异常
          console.log("房贷贷款失败："+error);
        });
      }
    }
  }
</script>

<style scoped>

</style>

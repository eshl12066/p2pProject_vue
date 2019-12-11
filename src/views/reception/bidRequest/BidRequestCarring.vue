<template>
  <el-main>
    <el-card class="box-card">
      <div class="clearfix" slot="header">
        <el-steps :active="stepsActive">
          <el-step title="车 贷 详 情" icon="el-icon-date" description="请知悉您要贷款的信息，确认无误后请点击下一步！"></el-step>
          <el-step title="车 辆 抵 押" icon="el-icon-edit" description="请认真填写您要抵押的车辆信息！"></el-step>
          <el-step title="车 贷 申 请" icon="el-icon-edit" description="请认真填写您要贷款的信息！"></el-step>
          <el-step title="确 认 贷 款" icon="el-icon-star-off" description="请确认您的贷款信息，确认无误后请点贷款按钮！"></el-step>
          <el-step title="提 交 成 功" icon="el-icon-circle-check" description="2019-10-17"></el-step>
        </el-steps>
      </div>

      <!--  1、步骤一  这是 车贷贷款信息 展示  模块  -->
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
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;进行车辆抵押&nbsp;&nbsp;&nbsp;&nbsp;<el-button type="danger" size="mini" icon="el-icon-check" circle></el-button></span><br/><br/><br/>
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
                <p>2. 车辆抵押信息需申请人如实填写</p>
                <p>3. 贷款申请需申请人认真并酌情填写</p>
                <p>4. 贷款申请人最高可贷 60000 元</p>
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
                <p align="left">1、抵押车辆信息填写</p>
                <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i style="color: orangered;font-size: 24px" class="el-icon-bottom"></i></p>
                <p align="left">2、贷款申请填写、提交</p>
                <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i style="color: orangered;font-size: 24px" class="el-icon-bottom"></i></p>
                <p align="left">3、工作人员进行审核</p>
                <p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i style="color: orangered;font-size: 24px" class="el-icon-bottom"></i></p>
                <p align="left">4、审核通过，资金到账</p>
                <p align="right" style="color: palevioletred;"><i class="el-icon-warning-outline"></i> 抵押车辆信息填写有误 或 贷款申请不合格，不予通过！</p>
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
              <el-button type="success" round @click="toCar" style="float: right">车辆抵押</el-button>
            </p>
          </el-col>
        </el-row>
      </el-form>

      <!--  2、步骤二  这是  填写 车辆抵押信息  模块  -->
      <el-form v-if="isShowData.carBasicInformation">
        <p><strong>车 辆 信 息 ：</strong></p>
        <el-row><!--  第一行  -->
          <el-col :span="1">&nbsp;</el-col><!--  间隙  -->
          <el-col :span="6">
            <el-form-item label="车 辆 品 牌 :" label-width="100px">
              <el-input v-model="input1" placeholder="请输入您的车辆品牌"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2">&nbsp;</el-col><!--  间隙  -->
          <el-col :span="6">
            <el-form-item label="车 辆 型 号 :" label-width="100px">
              <el-input v-model="input2" placeholder="请输入您的车辆型号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2">&nbsp;</el-col><!--  间隙  -->
          <el-col :span="6">
            <el-form-item label="发 动 机 型 :" label-width="100px">
              <el-input v-model="input3" placeholder="请输入您的车辆发动机型号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="1">&nbsp;</el-col><!--  间隙  -->
        </el-row>
        <el-row><!--  第二行  -->
          <el-col :span="1">&nbsp;</el-col><!--  间隙  -->
          <el-col :span="6">
            <el-form-item label="裸 车 价 格 :" label-width="100px">
              <el-input v-model="input4" placeholder="请输入您的裸车价格"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2">&nbsp;</el-col><!--  间隙  -->
          <el-col :span="6">
            <el-form-item label="牌 照 价 格 :" label-width="100px">
              <el-input v-model="input5" placeholder="请输入车辆牌照价格"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2">&nbsp;</el-col><!--  间隙  -->
          <el-col :span="6">
            <el-form-item label="购 买 时 间 :" label-width="100px">
              <el-date-picker v-model="time6" value-format="yyyy-MM-dd" type="datetime" placeholder="选择购买车辆的日期时间"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="1">&nbsp;</el-col><!--  间隙  -->
        </el-row>
        <el-row><!--  第三行  -->
          <el-col :span="1">&nbsp;</el-col><!--  间隙  -->
          <el-col :span="7">
            <el-form-item label="牌 照 情 况 :" label-width="100px">
              <el-radio-group v-model="radio1" size="medium">
                <el-radio border label="本 地 牌 照" value="本 地 牌 照"></el-radio>
                <el-radio border label="外 地 牌 照" value="外 地 牌 照"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="1">&nbsp;</el-col><!--  间隙  -->
          <el-col :span="7">
            <el-form-item label="出 现 情 况 :" label-width="100px">
              <el-radio-group v-model="radio2" size="medium">
                <el-radio border label="未 出 现" value="未 出 现"></el-radio>
                <el-radio border label="已 出 现" value="已 出 现"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="1">&nbsp;</el-col><!--  间隙  -->
          <el-col :span="7">
            <el-form-item label="进 口 情 况 :" label-width="100px">
              <el-radio-group v-model="radio3" size="medium">
                <el-radio border label="进   口" value="进   口"></el-radio>
                <el-radio border label="非 进 口" value="非 进 口"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row><!--  第四行  -->
          <el-col :span="1">&nbsp;</el-col><!--  间隙  -->
          <el-col :span="7">
            <el-form-item label="保 险 情 况 :" label-width="100px">
              <el-radio-group v-model="radio4" size="medium">
                <el-radio border label="有 保 险" value="有 保 险"></el-radio>
                <el-radio border label="无 保 险" value="无 保 险"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="1">&nbsp;</el-col><!--  间隙  -->
          <el-col :span="7">
            <el-form-item label="损 坏 情 况 :" label-width="100px">
              <el-radio-group v-model="radio5" size="medium">
                <el-radio border label="有 损 坏" value="有 损 坏"></el-radio>
                <el-radio border label="无 损 坏" value="无 损 坏"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="1">&nbsp;</el-col><!--  间隙  -->
          <el-col :span="7">
            <el-form-item label="新 旧 程 度 :" label-width="100px">
              <el-radio-group v-model="radio6" size="medium">
                <el-radio-button value="很新" label="很新" name="type"></el-radio-button>
                <el-radio-button value="新"  label="新" name="type"></el-radio-button>
                <el-radio-button value="较旧" label="较旧" name="type"></el-radio-button>
                <el-radio-button value="旧" label="旧" name="type"></el-radio-button>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row><br/>
        <el-row><!--  第五行  -->
          <el-col :span="2">&nbsp;</el-col><!--  间隙  -->
          <el-col :span="20">
            <el-form-item label="车 辆 描 述 :" label-width="100px"  >
              <el-input type="textarea" v-model="cartext" readonly="readonly" :rows="4">
              </el-input>
            </el-form-item>
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

      <!--  3、步骤三  这是 填写 车贷贷款信息 模块  -->
      <el-form v-if="isShowData.basicInformation">
        <p><strong>贷 款 信 息 ：</strong></p>
        <el-row><br/>
          <el-col :span="6">
            <el-form-item label=" 借 款 人 ：" label-width="100px">
              <el-input readonly="readonly" v-model="carInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="18">
            <el-form-item label="借 款 标 题 :" label-width="100px">
              <el-input placeholder="请输入借款标题" v-model="carInfo.title"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item @change="gets" label="借 款 金 额 :" label-width="100px">
              <!--  车贷贷款  金额限制 -->
              <el-select @change="gets"  style="width: 100%;" value="1" v-model="carInfo.bidRequestAmount">
                <el-option label="小 额 车 贷" disabled></el-option>
                <el-option label="1,0000    ￥" value="10000"></el-option>
                <el-option label="3,0000    ￥" value="30000"></el-option>
                <el-option label="6,0000    ￥" value="60000"></el-option>
                <el-option label="8,0000    ￥" value="80000"></el-option>
                <el-option label="12,0000   ￥" value="120000"></el-option>
                <el-option label="高 额 车 贷" disabled></el-option>
                <el-option label="15,0000   ￥" value="150000"></el-option>
                <el-option label="18,0000   ￥" value="180000"></el-option>
                <el-option label="20,0000   ￥" value="200000"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item @change="gets" label="年 利 率 :" label-width="100px">
              <el-select @change="gets"  style="width: 100%;" placeholder="利率选择需谨慎！" v-model="carInfo.currentRate">
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
              <el-radio-group size="medium" v-model="carInfo.returnType">
                <el-radio border :label="0" >一 次 付 清</el-radio>
                <el-radio border :label="1" >等 额 本 息</el-radio>
                <el-radio border :label="2" >等 额 本 金</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item @change="gets" label="还 款 月 数 :" label-width="100px">
              <!--  车贷贷款 -->
              <el-select @change="gets" style="width: 100%;" value="1" v-model="carInfo.monthesReturn">
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
              <el-input readonly="readonly" placeholder="本金 X 利息 X 月数" v-model="carInfo.totalRewardAmount"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="借 款 说 明 :" label-width="100px">
              <el-input type="textarea" :rows="4" v-model="carringtext"></el-input>
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

      <!--  4、步骤四  这是 确认 车贷贷款  页  -->
      <el-row v-if="isShowData.confirm"><br/><br/><br/><br/>
        <p align="left">
          借 款 人 ：   {{carInfo.name}}&nbsp;&nbsp;&nbsp;&nbsp;
          贷款总额 :   {{carInfo.bidRequestAmount}} ￥  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          贷款利率 :   {{carInfo.currentRate}}%   &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;
          总 利 息 :   {{carInfo.totalRewardAmount}} ￥  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        </p><br/><br/>
        <p align="center">
          <!--还款方式 ：{{carInfo.stype}}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-->
          贷款方式 :   车 贷 贷 款   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          还款月数 :   {{carInfo.monthesReturn}}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p><br/><br/>
        <p align="right">借 款 标 题：{{carInfo.title}}</p>
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
    name: "BidRequestCarring",
    data:function(){
      return {
        //步骤条
        stepsActive:1,
        isShowData:{
          Information:true,
          carBasicInformation:false,
          basicInformation:false,
          confirm:false,
          carryOut:false
        },
        //步骤二  填写车辆信息 文本框
        input1:"待填",
        input2:"待填",
        input3:"待填",
        input4:"待填",
        input5:"待填",
        time6:null,
        //步骤二  填写车辆信息 单选框
        radio1: "待填",//单选框
        radio2: "待填",//单选框
        radio3: "待填",//单选框
        radio4: "待填",//单选框
        radio5: "待填",//单选框
        radio6: "待填",//单选框
        //步骤三：填写车贷贷款基本信息 步骤四：确认车贷贷款基本信息
        carin:null,//车辆描述
        carringtext:null,//借款说明
        userMembers:null,
        carInfo:{//车贷表单信息填写
          name:null,
          title:null,
          bidRequestAmount:null,
          currentRate:null,
          returnType:null,
          bidRequestType:1,//车贷
          monthesReturn:null,
          totalRewardAmount:null,
          description:"",
          // disableDate:null,//投标截止时间
          membersId:null,//模拟用户登录

        },
      }
    },
    computed:{
      //车辆信息描述  步骤二
      cartext(){
        var str = "车辆品牌："+this.input1+";***\t\t\t车辆型号："+this.input2+";***\t\t\t发动机型："+this.input3+
          ";***\n裸车价格："+this.input4+""+ ";***\t\t\t牌照时间:"+this.input5+";***\t\t\t购买时间:"+this.time6+
          ";***\n牌照情况："+this.radio1+";***\t\t\t出现情况："+this.radio2+";***\t\t\t进口情况："+this.radio3+
          "***\n保险情况："+this.radio4+";***\t\t\t损坏情况："+this.radio5+";***\t\t\t新旧程度:"+this.radio6+";***";
        this.carin = str;//车辆信息描述
        return str;
      }
    },
    created() {
      this.userMembers = this.$store.getters.getUserMembers;//用户的
      this.carInfo.name=this.userMembers.name;
      this.carInfo.membersId = this.userMembers.id;

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
        if (this.carInfo.bidRequestAmount != null && this.carInfo.currentRate != null && this.carInfo.monthesReturn) {
          this.carInfo.totalRewardAmount = this.carInfo.bidRequestAmount * this.carInfo.currentRate * this.carInfo.monthesReturn;
          // this.carInfo.sa = "本金 X 利息 X 月数 :"+this.carInfo.bidRequestAmount+" X "+this.carInfo.currentRate+" X "+this.carInfo.monthesReturn+" = "+this.carInfo.totalRewardAmount;
        }
      },
      // 查看 完车贷贷款信息后 点击按钮“车辆抵押” 到 步骤二
      toCar(){
        this.isShowData.Information = false;
        this.isShowData.carBasicInformation = true;
        this.isShowData.basicInformation = false;
        this.isShowData.confirm = false;
        this.stepsActive = 2;
      },
      // 在填写贷款信息界面 点击按钮“上一步” 返回到 步骤二
      last1(){
        this.isShowData.information = false;
        this.isShowData.carBasicInformation = true;
        this.isShowData.basicInformation = false;
        this.isShowData.confirm = false;
        this.stepsActive = 2;
      },
      // 在确认贷款信息界面 点击按钮“上一步” 返回到 步骤三
      last2(){
        this.isShowData.information = false;
        this.isShowData.carBasicInformation = false;
        this.isShowData.basicInformation = true;
        this.isShowData.confirm = false;
        this.stepsActive = 3;
      },
      // 填写完  车辆抵押信息 后 点击按钮“下一步” 到 步骤三
      next1(){
        this.isShowData.information = false;
        this.isShowData.carBasicInformation = false;
        this.isShowData.basicInformation = true;
        this.isShowData.confirm = false;
        this.stepsActive = 3;
      },
      // 填写完  贷款信息 后 点击按钮“下一步” 到 步骤四
      next2(){
        this.carInfo.description = this.carringtext + "***\t\n" + this.carin;//贷款描述
        this.isShowData.information = false;
        this.isShowData.carBasicInformation = false;
        this.isShowData.basicInformation = false;
        this.isShowData.confirm = true;
        this.stepsActive = 4;
      },
      // 确认贷款信息无误后 点击按钮“申请贷款” 到 步骤五
      toCarryOut(){
        //增加贷款 车贷
        let url = this.axios.urls.SYSTEM_BIDREQUEST_INSERTBIDREQUEST;
        this.axios.post(url,this.carInfo).then((response)=>{
          alert("车贷贷款申请成功！");
          this.isShowData.confirm = false;
          this.isShowData.carryOut = true;
          this.stepsActive = 5;
        }).catch(function(error){//carch则是异常
          console.log("车贷贷款失败："+error);
        });
      }
    }
  }
</script>

<style scoped>

</style>

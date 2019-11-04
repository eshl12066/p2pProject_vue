<template>
  <!--<el-container>-->
  <!--<el-aside></el-aside>&lt;!&ndash;居中&ndash;&gt;-->
  <div style="background-color: white;">
    <!--<el-row>-->
      <!--<el-col :span="24">-->
        <!--<el-carousel trigger="click" :height="bannerH +'2000px'" >-->
          <!--<el-carousel-item v-for="(item,index) in bannerImgLst" :key="index">-->
            <!--<img src="../../../assets/img/3.jpg" class="bannerImg" width="1500px"/>-->
          <!--</el-carousel-item>-->
          <!--<el-carousel-item v-for="(item,index) in bannerImgLst" :key="index">-->
            <!--<img src="../../../assets/img/4.jpg" class="bannerImg" width="1500px"/>-->
          <!--</el-carousel-item>-->
          <!--<el-carousel-item v-for="(item,index) in bannerImgLst" :key="index">-->
            <!--<img src="../../../assets/img/5.jpg" class="bannerImg" width="1500px"/>-->
          <!--</el-carousel-item>-->
          <!--<el-carousel-item v-for="(item,index) in bannerImgLst" :key="index">-->
            <!--<img src="../../../assets/img/6.jpg" class="bannerImg" width="1500px"/>-->
          <!--</el-carousel-item>-->
        <!--</el-carousel><br/><br/>-->
      <!--</el-col>-->
      <!--<div style="background-color: #eee;">-->
        <!--<el-col style="text-indent: 48px; font-size: 36px;" :span="8">-->
          <!--<i class="el-icon-s-management" style="text-indent: 13px; height: 50px;">安全理财</i>-->
        <!--</el-col>-->
        <!--<el-col style="text-indent: 48px; font-size: 36px;" :span="8">-->
          <!--<i class="el-icon-s-marketing" style="text-indent: 13px; height: 50px;">高收益</i>-->
        <!--</el-col>-->
        <!--<el-col style="text-indent: 48px; font-size: 36px;" :span="8">-->
          <!--<i class="el-icon-s-finance" style="height: 50px;">随时随</i>-->
        <!--</el-col>-->
      <!--</div>-->
    <!--</el-row><br/><br/>-->
  <el-row >
    <!--空格 间隙-->
    <el-col :span="2">&nbsp;</el-col>
    <el-col :span="6">
      <!--信用贷-->
        <el-card class="box-card" style="background-color: powderblue;"><br/>
          <div slot="header" class="clearfix">
            <strong style="color: deeppink">&nbsp;信 用 贷</strong><br/>
            <el-tooltip align="right" effect="light" placement="left-end">
              <div slot="content">无担保、无抵押！<br/><br/>各种消费用途，随心选择！<br/><br/>为高端人士专属定制，根据良好的信用记录和稳定的经济收入，为您提供充裕贷款！</div><br/>
              <el-button style="float: right; padding: 3px 0;" type="text"><strong>贷 款 须 知</strong></el-button>
            </el-tooltip>
          </div><br/>
          <div class="text item">
            <span>认证后可借金额 ：600 ￥</span>
            <!--分割线-->
            <el-divider></el-divider>
            <el-button type="primary" disabled>贷 款 条 件 如 下 ：</el-button><br/><br/><br/>
            <p align="center">
              <span>基本资料填写&nbsp;&nbsp;&nbsp;&nbsp;<el-button type="success" size="mini" icon="el-icon-check" circle></el-button></span><br/><br/>
              <span>身份认证通过&nbsp;&nbsp;&nbsp;&nbsp;<el-button type="success" size="mini" icon="el-icon-check" circle></el-button></span><br/><br/>
              <span>资料认证完善&nbsp;&nbsp;&nbsp;&nbsp;<el-button type="danger" size="mini" icon="el-icon-close" circle></el-button></span><br/><br/><br/>
            </p><br/>
            <p align="right">
              <!--信用贷  creditting    -->
              <el-tooltip placement="top" effect="light">
                <div slot="content">
                  个人信用贷款:<br/><br/>
                  贷款申请人无需任何抵押或担保，只需凭个人信用状况，即可从平台获得贷款。<br/><br/>
                  信誉越高，贷款额度也会有所提高。<br/><br/>
                  贷款用途:小额信用消费贷款主要用于借款人正常消费需求及劳务等费用支付。<br/><br/>
                  贷款限额:小额信用消费贷款的最高限额为10000元人民币。<br/><br/>
                  贷款期限:小额信用消费贷款的最长期限为一年。<br/><br/>
                </div>
                <el-button type="default" round>查 看 详 情</el-button>
              </el-tooltip>
              <el-button type="primary" @click="toCreditting" plain>申 请 信 用 贷</el-button>
            </p>
          </div>
        </el-card>
    </el-col>
    <!--空格 间隙-->
    <el-col :span="1">&nbsp;</el-col>
    <el-col :span="6">
      <!--车易贷-->
        <el-card class="box-card" style="background-color: lightblue;"><br/>
          <div slot="header" class="clearfix">
            <strong style="color: deeppink">&nbsp;车 易 贷</strong><br/>
            <el-tooltip align="right" effect="light" placement="left-end">
              <div slot="content">专业的P2P平台！<br/><br/>各种消费用途，随心选择！<br/><br/>提供小额贷款,网贷,民间借贷,信用贷款,P2P贷款,P2P理财,网络理财等服务！</div><br/>
              <el-button style="float: right; padding: 3px 0" type="text"><strong>贷 款 须 知</strong></el-button>
            </el-tooltip>
          </div><br/>
          <div class="text item">
            <span>认证后可借金额 ：1000 ￥</span>
            <!--分割线-->
            <el-divider></el-divider>
            <el-button type="primary" disabled>贷 款 条 件 如 下 ：</el-button><br/><br/><br/>
            <p align="center">
              <span>基本资料填写&nbsp;&nbsp;&nbsp;&nbsp;<el-button type="success" size="mini" icon="el-icon-check" circle></el-button></span><br/><br/>
              <span>身份认证通过&nbsp;&nbsp;&nbsp;&nbsp;<el-button type="success" size="mini" icon="el-icon-check" circle></el-button></span><br/><br/>
              <span>资料认证完善&nbsp;&nbsp;&nbsp;&nbsp;<el-button type="danger" size="mini" icon="el-icon-close" circle></el-button></span><br/><br/><br/>
            </p><br/>
            <p align="right">
              <!--车易贷-->
              <el-tooltip placement="top" effect="light">
                <div slot="content">
                  车贷贷款:<br/><br/>
                  汽车抵押贷款具体贷款金额是根据车辆自身价值评估后的7折-8折的金额。<br/><br/>
                  汽车抵押贷款是以借款人或第三人的汽车作为抵押物向本平台取得的贷款。<br/><br/>
                  贷款用途:较大额信用消费贷款主要用于借款人正常消费需求或投资创业等费用支付。<br/><br/>
                  贷款限额:车贷贷款的最高限额为60000元人民币。<br/><br/>
                  贷款期限:车贷贷款的最长期限为两年。<br/><br/>
                </div>
                <el-button type="default" round>查 看 详 情</el-button>
              </el-tooltip>
              <el-button type="primary" @click="toCarring" plain>申 请 车 贷</el-button>
            </p>
          </div>
        </el-card>
    </el-col>

    <!--空格 间隙-->
    <el-col :span="1">&nbsp;</el-col>

    <el-col :span="6">
      <!--房易贷-->
        <el-card class="box-card" style="background-color: lightskyblue;"><br/>
          <div slot="header" class="clearfix">
            <strong style="color: deeppink">&nbsp;房 易 贷</strong><br/>
            <el-tooltip align="right" effect="light" placement="left-end">
              <div slot="content">专业互联网金融平台！<br/><br/>专注于全产房抵押贷款业务！<br/><br/>为广大缺乏投资渠道的人们提供一个安全、诚信的服务！</div><br/>
              <el-button style="float: right; padding: 3px 0" type="text"><strong>贷 款 须 知</strong></el-button>
            </el-tooltip>
          </div><br/>
          <div class="text item">
            <span>认证后可借金额 ：1000 ￥</span>
            <!--分割线-->
            <el-divider></el-divider>
            <el-button type="primary" disabled>贷 款 条 件 如 下 ：</el-button><br/><br/><br/>
            <p align="center">
              <span>基本资料填写&nbsp;&nbsp;&nbsp;&nbsp;<el-button type="success" size="mini" icon="el-icon-check" circle></el-button></span><br/><br/>
              <span>身份认证通过&nbsp;&nbsp;&nbsp;&nbsp;<el-button type="success" size="mini" icon="el-icon-check" circle></el-button></span><br/><br/>
              <span>资料认证完善&nbsp;&nbsp;&nbsp;&nbsp;<el-button type="danger" size="mini" icon="el-icon-close" circle></el-button></span><br/><br/><br/>
            </p><br/>
            <p align="right">
              <!--房易贷-->
              <el-tooltip placement="top" effect="light">
                <div slot="content">
                  房贷贷款:<br/><br/>
                  房产抵押贷款具体贷款金额是根据房产自身价值评估后的7折-8折的金额。<br/><br/>
                  房产抵押贷款是以借款人或第三人的房产作为抵押物向本平台取得的贷款。<br/><br/>
                  贷款用途:较大额信用消费贷款主要用于借款人正常消费需求或投资创业等费用支付。<br/><br/>
                  贷款限额:房产贷款的最高限额为90000元人民币。<br/><br/>
                  贷款期限:房产贷款的最长期限为两年。<br/><br/>
                </div>
                <el-button type="default" round>查 看 详 情</el-button>
              </el-tooltip>
              <el-button type="primary" @click="toHousing" plain>申 请 房 贷</el-button>
            </p>
          </div>
        </el-card>
    </el-col>

    <!--空格 间隙-->
    <el-col :span="1">&nbsp;</el-col>

  </el-row>
  <!--</el-container>-->
  </div>
</template>

<script>
  export default {
    name: "BidRequestCreditting",
    data() {
      return {
        // bannerH:200,//图片轮番滚动
        // bannerImgLst:['src/assets/img/7.png'],
      };
    },
    methods: {
      // setBannerH(){//图片轮番滚动
      //   this.bannerH = document.body.clientWidth / 4
      // },
      //跳转到信用贷贷款
      toCreditting(){
        // 跳转路由 去信用贷贷款界面 Creditting
        this.$router.push({
          path:"/reception/BidRequestCreditting"
        });
      },
      //跳转到车贷贷款
      toCarring(){
        // 跳转路由 去车贷贷款界面 Carring
        this.$router.push({
          path:"/reception/BidRequestCarring"
        });
      },
      //跳转到房贷贷款
      toHousing(){
        // 跳转路由 去车贷贷款界面 Carring
        this.$router.push({
          path:"/reception/BidRequestHousing"
        });
      }
    },
    // mounted(){
    //   this.setBannerH()
    // },
  };
</script>

<style scoped>

</style>

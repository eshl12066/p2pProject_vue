<template>
  <!--<el-container>-->
  <!--<el-aside></el-aside>&lt;!&ndash;居中&ndash;&gt;-->

  <el-row >
    <br/><br/>

    <!--空格 间隙-->
    <el-col :span="2">&nbsp;</el-col>

    <el-col :span="6">
      <!--信用贷-->
        <el-card class="box-card" style="background-color: powderblue;"><br/>
          <div slot="header" class="clearfix">
            <strong>&nbsp;信 用 贷</strong><br/>
            <el-tooltip align="right" effect="light" placement="left-end">
              <div slot="content">及代理商就很可能士大夫昆仑山地方就<br/>极端的方式来就好了圣诞节分厘卡圣诞节和<br/>jklslkkdjjdsfljfsdlafj</div>
              <el-button style="float: right; padding: 3px 0;" type="text"><strong>贷 款 须 知</strong></el-button>
            </el-tooltip>
          </div><br/>
          <div class="text item">
            <span>认证后可借金额 ：100000 ￥</span>
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
              <el-button type="default" round>查 看 详 情</el-button>
              <el-button type="primary" @click="toCreditting" round>申 请 贷 款</el-button>
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
            <strong>&nbsp;车 易 贷</strong><br/>
            <el-tooltip align="right" effect="light" placement="left-end">
              <div slot="content">及代理商就很可能士大夫昆仑山地方就<br/>极端的方式来就好了圣诞节分厘卡圣诞节和<br/>jklslkkdjjdsfljfsdlafj</div>
              <el-button style="float: right; padding: 3px 0" type="text"><strong>贷 款 须 知</strong></el-button>
            </el-tooltip>
          </div><br/>
          <div class="text item">
            <span>认证后可借金额 ：400000 ￥</span>
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
              <el-button type="default" round>查 看 详 情</el-button>
              <el-button type="primary" round>申 请 贷 款</el-button>
            </p>
          </div>
        </el-card>
    </el-col>

    <!--空格 间隙-->
    <el-col :span="1">&nbsp;</el-col>

    <el-col :span="6">
      <!--房易贷-->
        <el-card class="box-card" style="background-color: skyblue;"><br/>
          <div slot="header" class="clearfix">
            <strong>&nbsp;房 易 贷</strong><br/>
            <el-tooltip align="right" effect="light" placement="left-end">
              <div slot="content">及代理商就很可能士大夫昆仑山地方就<br/>极端的方式来就好了圣诞节分厘卡圣诞节和<br/>jklslkkdjjdsfljfsdlafj</div>
              <el-button style="float: right; padding: 3px 0" type="text"><strong>贷 款 须 知</strong></el-button>
            </el-tooltip>
          </div><br/>
          <div class="text item">
            <span>认证后可借金额 ：800000 ￥</span>
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
              <el-button type="default" round>查 看 详 情</el-button>
              <el-button type="primary" round>申 请 贷 款</el-button>
            </p>
          </div>
        </el-card>
    </el-col>

    <!--空格 间隙-->
    <el-col :span="1">&nbsp;</el-col>

  </el-row>
  <!--</el-container>-->
</template>

<script>
  export default {
    name: "BidRequestCreditting",
    data() {
      return {

      };
    },
    methods: {
      toCreditting(){
        // 跳转路由 去投标界面 Bidding
        this.$router.push({
          path:"/reception/BidRequestCreditting"
        });
      }

    }
  };
</script>

<style scoped>

</style>

<template>
  <el-row class="tac">
    <el-col :span="18">
      <el-menu router :default-active="$route.path" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-submenu index="/reception/userCenter/UserBid">
          <template slot="title">
            <i class="el-icon-s-custom"></i><span>投资管理</span>
          </template>
          <el-menu-item-group >
            <el-menu-item index="/reception/userCenter/UserBid">我的投资</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group >
            <el-menu-item index="/reception/userCenter/UserBidDetails">我的回款</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/reception/userCenter/UserBidRequest">
          <template slot="title">
            <i class="el-icon-s-custom"></i><span>借贷管理</span>
          </template>
          <el-menu-item-group >
            <el-menu-item index="/reception/userCenter/UserBidRequest">我的贷款</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group >
            <el-menu-item index="/reception/userCenter/UserBidRequestDetails">我的还款</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/reception/userCenter/UserMessage">
          <template slot="title">
            <i class="el-icon-s-custom"></i><span>账户管理</span>
          </template>
          <el-menu-item-group >
            <el-menu-item index="/reception/userCenter/UserAccount">账户信息</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group >
            <el-menu-item index="/reception/userCenter/UserDetail">个人资料</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group >
            <el-menu-item index="/reception/userCenter/Usersf">实名认证</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group >
            <el-menu-item index="/reception/userCenter/Usercl">材料认证</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/reception/userCenter/UserMoney">
          <template slot="title">
            <i class="el-icon-s-finance"></i><span>资产管理</span>
          </template>
          <el-menu-item-group >
            <el-menu-item index="/reception/userCenter/UserMoney">交易记录</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group >
            <el-menu-item index="/reception/userCenter/UserRecharge">充值</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group >
            <el-menu-item index="/reception/userCenter/UserWithdraw">提现</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item  index="/reception/userCenter/UserMessage">
          <i class="el-icon-s-comment"></i><span slot="title">消息通知</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "Left",
  }
</script>

<style scoped>

</style>

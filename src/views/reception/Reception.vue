<template>
  <div style="background-color:white;">
    <!--前台界面-->
    <el-row >
      <el-row style="margin-left: 700px;" v-if="userMembers == null">
        <el-col style="color: rgb(52, 45, 45); margin-left: 500px;" :span="3">
          <router-link to="/ReceptionLogin">
            <i class="el-icon-user" style="color: rgb(92, 86, 86);">登录</i>
          </router-link>
        </el-col>
        <el-col style="color: rgb(52, 45, 45);" :span="3">
          <router-link to="/ReceptionReg">
            <i class="el-icon-thumb" style="color: rgb(92, 86, 86);">注册</i>
          </router-link>
        </el-col>
      </el-row>
      <el-row style="margin-left: 700px;" v-if="userMembers != null">
        <el-col style="color: rgb(52, 45, 45); margin-left: 500px;" :span="3">
          <a href="">
            <i class="el-icon-user" style="color: rgb(92, 86, 86);">{{userMembers.name}}用户中心</i>
          </a>
        </el-col>
      </el-row>
      <el-col>

        <el-menu router :default-active="$route.path" style="background-color: rgb(90,150,252);" mode="horizontal">
          <el-menu-item  style="margin-left: 920px; text-indent: 0px; font-size: 18px; color: rgb(247, 238, 238); background-color: rgb(90,150,252);" index="/reception/ReceptionHome">首页</el-menu-item>
          <el-menu-item style="font-size: 18px; color: rgb(242, 238, 238); background-color: rgb(90,150,252);" index="/reception/Bid">我要投资</el-menu-item>
          <el-menu-item style="font-size: 18px; color: rgb(247, 242, 242); background-color: rgb(90,150,252);" index="/reception/BidRequest">我要借款</el-menu-item>
          <el-menu-item style="font-size: 18px; color: rgb(249, 245, 245); background-color: rgb(90,150,252);" index="/reception/UserCenter">个人中心</el-menu-item>
          <el-menu-item style="font-size: 18px; color: rgb(242, 237, 237); background-color: rgb(90,150,252);" index="">关于我们</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>

    <router-view>
      <ReceptionHome></ReceptionHome>
    </router-view>
  </div>
</template>

<script>
  // 导入组件
  import ReceptionHome from '@/views/reception/home/ReceptionHome.vue'
  // 导出模块
  export default {
    data(){
      return{
          userMembers:null
      };
    },
    components:{
      ReceptionHome
    },
    created(){
      this.userMembers = this.$store.getters.getUserMembers;
    },

  };
</script>
<style scoped>


</style>

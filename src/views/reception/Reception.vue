<template>
  <div style="background-color:white;">
    <!--前台界面-->
    <el-row >
      <el-row style="margin-left: 700px;" v-if="userMembers == null">
        <el-col style="color: rgb(52, 45, 45); margin-left: 500px;" :span="3">
          <a href="/#/ReceptionLogin">
            <i class="el-icon-user" style="color: rgb(92, 86, 86);">登录</i>
          </a>
        </el-col>
        <el-col style="color: rgb(52, 45, 45);" :span="3">
          <a href="/#/ReceptionReg">
            <i class="el-icon-thumb" style="color: rgb(92, 86, 86);">注册</i>
          </a>
        </el-col>
      </el-row>
      <el-row style="margin-left: 700px;" v-if="userMembers != null">
        <el-col style="color: rgb(52, 45, 45); margin-left: 500px;" :span="3">
          <a href="/#/reception/UserCenter">
            <i class="el-icon-user" style="color: rgb(92, 86, 86);">{{userMembers.name}}用户中心</i>
          </a>
        </el-col>
        <el-col style="color: rgb(52, 45, 45); margin-left: 500px;" :span="3">
          <a >
            <i @click="toexit" class="el-icon-remove" style="color: rgb(92, 86, 86);">退出</i>
          </a>
        </el-col>
      </el-row>
      <el-col>

        <el-menu router :default-active="$route.path" style="background-color: rgb(90,150,252);" mode="horizontal">
          <el-menu-item  style="margin-left: 920px; text-indent: 0px; font-size: 18px; color: rgb(247, 238, 238); background-color: rgb(90,150,252);" index="/reception/ReceptionHome">首页</el-menu-item>
          <el-menu-item style="font-size: 18px; color: rgb(242, 238, 238); background-color: rgb(90,150,252);" index="/reception/Bid">我要投资</el-menu-item>
          <el-menu-item style="font-size: 18px; color: rgb(247, 242, 242); background-color: rgb(90,150,252);" index="/reception/BidRequest">我要借款</el-menu-item>
          <el-menu-item style="font-size: 18px; color: rgb(249, 245, 245); background-color: rgb(90,150,252);" index="/reception/UserCenter">个人中心</el-menu-item>
          <el-menu-item style="font-size: 18px; color: rgb(242, 237, 237); background-color: rgb(90,150,252);" index="/reception/white">关于我们</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>

    <router-view></router-view>
  </div>
</template>

<script>
  // 导入组件
  import index22 from "./home/ReceptionHome";

  // 导出模块
  export default {
    data(){
      return{
          userMembers:null
      };
    },
    created(){
      this.userMembers = this.$store.getters.getUserMembers;//用户的
      //用户跳转首页
      this.$router.push({path:'/reception/ReceptionHome'})
    },
    components:{
      index22
    },
    methods:{
      toexit(){//退出会员登录状态
        this.$router.replace({//跳转到前台登录界面
          path:'/ReceptionLogin'
        })

        let url = this.axios.urls.SYSTEM_USER_MEMBERSLOGINOUT;
        this.axios.post(url,{}).then((response)=>{//清空所有这个id的redis数据
          console.log(response)
        }).catch(function(error){
          console.log(error);
        });
        this.$store.commit('setUserMembers',{//清空前台用户登录状态
          userMembers:[]
        })
        this.$store.commit('setVerificationJwt',{//清空验证码Jwt
          jwt:null
        })
        this.$store.commit('setJwt',{//清空用户状态jwt
          verificationJwt:null
        })


      }
    }
  };
</script>
<style scoped>


</style>

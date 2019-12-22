<template>
  <el-menu class="el-menu-demo" mode="horizontal" background-color="#334157" text-color="#fff" active-text-color="#fff">
    <el-button class="buttonimg">
      <img class="showimg" :src="collapsed?imgshow:imgsq" @click="doToggle()">
    </el-button>
    <el-submenu index="2" class="submenu">
      <template slot="title">{{userManage.rolename}}</template>
      <el-menu-item index="2-1">设置</el-menu-item>
      <el-menu-item index="2-2">{{userManage.username}}个人中心</el-menu-item>
      <el-menu-item @click="exit()" index="2-3">退出</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
    export default {
      data(){
        return{
          collapsed:false,
          imgshow:require('@/assets/img/show.png'),
          imgsq:require('@/assets/img/sq.png'),
          userManage:null
        }
      },
      created(){
          this.userManage = this.$store.getters.getUserManage;
      },

      methods:{
        exit(){
          this.$router.replace({
            path:'/ManageLogin'
          })
          let url = this.axios.urls.SYSTEM_USER_MANAGELOGINOUT;
          this.axios.post(url,{}).then((response)=>{//清空所有这个id的redis数据
            console.log(response)
          }).catch(function(error){
            console.log(error);
          });

          this.$store.commit('setUserManage',{//清空后台登录状态
            userManage:[]
          })
          this.$store.commit('setVerificationJwt',{//清空验证码Jwt
            jwt:null
          })
          this.$store.commit('setJwt',{//清空用户状态jwt
            verificationJwt:null
          })
          this.$store.commit('set_active_index',{//清空激活tab页
            index:''
          })





        },
        doToggle(){
          this.collapsed = !this.collapsed;
          this.$root.Bus.$emit('collapsed-side',this.collapsed)
        }
      }
    }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    border: none;
  }

  .submenu {
    float: right;
  }

  .buttonimg {
    height: 60px;
    background-color: transparent;
    border: none;
  }

  .showimg {
    width: 26px;
    height: 26px;
    position: absolute;
    top: 17px;
    left: 17px;
  }

  .showimg:active {
    border: none;
  }
</style>

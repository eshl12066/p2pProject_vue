<template>
  <el-menu router :default-active="$route.path" class="el-menu-vertical-demo" background-color="#334157"
           text-color="#fff" active-text-color="#ffd04b" :collapse="collapsed" >
    <!-- <el-menu default-active="2" :collapse="collapsed" collapse-transition router :default-active="$route.path" unique-opened class="el-menu-vertical-demo" background-color="#334157" text-color="#fff" active-text-color="#ffd04b"> -->
    <div class="logobox">
      <img class="logoimg" src="@/assets/img/logo.png" alt="">
    </div>
    <!--注意：index是必填的，1，index可以看成ID，也就是说是唯一的，2，他代表着路由跳转路径 -->
    <el-submenu :index="m.perid" v-for="m in menus">
      <template slot="title">
        <i :class="m.pericon"></i>
        <span>{{m.pername}}</span>
      </template>
      <el-menu-item :key="m2.perid" :index="m2.permission"  @click="showName(m2.pername)" v-for="m2 in m.children">
        <template slot="title">
          <i :class="m2.pericon"></i>
          <span>{{m2.pername}}</span>
        </template>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
    export default {
      data(){
        return{
          collapsed:false,
          menus:[],
          userManage:null
        }
      },
      created(){
        this.userManage = this.$store.getters.getUserManage;//后台管理员


        this.$root.Bus.$on('collapsed-side',(v)=>{
          this.collapsed = v;
        });
        let url = this.axios.urls.SYSTEM_TREE;
        this.axios.post(url, {uid:this.userManage.userid}).then((response) => {
          console.log(response);
          this.menus = response.data;
        }).catch((response) => {
          //carch则是异常
          console.log(response);
        });
      },
      methods: {
        showName(name) {
          // 把菜单名称放进去，当成tab页的名称
          this.$store.commit('set_showName', name)
          this.$store.commit('set_role', "pass");
        }
      }
    }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 210px;
    min-height: 400px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    border: none;
    text-align: left;
  }

  .el-menu-item-group__title {
    padding: 0px;
  }

  .el-menu-bg {
    background-color: #1f2d3d !important;
  }

  .el-menu {
    border: none;
  }

  .logobox {
    height: 40px;
    line-height: 40px;
    color: #9d9d9d;
    font-size: 20px;
    text-align: center;
    padding: 20px 0px;
  }

  .logoimg {
    height: 40px;
  }
</style>

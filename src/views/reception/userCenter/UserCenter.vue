<template>
  <div >
  <el-container class="main-container">
    <el-aside v-bind:class="asideClass">
      <LeftNav></LeftNav>
    </el-aside>
      <el-main class="main-center">
        <router-view></router-view>
      </el-main>
  </el-container>
  </div>
</template>


<script>
  // 导入组件
  import LeftNav from './Left.vue'

  export default {
    name: "UserCenter",
    components:{
      LeftNav
    },

  }
</script>
<style scoped>

</style>

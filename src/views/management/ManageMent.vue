<template>
  <!--后台界面-->
  <el-container class="main-container">
    <el-container>
      <el-main>
        <MemberManage><!--会员管理--></MemberManage>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
  // 导入组件
  //	import TopNav from '@/components/TopNav.vue'
  import MemberManage from "./memberManage/MembersfManage.vue";

  // 导出模块
  export default {
    data(){
      return{

      };
    },
    components:{
      MemberManage
    }
  };
</script>
<style scoped>


</style>

<template>
  <el-container>
    <el-main>
      <strong>我 的 贷 款</strong><br/><br/><br/>

      <!--列表数据展示-->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="bid_request_amount" label="贷款总额" width="109" align="center" sortable></el-table-column>
        <el-table-column prop="current_rate" label="利息率" width="109" align="center" sortable></el-table-column>
        <el-table-column prop="monthes_return" label="还款月数" width="109" align="center" sortable></el-table-column>
        <el-table-column prop="return_type" label="还款方式" width="109" align="center"></el-table-column>
        <el-table-column prop="bid_request_type" label="贷款类型" width="109" align="center"></el-table-column>
        <el-table-column prop="current_sum" label="现有投资" width="109" align="center" sortable></el-table-column>
        <el-table-column label="投标进度" align="center" width="198">
          <template slot-scope="scope">
            <el-progress :percentage="scope.row.plan"></el-progress>
          </template>
        </el-table-column>
      </el-table><br/><br/>

    </el-main>
  </el-container>

</template>

<script>
  export default {
    name: "UserBidRequest",
    data() {
      return {
        tableData: [],
        userMembers:null
      }
    },
    created(){//用户的贷款 数据展示
      this.userMembers = this.$store.getters.getUserMembers;//用户的

      let url = this.axios.urls.SYSTEM_BID_SELECTUSERBIDREQUEST;
      this.axios.post(url,{"id":this.userMembers.id}).then((response)=>{
        this.tableData = response.data;
      }).catch(function(error){//carch则是异常
        console.log(error);
      });
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>

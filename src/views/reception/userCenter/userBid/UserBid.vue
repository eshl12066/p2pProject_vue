<template>
    <el-main>
      <strong>我 的 投 资</strong><br/><br/><br/>
      <strong>投 资 状 态 ：</strong>&nbsp;&nbsp;
      <el-select  v-model="ruleForm.bidRequestState" clearable placeholder="全     部" style="width: 10%;">
        <el-option key="4" label="收益中" value="4"></el-option>
        <el-option key="7" label="已完成" value="7"></el-option>
      </el-select><br/><br/>

      <!--列表数据展示-->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="bid_request_amount" label="投资总额" width="109" align="center" sortable></el-table-column>
        <el-table-column prop="current_rate" label="利息率" width="109" align="center" sortable></el-table-column>
        <el-table-column prop="monthes_return" label="还款月数" width="109" align="center" sortable></el-table-column>
        <el-table-column prop="total_reward_amount" label="总得利息" width="109" align="center" sortable></el-table-column>
        <el-table-column prop="return_type" label="还款方式" width="89" align="center"></el-table-column>
        <el-table-column prop="bid_request_type" label="贷款类型" width="89" align="center"></el-table-column>
        <el-table-column prop="current_sum" label="现有投资" width="109" align="center" sortable></el-table-column>
        <el-table-column prop="money" label="可投标额度" width="119" align="center" sortable></el-table-column>
        <el-table-column prop="disable_date" label="投标截止时间" width="166" align="center" sortable ></el-table-column>
        <el-table-column label="投标进度" align="center" width="198" sortable>
          <template slot-scope="scope">
            <el-progress :percentage="scope.row.plan"></el-progress>
          </template>
        </el-table-column>
        <el-table-column label="操  作" align="center">
          <template slot-scope="scope">
            <!--查看详情-->
            <el-button size="mini" type="test" @click="handleDetails(scope.row.id)">查 看 详 情</el-button>
          </template>
        </el-table-column>
      </el-table><br/><br/>

    </el-main>

</template>

<script>
  export default {
    name: "UserBid",
    data() {
      return {
        tableData: [{plan:null,}],
        percentage:null,//投标完成率百分比
        ruleForm: {
          bidRequestState: null,//投标状态 2-投标中 3-满标
          returnType: null,//还款方式
          bidRequestType: null,//贷款类型
          currentRate: null,//利率
          monthesReturn: null,//还款月数
          totalRewardAmount: null,//总利息
        }
      }
    },
    created(){//投标数据展示
      let url = this.axios.urls.SYSTEM_BID_BIDQUERY;
      this.axios.post(url,this.ruleForm).then((response)=>{
        console.log("UserBid查询的："+response.data.data);
        this.tableData = response.data.data;
      }).catch(function(error){//carch则是异常
        console.log(error);
      });
    },
    methods: {
      //查看详情按钮
      checkDetails(id) {
        // 跳转路由 去我的 某一个 投资详情 界面 UserBidDetails
        this.$router.push({
          path: '/reception/userCenter/UserBidDetails'
        });
      },
    }
  }
</script>

<style scoped>

</style>

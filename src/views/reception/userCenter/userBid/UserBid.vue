<template>
  <el-container>
    <el-main>
      <strong>我 的 投 资</strong><br/><br/><br/>
      <strong>投 资 状 态 ：</strong>&nbsp;&nbsp;
      <el-button-group>
        <el-button type="danger" round>全部</el-button>
        <el-button type="success">已完成</el-button>
        <el-button type="primary" round>收益中</el-button>
      </el-button-group><br/><br/>

      <!--列表数据展示-->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="amount" label="投 资 金 额" width="199" align="center" sortable></el-table-column>
        <el-table-column prop="rate" label="利 息 率" width="199" align="center" sortable></el-table-column>
        <el-table-column prop="money" label="总 利 息" width="199" align="center" sortable></el-table-column>
        <el-table-column label="投 资 状 态" align="center" width="246" ><el-button size="mini" type="success" icon="el-icon-check">已完成</el-button></el-table-column>
        <el-table-column label="操  作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" plain @click="checkDetails(scope.$index, scope.row)">查 看 详 情</el-button>
          </template>
        </el-table-column>
      </el-table><br/><br/>

      <!--分页展示数据-->
      <div class="block">
        <p align="center"><el-pagination layout="prev, pager, next" :total="50"></el-pagination></p>
      </div>

    </el-main>
  </el-container>

</template>

<script>
  export default {
    name: "UserBid",
    data() {
      return {
        tableData: [{
          requestId:1,
          rate:2.13,
          amount:8000,
          money:178.4,
        },
          {
          requestId:2,
          rate:2.22,
          amount:6000,
          money:166.4,
        }]
      }
    },
    methods: {
      //查看详情按钮
      checkDetails(index, row) {
        // 跳转路由 去我的 某一个 投资详情 界面 UserBidDetails
        this.$router.push({
          path: '/reception/userCenter/UserBidDetails'
        });
      },
      //分页
      handleSizeChange(val) {//每页的条数可改变
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {//当前页数可改变
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style scoped>

</style>

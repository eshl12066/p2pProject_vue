<template>
    <el-main>
      <strong>我 的 投 资</strong><br/><br/><br/>

      <!--列表数据展示-->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="bid_time" label="投 标 时 间" width="268" align="center" sortable></el-table-column>
        <el-table-column prop="available_amount" label="投 资 总 额" width="169" align="center" sortable></el-table-column>
        <el-table-column label="操    作" align="center">
          <!--查看详情-->
          <template slot-scope="scope">
            <el-tooltip placement="top" effect="light"  >
              <div slot="content">投 标 详 情<br/><br/>该 投 标 总 额：{{detail.bidRequestAmount}}￥， 已 有 {{detail.bidCount}}人 进 行 投 资 ,
                共 投 资 ：{{detail.currentSum}}元 ！<br/><br/>
                安全分数：{{detail.score}}利息率：{{detail.rate}}月 数：{{detail.month}}
              </div>
              <el-button @click="checkDetails(scope.row.bid_request_id)">查 看 详 情</el-button>
            </el-tooltip>
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
        tableData: [],
        detail:{
          bidRequestAmount:null,
          bidCount:null,
          currentSum:null,
          score:null,
          rate:null,
          month:null,

        },
        userMembers:null
      }
    },
    created(){//用户的投标 数据展示
      this.userMembers = this.$store.getters.getUserMembers;//用户的


      let url = this.axios.urls.SYSTEM_BID_SELECTUSERBID;
      this.axios.post(url,{"id":this.userMembers.id}).then((response)=>{
        this.tableData = response.data;
      }).catch(function(error){//carch则是异常
        console.log(error);
      });
    },
    methods: {
      //查看详情按钮
      checkDetails(id) {
        //  投资详情信息
        let url = this.axios.urls.SYSTEM_BID_SELECTUSERBIDDETAILS;
        this.axios.post(url,{"id":id}).then((response)=>{
          let data = response.data;
          this.detail.bidRequestAmount = data.bid_request_amount;//借款总额
          this.detail.bidCount = data.bid_count;//已有多少人投资
          this.detail.currentSum = data.current_sum;//已收到的投资总额
          this.detail.score = data.certification_score;
          this.detail.rate = data.current_rate;
          this.detail.month = data.monthes_return;
        }).catch(function(error){//carch则是异常
          console.log(error);
        });

      },
    }
  }
</script>

<style scoped>

</style>

<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="充值记录" name="recharge">
      <!--查询               -->
      <el-form  :inline="true" :model="formInline" class="demo-form-inline">

        <el-form-item label="充值时间">
          <el-col :span="8">
            <el-date-picker value-format="yyyy-MM-dd" type="date"  placeholder="选择日期" v-model="value1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">&nbsp;&nbsp;至</el-col>
          <el-col :span="8">
            <el-date-picker value-format="yyyy-MM-dd"  type="date"  placeholder="选择日期" v-model="value2" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <!--表单                          -->

      <el-table border :data="rechargedata" :default-sort = "{prop: 'trade_time', order: 'descending'}"
        style="width: 100%">
        <el-table-column prop="trade_code" label="支付宝账号" width="365"></el-table-column>
        <el-table-column prop="amount" label="充值金额" width="208"></el-table-column>
        <el-table-column prop="trade_time" label="日期" sortable width="365"></el-table-column>
      </el-table>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="40">
      </el-pagination>

    </el-tab-pane>
    <el-tab-pane label="提现记录" name="withdraw">
      <!--查询               -->
      <el-form   :inline="true" :model="formInline2" class="demo-form-inline">
        <el-form-item label="提现时间">
          <el-col :span="8">
            <el-date-picker value-format="yyyy-MM-dd" type="date"  placeholder="选择日期" v-model="value3" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">&nbsp;&nbsp;至</el-col>
          <el-col :span="8">
            <el-date-picker value-format="yyyy-MM-dd"  type="date" placeholder="选择日期" v-model="value4" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit2">查询</el-button>
        </el-form-item>
      </el-form>
      <!--表单                          -->
      <el-table border :default-sort = "{prop: 'audit_time', order: 'descending'}" :data="withdrawdata" style="width: 100%">
        <el-table-column prop="id" label="ID" width="80"></el-table-column>
        <el-table-column prop="apply_time" sortable width="170" label="申请时间"> </el-table-column>
        <el-table-column prop="amount" label="提现金额" width="100"> </el-table-column>
        <el-table-column prop="fee" label="手续费"> </el-table-column>
        <el-table-column label="状态" width="120">
          <template slot-scope="scope">
            <el-button v-if="scope.row.state == 2"  type="info" round >待审核</el-button>
            <el-button v-if="scope.row.state == 1"  type="danger" round >失败</el-button>
            <el-button v-if="scope.row.state == 0" round  >成功</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="trade_code" label="说明"width="310"> </el-table-column>
      </el-table>



    </el-tab-pane>
  </el-tabs>
</template>

<script>
    export default {
      name: "UserMoney",
      data() {
        return {
          activeName:'recharge',
          currentPage4:4,
          value1:'',
          value2:'',
          value3:'',
          value4:'',
          formInline: {
            user: '',
            date1:"",
            date2:"",
          },
          formInline2: {
            user: '',
            date1:"",
            date2:"",
          },
          userManage:null,
          activeName: 'recharge',
          rechargedata: [],
          withdrawdata: []
        }
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        },
        onSubmit() {
          this.rechargeSeach();
        },
        onSubmit2() {
          this.withdrawSeach();
        },
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        },
        rechargeSeach(){
          var  rechargea = {
            id:this.userManage,                       //***********************************************id
            start:'',
            stop: ''
          };
          if(this.value1!=null){
            rechargea.start =  this.value1
          };
          if(this.value2!=null){
            rechargea.stop =  this.value2
          };
          let url = this.axios.urls.SYSTEM_ASSET_RECHARGE_LISTALL;
          this.axios.post(url, rechargea).then((response) => {
            this.rechargedata = response.data.data;
          }).catch((response) => {
            //carch则是异常
            console.log(response);
          });
        },
        withdrawSeach(){
          var  withdrawa = {
            id:this.userManage,                       //***********************************************id
            start:'',
            stop: ''
          };
          if(this.value3!=null){
            withdrawa.start =  this.value3
          };
          if(this.value4!=null){
            withdrawa.stop =  this.value4
          };
          let url = this.axios.urls.SYSTEM_ASSET_WITHDRAW_LISTMEMBER;
          this.axios.post(url, withdrawa).then((response) => {  //***********************************************id
            this.withdrawdata = response.data.data;
          }).catch((response) => {
            //carch则是异常
            console.log(response);
          });
        }
      },
      created(){
        this.rechargeSeach();
        this.withdrawSeach();
        this.userManage = this.$store.getters.getUserMembers;//会员

      }
    }
</script>

<style scoped>

</style>

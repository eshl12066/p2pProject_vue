<template>
  <!--用户充值提现表-->
  <!--1、	显示用户的充值信息记录，和提现记录-->
  <!--2、	提供根据用户名查询，时间范围查询、身份证号码查询-->



  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="充值记录" name="recharge">
      <!--查询               -->
      <el-form size="mini" :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="用户名">
          <el-input v-model="formInline.name" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="充值时间">
          <el-col :span="8">
            <el-date-picker value-format="yyyy-MM-dd" type="date" @change="dateChangebirthday1" placeholder="选择日期" v-model="value1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">&nbsp;&nbsp;至</el-col>
          <el-col :span="8">
            <el-date-picker value-format="yyyy-MM-dd"  type="date" @change="dateChangebirthday2" placeholder="选择日期" v-model="value2" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <!--表单                          -->
      <el-divider></el-divider>
      <el-table
        border
        :data="rechargedata"
        :default-sort = "{prop: 'trade_time', order: 'descending'}"
        style="width: 100%">
        <el-table-column
          prop="id"
          label="ID"
          width="100"
          sortable>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="200">
        </el-table-column>
        <el-table-column
          prop="trade_code"
          label="支付宝账号"
          width="220">
        </el-table-column>
        <el-table-column
          prop="amount"
          label="充值金额"
          width="200">
        </el-table-column>
        <el-table-column
          prop="trade_time"
          label="日期"
          sortable
          width="300">
        </el-table-column>

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
        <el-form-item label="用户名">
          <el-input v-model="formInline2.name" placeholder="用户名"></el-input>
        </el-form-item>
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
      <el-table border :default-sort = "{prop: 'audit_time', order: 'descending'}" :data="tableData2" style="width: 100%">
        <el-table-column prop="id" label="ID" width="80"></el-table-column>
        <el-table-column prop="name" label="申请人"width="120"> </el-table-column>
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
  // 导入组件
  //	import TopNav from '@/components/TopNav.vue'

  // 导出模块
  export default {
    data() {
      return {
        //分页
        currentPage4: 4,
        value1:'',
        value2:'',
        value3:'',
        value4:'',
        //充值查询属性
        formInline: {
          name: '',
          start:"",
          stop:""
        },
        userManage:null,
        //提现查询属性
        formInline2: {
          name: '',
          date1:"",
          date2:"",
        },
        //默认显示的tab页
        activeName: 'recharge',
        //充值tab的data
        rechargedata: [],

      tableData2: []
      }
    },
  methods: {
    dateChangebirthday1(val){
      console.log("11"+val);
      this.formInline.start = new date(val);
      console.log("11"+this.formInline.start);
    },
    dateChangebirthday2(val){
      this.formInline.stop = new date(val);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() {
      console.log(this.formInline);
      this.search();
    }
    ,
    onSubmit2() {
      console.log('submit2!');
      this.search2();
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    search(){
      var formData = {
        name: this.formInline.name,
        start:'',
        stop: ''
      };
      if(this.value1!=null){
        formData.start =  this.value1
      };
      if(this.value2!=null){
        formData.stop =  this.value2
      };
      let url = this.axios.urls.SYSTEM_ASSET_RECHARGE_LISTALL;
      this.axios.post(url, formData).then((response) => {
        console.log(response);
        this.rechargedata = response.data.data;
      }).catch((response) => {
        //carch则是异常
        console.log(response);
      });
    },
    search2(){
      var formData = {
        name: this.formInline2.name,
        start:'',
        stop: ''
      };
      if(this.value3!=null){
        formData.start =  this.value3
      };
      if(this.value4!=null){
        formData.stop =  this.value4
      };
      let url = this.axios.urls.SYSTEM_ASSET_WITHDRAW_LISTUSER;
      this.axios.post(url, formData).then((response) => {
        console.log(response);
        this.tableData2 = response.data.data;
      }).catch((response) => {
        //carch则是异常
        console.log(response);
      });
    }
  },
    created(){
      this.search();
      this.search2();
      this.userManage = this.$store.getters.getUserManage;//后台管理员
    }
  };
</script>
<style scoped>


</style>

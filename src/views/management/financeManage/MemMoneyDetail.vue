<template>
  <!--用户充值提现表-->
  <!--1、	显示用户的充值信息记录，和提现记录-->
  <!--2、	提供根据用户名查询，时间范围查询、身份证号码查询-->



  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="充值记录" name="recharge">
      <!--查询               -->
      <el-form size="mini" :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="用户名">
          <el-input v-model="formInline.user" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="8">
            <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="8">
            <el-time-picker placeholder="选择时间" v-model="formInline.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <!--表单                          -->
      <el-divider></el-divider>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>

    </el-tab-pane>
    <el-tab-pane label="提现记录" name="withdraw">
      <!--查询               -->
      <el-form size="mini" :inline="true" :model="formInline2" class="demo-form-inline">
        <el-form-item label="用户名">
          <el-input v-model="formInline2.user" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="8">
            <el-date-picker type="date" placeholder="选择日期" v-model="formInline2.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="8">
            <el-time-picker placeholder="选择时间" v-model="formInline2.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit2">查询</el-button>
        </el-form-item>
      </el-form>
      <!--表单                          -->
      <el-divider></el-divider>

      <el-table
        :data="tableData2"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
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
        activeName: 'recharge',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      tableData2: [{
        date: '2016-05-02',
        name: '王小',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
      }
    },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() {
      console.log('submit!');
    },
    onSubmit2() {
      console.log('submit2!');
    }
  }
  };
</script>
<style scoped>


</style>

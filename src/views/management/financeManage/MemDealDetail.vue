<template>
  <!--用户交易记录-->
  <!--1、平台的所有交易记录（投标、放款、借款人还款、将款返回给投标人）使用子tab页-->

  <!--查询维度：-->
  <!--投标：投标人姓名、时间范围-->
  <!--放款：放款人姓名（放款给的那个人）、时间范围-->
  <!--借款人还款：借口人姓名、时间范围-->
  <!--将款返回给投标人:还款人名、时间范围-->

  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="投标记录" name="bid">
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
    <el-tab-pane label="放款记录" name="bid_request">
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
    <el-tab-pane label="借款人还款记录" name="refund_detail">

      <!--查询               -->
      <el-form size="mini" :inline="true" :model="formInline3" class="demo-form-inline">
        <el-form-item label="用户名">
          <el-input v-model="formInline3.user" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="8">
            <el-date-picker type="date" placeholder="选择日期" v-model="formInline3.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="8">
            <el-time-picker placeholder="选择时间" v-model="formInline3.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit3">查询</el-button>
        </el-form-item>
      </el-form>

      <el-table
        :data="tableData3"
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
    <el-tab-pane label="还款投标人记录" name="return_detail">

      <!--查询               -->
      <el-form size="mini" :inline="true" :model="formInline4" class="demo-form-inline">
        <el-form-item label="用户名">
          <el-input v-model="formInline4.user" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="8">
            <el-date-picker type="date" placeholder="选择日期" v-model="formInline4.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="8">
            <el-time-picker placeholder="选择时间" v-model="formInline4.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit4">查询</el-button>
        </el-form-item>
      </el-form>

      <el-table
        :data="tableData4"
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
    export default {
      data() {
        return {
          activeName: 'bid',
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
          formInline3: {
            user: '',
            date1:"",
            date2:"",
          },
          formInline4: {
            user: '',
            date1:"",
            date2:"",
          },
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
            name: '小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          tableData3: [{
            date: '2016-05-02',
            name: '虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          tableData4: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        };
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
        },
        onSubmit3() {
          console.log('submit!');
        },
        onSubmit4() {
          console.log('submit2!');
        }
      }
    }
</script>

<style scoped>

</style>

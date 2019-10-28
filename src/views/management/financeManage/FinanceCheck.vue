<template>
  <!--提现审核界面-->
<div>
  <!--查询               -->
  <el-form size="small" :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="状态">
      <el-select label-width="80px" v-model="formInline.region" placeholder="请选择状态">
        <el-option label="通过" value="1"></el-option>
        <el-option label="未通过" value="2"></el-option>
        <el-option label="待审核" value="0"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动时间">

      <div class="block">
        <el-date-picker
          v-model="value2" editable="false" value-format="yyyy-MM-dd" @change="showtime" type="daterange" align="right" unlink-panels
          range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions">
        </el-date-picker>
      </div>

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
  <!--提现审核：用户提交提现申请后的审核与查询；-->
</div>
</template>

<script>
  // 导入组件
  //	import TopNav from '@/components/TopNav.vue'

  // 导出模块
  export default {
    data() {
      return {
        value2:"",
        formInline: {
          region:"",
          user: '',
          date1:"",
          date2:"",
        },
        tableData: [{
          date: '2016-05-02',
          name: 'ggg',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: 'ggg',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: 'ggg',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: 'ggg',
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
      }
      ,
      showtime() {
        console.log(this.value2);
      }
    }
  };
</script>
<style scoped>


</style>

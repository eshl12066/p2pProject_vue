<template>
  <el-container>
    <el-main>
      <strong>我 的 投 资 :</strong><br/><br/><br/>
      <div>
        <schart :canvasId="canvasId" :type="type" :width="width" :height="height" :data="data" :options="options"></schart>
      </div>

      <p align="left"><el-button @click="cancle" type="default">返 回</el-button></p>
    </el-main>
  </el-container>

</template>

<script>
  //导入echarts
  import Schart from 'vue-schart';
  export default {
    name: "UserBidDetails",
    data() {
      return {
        canvasId: 'myChart',
        type: 'line',//折线图: ‘line’  饼图: ‘pic’  环形图: ‘ring’  条形图: ‘bar’
        width: 240,
        height: 1600,
        data: [
          {name: '一月', value: 112},
          {name: '二月', value: 117},
          {name: '三月', value: 121},
          {name: '四月', value: 126},
          {name: '一月', value: 129},
          {name: '二月', value: 132},
          {name: '三月', value: 137},
          {name: '四月', value: 139},
        ],
        options: {
          title: '每月还款一览图',
          padding:36,     // canvas 内边距
          bgColor: '#68B4FF',     // 默认背景颜色
          titleColor: '#ffffff',      // 图表标题颜色
          legendColor: '#ffffff',
          titlePosition: 'top',        // 图表标题位置: top / bottom
          xEqual: 12,                  // x轴分成12等分
          yEqual: 12,                  // y轴分成12等分
          fillColor: '#ff4528',       // 默认填充颜色
          contentColor: '#ff4528',       // 内容横线颜色
          axisColor: '#000000',          // 坐标轴颜色
        }
      }
    },
    methods: {
      //  返回 上一界面
      cancle(){
        this.$router.go(-1);//返回上一层
      },
    }
  }
</script>

<style scoped>

</style>

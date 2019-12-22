<template>
  <div style="background-color:#eee;">
    <el-carousel :interval="2000" arrow="always" class="d_jump" :height="imgHeight+'px'">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <el-row>
          <el-col :span="24">
            <img ref="imgHeight" :src="item.idView" class="banner_img" @load="imgLoad"/>
          </el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>
    <pre>
    </pre>
    <el-row>
      <el-col :span="24">
        <el-menu style="width:99%;margin-right: 50px;" mode="horizontal">
          <el-menu-item style="font-size: 18px;" index="3~~627d6ee9-acb1-4834-b861-fc36462aa12e">累计金额：</el-menu-item>
          <el-menu-item style="font-size: 20px; color: rgb(255, 120, 0); width: 12%;" index="3~~a7b6f3ad-0695-4e73-b660-e92ea0e21b8a">233424</el-menu-item>
          <el-menu-item style="width: 0%; font-size: 18px;" index="3~~ff4da008-7040-444d-b8ab-f083d3df4ece">元</el-menu-item>
          <el-menu-item style="font-size: 18px;" index="3~~8c9bf4c9-36eb-4b50-abd8-1ce35ed6ead4">已还本息：</el-menu-item>
          <el-menu-item style="width: 13%; font-size: 20px; color: rgb(255, 120, 0);" index="3~~c70475b6-002b-4955-99e6-dea6c9059057">1000000</el-menu-item>
          <el-menu-item style="width: 0%; font-size: 18px;" index="3~~e5f1563c-b8ef-4ffd-adc7-6afd91c8a621">元</el-menu-item>
          <el-menu-item style="font-size: 18px;" index="3~~b40d7e2e-4174-4392-9e13-fda849108312">余额：</el-menu-item>
          <el-menu-item style="font-size: 20px; color: rgb(255, 120, 0); width: 11%;" index="3~~2ca05f1d-a575-4b6b-8dd7-ac1e4a1fbd0c">999</el-menu-item>
          <el-menu-item style="width: 0%; font-size: 18px;" index="3~~c5177c19-9a09-4dde-8a3d-8eceb06244a3">元</el-menu-item>
          <el-menu-item style="font-size: 18px;" index="3~~25484cb4-27ca-4055-89f6-11daf95b7e44">注册人数：</el-menu-item>
          <el-menu-item style="font-size: 20px; color: rgb(255, 120, 0); width: 11%;" index="3~~bd487dae-8312-4591-a8c7-e2d77f6cc89a">200000</el-menu-item>
          <el-menu-item style="font-size: 18px; width: 10%;" index="3~~552eee7f-adfe-4a48-95e8-0b97df1fe28c">人</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <pre>
    </pre>
    <div align="center">
      <el-row>
        <el-col style="margin-right: 0px; padding-left: 0px; margin-left: 5px;" :span="7" v-for="(o, index) in 1" :key="o" :offset="index " :push="1">
          <el-card style="width: 80%; padding-top: 0px; height: 200px;" :body-style="{ padding: '0px' }">
            <i class="el-icon-s-flag" style="color: rgb(255, 120, 0); font-size: 100px;">
            </i>
            <div style="padding: 14px;">
              <div class="bottom clearfix">
                <span style="font-size: 25px">安全理财</span>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col style="margin-left: 61px;" :span="7" v-for="(o, index) in 1" :key="o" :offset="index " :push="1">
          <el-card style="width: 80%; margin-right: 400px; height: 200px;" :body-style="{ padding: '0px' }">
            <i class="el-icon-s-data" style="color: rgb(255, 120, 0); font-size: 100px;">
            </i>
            <div style="padding: 14px;">
              <div class="bottom clearfix">
                <span style="font-size: 30px">高收益</span>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col style="margin-left: 75px; padding-left: 0px;" :span="7" v-for="(o, index) in 1" :key="o" :offset="index ">
          <el-card style="width: 80%; padding-right: 0px; margin-left: 0px; margin-right: 90px; padding-left: 0px; height: 200px;" :body-style="{ padding: '0px' }">
            <i class="el-icon-s-claim" style="color: rgb(255, 120, 0); font-size: 100px;">
            </i>
            <div style="padding: 14px;">
              <div class="bottom clearfix">
                <span style="font-size: 25px">随借随还</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <pre>
    </pre>
    <el-col :span="6">
      <el-card style="height: 59px;">
        <i class="el-icon-s-claim" style="font-size: 30px; color: rgb(255, 69, 0);">推荐项目</i>
      </el-card>
    </el-col>
    <el-col :span="18">
      <el-menu mode="horizontal">
        <el-menu-item style="width: 45%;" index="">
        </el-menu-item>
        <el-menu-item index="3">常规发标时间每天10:00，13:00和20:00，其余时间根据需要随机发</el-menu-item>
      </el-menu>
    </el-col>
    <el-row>
      <el-col :span="24">
        <el-card header="期限1-29天，期限短，收益见效快">
          <el-table :data="tableList" :fit="true" :show-header="true" show-header="true" default-expand-all>
            <el-table-column prop="id" label="借款人" width="180">
            </el-table-column>
            <el-table-column prop="name" label="借款目的" width="180">
            </el-table-column>
            <el-table-column prop="name" label="年利率" width="180">
            </el-table-column>
            <el-table-column prop="name" label="借款金额" width="180">
            </el-table-column>
            <el-table-column prop="name" label="还款方式" width="180">
            </el-table-column>
            <el-table-column prop="name" label="借款期限" width="180">
            </el-table-column>
            <el-table-column prop="plan" label="还款进度" width="180">
            </el-table-column>
            <el-table-column prop="name" label="状态" width="180">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>



    </el-row>
  </div>

</template>



<script>
  export default {
    name: "ReceptionHome",
    data() {
      return{
        imgHeight:"",
        imgList: [ {id: 0, idView: require('../../../assets/img/s5.png')}, {id: 1, name: '详情', idView: require('../../../assets/img/s1.jpg')} ]
      }
      that.imgHeight = '640px';
      window.onresize = function temp() { // 通过点语法获取img的height属性值
      that.imgHeight = `${that.$refs.imgHeight['0'].height}px` }

    },
    created(){
      let url = this.axios.urls.SYSTEM_BID_BIDQUERY;
      this.axios.post(url, { page:1,
        rows:5}).then((response) => {
        console.log("分页查询的："+response.data.data)
        this.tableData = response.data.data;
        this.total = response.data.total;
      }).catch((response) => {
        //carch则是异常
        console.log(response);
      });
    },
    methods:{
      imgLoad(){
        this.$nextTick(()=>{
          // this.imgHeight=this.$refs.imgHeight[0].height
        })
      },
      setBannerH(){
        this.bannerH = document.body.clientWidth / 4
      }
    },
    mounted(){
      this.imgLoad();
      window.addEventListener('resize',()=>{
        // this.imgHeight=this.$refs.imgHeight[0].height
        this.imgLoad();
      },false);

    },
  }
</script>

<style scoped>

</style>

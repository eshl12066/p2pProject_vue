<template>

  <div style="background-color: white;">
    <!--<el-row>-->
      <!--<el-col :span="24">-->
        <!--<el-carousel trigger="click" :height="bannerH +'2000px'" >-->
          <!--<el-carousel-item v-for="(item,index) in bannerImgLst" :key="index">-->
            <!--<img src="../../../assets/img/3.jpg" class="bannerImg" width="1500px"/>-->
          <!--</el-carousel-item>-->
          <!--<el-carousel-item v-for="(item,index) in bannerImgLst" :key="index">-->
            <!--<img src="../../../assets/img/4.jpg" class="bannerImg" width="1500px"/>-->
          <!--</el-carousel-item>-->
          <!--<el-carousel-item v-for="(item,index) in bannerImgLst" :key="index">-->
            <!--<img src="../../../assets/img/5.jpg" class="bannerImg" width="1500px"/>-->
          <!--</el-carousel-item>-->
          <!--<el-carousel-item v-for="(item,index) in bannerImgLst" :key="index">-->
            <!--<img src="../../../assets/img/6.jpg" class="bannerImg" width="1500px"/>-->
          <!--</el-carousel-item>-->
        <!--</el-carousel><br/><br/>-->
      <!--</el-col>-->
        <!--<div style="background-color: #eee;">-->
        <!--<el-col style="text-indent: 48px; font-size: 36px;" :span="8">-->
          <!--<i class="el-icon-s-management" style="text-indent: 13px; height: 50px;">安全理财</i>-->
        <!--</el-col>-->
        <!--<el-col style="text-indent: 48px; font-size: 36px;" :span="8">-->
          <!--<i class="el-icon-s-marketing" style="text-indent: 13px; height: 50px;">高收益</i>-->
        <!--</el-col>-->
        <!--<el-col style="text-indent: 48px; font-size: 36px;" :span="8">-->
          <!--<i class="el-icon-s-finance" style="height: 50px;">随时随</i>-->
        <!--</el-col>-->
        <!--</div>-->
    <!--</el-row><br/><br/>-->
    <div align="center">
    <el-main>
      <!--<p style="text-indent: 48px; font-size: 36px;">安 全 贷 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 贷 安 全</p><br/><br/><br/>-->
      <!--<strong>投标状态：</strong>&nbsp;&nbsp;-->
      <!--<el-button-group>-->
        <!--<el-button type="danger"  :onclick="findFun(null)" round>全部</el-button>-->
        <!--<el-button type="success" :onclick="findFun(3)">已完成</el-button>-->
        <!--<el-button type="primary" :onclick="findFun(2)" round>招标中</el-button>-->
      <!--</el-button-group>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-->

      <!--&lt;!&ndash;表单搜索 搜索所有数据！！！！&ndash;&gt;-->
      <!--<el-button-group>-->
        <!--<el-input v-model="searchR" placeholder="利息率" type="text" size="medium"></el-input>-->
      <!--</el-button-group>&nbsp;&nbsp;-->
      <!--<el-button-group>-->
        <!--<el-input v-model="searchM" placeholder="还款月数" size="medium" type="text"></el-input>-->
      <!--</el-button-group>&nbsp;&nbsp;-->
      <!--<el-button size="medium" icon="el-icon-search" type="primary">搜 索</el-button><br/><br/><br/><br/>-->

      <!--列表数据展示-->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="name" label="借款人" width="69" align="center"></el-table-column>
        <el-table-column prop="bid_request_amount" label="投资总额" width="109" align="center" sortable></el-table-column>
        <el-table-column prop="current_sum" label="现有投资" width="109" align="center" sortable></el-table-column>
        <el-table-column prop="money" label="可投标额" width="109" align="center" sortable></el-table-column>
        <el-table-column prop="current_rate" label="利息率" width="109" align="center" sortable></el-table-column>
        <el-table-column prop="monthes_return" label="还款月数" width="109" align="center" sortable></el-table-column>
        <el-table-column prop="total_reward_amount" label="总利息" width="99" align="center" sortable></el-table-column>
        <el-table-column prop="disable_date" label="投标结束时" width="128" align="center" sortable ></el-table-column>
        <el-table-column prop="plan" label="投标进度" align="center" width="268" sortable>
          <template slot-scope="scope">
           <!--<el-progress :percentage="plan"></el-progress>-->
          </template>
        </el-table-column>
        <el-table-column label="操  作" align="center">
          <template slot-scope="scope">

            <!--  查看详情  -->
            <el-popover placement="right" width="666" trigger="click">
              <el-card class="box-card" style="background-color: whitesmoke;"><br/>
                <!--  头 部  -->
                <div slot="header" class="clearfix">
                  &nbsp;借款标题：XXX<br/><br/>
                  <el-tooltip align="right" effect="light" placement="bottom-start">
                    <div slot="content">借款描述借款描述借款描述<br/>借款描述借款描述借款描述借款描述<br/>借款描述借款描述借款描述借款描述借款描述</div>
                    <el-button style="float: right; padding: 3px 0;color: black;" type="text">
                      —— 借款人：XX<br/><br/>
                      借款总额：10000 ￥
                    </el-button>
                  </el-tooltip>
                </div>
                <!--  主 体  -->
                <div class="text item">
                  <span style="color:green;"><strong>安全分数：78</strong></span><br/><br/>
                  <span><strong>投资利息率：2.27%</strong></span><br/><br/>
                  <span><strong>已投资：4000 ￥</strong></span><br/><br/>
                  <span><strong>我的投资：<input style="width: 48px;" v-model="bidMoney" /> ￥</strong></span>
                  <p align="right" style="color: red;"><strong>我的投资利息：210 ￥</strong></p>
                  <!--  分割线  -->
                  <el-divider></el-divider>
                  <p align="left">
                    <el-input style="width: 46%;" placeholder="发布时间" disabled="false"></el-input> -
                    <el-input style="width: 48%;" placeholder="截止时间" disabled="false"></el-input>
                  </p>
                  <p align="left">
                    <span><strong>还款方式：</strong></span><br/><br/>
                    <span><strong>还款类型：</strong></span><br/><br/>
                  </p>
                  <p align="right">当前投标人数：</p>
                </div>
              </el-card>
              <!--  查看详情   结束   -->
              <el-button size="mini" slot="reference" @click="handleDetails(scope.$index,scope.row.id)">查 看 详 情</el-button>
            </el-popover>
            <!--  查看详情  结尾  -->

            <!--投资-->
            <el-button size="mini" type="danger" @click="handleBidding(scope.$index,scope.row.id)">投 资</el-button>

          </template>
        </el-table-column>
      </el-table><br/><br/>

      <!--&lt;!&ndash;分页展示数据&ndash;&gt;-->
      <!--<div align="center" class="block">-->
        <!--<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"-->
                       <!--:current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"-->
                       <!--layout="total, sizes, prev, pager, next, jumper" :total="10000">-->
        <!--</el-pagination>-->
      <!--</div>-->

    </el-main>
  </div>
  </div>
<!--</el-container>-->

</template>

<script>
    export default {
      name: "Bid",
      data() {
        return {
          // bannerH:200,//图片轮番滚动
          // bannerImgLst:['src/assets/img/7.png'],
          // searchR: '',//搜索框的内容 年利率
          // searchM: '',//搜索框的内容 还款月数
          tableData: null,
          ruleForm:{
            id:"",
            availableAmount:"",
            bidRequestId:"",
            membersId:"",
          }
        }
      },
    created(){
      let url = this.axios.urls.SYSTEM_BID_BIDQUERY;
      console.log("sss:"+url)
      this.axios.post(url, {}).then((response) => {
        console.log(response);
        this.tableData = response.data.data;
      }).catch((response) => {
        //carch则是异常
        console.log(response);
      });
    },
      methods: {
        //查询投标状态
        // findFun(state){
        //   let url = this.axios.urls.SYSTEM_BID_GETALL;
        //   console.log("aaaaaaaaaaa:"+url)
        //   this.axios.post(url, {state}).then((response) => {
        //     console.log(response);
        //     this.tableData = response.data.data;
        //   }).catch((response) => {
        //     //carch则是异常
        //     console.log(response);
        //   });
        // },
        // setBannerH(){//图片轮番滚动
        //   this.bannerH = document.body.clientWidth / 4
        // },
        // formatter(row, column) {
        //   return row.address;
        // },
        //查看详情按钮
        handleDetails(id) {
          let url = this.axios.urls.SYSTEM_BID_SELECTONE;
          this.axios.post(url, this.ruleForm).then((response) => {
            console.log(response);
            this.infodata = response.data;
          }).catch((response) => {
            //carch则是异常
            console.log(response);
          });
        },
        //直接投标按钮
        handleBidding(id) {
          let url = this.axios.urls.SYSTEM_BID_BIDADD;
          this.axios.post(url, this.ruleForm).then((response) => {
            console.log(response);
            this.infodata = response.data;
          }).catch((response) => {
            //carch则是异常
            console.log(response);
          });
          // 跳转路由 去投标界面 Bidding
          this.$router.push({
            path: '/reception/Bidding'
          });
        },
        //分页
        // handleSizeChange(val) {//每页的条数可改变
        //   console.log(`每页 ${val} 条`);
        // },
        // handleCurrentChange(val) {//当前页数可改变
        //   console.log(`当前页: ${val}`);
        // }
      },
      // mounted(){
      //   this.setBannerH()
      // }
    }
</script>

<style scoped>

</style>

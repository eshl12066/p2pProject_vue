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
      <p style="text-indent: 48px; font-size: 36px;">安 全 贷 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 贷 安 全</p><br/><br/><br/>
      <p align="left">
        <strong>投标状态：</strong>&nbsp;&nbsp;
        <el-select  v-model="ruleForm.bidRequestState" clearable placeholder="全     部" style="width: 10%;">
          <el-option key="2" label="招 标 中" value="2"></el-option>
          <el-option key="3" label="满 标" value="3"></el-option>
        </el-select></p><br/><br/>
      <!--表单搜索 搜索所有数据！！！！-->
      <el-select  v-model="ruleForm.returnType" clearable placeholder="还款方式" style="width: 10%;">
        <el-option key="0" label="一 次 付 清" value="0"></el-option>
        <el-option key="1" label="等 额 本 息" value="1"></el-option>
        <el-option key="2" label="等 额 本 金" value="2"></el-option>
      </el-select>
      <el-select  v-model="ruleForm.bidRequestType" clearable placeholder="贷款类型" style="width: 10%;">
        <el-option key="0" label="信用贷" value="0"></el-option>
        <el-option key="1" label="车  贷" value="1"></el-option>
        <el-option key="2" label="房  贷" value="2"></el-option>
      </el-select>
      <el-select  v-model="ruleForm.currentRate" clearable placeholder="利率范围" style="width: 10%;">
        <el-option key="1" label="0.06 - 0.09" value="1"></el-option>
        <el-option key="2" label="0.09 - 0.12" value="2"></el-option>
        <el-option key="3" label="0.12 - 0.16" value="3"></el-option>
        <el-option key="4" label="0.16  以上 " value="4"></el-option>
      </el-select>
      <el-select  v-model="ruleForm.monthesReturn" clearable placeholder="还款月数" style="width: 10%;">
        <el-option key="1" label="1 - 3  月" value="1"></el-option>
        <el-option key="2" label="4 - 6  月" value="2"></el-option>
        <el-option key="3" label="7 - 10 月" value="3"></el-option>
      </el-select>
      <el-select  v-model="ruleForm.totalRewardAmount" clearable placeholder="总利息范围" style="width: 10%;">
        <el-option key="1" label="0   - 100" value="1"></el-option>
        <el-option key="2" label="100 - 150" value="2"></el-option>
        <el-option key="3" label="150 - 200" value="3"></el-option>
        <el-option key="4" label="200  以上" value="4"></el-option>
      </el-select>
      <el-button size="medium" icon="el-icon-search" type="primary" @click="query">搜 索</el-button><br/><br/><br/><br/><br/>

      <!--列表数据展示-->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="bid_request_amount" label="投资总额" width="109" align="center" sortable></el-table-column>
        <el-table-column prop="current_rate" label="利息率" width="109" align="center" sortable></el-table-column>
        <el-table-column prop="monthes_return" label="还款月数" width="109" align="center" sortable></el-table-column>
        <el-table-column prop="total_reward_amount" label="总得利息" width="109" align="center" sortable></el-table-column>
        <el-table-column prop="return_type" label="还款方式" width="109" align="center"></el-table-column>
        <el-table-column prop="bid_request_type" label="贷款类型" width="109" align="center"></el-table-column>
        <el-table-column prop="current_sum" label="现有投资" width="109" align="center" sortable></el-table-column>
        <el-table-column prop="money" label="可投标额度" width="119" align="center" sortable></el-table-column>
        <el-table-column prop="disable_date" label="投标截止时间" width="186" align="center" sortable ></el-table-column>
        <el-table-column label="投标进度" align="center" width="198">
          <template slot-scope="scope">
           <el-progress :percentage="scope.row.plan"></el-progress>
          </template>
        </el-table-column>
        <el-table-column label="操  作" align="center">
          <template slot-scope="scope">
            <!--查看详情-->
            <el-button size="mini" type="default" @click="handleDetails(scope.row.id)">查 看 详 情</el-button>
            <!--投资-->
            <el-button v-if="scope.row.plan != 100" size="mini" type="danger" @click="handleBidding(scope.row.id)">投 资</el-button>
          </template>
        </el-table-column>
      </el-table><br/><br/>

      <!--分页展示数据-->
      <div align="center" class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                       :current-page="ruleForm.page" :page-sizes="[10, 20, 30, 50, 100]" :page-size="ruleForm.rows"
                       layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </div>

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
          tableData: [{plan:null,}],
          percentage:null,//投标完成率百分比
          total:null,
          ruleForm: {
            page:1,
            rows:10,
            bidRequestState:null,//投标状态 2-投标中 3-满标
            returnType:null,//还款方式
            bidRequestType:null,//贷款类型
            currentRate:null,//利率
            monthesReturn:null,//还款月数
            totalRewardAmount:null,//总利息
          }
        }
      },
      created(){//投标数据展示
        let url = this.axios.urls.SYSTEM_BID_BIDQUERY;
        this.axios.post(url,this.ruleForm).then((response)=>{
          console.log("分页查询的："+response.data.data);
          this.tableData = response.data.data;
          this.total = response.data.total;
        }).catch(function(error){//carch则是异常
          console.log(error);
        });
      },
      methods: {
        // setBannerH(){//图片轮番滚动
        //   this.bannerH = document.body.clientWidth / 4
        // },
        // formatter(row, column) {
        //   return row.address;
        // },
        query(){//投标数据展示  包含多条件的模糊查询
          let url = this.axios.urls.SYSTEM_BID_BIDQUERY;
          this.axios.post(url,this.ruleForm).then((response)=>{
            console.log("分页查询的："+response.data.data)
            // console.log(response.data);
            this.tableData = response.data.data;
            this.total = response.data.total;
          }).catch(function(error){//carch则是异常
            console.log(error);
          });
        },
        handleSizeChange(val) {//每页数据大小改变'
          debugger
          console.log(`每页 ${val} 条`);
          this.ruleForm.rows = val;
          this.ruleForm.page = 1;
          let url = this.axios.urls.SYSTEM_BID_BIDQUERY;
          this.axios.post(url,this.ruleForm).then((response)=>{
            console.log("分页查询的："+response.data.data)
            // console.log(response.data);
            this.tableData = response.data.data;
            this.total = response.data.total;
          }).catch(function(error){//carch则是异常
            console.log(error);
          });
        },
        handleCurrentChange(val) {//当前页数的改变 上/下一页
          console.log(`当前页: ${val}`);
          this.ruleForm.page = val;
          let url = this.axios.urls.SYSTEM_BID_BIDQUERY;
          this.axios.post(url,this.ruleForm).then((response)=>{
            console.log("分页查询的："+response.data.data)
            // console.log(response.data);
            this.tableData = response.data.data;
            this.total = response.data.total;
          }).catch(function(error){//carch则是异常
            console.log(error);
          });
        },
        handleDetails(id) {//查看某一投标详情按钮
          let url = this.axios.urls.SYSTEM_BID_SELECTONE;
          this.axios.post(url, {"id":id}).then((response) => {
            let data = response.data;
            this.$store.commit('setBidDetails', {//设置信息
              bidDetails:data
            });
            let d = this.$store.getters.getBidDetails;
            // 跳转路由 去详情界面 BidDetails
            this.$router.push({
              path: '/reception/BidDetails'
            });
          }).catch((response) => {//carch则是异常
            console.log(response);
          });
        },
        handleBidding(id) {//直接投标按钮 先查看详情
          let url = this.axios.urls.SYSTEM_BID_SELECTONE;
          this.axios.post(url, {"id":id}).then((response) => {
            let data = response.data;
            this.$store.commit('setBidDetails', {//设置信息
              bidDetails:data
            });
            let d = this.$store.getters.getBidDetails;
            // 跳转路由 去投标界面 Bidding
            this.$router.push({
              path: '/reception/Bidding'
            });
          }).catch((response) => {//carch则是异常
            console.log(response);
          });
        }
      },
      // mounted(){
      //   this.setBannerH()
      // }
    }
</script>

<style scoped>

</style>

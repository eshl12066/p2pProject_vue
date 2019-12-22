<template>
  <div>
    <!--查询               -->
    <el-form size="small" :inline="true" :model="formInline" class="demo-form-inline">
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
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table border :default-sort = "{prop: 'bid_time', order: 'available_amount'}" :data="tableData" :show-header="true" :fit="true" style="width: 100%" highlight-current-row>
      <el-table-column prop="id" label="ID" sortable width="100"></el-table-column>
      <el-table-column prop="available_amount" sortable width="130" label="投标额度"> </el-table-column>
      <el-table-column  label="所投标的id"width="210">
        <template slot-scope="scope">
          <el-button  size="small" type="info" @click="jd(scope.$index,scope.row)" >点击查看对应借贷信息</el-button>
        </template>
      </el-table-column>
      <el-table-column label="投标会员id"width="210">
        <template slot-scope="scope">
          <el-button size="small" type="info" @click="hy(scope.$index,scope.row)"  >点击查看对应会员信息</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="bid_time" sortable label="投标时间"width="310"> </el-table-column>
    </el-table>
      <div align="center">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="formInline.page"
          :page-sizes="[5, 10, 100, 200]"
          :page-size="formInline.rows"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>






    <!--弹出框-->
    <el-dialog title="借贷信息" :visible.sync="dialogFormVisible1">
      <el-form :model="form1">
        <el-form-item label="ID" :label-width="formLabelWidth">
          <el-input readonly="readonly"  v-model="form1.id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="还款方式" :label-width="formLabelWidth">
          <el-input readonly="readonly"  v-model="form1.return_type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="贷款类型" :label-width="formLabelWidth">
          <el-input readonly="readonly"  v-model="form1.bid_request_type" autocomplete="off"></el-input>
        </el-form-item>ew
        <el-form-item label="贷款状态" :label-width="formLabelWidth">
          <el-input readonly="readonly"  v-model="form1.bid_request_state" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="贷款总额" :label-width="formLabelWidth">
          <el-input readonly="readonly"  v-model="form1.bid_request_amount" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="贷款的年化利率" :label-width="formLabelWidth">
          <el-input readonly="readonly"  v-model="form1.current_rate" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="还款月数" :label-width="formLabelWidth">
          <el-input readonly="readonly"  v-model="form1.monthes_return" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="当前投标数量" :label-width="formLabelWidth">
          <el-input readonly="readonly"  v-model="form1.bid_count" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="总利息" :label-width="formLabelWidth">
          <el-input readonly="readonly"  v-model="form1.total_reward_amount" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="收到的投资总额" :label-width="formLabelWidth">
          <el-input readonly="readonly"  v-model="form1.current_sum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="借款标题" :label-width="formLabelWidth">
          <el-input readonly="readonly"  v-model="form1.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="借款描述" :label-width="formLabelWidth">
          <el-input readonly="readonly"  v-model="form1.description" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="投标截止日期" :label-width="formLabelWidth">
          <el-input readonly="readonly"  v-model="form1.disable_date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="借款人id" :label-width="formLabelWidth">
          <el-input readonly="readonly"  v-model="form1.members_id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="发标时间天数" :label-width="formLabelWidth">
          <el-input readonly="readonly"  v-model="form1.disable_days" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="申请时间" :label-width="formLabelWidth">
          <el-input readonly="readonly"  v-model="form1.apply_time" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input readonly="readonly"  v-model="form1.remark" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="审核时间" :label-width="formLabelWidth">
          <el-input readonly="readonly"  v-model="form1.audit_time" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="申请时间" :label-width="formLabelWidth">
          <el-input readonly="readonly"  v-model="form1.apply_time" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="审核人" :label-width="formLabelWidth">
          <el-input readonly="readonly"  v-model="form1.auditor_id" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible1 = false">确 定</el-button>
      </div>
    </el-dialog>


        <!--****************************************************************************************-->


    <el-dialog title="投标会员信息" :visible.sync="dialogFormVisible2">
      <el-form :model="form2">
        <el-form-item label="ID ：" :label-width="formLabelWidth">
          <el-input readonly="readonly"  v-model="form2.id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="会员名称：" :label-width="formLabelWidth">
          <el-input readonly="readonly"  v-model="form2.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="认证分数：" :label-width="formLabelWidth">
          <el-input readonly="readonly"  v-model="form2.certification_score" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="是否身份认证" :label-width="formLabelWidth">
          <el-input readonly="readonly"  v-model="form2.is_identity_authentication" autocomplete="off"></el-input>
        </el-form-item>
          <el-form-item label="是否可用" :label-width="formLabelWidth">
            <el-input readonly="readonly"  v-model="form2.members_state" autocomplete="off"></el-input>
          </el-form-item>
          <!--<el-form-item label="当前借货唯一ID" :label-width="formLabelWidth">
            <el-input v-model="form2.bid_request_id" autocomplete="off"></el-input>
          </el-form-item>-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          value3:"",
          value4:"",
          zlVisibledel:false,
          formInline: {
            stop:'',
            start:'',
            page: 1,
            rows: 10,
            total:0,
          },
          tableData: [],
          total:0,
          formLabelWidth: '120px',
          dialogFormVisible1:false,
          dialogFormVisible2:false,
          form2:{
            id:'',
            name:'',
            certification_score:'',
            is_identity_authentication:'',
            members_state:''
          },
          form1:{

          }
        }
      },
      methods: {
          //这是当一页展示数据数量变化的时候的回掉函数
          handleSizeChange: function(rwos) {
              this.formInline.page = 1;
              this.formInline.rows = rwos;
              this.seach();
          },
          //当当前页该改变的时候调用
          handleCurrentChange: function(page) {
              this.formInline.page = page;
              this.seach();
          },


          handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        },
        jd(index,row){
          console.log("row:"+row.bid_request_id);
          var url2 = this.axios.urls.SYSTEM_BID_SELECTREQUEST;
          this.axios.post(url2, {id:row.bid_request_id}).then((response) => {
            this.form1 = response.data.data;
            console.log("jd:"+response.data.data.title);
            this.dialogFormVisible1 = true;
          }).catch((response) => {
            console.log(response);
          });
        },
        hy(index,row){
          console.log("row:"+row.members_id);
          var url2 = this.axios.urls.SYSTEM_BID_SELECTMEMBERS;
          this.axios.post(url2, {id:row.members_id}).then((response) => {
            this.form2 = response.data.data;
            console.log("hy:"+response.data.data.name);
            this.dialogFormVisible2 = true;
          }).catch((response) => {
            console.log(response);
          });
        },
        onSubmit() {

          this.seach();

        },
        getTime(){
          var date = new Date();
          var seperator1 = "-";
          var seperator2 = ":";
          //以下代码依次是获取当前时间的年月日时分秒
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var strDate = date.getDate();
          var minute = date.getMinutes();
          var hour = date.getHours();
          var second = date.getSeconds();
          //固定时间格式
          if (month >= 1 && month <= 9) {
            month = "0" + month;
          }
          if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
          }
          if (hour >= 0 && hour <= 9) {
            hour = "0" + hour;
          }
          if (minute >= 0 && minute <= 9) {
            minute = "0" + minute;
          }
          if (second >= 0 && second <= 9) {
            second = "0" + second;
          }
          var currentdate =  year + seperator1 + month + seperator1 + strDate
            + " " + hour + seperator2 + minute + seperator2 + second;
          return currentdate;
        },
        seach(){
          if(this.value3!=null){
              this.formInline.start =  this.value3
          };
          if(this.value4!=null){
              this.formInline.stop =  this.value4
          };
          var url2 = this.axios.urls.SYSTEM_BID_SELECTALL;
          this.axios.post(url2, this.formInline).then((response) => {
            this.tableData = response.data.data;
            this.total=response.data.total
          }).catch((response) => {
            console.log(response);
          });
        }
      },
      created() {
       this.seach();
      }
    }
</script>

<style scoped>

</style>

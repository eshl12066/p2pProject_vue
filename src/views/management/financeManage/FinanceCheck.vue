<template>
  <!--提现审核界面-->
<div>
  <!--查询               -->
  <el-form size="small" :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="提现金额">
      <el-input v-model="formInline.moneys" placeholder="大于此金额"></el-input>
    </el-form-item>
    <span>&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;</span>
    <el-form-item >
      <el-input v-model="formInline.moneym" placeholder="小于此金额"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>

  <el-table border :default-sort = "{prop: 'apply_time', order: 'descending'}" :data="tableData" :show-header="true" :fit="true" style="width: 100%" highlight-current-row>
    <el-table-column prop="id" label="ID" width="100"></el-table-column>
    <el-table-column prop="apply_time" sortable label="申请时间"width="300"> </el-table-column>
    <el-table-column prop="name" width="150" label="申请人"> </el-table-column>
    <el-table-column prop="amount" label="提现金额"width="150"> </el-table-column>
    <el-table-column prop="fee" label="手续费"width="150"> </el-table-column>
    <el-table-column  label="操作"width="185">
        <template slot-scope="scope">
          <el-button type="info" @click="susinfo(scope.$index,scope.row)"  icon="el-icon-check" circle></el-button>
          <el-button type="danger" @click="losinfo(scope.$index,scope.row)"  icon="el-icon-close" circle></el-button>
        </template>
    </el-table-column>
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
  <el-dialog title="充值" :visible.sync="zlVisibledel" width="35%" >
    <span>处理成功！！！</span>
    <span slot="footer" class="dialog-footer">
              <el-button @click="zlVisibledel = false">取 消</el-button>
              <el-button type="primary" @click="zlVisibledel = false">确 定</el-button>
       </span>

  </el-dialog>
</div>
</template>

<script>
  // 导入组件
  //	import TopNav from '@/components/TopNav.vue'

  // 导出模块
  export default {
    data() {
      return {
        userManage:null,
        value2:"",
        zlVisibledel:false,
          total:0,
        formInline: {
          moneys:'',
          moneym:'',
            page: 1,
            rows: 10,
            total:0,
        },
        tableData: []
      }
    },
    methods: {
        search() {
            this.onSubmit();
        },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
        //这是当一页展示数据数量变化的时候的回掉函数
        handleSizeChange: function(rwos) {
            this.formInline.page = 1;
            this.formInline.rows = rwos;
            this.search();
        },
        //当当前页该改变的时候调用
        handleCurrentChange: function(page) {
            this.formInline.page = page;
            this.search();
        },
      onSubmit() {                            //查询提交
        let url = this.axios.urls.SYSTEM_ASSET_WITHDRAW_LISTUSER;
        this.axios.post(url, this.formInline).then((response) => {
          console.log(response);
          this.tableData = response.data.data;
          this.total=response.data.total
        }).catch((response) => {
          //carch则是异常
          console.log(response);
        });
      },
      editJE(id,jian){
        var url = this.axios.urls.SYSTEM_ASSET_RECHARGE_UPDATEJE;
        this.axios.post(url, {jian:jian,membersId:id}).then((response) => {
        }).catch((response) => {
          console.log(response);
        });
      },
      autoAddMessage(type,id,time){

        // 自动增加信息
        var cc ={
          fromMessageId:this.userManage,        //发送人ID   ********************************ID*****************************
          toMessageId:id ,        //接收人ID
          messageContext:'',        //内容
          messageTitle:'!!!!!!!!提现审核通知!!!!!!!!!!',        //标题
          messageState:1,        //状态
        };
        if(type==1){
          cc.messageContext = '恭喜您，您于'+time+'提交的提现申请已经通过！！！！！';
        }
        if(type==2){
          cc.messageContext = '很遗憾，您于'+time+'提交的提现申请未通过,请重新申请！！！！！';
        }
        let url = this.axios.urls.SYSTEM_MESSAGE_INSERT;
        this.axios.post(url, cc).then((response) => {
          console.log(response);
        }).catch((response) => {
          //carch则是异常
          console.log(response);
        });
      },
      susinfo(index,row){                        // 通过按钮
        let url = this.axios.urls.SYSTEM_ASSET_WITHDRAW_EDIT;
        var infofrom ={
          id : row.id,
          state:0,
          audit_time:this.getTime(),
          auditor_id:this.userManage                    //********************************ID*****************************
        }
        this.axios.post(url, infofrom).then((response) => {
          console.log(response);
          this.autoAddMessage(1,row.members_id,infofrom.audit_time);
          this.editJE(row.members_id,row.amount-row.fee);
          this.recah();

          this.$notify({
            title: '',
            message: '已将该审核通过',
            type: 'success'
          });
        }).catch((response) => {
          //carch则是异常
          console.log(response);
        });
      },
      losinfo(index,row){                         //不通过按钮
        let url = this.axios.urls.SYSTEM_ASSET_WITHDRAW_EDIT;
        var infofrom ={
          id : row.id,
          state:1,
          audit_time:this.getTime(),
          auditor_id:this.userManage                    //********************************ID*****************************
        }
        this.axios.post(url, infofrom).then((response) => {
          this.autoAddMessage(2,row.members_id,infofrom.audit_time);
          console.log(response);
          this.recah();
          this.$notify({
            title: '',
            message: '已将该审核PASS',
            type: 'warning'
          });
        }).catch((response) => {
          //carch则是异常
          console.log(response);
        });
      },
      recah(){
        let url = this.axios.urls.SYSTEM_ASSET_WITHDRAW_LISTUSER;
        this.axios.post(url, {state:2}).then((response) => {
          console.log(response);
          this.tableData = response.data.data;
        }).catch((response) => {
          //carch则是异常
          console.log(response);
        });
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
      }
    },
    created(){
          this.recah();
          this.search();
          this.userManage = this.$store.getters.getUserManage;//后台管理员

    }

  };
</script>
<style scoped>


</style>

<template>
  <!--初始额度为300,信用积分为30（只要注册成功即可）-->
  <!--实名认证后额度为600,信用积分为60-->
  <!--若没有通过实名认证则不能借贷，也就是信用积分要大于60-->
  <!--通过材料认证后跟据后台打的分数(上顶40分)，1分为10额度（最多增加400元），来增加会员额度-->
  <!--也就是说所有认证后最高可获额度为1000，-->
  <!--其他增加额度方式有：-->
  <!--1、每次投资的增加比例为1:100 (0.01)-->
  <!--2、每次成功还款的增加比例为1：10 (0.1)-->

  <div id="app">
    <el-form label-width="100px">
      <el-form-item style="background-color: rgb(195, 202, 215);">
        用户征信文件审核管理
        <el-button size="mini" icon="el-icon-refresh" style="margin-left: 920px;" @click="flush" circle > </el-button>
      </el-form-item>
      <el-row>

        <div align="center">
          <el-col :span="20">状态：
            <el-select  v-model="ruleForm.state" placeholder="请选择" clearable>
              <el-option key="0" label="审核通过" value="0"></el-option>
              <el-option key="1" label="等待审核" value="1"></el-option>
              <el-option key="2" label="审核失败" value="2"></el-option>
            </el-select>申请时间：
            <el-date-picker v-model="ruleForm.value2" type="daterange" >
            </el-date-picker>
            <el-button type="primary"  @click="commitup" icon="el-icon-search">搜索</el-button>
          </el-col>
        </div>
        <br>
      </el-row>

      <pre>

      </pre>
      <el-row>
        <div style="width: 72%;">
          <el-col style="width: 128%;" :span="24">
            <el-table  style="left: 45px;" :data="tableData" :fit="true" :show-header="true" highlight-current-row>
              <el-table-column prop="name" style="width: 0%;"  label="用户名" width="0px"   sortable>
              </el-table-column>
              <el-table-column prop="state" style="width: 0%; max-height: 0px;"  label="状态" :formatter="clstate"    sortable >
              </el-table-column>
              <el-table-column  prop="yscore"  label="分数"   sortable>
              </el-table-column>
              <el-table-column prop="cltype" label="资料类型"   sortable>
                <template slot-scope="scope">证件类型</template>
              </el-table-column>
              <el-table-column prop="apply_time" label="申请时间"   sortable>
              </el-table-column>
              <el-table-column prop="auditor_id" label="审核人"   sortable>
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="100"  >
                <template slot-scope="scope"><!--toolbar按钮-->
                  <!--弹出框按钮-->
                  <el-button v-if="scope.row.state == 1 "   @click="dd(scope.$index,scope.row)" icon="el-icon-edit" circle></el-button>
                  <el-button v-if="scope.row.state == 0 ||scope.row.state== 2 " type="primary" icon="el-icon-view" @click="see(scope.$index,scope.row)"circle></el-button>
                   <!--弹出框-->
                  <!--待审核编辑-->
                  <el-dialog width="35%" title="材料认证审核" :visible.sync="dialogFormVisible"  append-to-body="false">

                    <el-form :model="form" size="mini" align="center" >
                      <el-row>
                        <el-col :span="24"align="center" >
                          <el-form-item label="用户名" :label-width="formLabelWidth">
                            <el-input style="width: 90%;" v-model="form.name" autocomplete="off" readonly="true"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-form-item label="资料图片" :label-width="formLabelWidth">
                          <div class="demo-image__preview">
                            <el-image
                              style="width: 100px; height: 100px"
                              :src="form.image"
                              :preview-src-list="srcList">
                            </el-image>
                          </div>
                        </el-form-item>
                        <el-form-item label="征信分数" :label-width="formLabelWidth">
                          <el-input style="width: 90%;" v-model="form.score" autocomplete="off" ></el-input>
                        </el-form-item>

                        <el-form-item label="审核备注" :label-width="formLabelWidth">
                          <div style="margin: 20px 0;"></div>
                          <el-input type="textarea"
                                    placeholder="请输入内容"
                                    v-model="form.remark"
                                    maxlength="30"
                                    show-word-limit
                          ></el-input>
                        </el-form-item>
                      </el-row>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible = false">取 消</el-button>
                      <el-button  type="primary"  @click="update(0)" plain="true">审核通过</el-button>
                      <el-button  type="warning" @click="update(2)" plain="true">审核拒绝</el-button>
                    </div>
                  </el-dialog>

                  <!--仅查看-->
                  <el-dialog width="35%" title="材料认证审核" :visible.sync="dialogFormVisible2"  append-to-body="false">
                    <el-form :model="form2" size="mini" align="center" >
                      <el-row>
                        <el-col :span="24"align="center" >
                          <el-form-item label="用户名" :label-width="formLabelWidth">
                            <el-input style="width: 90%;" v-model="form2.name" autocomplete="off" readonly="true"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-form-item label="资料图片" :label-width="formLabelWidth">
                          <div class="demo-image__preview">
                            <el-image
                              style="width: 100px; height: 100px"
                              :src="form2.image"
                              :preview-src-list="srcList1">
                            </el-image>
                          </div>
                        </el-form-item>

                        <el-form-item label="征信分数" :label-width="formLabelWidth">
                          <el-input style="width: 90%;" v-model="form2.score" autocomplete="off" readonly="true"></el-input>
                        </el-form-item>

                        <el-form-item label="审核备注" :label-width="formLabelWidth">
                          <el-input type="textarea"  v-model="form2.remark" autocomplete="off" readonly="true"></el-input>
                        </el-form-item>
                      </el-row>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible2 = false">取 消</el-button>
                    </div>

                  </el-dialog>
                  <!--弹出框-->
                </template>

              </el-table-column>
            </el-table>
          </el-col>
        </div>
      </el-row>
    </el-form>
    <br>
    <div align="center">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="ruleForm.page"
        :page-sizes="[5, 10, 100, 200]"
        :page-size="ruleForm.rows"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>

</template>

<script>
  export default {
    name: "MemberclManage",
    data() {
      return {
        /*行数*/
        tableData:null,
        total:null,
        /*展示表格*/
        ruleForm: {
          start:'',
          stop: '',
          state: null,
          value2:null,
          page:1,
          rows:5
        },
        /*弹框1 有修改功能*/
        dialogFormVisible: false,
        /*弹框表格*/
        form: {
          audit_time:'',
          id:'',
          name:'',
          image:'',
          score:'',
          state:null,
          remark:''
        },
        /*预览大图展示*/
        srcList:[],

        /*弹框2 仅查看*/
        dialogFormVisible2: false,
        form2: {
          name:'',
          image:'',
          score:'',
          remark:''
        },
        srcList1:[],
        /*弹框宽度*/
        formLabelWidth: '100px',

      }

    },created(){

      let url = this.axios.urls.MEMBER_MANAGE_GETCALL;
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
    /*方法*/
    methods:{
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
      /*时间*/
      commitup(){

        if (!this.ruleForm.value2 ==null){
          this.ruleForm.start =  this.ruleForm.value2[0];
          this.ruleForm.stop =  this.ruleForm.value2[1];
        }
        else{
          this.ruleForm.start =  "";
          this.ruleForm.stop =  "";
        }

        let url = this.axios.urls.MEMBER_MANAGE_GETCALL;
        this.axios.post(url, this.ruleForm).then((response) => {
          console.log("分页查询的："+response.data.data)
          this.tableData = response.data.data;
          this.total = response.data.total;
        }).catch((response) => {
          //carch则是异常
          console.log(response);
        });
      },
      /*状态*/
      clstate(row,column){
        if(row.state === 0){
          return '已通过！'
        }
        else if (row.state ==1){
          return '等待审核'
        }
        else if (row.state ==2){
          return '未通过！'
        }
      },
      /*单个查返回数据 第一个*/
      dd(index,row){
        let url = this.axios.urls.MEMBER_CLONE;
        this.axios.post(url, {id:row.id}).then((response) => {
          this.form.id = response.data.id;
          this.form.name = response.data.name;
          this.form.image = response.data.image;
          this.srcList=[];
          this.srcList.push(response.data.image);

          this.form.score = response.data.score;
          this.form.remark = response.data.remark;
          this.dialogFormVisible = true;
        });
      },
      see(index,row){
        let url = this.axios.urls.MEMBER_CLONE;
        console.log(row.id);
        this.axios.post(url, {id:row.id}).then((response) => {
          console.log(response);
          this.form2.name = response.data.name;
          this.form2.image = response.data.image;
          this.srcList1.push(response.data.image) ;
          this.form2.score = response.data.score;
          this.form2.remark = response.data.remark;
          this.dialogFormVisible2 = true;
        });
      },
      /*修改状态*/
      update(state){
        this.form.state = state;
        this.form.audit_time = this.getTime();
        let url = this.axios.urls.MEMBER_CEDITSTATE;
        this.axios.post(url,this.form).then((response)=>{
          let data = response.data;
          if(data.code==0){
            this.commitup();
            this.dialogFormVisible = false;
            this.$message({
              message: '审核成功！！',
              type: 'success'
            });
          }else{
            this.$message.error('审核失败！！');
          }
        })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.ruleForm.rows = val;
        this.ruleForm.page = 1;
        let url = this.axios.urls.MEMBER_MANAGE_GETCALL;
        this.axios.post(url,this.ruleForm).then((response)=>{
          console.log("分页查询的："+response.data.data)
          // console.log(response.data);
          this.tableData = response.data.data;
          this.total = response.data.total;
        }).catch(function(error){
          console.log(error);
        });

      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.ruleForm.page = val;

        let url = this.axios.urls.MEMBER_MANAGE_GETCALL;
        this.axios.post(url,this.ruleForm).then((response)=>{
          console.log("分页查询的："+response.data.data)
          // console.log(response.data);
          this.tableData = response.data.data;
          this.total = response.data.total;
        }).catch(function(error){
          console.log(error);
        });
      },
      /*刷新*/
      flush(){
        this.commitup();
      }

    }
  }
</script>

<style scoped>

</style>

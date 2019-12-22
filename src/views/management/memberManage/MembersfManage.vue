<template>
  <!--会员身份管理界面-->

  <!--1、实名认证审核：对网站会员提交的实名认证信息资料进行查询和审核操作；-->

  <!--2、审核通过后会默认给用户添加30的信用积分，用于可投资。-->

  <!--3、如果想要借贷就必须通过下面的材料审核。-->

  <!--初始额度为300,信用积分为30（只要注册成功即可）-->
  <!--实名认证后额度为600,信用积分为60-->
  <!--若没有通过实名认证则不能借贷，也就是信用积分要大于60-->
  <!--通过材料认证后跟据后台打的分数(上顶40分)，1分为10额度（最多增加400元），来增加会员额度-->
  <!--也就是说所有认证后最高可获额度为1000，-->
  <!--其他增加额度方式有：-->
  <!--1、每次投资的增加比例为1:100 (0.01)-->
  <!--2、每次成功还款的增加比例为1：10 (0.1)-->
    <el-form label-width="100px">
      <el-form-item style="background-color: rgb(195, 202, 215);">
        会员身份审核
        <el-button size="mini" icon="el-icon-refresh" style="margin-left: 920px;" @click="flush" circle > </el-button>
      </el-form-item>

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
      <pre>

      </pre>
      <el-row>
        <div style="width: 72%;">
          <el-col style="width: 128%;" :span="24">
            <el-table  style="left: 45px;" :data="tableData" :fit="true" :show-header="true" highlight-current-row>
              <el-table-column prop="id" style="width: 0%;"  label="id" width="0px" resizable="true" sortable>
              </el-table-column>
              <el-table-column prop="realname" style="width: 0%; max-height: 0px;"  label="真实姓名" resizable="true" sortable filter-multiple="true" :type="selection">
              </el-table-column>
              <el-table-column  prop="sex"  label="性别" sortable resizable="true">
              </el-table-column>
              <el-table-column prop="certification_score" label="分数" resizable="true" sortable>
              </el-table-column>
              <el-table-column prop="id_number" label="身份证号码" resizable="true" sortable>
              </el-table-column>
              <el-table-column prop="address" label="身份证地址" resizable="true" sortable>
              </el-table-column>
              <el-table-column prop="state" label="状态" resizable="true" :formatter="clstate" sortable>
              </el-table-column>
              <el-table-column prop="apply_time" label="申请时间" resizable="true" sortable>
              </el-table-column>
              <el-table-column prop="auditor_id" label="审核人" resizable="true" sortable>
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope"><!--toolbar按钮-->
                  <!--弹出框按钮-->
                  <el-button v-if="scope.row.state == 1 "  @click="dd(scope.$index,scope.row)" type="info" icon="el-icon-edit" circle></el-button>
                  <el-button v-if="scope.row.state == 0 ||scope.row.state== 2 " type="primary" icon="el-icon-view" @click="see(scope.$index,scope.row)"circle></el-button>
                  <!--弹出框-->
                  <!--待审核编辑-->
                  <el-dialog title="身份认证审核" :visible.sync="dialogFormVisible" append-to-body="false" >
                    <el-form :model="form" size="mini">
                      <el-row :span="24">
                      <el-col :span="12">
                        <el-form-item label="用户名" :label-width="formLabelWidth">
                          <el-input style="width: 90%;" v-model="form.name" autocomplete="off"></el-input>
                        </el-form-item>
                      </el-col>
                        <el-col :span="12">
                        <el-form-item  label="真实姓名" :label-width="formLabelWidth">
                          <el-input style="width: 90%;"  v-model="form.realname" autocomplete="off"></el-input>
                        </el-form-item>
                        </el-col>
                        <el-col :span="12">
                    <el-form-item label="身份证号" :label-width="formLabelWidth">
                      <el-input style="width: 90%;" v-model="form.id_number" autocomplete="off"></el-input>
                    </el-form-item>
                        </el-col>
                        <el-col :span="12">
                    <el-form-item label="性别" :label-width="formLabelWidth">
                      <el-input style="width: 90%;" v-model="form.sex" autocomplete="off"></el-input>
                    </el-form-item>
                        </el-col>
                        <el-col :span="12">
                    <el-form-item label="生日" :label-width="formLabelWidth">
                      <el-input style="width: 50%;" v-model="form.born_date" autocomplete="off"></el-input>
                    </el-form-item>
                        </el-col>
                        <el-col :span="12">
                    <el-form-item label="身份证地址" :label-width="formLabelWidth">
                      <el-input style="width: 90%;" v-model="form.address" autocomplete="off"></el-input>
                    </el-form-item>
                    </el-col>
                      <div class="demo-image__preview"align="center" >
                          <span class="demonstration" align="left">身份证正面
                            <el-image
                              style="width: 100px; height: 100px"
                              :src="form.image1"
                              :preview-src-list="srcList1">
                            </el-image>
                          </span>

                          <span class="demonstration" align="right">身份证反面
                            <el-image
                              style="width: 100px; height: 100px"
                              :src="form.image2"
                              :preview-src-list="srcList2">
                            </el-image>
                            </span>
                      </div>
                    <el-form-item label="审核备注" :label-width="formLabelWidth">
                      <el-input type="textarea"  v-model="form.remark" autocomplete="off"></el-input>
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
                  <el-dialog title="身份认证审核" :visible.sync="dialogFormVisible2" append-to-body="false" >
                    <el-form :model="form2" size="mini">
                      <el-row>
                        <el-col :span="12">
                          <el-form-item label="用户名" :label-width="formLabelWidth">
                            <el-input style="width: 90%;" v-model="form2.name" autocomplete="off" readonly="true"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item  label="真实姓名" :label-width="formLabelWidth">
                            <el-input style="width: 90%;"  v-model="form2.realname" autocomplete="off" readonly="true"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="身份证号" :label-width="formLabelWidth">
                            <el-input style="width: 90%;" v-model="form2.id_number" autocomplete="off" readonly="true"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="性别" :label-width="formLabelWidth">
                            <el-input style="width: 90%;" v-model="form2.sex" autocomplete="off" readonly="true"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                        <el-form-item label="生日" :label-width="formLabelWidth">
                          <el-input style="width: 50%;" v-model="form2.born_date" autocomplete="off" readonly="true"></el-input>
                        </el-form-item>
                        </el-col>
                        <el-col :span="12">
                        <el-form-item label="身份证地址" :label-width="formLabelWidth">
                          <el-input style="width: 90%;" v-model="form2.address" autocomplete="off" readonly="true"></el-input>
                        </el-form-item>
                        </el-col>
                        <div class="demo-image__preview"align="center" >
                          <span class="demonstration" align="left">身份证正面
                            <el-image
                              style="width: 100px; height: 100px"
                              :src="form2.image1"
                              :preview-src-list="srcList1">
                            </el-image>
                          </span>

                          <span class="demonstration" align="right">身份证反面
                            <el-image
                              style="width: 100px; height: 100px"
                              :src="form2.image2"
                              :preview-src-list="srcList2">
                            </el-image>
                            </span>
                        </div>
                        <el-form-item label="审核备注" :label-width="formLabelWidth">
                          <el-input type="textarea" readonly="true" v-model="form2.remark" autocomplete="off"></el-input>
                        </el-form-item>
                      </el-row>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible2 = false">取 消</el-button>
                    </div>
                  </el-dialog>
                <!--仅查看弹框-->
                </template>
              </el-table-column>

            </el-table>
          </el-col>
        </div>
      </el-row>
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
    </el-form>

</template>

<script>
  export default {
    name: "MembersfManage",
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
          userMembers:null,
          audit_time:'',
          id:'',
          name:'',
          realname:'',
          id_number:'',
          sex:'',
          born_date:'',
          address:'',
          image1:'',
          image2:'',
          state:'',
          remark:'',
          auditorId:'',
          certification_score:'',
            members_id:'',
        },
        /*预览大图展示*/
        srcList1:[],
        srcList2:[],
        /*弹框2 仅查看*/
        dialogFormVisible2: false,
        form2: {
          name:'',
          realname:'',
          id_number:'',
          sex:'',
          born_date:'',
          address:'',
          image1:'',
          image2:'',
          state:null,
          remark:'',
            auditorId:'',
            certification_score:''
        },

        /*弹框宽度*/
        formLabelWidth: '100px',

      }

    },created(){

      let url = this.axios.urls.MEMBER_MANAGE_GETRALL;
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

        if (this.ruleForm.value2 != null){
          this.ruleForm.start =  this.ruleForm.value2[0];
          this.ruleForm.stop =  this.ruleForm.value2[1];
        }
        else{
          this.ruleForm.start =  "";
          this.ruleForm.stop =  "";
        }
        let url = this.axios.urls.MEMBER_MANAGE_GETRALL;
        this.axios.post(url, this.ruleForm).then((response) => {
          console.log("分页查询的："+response.data.data)
          this.tableData = response.data.data;
          this.total = response.data.total;
        }).catch((response) => {
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

        let url = this.axios.urls.MEMBER_RLONE;
        this.axios.post(url, {id:row.id}).then((response) => {
          this.form.id = row.id;
          this.form.name = response.data.name;
          this.form.realname = response.data.realname;
          this.form.id_number = response.data.id_number;
          this.form.sex = response.data.sex;
          this.form.born_date = response.data.born_date;
          this.form.address = response.data.address;
          this.form.image1 = response.data.image1;
          this.form.image2 = response.data.image2;
          this.srcList1=[];
          this.srcList1.push(response.data.image1);
          this.srcList2=[];
          this.srcList2.push(response.data.image2);
          this.form.remark = response.data.remark;
          this.form.certification_score = row.certification_score;
            this.form.members_id = response.data.members_id;
          this.dialogFormVisible = true;
        });

      },
      see(index,row){
        let url = this.axios.urls.MEMBER_RLONE;
        console.log(row.id);
        this.axios.post(url, {id:row.id}).then((response) => {
          console.log(response);
          this.form2.name = response.data.name;
          this.form2.realname = response.data.realname;
          this.form2.id_number = response.data.id_number;
          this.form2.sex = response.data.sex;
          this.form2.born_date = response.data.born_date;
          this.form2.address = response.data.address;
          this.form2.image1 = response.data.image1;
          this.form2.image2 = response.data.image2;
          this.srcList1=[];
          this.srcList1.push(response.data.image1);
          this.srcList2=[];
          this.srcList2.push(response.data.image2);
          this.form2.remark = response.data.remark;
          this.dialogFormVisible2 = true;
        });
      },
      /*修改状态*/
      update(state){
        this.form.auditorId = this.$store.getters.getUserManage.userid;//用户的
        this.form.state = state;
        this.form.audit_time = this.getTime();
        let url = this.axios.urls.MEMBER_REDITSTATE;
        this.axios.post(url,this.form).then((response)=>{
          let data = response.data;
          if(data.code==0){

              let url2= this.axios.urls.MEMBER_UPDATASCORE;
              this.axios.post(url2,this.form).then((response)=>{

              });
              this.commitup();
              this.dialogFormVisible = false;
              this.$message({
              message: '操作成功！！',
              type: 'success'
            });
          }else{
            this.commitup();
            this.$message.error('操作失败！！');
          }
        })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.ruleForm.rows = val;
        this.ruleForm.page = 1;
        let url = this.axios.urls.MEMBER_MANAGE_GETRALL;
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

        let url = this.axios.urls.MEMBER_MANAGE_GETRALL;
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

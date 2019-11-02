<template>
  <!--会员管理界面-->

  <!--1、	可以查询会员的信息，可以通过状态(0 审核通过，1  审核失败 , 2 审核中)，用户名，地址 ，时间，模糊查询-->
  <!--2、	删除会员信息，-->
  <!--3、	修改会员信息-->

  <div id="app">
    <el-form label-width="100px">
      <el-form-item style="background-color: rgb(195, 202, 215);">
        实名审核管理
        <el-button size="mini" icon="el-icon-refresh" style="margin-left: 920px;" @click="flush" circle > </el-button>
      </el-form-item>
      <el-row>
        <el-col :span="4">
			<span>
			</span>
        </el-col>

          <div align="center">
            <el-col :span="20">状态：
              <el-select  v-model="ruleForm.state" placeholder="请选择" clearable>
                <el-option key="0" label="审核通过" value="0"></el-option>
                <el-option key="2" label="审核失败" value="2"></el-option>
              </el-select>
              <el-input
                placeholder="输入用户名"
                v-model="ruleForm.name"
                style="width: 230px"
                clearable>
                <a> </a>
              </el-input>申请时间：
              <el-date-picker v-model="ruleForm.value2" type="daterange" >
              </el-date-picker>
              <el-button type="primary"  @click="commitup" icon="el-icon-search">搜索</el-button>
            </el-col>
          </div>
        <br>
      </el-row>
      <el-row>
        <div style="width: 72%;">
          <el-col style="width: 128%;" :span="24">
            <el-table style="left: 45px;" :data="tableData" :fit="true" :show-header="true" highlight-current-row>
              <el-table-column style="width: 0%;" prop="name" label="用户名" width="0px"  sortable>
              </el-table-column>
              <el-table-column prop="realname" style="width: 0%; max-height: 0px;" label="真实姓名"  sortable filter-multiple="true" :type="selection">
              </el-table-column>
              <el-table-column prop="sex" label="性别" sortable >
              </el-table-column>
              <el-table-column prop="id_number" label="证籍号码"  sortable>
              </el-table-column>
              <el-table-column prop="address" label="证籍地址"  sortable>
              </el-table-column>
              <el-table-column prop="audit_time" label="审核时间"  sortable>
              </el-table-column>
              <el-table-column prop="auditor_id" label="审核人"  sortable>
              </el-table-column>
              <el-table-column prop="state" label="状态" resizable="true" :formatter="clstate" sortable>
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope"><!--toolbar按钮-->
                  <!--弹出框按钮-->
                  <el-button type="primary" icon="el-icon-view" @click="see(scope.$index,scope.row)" circle></el-button>
                  <!--弹出框-->

                  <!--仅查看-->
                  <el-dialog title="身份认证审核" :visible.sync="dialogFormVisible2" append-to-body="false" >
                    <el-form :model="form2" size="mini">
                      <el-row>
                        <el-col :span="12">
                          <el-form-item label="用户名" :label-width="formLabelWidth">
                            <el-input style="width: 90%;" readonly="true" v-model="form2.name" autocomplete="off"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item  label="真实姓名" :label-width="formLabelWidth">
                            <el-input style="width: 90%;" readonly="true" v-model="form2.realname" autocomplete="off"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="身份证号" :label-width="formLabelWidth">
                            <el-input style="width: 90%;" readonly="true" v-model="form2.id_number" autocomplete="off"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="性别" :label-width="formLabelWidth">
                            <el-input style="width: 90%;" readonly="true" v-model="form2.sex" autocomplete="off"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="生日" :label-width="formLabelWidth">
                            <el-input style="width: 50%;" readonly="true" v-model="form2.born_date" autocomplete="off"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="身份证地址" :label-width="formLabelWidth">
                            <el-input style="width: 90%;" readonly="true" v-model="form2.address" autocomplete="off"></el-input>
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
                          <el-input type="textarea" readonly="true"  v-model="form2.remark" autocomplete="off"></el-input>
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
        <span>
		</span>
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
  </div>

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
          name:'',
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
          id:'',
          name:'',
          realname:'',
          id_number:'',
          sex:'',
          born_date:'',
          address:'',
          image1:'',
          image2:'',
          state:null,
          remark:''
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
          remark:''
        },

        /*弹框宽度*/
        formLabelWidth: '100px',

      }

    },created(){

      let url = this.axios.urls.MEMBER_MANAGE_GETALL;
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
        let url = this.axios.urls.MEMBER_MANAGE_GETALL;
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
        else if (row.state ==2){
          return '未通过！'
        }
      },
      /*单个查返回数据*/
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
        this.form.state = state;
        let url = this.axios.urls.MEMBER_REDITSTATE;
        this.axios.post(url,this.form).then((response)=>{
          let data = response.data;
          if(data.code==0){
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
        let url = this.axios.urls.MEMBER_MANAGE_GETALL;
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
        this.tableData.page = val;

        let url = this.axios.urls.MEMBER_MANAGE_GETALL;
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

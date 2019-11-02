<template>


  <div id="app">
    <el-form label-width="100px">
      <el-form-item style="background-color: rgb(195, 202, 215);" label="员工管理">
      </el-form-item>
      <el-row>
        <el-col :span="4">
			<span>
			</span>
        </el-col>
        <div align="left">
          <el-col :span="12">
            <el-select  v-model="ruleForm.userstate" clearable placeholder="请选择" style="width: 20%;">
              <el-option key="0" label="可用" value="0"></el-option>
              <el-option key="1" label="不可用" value="1"></el-option>
            </el-select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;状态

            <div style="margin-top: 15px;">
              <el-input placeholder="请输入内容" v-model="ruleForm.username" class="input-with-select" style="width: 80%;">
                <el-button slot="prepend"  >员工名字</el-button>
                <el-button slot="append" icon="el-icon-search" @click="query"></el-button>
              </el-input>
              <el-button type="warning" plain size="small" icon="el-icon-plus" @click="dialogFormVisible1 = true">增加</el-button>
            </div>

          </el-col>
        </div>
        <br>
      </el-row>
      <el-row>
        <div style="width: 72%;">
          <el-col style="width: 128%;" :span="24">
            <el-table style="left: 45px;" :data="tableList" :fit="true" :show-header="true" highlight-current-row>
              <el-table-column prop="userid" label="员工id" width="0px" resizable="true" sortable>
              </el-table-column>
              <el-table-column prop="username" label="员工名字" resizable="true" sortable filter-multiple="true" >
              </el-table-column>
              <el-table-column prop="userrole" label="员工角色" resizable="true" sortable filter-multiple="true" >
              </el-table-column>
              <el-table-column  prop="createdate" label="创建时间" sortable resizable="true">
              </el-table-column>
              <el-table-column label="员工状态"   align="center">
                <template slot-scope="scope" >
                  <!--<el-switch v-model="scope.row.userstate" active-text="可用" inactive-text="不可用"> </el-switch>-->
                  <el-tooltip :content="scope.row.userstate" placement="top">
                    <el-switch
                      v-model="scope.row.userstate"
                      @change="updatestate(scope.row.userstate,scope.row.userid)"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                      active-value="可用"
                      inactive-value="不可用">
                    </el-switch>
                  </el-tooltip>
                </template>
              </el-table-column>
              <el-table-column label="操作"   align="center">
                <template slot-scope="scope" >
                  <!--投资-->
                  <el-button type="warning"  size="mini" icon="el-icon-plus" @click="roleDialog(scope.row.userid)"  >增加角色</el-button>
                  <!--  查看详情   结束   -->
                  <el-button size="mini" @click="updateDialog(scope.row.userid)" slot="reference" >修改</el-button>
                  <!--投资-->
                  <el-button size="mini" @click="del(scope.row.userid)" type="danger" >删除</el-button>


                </template>
              </el-table-column>
            </el-table>
          </el-col>
        </div>
        <span>
		</span>
        <div align="center">
          <el-col :span="24">
            <el-row>
              <el-col :span="24">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="ruleForm.page"
                  :page-sizes="[5, 10, 100, 200]"
                  :page-size="ruleForm.rows"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="total">
                </el-pagination>
              </el-col>
            </el-row>
          </el-col>

        </div>
        <br>
      </el-row>
    </el-form>

    <!--弹出层 dialogFormVisible1-->
    <el-dialog title="增加员工" :visible.sync="dialogFormVisible1"  append-to-body="false">
      <el-form :model="form1" size="mini">
        <el-row>
          <el-col >
            <el-form-item label="员工名" :label-width="formLabelWidth1">
              <el-input style="width: 50%;" v-model="form1.username"></el-input>
            </el-form-item>
          </el-col>
          <el-col >
            <el-form-item  label="密码" :label-width="formLabelWidth1">
              <el-input style="width: 50%;"  v-model="form1.password"
                        placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="add">增加</el-button>
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
      </div>

    </el-dialog>

    <!--弹出层 dialogFormVisible2-->
    <el-dialog title="修改员工" :visible.sync="dialogFormVisible2"  append-to-body="false">
      <el-form :model="form2" size="mini">
        <el-row>
          <el-col >
            <el-form-item label="员工名" :label-width="formLabelWidth2">
              <el-input style="width: 50%;" v-model="form2.username" ></el-input>
            </el-form-item>
          </el-col>
          <el-col >
            <el-form-item  label="员工密码" :label-width="formLabelWidth2">
              <el-input style="width: 50%;"  v-model="form2.password"
                        placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="update">修改</el-button>
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
      </div>
    </el-dialog>

    <!--弹出层 dialogFormVisible3 ,增加角色-->
    <el-dialog title="增加角色" :visible.sync="dialogFormVisible3"  append-to-body="false">
      <el-form :model="form3" size="mini" align="center">
        <el-row  >
          <el-select style="width:50%" v-model="form3.userids" multiple placeholder="请选择">
            <el-option
              v-for="item in selectRole"
              :key="item.roleid"
              :label="item.rolename"
              :value="item.roleid">
            </el-option>
          </el-select>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="shouquan">确认</el-button>
        <el-button @click="dialogFormVisible3 = false">取 消</el-button>
      </div>
    </el-dialog>

  </div>
</template>


<script >
  export default {
    name: "UserManage",
    data() {
      return {

        selectRole:null,//下拉框的
        tableList:null,
        total:null,
        ruleForm: {
          userstate:null,
          username:"",
          page:1,
          rows:5
        }
        ,//弹出层1
        dialogFormVisible1: false,
        form1: {
          username:"",
          password:""
        },
        formLabelWidth1: '120px'
        ,//弹出层2
        dialogFormVisible2: false,
        form2: {
          userid:null,
          username:"",
          password:"",
          userstate:null
        },
        formLabelWidth2: '120px',

        dialogFormVisible3:false,
        form3: {
          userid:null,
          userids:[]
        },


        //树形
        defaultProps: {
          children: 'children',
          label: 'pername'
        },
        //树形静态数据
        treedata:[{
          perid: 1,
          pername: '权限管理',
          children: [{
            perid: 17,
            pername: '用户管理',
          },{
            perid:18,
            pername:'角色管理'
          },{
            perid:19,
            pername:'登陆日志管理'
          },{
            perid:20,
            pername:'操作日志管理'
          }]
        }, {
          perid: 2,
          pername: '会员管理',
          children: [{
            perid: 25,
            pername: '会员管理'
          }, {
            perid: 7,
            pername: '会员身份管理'
          },{
            perid:8,
            pername:'会员材料管理'
          }]
        }, {
          perid: 3,
          pername: '资金管理',
          children: [{
            perid: 4,
            pername: '用户充值提现记录'
          }, {
            perid: 5,
            pername: '用户交易记录'
          },{
            perid:6,
            pername:'提现审核界面'
          }
          ]
        },{
          perid: 9,
          pername: '业务管理',
          children: [{
            perid: 10,
            pername: '投资管理'
          }, {
            perid: 14,
            pername: '信用贷'
          },{
            perid:15,
            pername:'车贷'
          },{
            perid:16,
            pername:'房贷'
          }
          ]
        },{
          perid: 21,
          pername: '设置管理',
          children: [{
            perid: 22,
            pername: '数据字典'
          }, {
            perid: 23,
            pername: '消息管理'
          },{
            perid:24,
            pername:'费率管理'
          }]
        }
        ]



      }
    },
    created(){
      let url = this.axios.urls.SYSTEM_USER_USERQUERY;
      var turl = this.axios.urls.SYSTEM_ROLE_ROLESELECT;
      this.axios.post(url,this.ruleForm).then((response)=>{
        console.log("分页查询的："+response.data.data)
        this.tableList = response.data.data;
        this.total = response.data.total;
        this.axios.post(turl,{}).then((response)=>{
          this.selectRole = response.data;

        }).catch(function(error){
          console.log(error);
        });


      }).catch(function(error){
        console.log(error);
      });
    }
    ,
    methods:{
      query(){
        let url = this.axios.urls.SYSTEM_USER_USERQUERY;
        this.axios.post(url,this.ruleForm).then((response)=>{
          console.log("分页查询的："+response.data.data)
          this.tableList = response.data.data;
          this.total = response.data.total;
        }).catch(function(error){
          console.log(error);
        });

      }
      ,
      updateDialog(userid){
        this.dialogFormVisible2  = true;
        this.form2.password = "";
        let url = this.axios.urls.SYSTEM_USER_SELECTONE;
        this.axios.post(url,{"userid":userid}).then((response)=>{
          console.log(response.data);

          let row = response.data
          this.form2.userid = userid;
          this.form2.username = row.username;
          this.form2.userstate = row.userstate;
        }).catch(function(error){
          console.log(error);
        });

      },
      roleDialog(userid){//角色赋值
        //给要传的参数赋值

        this.form3.userid = userid;
        this.dialogFormVisible3 = true;



      },
      del(userid){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let url = this.axios.urls.SYSTEM_USER_USERDEL;
          this.axios.post(url,{"userid":userid}).then((response)=>{
            let data = response.data
            if(data.code==0){
              this.dialogFormVisible1 = false;
              this.query();
              this.$message({
                showClose: true,
                message: data.msg,
                type: 'success'
              });
            }
            else{
              this.$message({
                showClose: true,
                message: data.msg,
                type: 'error'
              });
            }
          }).catch(function(error){
            console.log(error);
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });


      },
      add(){

        if(this.form1.username!=null && this.form1.password!=null){
          this.$confirm('是否确定密码为'+this.form1.password, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
          let url = this.axios.urls.SYSTEM_USER_USERADD;
          this.axios.post(url,this.form1).then((response)=>{
            let data = response.data
            if(data.code==0){
              this.dialogFormVisible1 = false;
              this.query();
              this.$message({
                showClose: true,
                message: data.msg,
                type: 'success'
              });
            }
            else{
              this.$message({
                showClose: true,
                message: data.msg,
                type: 'error'
              });
            }
            this.form1.username = "";
            this.form1.password ="";

          }).catch(function(error){
            console.log(error);
          });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            });
          });
        }
        else{
          this.$message({
            showClose: true,
            message: "内容不能为空",
            type: 'error'
          });

        }
      },
      update(){
        this.$confirm('是否确定密码为'+this.form2.password, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let url = this.axios.urls.SYSTEM_USER_USERUPDATE;

          this.axios.post(url,this.form2).then((response)=>{
            let data = response.data
            if(data.code==0){
              this.dialogFormVisible1 = false;
              this.query();
              this.$message({
                showClose: true,
                message: data.msg,
                type: 'success'
              });
            }
            else{
              this.$message({
                showClose: true,
                message: data.msg,
                type: 'error'
              });
            }
          }).catch(function(error){
            console.log(error);
          });
          this.dialogFormVisible2 = false;
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });

      }
      ,
      updatestate(state,userid){

        let a = null;
        if(state=="可用"){
          a = 0;
        }
        else{
          a = 1;
        }
        let url = this.axios.urls.SYSTEM_USER_USERUPDATE;
        this.axios.post(url,{"userid":userid,"userstate":a}).then((response)=>{
          let data = response.data
          if(data.code==0){
            this.$message({
              showClose: true,
              message: data.msg,
              type: 'success'
            });
          }
          else{
            this.$message({
              showClose: true,
              message: data.msg,
              type: 'error'
            });
          }
        }).catch(function(error){
          console.log(error);
        });

      }
      ,
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.ruleForm.rows = val;
        this.ruleForm.page = 1;
        let url = this.axios.urls.SYSTEM_USER_USERQUERY;
        this.axios.post(url,this.ruleForm).then((response)=>{
          console.log("分页查询的："+response.data.data)
          this.tableList = response.data.data;
          this.total = response.data.total;
        }).catch(function(error){
          console.log(error);
        });

      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.ruleForm.page = val;

        let url = this.axios.urls.SYSTEM_USER_USERQUERY;
        this.axios.post(url,this.ruleForm).then((response)=>{
          console.log("分页查询的："+response.data.data)
          this.tableList = response.data.data;
          this.total = response.data.total;
        }).catch(function(error){
          console.log(error);
        });
      },
      shouquan(){
        let pList=this.form3.userids.join(',');

        let url = this.axios.urls.SYSTEM_USER_ADDUSERROLE;
        this.axios.post(url,{"userid":this.form3.userid,"userids":pList}).then((response)=>{
          let data = response.data
          if(data.code==0){
            this.dialogFormVisible3 = false;
            this.query();
            this.$message({
              showClose: true,
              message: data.msg,
              type: 'success'
            });
          }
          else{
            this.$message({
              showClose: true,
              message: data.msg,
              type: 'error'
            });
          }
          this.form3.userids=[];


        }).catch(function(error){
          console.log(error);
        });


      }


    }

  }

</script>


<style>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>

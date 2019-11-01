<template>


  <div id="app">
    <el-form label-width="100px">
      <el-form-item style="background-color: rgb(195, 202, 215);" label="员工角色管理">
      </el-form-item>
      <el-row>
        <el-col :span="4">
			<span>
			</span>
        </el-col>
        <div align="left">
          <el-col :span="12">
            <el-select  v-model="ruleForm.rolestate" clearable placeholder="请选择" style="width: 20%;">
              <el-option key="-1" label="全部" value="-1"></el-option>
              <el-option key="0" label="可用" value="0"></el-option>
              <el-option key="1" label="不可用" value="1"></el-option>
            </el-select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;状态

            <div style="margin-top: 15px;">
              <el-input placeholder="请输入内容" v-model="ruleForm.rolename" class="input-with-select" style="width: 80%;">
              <el-button slot="prepend"  >角色名字</el-button>
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
              <el-table-column prop="roleid" label="角色id" width="0px" resizable="true" sortable>
              </el-table-column>
              <el-table-column prop="rolename" label="角色名字" resizable="true" sortable filter-multiple="true" >
              </el-table-column>
              <el-table-column prop="description" label="角色描述" sortable resizable="true">
              </el-table-column>
              <el-table-column label="角色状态"   align="center">
                <template slot-scope="scope" >
                  <!--<el-switch v-model="scope.row.rolestate" active-text="可用" inactive-text="不可用"> </el-switch>-->
                  <el-tooltip :content="scope.row.rolestate" placement="top">
                    <el-switch
                      v-model="scope.row.rolestate"
                      @change="updatestate(scope.row.rolestate,scope.row.roleid)"
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
                  <el-button type="warning"  size="mini" icon="el-icon-plus" @click="permissionDialog(scope.row.roleid)"  >授权</el-button>
                  <!--  查看详情   结束   -->
                  <el-button size="mini" @click="updateDialog(scope.row.roleid)" slot="reference" >修改</el-button>
                  <!--投资-->
                  <el-button size="mini" @click="del(scope.row.roleid)" type="danger" >删除</el-button>


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
    <el-dialog title="增加角色" :visible.sync="dialogFormVisible1"  append-to-body="false">
      <el-form :model="form1" size="mini">
        <el-row>
          <el-col >
            <el-form-item label="角色名" :label-width="formLabelWidth1">
              <el-input style="width: 75%;" v-model="form1.rolename"></el-input>
            </el-form-item>
          </el-col>
          <el-col >
            <el-form-item  label="角色描述" :label-width="formLabelWidth1">
              <el-input style="width: 75%;"  v-model="form1.description" type="textarea"
                        rows="4"
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


    <el-dialog title="修改角色" :visible.sync="dialogFormVisible2"  append-to-body="false">
      <el-form :model="form2" size="mini">
        <el-row>
          <el-col >
            <el-form-item label="角色名" :label-width="formLabelWidth2">
              <el-input style="width: 75%;" v-model="form2.rolename" ></el-input>
            </el-form-item>
          </el-col>
          <el-col >
            <el-form-item  label="角色描述" :label-width="formLabelWidth2">
              <el-input style="width: 75%;"  v-model="form2.description" type="textarea"
                        rows="4"
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

  </div>
</template>


<script >
  export default {
    name: "RoleManage",
    data() {
      return {
        tableList:null,
        total:null,
        options: [{
          value: 'rolename',
          label: '角色名字'
        }, {
          value: 'description',
          label: '描述'
        }],
        ruleForm: {
          rolestate:null,
          rolename:"",
          page:1,
          rows:5
        }
        ,//弹出层1
        dialogFormVisible1: false,
        form1: {
          rolename:"",
          description:""
        },
        formLabelWidth1: '120px'
        ,//弹出层2
        dialogFormVisible2: false,
        form2: {
          roleid:null,
          rolename:"",
          description:"",
          rolestate:null
        },
        formLabelWidth2: '120px'




      }
    },
    created(){
      let url = this.axios.urls.SYSTEM_ROLE_ROLEQUERY;
      this.axios.post(url,this.ruleForm).then((response)=>{
        console.log("分页查询的："+response.data.data)
        // console.log(response.data);
        this.tableList = response.data.data;
        this.total = response.data.total;
      }).catch(function(error){
        console.log(error);
      });
    }
    ,
    methods:{
      query(){
        let url = this.axios.urls.SYSTEM_ROLE_ROLEQUERY;
        this.axios.post(url,this.ruleForm).then((response)=>{
          console.log("分页查询的："+response.data.data)
          // console.log(response.data);
          this.tableList = response.data.data;
          this.total = response.data.total;
        }).catch(function(error){
          console.log(error);
        });

      }
      ,
      updateDialog(roleid){
        this.dialogFormVisible2  = true;
        let url = this.axios.urls.SYSTEM_ROLE_SELECTONE;
        this.axios.post(url,{"roleid":roleid}).then((response)=>{
          console.log(response.data);
          let row = response.data
          this.form2.roleid = roleid;
          this.form2.rolename = row.rolename;
          this.form2.description = row.description;
          this.form2.rolestate = row.rolestate;
        }).catch(function(error){
          console.log(error);
        });

      },
      permissionDialog(roleid){

      },
      del(roleid){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let url = this.axios.urls.SYSTEM_ROLE_ROLEDEL;
          this.axios.post(url,{"roleid":roleid}).then((response)=>{
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
        if(this.form1.rolename!=null && this.form2.description!=null){
          let url = this.axios.urls.SYSTEM_ROLE_ROLEADD;
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
              this.form1.rolename = "";
              this.form1.description ="";

          }).catch(function(error){
            console.log(error);
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
        let url = this.axios.urls.SYSTEM_ROLE_ROLEUPDATE;
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


      }
      ,
      updatestate(state,roleid){

        let a = null;
        if(state=="可用"){
          a = 0;
        }
        else{
          a = 1;
        }
        let url = this.axios.urls.SYSTEM_ROLE_ROLEUPDATE;
        this.axios.post(url,{"roleid":roleid,"rolestate":a}).then((response)=>{
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
        let url = this.axios.urls.SYSTEM_ROLE_ROLEQUERY;
        this.axios.post(url,this.ruleForm).then((response)=>{
          console.log("分页查询的："+response.data.data)
          // console.log(response.data);
          this.tableList = response.data.data;
          this.total = response.data.total;
        }).catch(function(error){
          console.log(error);
        });

      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.ruleForm.page = val;

        let url = this.axios.urls.SYSTEM_ROLE_ROLEQUERY;
        this.axios.post(url,this.ruleForm).then((response)=>{
          console.log("分页查询的："+response.data.data)
          // console.log(response.data);
          this.tableList = response.data.data;
          this.total = response.data.total;
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

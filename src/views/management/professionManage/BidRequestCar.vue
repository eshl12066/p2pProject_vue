<template>


  <div id="app">
    <el-form label-width="100px">
      <el-form-item style="background-color: rgb(195, 202, 215);" label="会员信用贷管理">
      </el-form-item>
      <el-row>
        <el-col :span="4">
			<span>
			</span>
        </el-col>
        <div align="left">
          <el-col :span="12">
            <el-select  v-model="ruleForm.rolestate" clearable placeholder="请选择" style="width: 20%;">
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
        <el-radio-group  style="margin-bottom: 30px;">
          <el-radio-button label="left">left</el-radio-button>
        </el-radio-group>

        <el-tabs tab-position="left" style="height: 200px;">
          <el-tab-pane label="初始审核贷">

            <div style="width: 72%;"><!--**********************************-->
              <el-col style="width: 128%;" :span="24">
                <el-table style="left: 45px;" :data="tableList0" :fit="true" :show-header="true" highlight-current-row>
                  <el-table-column prop="id" label="信用贷id" width="0px" resizable="true" sortable>
                  </el-table-column>
                  <el-table-column prop="name" label="借贷人" sortable resizable="true">
                  </el-table-column>
                  <el-table-column prop="title" label="信用贷标题" resizable="true" sortable filter-multiple="true" >
                  </el-table-column>
                  <el-table-column prop="description" label="信用贷描述" sortable resizable="true">
                  </el-table-column>
                  <el-table-column prop="returnType" label="还款方式" sortable resizable="true">
                  </el-table-column>
                  <el-table-column prop="currentRate" label="年利率" sortable resizable="true">
                  </el-table-column>
                  <el-table-column prop="bidRequestAmount" label="借贷总额" sortable resizable="true">
                  </el-table-column>
                  <el-table-column   label="状态" sortable resizable="true">
                    待审核
                  </el-table-column>
                  <el-table-column label="操作"   align="center">
                    <template slot-scope="scope" >
                      <!--投资-->
                      <el-button type="warning"  size="mini"  @click="yes0(scope.row.id)"  >审核通过</el-button>
                      <!--  查看详情   结束   -->
                      <el-button size="mini" @click="no0(scope.row.id)" slot="reference" >不通过</el-button>
                      <!--投资-->
                      <!--<el-button size="mini" @click="tono0(scope.row.id)" type="danger" >不通过</el-button>-->
                    </template>
                  </el-table-column>
                </el-table>
                <span>
		            </span>
                <div align="center">
                  <el-col :span="24">
                    <el-row>
                      <el-col :span="24">
                        <el-pagination
                          @size-change="handleSizeChange0"
                          @current-change="handleCurrentChange0"
                          :current-page="ruleForm0.page"
                          :page-sizes="[5, 10, 100, 200]"
                          :page-size="ruleForm0.rows"
                          layout="total, sizes, prev, pager, next, jumper"
                          :total="total0">
                        </el-pagination>
                      </el-col>
                    </el-row>
                  </el-col>
                </div>
                <br>
              </el-col>
            </div><!--**********************************-->

          </el-tab-pane><!--**********************************-->
          <el-tab-pane label="满标审核贷"><!--**********************************-->
            <div style="width: 72%;"><!--**********************************-->
              <el-col style="width: 128%;" :span="24">
                <el-table style="left: 45px;" :data="tableList3" :fit="true" :show-header="true" highlight-current-row>
                  <el-table-column prop="id" label="信用贷id" width="0px" resizable="true" sortable>
                  </el-table-column>
                  <el-table-column prop="name" label="借贷人" sortable resizable="true">
                  </el-table-column>
                  <el-table-column prop="title" label="信用贷标题" resizable="true" sortable filter-multiple="true" >
                  </el-table-column>
                  <el-table-column prop="description" label="信用贷描述" sortable resizable="true">
                  </el-table-column>
                  <el-table-column prop="returnType" label="还款方式" sortable resizable="true">
                  </el-table-column>
                  <el-table-column prop="currentRate" label="年利率" sortable resizable="true">
                  </el-table-column>
                  <el-table-column prop="bidRequestAmount" label="借贷总额" sortable resizable="true">
                  </el-table-column>
                  <el-table-column   label="状态" sortable resizable="true">
                    满标待审
                  </el-table-column>
                  <el-table-column label="操作"   align="center">
                    <template slot-scope="scope" >
                      <!--投资-->
                      <el-button type="warning"  size="mini"  @click="yes3(scope.row.id)"  >审核通过</el-button>
                      <!--  查看详情   结束   -->
                      <el-button size="mini" @click="no3(scope.row.id)" slot="reference" >不通过</el-button>
                      <!--投资-->
                      <!--<el-button size="mini" @click="tono0(scope.row.id)" type="danger" >不通过</el-button>-->
                    </template>
                  </el-table-column>
                </el-table>
                <span>
		            </span>
                <div align="center">
                  <el-col :span="24">
                    <el-row>
                      <el-col :span="24">
                        <el-pagination
                          @size-change="handleSizeChange3"
                          @current-change="handleCurrentChange3"
                          :current-page="ruleForm3.page"
                          :page-sizes="[5, 10, 100, 200]"
                          :page-size="ruleForm3.rows"
                          layout="total, sizes, prev, pager, next, jumper"
                          :total="total3">
                        </el-pagination>
                      </el-col>
                    </el-row>
                  </el-col>
                </div>
                <br>
              </el-col>
            </div><!--**********************************-->



          </el-tab-pane><!--**********************************-->
          <el-tab-pane label="审核失败贷"><!--**********************************-->
            <div style="width: 72%;"><!--**********************************-->
              <el-col style="width: 128%;" :span="24">
                <el-table style="left: 45px;" :data="tableList1" :fit="true" :show-header="true" highlight-current-row>
                  <el-table-column prop="id" label="信用贷id" width="0px" resizable="true" sortable>
                  </el-table-column>
                  <el-table-column prop="name" label="借贷人" sortable resizable="true">
                  </el-table-column>
                  <el-table-column prop="title" label="信用贷标题" resizable="true" sortable filter-multiple="true" >
                  </el-table-column>
                  <el-table-column prop="description" label="信用贷描述" sortable resizable="true">
                  </el-table-column>
                  <el-table-column prop="returnType" label="还款方式" sortable resizable="true">
                  </el-table-column>
                  <el-table-column prop="currentRate" label="年利率" sortable resizable="true">
                  </el-table-column>
                  <el-table-column prop="bidRequestAmount" label="借贷总额" sortable resizable="true">
                  </el-table-column>
                  <el-table-column   label="状态" sortable resizable="true">
                    失败申请
                  </el-table-column>
                  <el-table-column label="操作"   align="center">
                    <template slot-scope="scope" >
                      <!--投资-->
                      <el-button type="warning"  size="mini"  @click="del1(scope.row.id)"  >删除</el-button>
                      <!--  查看详情   结束   -->
                      <!--<el-button size="mini" @click="no0(scope.row.id)" slot="reference" >不通过</el-button>-->
                      <!--投资-->
                      <!--<el-button size="mini" @click="tono0(scope.row.id)" type="danger" >不通过</el-button>-->
                    </template>
                  </el-table-column>
                </el-table>
                <span>
		            </span>
                <div align="center">
                  <el-col :span="24">
                    <el-row>
                      <el-col :span="24">
                        <el-pagination
                          @size-change="handleSizeChange1"
                          @current-change="handleCurrentChange1"
                          :current-page="ruleForm1.page"
                          :page-sizes="[5, 10, 100, 200]"
                          :page-size="ruleForm1.rows"
                          layout="total, sizes, prev, pager, next, jumper"
                          :total="total1">
                        </el-pagination>
                      </el-col>
                    </el-row>
                  </el-col>
                </div>
                <br>
              </el-col>
            </div><!--**********************************-->

          </el-tab-pane><!--**********************************-->
          <el-tab-pane label="审核成功贷"><!--**********************************-->
            <div style="width: 72%;"><!--**********************************-->
              <el-col style="width: 128%;" :span="24">
                <el-table style="left: 45px;" :data="tableList7" :fit="true" :show-header="true" highlight-current-row>
                  <el-table-column prop="id" label="信用贷id" width="0px" resizable="true" sortable>
                  </el-table-column>
                  <el-table-column prop="name" label="借贷人" sortable resizable="true">
                  </el-table-column>
                  <el-table-column prop="title" label="信用贷标题" resizable="true" sortable filter-multiple="true" >
                  </el-table-column>
                  <el-table-column prop="description" label="信用贷描述" sortable resizable="true">
                  </el-table-column>
                  <el-table-column prop="returnType" label="还款方式" sortable resizable="true">
                  </el-table-column>
                  <el-table-column prop="currentRate" label="年利率" sortable resizable="true">
                  </el-table-column>
                  <el-table-column prop="bidRequestAmount" label="借贷总额" sortable resizable="true">
                  </el-table-column>
                  <el-table-column   label="状态" sortable resizable="true">
                    借贷完美成功
                  </el-table-column>
                  <el-table-column label="操作"   align="center">
                    <template slot-scope="scope" >
                      <!--投资-->
                      <el-button type="warning"  size="mini"  @click="detail7(scope.row.id)"  >查看详情</el-button>
                      <!--  查看详情   结束   -->
                      <!--<el-button size="mini" @click="no0(scope.row.id)" slot="reference" >不通过</el-button>-->
                      <!--投资-->
                      <!--<el-button size="mini" @click="tono0(scope.row.id)" type="danger" >不通过</el-button>-->
                    </template>
                  </el-table-column>
                </el-table>
                <span>
		            </span>
                <div align="center">
                  <el-col :span="24">
                    <el-row>
                      <el-col :span="24">
                        <el-pagination
                          @size-change="handleSizeChange7"
                          @current-change="handleCurrentChange7"
                          :current-page="ruleForm7.page"
                          :page-sizes="[5, 10, 100, 200]"
                          :page-size="ruleForm7.rows"
                          layout="total, sizes, prev, pager, next, jumper"
                          :total="total7">
                        </el-pagination>
                      </el-col>
                    </el-row>
                  </el-col>
                </div>
                <br>
              </el-col>
            </div><!--**********************************-->

          </el-tab-pane><!--**********************************-->
        </el-tabs>
      </el-row>


      <el-row>


      </el-row>
    </el-form>

    <!--弹出层 dialogFormVisible1-->
    <!--<el-dialog title="增加角色" :visible.sync="dialogFormVisible1"  append-to-body="false">
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

    </el-dialog>-->

    <!--弹出层 dialogFormVisible2-->
   <!-- <el-dialog title="修改角色" :visible.sync="dialogFormVisible2"  append-to-body="false">
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
    </el-dialog>-->

    <!--弹出层 dialogFormVisible3 ,角色授权-->
    <!--<el-dialog title="角色授权" :visible.sync="dialogFormVisible3"  append-to-body="false">
      <el-form :model="form3" size="mini">
        <el-row>
          <el-tree :data="treedata" show-checkbox="" default-expand-all="" node-key="perid" ref="tree" highlight-current :props="defaultProps">
          </el-tree>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="shouquan">确认授权</el-button>
        <el-button @click="clearquan">清空</el-button>
        <el-button @click="dialogFormVisible3 = false">取 消</el-button>
      </div>
    </el-dialog>-->

  </div>
</template>


<script >
  export default {
    name: "BidRequestCar",
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
        formLabelWidth2: '120px',

        dialogFormVisible3:false,
        form3: {
          roleid:null,
          roleids:[]

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
      permissionDialog(roleid){//权限赋值
        //给要传的参数赋值
        this.form3.roleid = roleid;
        this.dialogFormVisible3 = true;
        let url = this.axios.urls.SYSTEM_ROLE_TREE;
        this.axios.post(url,{"roleid":roleid}).then((response)=>{

          let row = response.data

          let checkedkeys = [];

          for(var perid in row){
            console.log(perid+","+row[perid].perid)
            var childNodes =  this.$refs.tree.getNode(row[perid].perid).childNodes;
            if(childNodes == null || childNodes.length == 0){
              checkedkeys.push(row[perid].perid);
            }
          }
          //设置选中
          console.log(checkedkeys)
          this.$refs.tree.setCheckedKeys([]);
          this.$refs.tree.setCheckedKeys(checkedkeys);

        }).catch(function(error){
          console.log(error);
        });



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
      ,
      shouquan(){
        //获取当前选中的节点
        /* 获取选中的节点getCheckedKeys
           获取半选中的节点 getHalfCheckedKeys
        */
        let checkedKeys = this.$refs.tree.getCheckedKeys();
        let halfCheckedKeys = this.$refs.tree.getHalfCheckedKeys();
        this.form3.roleids.push(checkedKeys,halfCheckedKeys);

        let pList=this.form3.roleids.join(',');


        let url = this.axios.urls.SYSTEM_PERMISSION_ADDROLEPERMISSION;
        this.axios.post(url,{"roleid":this.form3.roleid,"roleids":pList}).then((response)=>{
          let data = response.data
          if(data.code==0){
            this.dialogFormVisible3 = false;
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

      },
      clearquan(){
        this.dialogFormVisible3 = false;
        let url = this.axios.urls.SYSTEM_PERMISSION_DELROLEPERMISSION;
        this.axios.post(url,{"roleid":this.form3.roleid}).then((response)=>{
          let data = response.data
          if(data.code==0){
            this.dialogFormVisible3 = false;
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

<template>


  <div id="app">
    <el-form label-width="100px">
      <el-form-item style="background-color: rgb(195, 202, 215);" label="会员信用贷">
      </el-form-item>
      <el-row>
        <el-col :span="4">
			<span>
			</span>
        </el-col>
        <!--<div align="left">-->
          <!--<el-col :span="12">-->
            <!--<el-select  v-model="ruleForm.rolestate" clearable placeholder="请选择" style="width: 20%;">-->
              <!--<el-option key="0" label="可用" value="0"></el-option>-->
              <!--<el-option key="1" label="不可用" value="1"></el-option>-->
            <!--</el-select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;状态-->

            <!--<div style="margin-top: 15px;">-->
              <!--<el-input placeholder="请输入内容" v-model="ruleForm.rolename" class="input-with-select" style="width: 80%;">-->
                <!--<el-button slot="prepend"  >角色名字</el-button>-->
                <!--<el-button slot="append" icon="el-icon-search" @click="query"></el-button>-->
              <!--</el-input>-->
              <!--<el-button type="warning" plain size="small" icon="el-icon-plus" @click="dialogFormVisible1 = true">增加</el-button>-->
            <!--</div>-->

          <!--</el-col>-->
        <!--</div>-->
        <br>
      </el-row>
      <el-row>

        <el-tabs tab-position="left" style="height: 100%;">
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
                  <el-table-column prop="return_type" label="还款方式" sortable resizable="true">
                  </el-table-column>
                  <el-table-column prop="current_rate" label="年利率" sortable resizable="true">
                  </el-table-column>
                  <el-table-column prop="bid_request_amount" label="借贷总额" sortable resizable="true">
                  </el-table-column>
                  <el-table-column   label="状态" sortable resizable="true">
                    待审核
                  </el-table-column>
                  <el-table-column label="操作"   align="center">
                    <template slot-scope="scope" >
                      <!--投资-->
                      <el-button type="warning"  size="mini"  @click="yesDiag0(scope.row)"  >审核通过</el-button>
                      <!--  查看详情   结束   -->
                      <el-button size="mini" @click="noDiag0(scope.row)" slot="reference" >不通过</el-button>
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
                  <el-table-column prop="return_type" label="还款方式" sortable resizable="true">
                  </el-table-column>
                  <el-table-column prop="current_rate" label="年利率" sortable resizable="true">
                  </el-table-column>
                  <el-table-column prop="bid_request_amount" label="借贷总额" sortable resizable="true">
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
                  <el-table-column prop="return_type" label="还款方式" sortable resizable="true">
                  </el-table-column>
                  <el-table-column prop="current_rate" label="年利率" sortable resizable="true">
                  </el-table-column>
                  <el-table-column prop="bid_request_amount" label="借贷总额" sortable resizable="true">
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
                  <el-table-column prop="return_type" label="还款方式" sortable resizable="true">
                  </el-table-column>
                  <el-table-column prop="current_rate" label="年利率" sortable resizable="true">
                  </el-table-column>
                  <el-table-column prop="bid_request_amount" label="借贷总额" sortable resizable="true">
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
    <el-dialog title="通过备注" :visible.sync="dialogFormVisible1"  append-to-body="false">
      <el-form :model="form1" size="mini">
        <el-row>

          <el-col >
            <el-form-item  label="备注" :label-width="formLabelWidth1">
              <el-input style="width: 75%;"  v-model="form1.remark" type="textarea"
                        rows="4"
                        placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="yes0">通过</el-button>
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
      </div>

    </el-dialog>

    <!--弹出层 dialogFormVisible2-->
     <el-dialog title="修改角色" :visible.sync="dialogFormVisible2"  append-to-body="false">
       <el-form :model="form2" size="mini">
         <el-row>

           <el-col >
             <el-form-item  label="角色描述" :label-width="formLabelWidth2">
               <el-input style="width: 75%;"  v-model="form2.remark" type="textarea"
                         rows="4"
                         placeholder="请输入内容"></el-input>
             </el-form-item>
           </el-col>
         </el-row>
       </el-form>
       <div slot="footer" class="dialog-footer">
         <el-button type="primary" @click="no0">确定</el-button>
         <el-button @click="dialogFormVisible2 = false">取 消</el-button>
       </div>
     </el-dialog>

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
  export default {//0 审核中，3 满标查 ，1 审核失败 ，7 审核成功
    name: "BidRequestCredit",
    data() {
      return {

        tableList0:null,
        tableList3:null,
        tableList1:null,
        tableList7:null,
        total0:null,
        total3:null,
        total1:null,
        total7:null,


        ruleForm0: {
          bidRequestType:0,
          bidRequestState:0,
          page:1,
          rows:5
        },
        ruleForm3: {
          bidRequestType:0,
          bidRequestState:3,
          page:1,
          rows:5
        },
        ruleForm1: {
          bidRequestType:0,
          bidRequestState:1,
          page:1,
          rows:5
        },
        ruleForm7: {
          bidRequestType:0,
          bidRequestState:7,
          page:1,
          rows:5
        }

        ,//弹出层1
        dialogFormVisible1: false,
        form1: {
          remark:"",
          id:"",//借贷id
          membersId:"",//借贷人id
          auditorId:""//审核人id
        },
        formLabelWidth1: '120px'
        ,//弹出层2
        dialogFormVisible2: false,
        form2: {
          id:"",
          remark:"",
          auditorId:"",
        },
        formLabelWidth2: '120px',

        //弹出层3
        dialogFormVisible3:false,
        form3: {
          roleid:null,
          roleids:[]
        },
      }
    },
    created(){

      let url = this.axios.urls.SYSTEM_USERROLE_BIDREQUESTSELECT;
      this.axios.post(url,{"bidRequestType":0}).then((response)=>{
        console.log("分页查询的："+response.data.data)
        // console.log(response.data);
        this.tableList0 = response.data.r0.data;
        this.total0 = response.data.r0.total;

        this.tableList3 = response.data.r3.data;
        this.total3 = response.data.r3.total;

        this.tableList1 = response.data.r1.data;
        this.total1 = response.data.r1.total;


        this.tableList7 = response.data.r7.data;
        this.total7 = response.data.r7.total;



      }).catch(function(error){
        console.log(error);
      });
    }
    ,
    methods:{
      yesDiag0(row){
        this.dialogFormVisible1 = true;
        this.form1.id = row.id;
        this.form1.membersId = row.members_id;
        this.form1.auditorId = row.auditor_id;
      },
      yes0(){//通过借贷id

        let url = this.axios.urls.SYSTEM_USERROLE_UPBIDREQUEST0;
        this.axios.post(url,this.form1).then((response)=>{
          // console.log("分页查询的："+response.data.data)
          let data = response.data
          if(data.code==0){
            this.dialogFormVisible1 = false;
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
      noDiag0(row){//不通过借贷
        this.dialogFormVisible2 = true;
        this.form2.id = row.id;
        this.form2.auditorId = row.suditor_id;


      },
      no0(){
        let url = this.axios.urls.SYSTEM_USERROLE_NOUPBIDREQUEST0;//改
        this.axios.post(url,this.form2).then((response)=>{
          // console.log("分页查询的："+response.data.data)
          let data = response.data
          if(data.code==0){
            this.dialogFormVisible2 = false;
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
      handleSizeChange0(val) {
        console.log(`每页 ${val} 条`);
        this.ruleForm0.rows = val;
        this.ruleForm0.page = 1;
        let url = this.axios.urls.SYSTEM_USERROLE_BIDREQUESTSELECT0;
        this.axios.post(url,this.ruleForm0).then((response)=>{
          console.log("分页查询的："+response.data.data)
          // console.log(response.data);
          this.tableList0 = response.data.data;
          this.total0 = response.data.total;
        }).catch(function(error){
          console.log(error);
        });

      },
      handleCurrentChange0(val) {
        console.log(`当前页: ${val}`);
        this.ruleForm0.page = val;

        let url = this.axios.urls.SYSTEM_USERROLE_BIDREQUESTSELECT0;
        this.axios.post(url,this.ruleForm0).then((response)=>{
          console.log("分页查询的："+response.data.data)
          // console.log(response.data);
          this.tableList0 = response.data.data;
          this.total0 = response.data.total;
        }).catch(function(error){
          console.log(error);
        });
      }
      ,
      handleSizeChange3(val) {
        console.log(`每页 ${val} 条`);
        this.ruleForm3.rows = val;
        this.ruleForm3.page = 1;
        let url = this.axios.urls.SYSTEM_USERROLE_BIDREQUESTSELECT3;
        this.axios.post(url,this.ruleForm3).then((response)=>{
          console.log("分页查询的："+response.data.data)
          // console.log(response.data);
          this.tableList3 = response.data.data;
          this.total3 = response.data.total;
        }).catch(function(error){
          console.log(error);
        });

      },
      handleCurrentChange3(val) {
        console.log(`当前页: ${val}`);
        this.ruleForm3.page = val;

        let url = this.axios.urls.SYSTEM_USERROLE_BIDREQUESTSELECT3;
        this.axios.post(url,this.ruleForm3).then((response)=>{
          console.log("分页查询的："+response.data.data)
          // console.log(response.data);
          this.tableList3 = response.data.data;
          this.total3 = response.data.total;
        }).catch(function(error){
          console.log(error);
        });
      }
      ,
      handleSizeChange1(val) {
        console.log(`每页 ${val} 条`);
        this.ruleForm1.rows = val;
        this.ruleForm1.page = 1;
        let url = this.axios.urls.SYSTEM_USERROLE_BIDREQUESTSELECT1;
        this.axios.post(url,this.ruleForm1).then((response)=>{
          console.log("分页查询的："+response.data.data)
          // console.log(response.data);
          this.tableList1 = response.data.data;
          this.total1 = response.data.total;
        }).catch(function(error){
          console.log(error);
        });

      },
      handleCurrentChange1(val) {
        console.log(`当前页: ${val}`);
        this.ruleForm1.page = val;

        let url = this.axios.urls.SYSTEM_USERROLE_BIDREQUESTSELECT1;
        this.axios.post(url,this.ruleForm1).then((response)=>{
          console.log("分页查询的："+response.data.data)
          // console.log(response.data);
          this.tableList1 = response.data.data;
          this.total1 = response.data.total;
        }).catch(function(error){
          console.log(error);
        });
      }
      ,
      handleSizeChange7(val) {
        console.log(`每页 ${val} 条`);
        this.ruleForm7.rows = val;
        this.ruleForm7.page = 7;
        let url = this.axios.urls.SYSTEM_USERROLE_BIDREQUESTSELECT7;
        this.axios.post(url,this.ruleForm7).then((response)=>{
          console.log("分页查询的："+response.data.data)
          // console.log(response.data);
          this.tableList7 = response.data.data;
          this.total7 = response.data.total;
        }).catch(function(error){
          console.log(error);
        });

      },
      handleCurrentChange7(val) {
        console.log(`当前页: ${val}`);
        this.ruleForm7.page = val;

        let url = this.axios.urls.SYSTEM_USERROLE_BIDREQUESTSELECT7;
        this.axios.post(url,this.ruleForm7).then((response)=>{
          console.log("分页查询的："+response.data.data)
          // console.log(response.data);
          this.tableList7 = response.data.data;
          this.total7 = response.data.total;
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

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
          <el-col :span="20">会员状态：
            <el-select  v-model="ruleForm.state" placeholder="请选择" clearable>
              <el-option key="0" label="审核全通过" value="0"></el-option>
              <el-option key="1" label="待审核" value="1"></el-option>
              <el-option key="2" label="审核未通过" value="2"></el-option>
            </el-select>
            信用分数：
            <el-select  v-model="ruleForm.certification_score" placeholder="请选择" clearable>
              <el-option key="0" label="50分以下" value="00"></el-option>
              <el-option key="1" label="51分-65分" value="11"></el-option>
              <el-option key="2" label="66分-85分" value="22"></el-option>
              <el-option key="3" label="86分-90分" value="33"></el-option>
              <el-option key="4" label="91分以上" value="44"></el-option>
            </el-select>
            <el-input
              placeholder="输入用户名"
              v-model="ruleForm.name"
              style="width: 230px"
              clearable>
              <a> </a>
            </el-input>
            <!--申请时间：<el-date-picker v-model="ruleForm.value2" type="daterange" >
            </el-date-picker>-->
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
              <el-table-column   style="width: 0%; max-height: 0px;" label="真实姓名"  >
                <template slot-scope="scope">
                  <el-tag type="warning" v-if="scope.row.realname==null">待提交资料</el-tag>
                  <span v-if="scope.row.realname !=null" >
                      {{scope.row.realname}}
                      </span>
                </template>
              </el-table-column>

              <el-table-column prop="sex" label="性别" empty-text sortable >
                <template slot-scope="scope">
                  <el-tag type="warning" v-if="scope.row.sex==null">待提交资料</el-tag>
                  <span v-if="scope.row.sex !=null" >
                      {{scope.row.sex}}
                      </span>
                </template>
              </el-table-column>
              <el-table-column prop="phone"  label="电话号码"  sortable>
                <template slot-scope="scope">
                  <el-tag type="warning" v-if="scope.row.phone==null">待提交资料</el-tag>
                  <span v-if="scope.row.phone !=null" >
                      {{scope.row.phone}}
                      </span>
                </template>
              </el-table-column>
              <el-table-column prop="id_number"  label="证件号码"  sortable>
                <template slot-scope="scope">
                  <el-tag type="warning" v-if="scope.row.id_number==null">待提交资料</el-tag>
                  <span v-if="scope.row.id_number !=null" >
                      {{scope.row.id_number}}
                      </span>
                </template>
              </el-table-column>
              <el-table-column prop="address" label="证籍地址"  sortable>
                <template slot-scope="scope">
                  <el-tag type="warning" v-if="scope.row.address==null">待提交资料</el-tag>
                  <span v-if="scope.row.address !=null" >
                      {{scope.row.address}}
                      </span>
                </template>
              </el-table-column>
              <el-table-column prop="certification_score" label="信用分数"  sortable>
                <template slot-scope="scope">
                  <el-tag type="warning" v-if="scope.row.certification_score==null">待提交资料</el-tag>
                  <span v-if="scope.row.certification_score !=null" >
                      {{scope.row.certification_score}}
                      </span>
                </template>
              </el-table-column>
              <el-table-column prop="borrow_limit" label="可借贷额度"  sortable>
                <template slot-scope="scope">
                  <el-tag type="warning" v-if="scope.row.borrow_limit==null">待提交资料</el-tag>
                  <span v-if="scope.row.borrow_limit !=null" >
                      {{scope.row.borrow_limit}}
                      </span>
                </template>
              </el-table-column>

              <el-table-column
                fixed="right"
                label="操作"
                width="120">
                <template slot-scope="scope"><!--toolbar按钮-->
                  <!--弹出框按钮-->
                  <el-button type="primary" icon="el-icon-view" @click="see(scope.row.id)" circle></el-button>
                  <el-button type="success" icon="el-icon-user" @click="seesf(scope.row.id)" circle></el-button>
                  <!--弹出框-->

                  <!--会员个人资料-->
                  <el-dialog title="个人资料" :visible.sync="dialogFormVisible1" append-to-body="false" width="30%" center>
                    <el-form :model="form1" size="mini">
                      <el-row>
                        <el-col :span="24">
                          <div class="demo-image__preview">
                            <el-form-item label="会员头像" :label-width="formLabelWidth">
                              <el-image
                                style="width: 100px; height: 100px"
                                :src="form1.head_photo"
                                :preview-src-list="srcList">
                              </el-image>
                            </el-form-item>
                          </div>
                        </el-col>

                        <el-col :span="24">
                          <el-form-item label="个人学历" :label-width="formLabelWidth" >
                            <el-input style="width: 70%;" readonly="true" v-model="form1.myself_background" autocomplete="off"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="24">
                          <el-form-item label="月收入" :label-width="formLabelWidth">
                            <el-input style="width: 70%;" readonly="true" v-model="form1.monthly_income" autocomplete="off"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="24">
                          <el-form-item label="婚姻情况" :label-width="formLabelWidth">
                            <el-input style="width: 70%;" readonly="true" v-model="form1.marital_status" autocomplete="off"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="24">
                          <el-form-item label="子女情况" :label-width="formLabelWidth">
                            <el-input style="width: 70%;" readonly="true" v-model="form1.children" autocomplete="off"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="24">
                          <el-form-item label="住房情况" :label-width="formLabelWidth">
                            <el-input style="width: 70%;" readonly="true" v-model="form1.house" autocomplete="off"></el-input>
                          </el-form-item>
                        </el-col>

                      </el-row>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                    </div>
                  </el-dialog>
                  <!--会员个人资料 ^^^^-->

                  <!--仅身份详细信息查看-->
                  <el-dialog title="身份详细信息" :visible.sync="dialogFormVisible2" append-to-body="false" width="40%" center>
                    <el-form :model="form2" size="mini">
                      <el-row>
                        <el-col :span="12">
                          <el-form-item  label="真实姓名" :label-width="formLabelWidth">
                            <el-input style="width: 100%;" readonly="true" v-model="form2.realname" autocomplete="off"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="身份证号" :label-width="formLabelWidth">
                            <el-input style="width: 100%;" readonly="true" v-model="form2.id_number" autocomplete="off"></el-input>
                          </el-form-item>
                        </el-col>

                        <el-col :span="24">
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
                        </el-col>
                      </el-row>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible2 = false">取 消</el-button>
                    </div>
                  </el-dialog>
                  <!--仅身份详细信息查看弹框 ^^^^-->
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
          :page-sizes="[6, 12, 100, 200]"
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
                    state: null,//状态
                    certification_score:null,//分数
                    page:1,
                    rows:6
                },

                /*预览大图展示*/
                srcList:[],//用户头像
                srcList1:[],//身份证正面
                srcList2:[],//身份证反面

                /*弹框1 个人资料*/
                dialogFormVisible1: false,
                /*弹框表格*/
                form1: {
                    id:'',
                    name:'',
                    head_photo:'',
                    myself_background:'',
                    monthly_income:'',
                    marital_status:'',
                    children:'',
                    house:'',
                },

                /*弹框2 仅身份详细查看*/
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
                    remark:''
                },

                /*弹框文本标签长度*/
                formLabelWidth: '35%',

            }

        },created(){

            let url = this.axios.urls.MEMBER_MANAGE_GETALL;
            this.axios.post(url, { page:1,
                rows:6}).then((response) => {
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
            commitup(){
                let url = this.axios.urls.MEMBER_MANAGE_GETALL;
                this.axios.post(url, this.ruleForm).then((response) => {
                    console.log("分页查询的："+response.data.data);
                    this.tableData = response.data.data;
                    this.total = response.data.total;
                }).catch((response) => {
                    console.log(response);
                });
            },

            /*会员个人资料*/
            see(id){

                this.dialogFormVisible1 = true;
                for(var i in this.tableData){
                    console.info(this.tableData[i])
                    if(this.tableData[i].id == id){
                        this.form1.name = this.tableData[i].name;
                        this.form1.head_photo = this.tableData[i].head_photo;
                        this.srcList=[];
                        this.srcList.push(this.tableData[i].head_photo);
                        this.form1.myself_background = this.tableData[i].myself_background;
                        this.form1.monthly_income = this.tableData[i].monthly_income;
                        this.form1.marital_status = this.tableData[i].marital_status;
                        this.form1.children = this.tableData[i].children;
                        this.form1.house = this.tableData[i].house;
                    }
                }
            },

            seesf(id){
                this.dialogFormVisible2 = true;
                for(var i in this.tableData){
                    console.info(this.tableData[i])
                    if(this.tableData[i].id == id){
                        this.form2.realname = this.tableData[i].realname;
                        this.form2.id_number = this.tableData[i].id_number;
                        this.form2.image1 = this.tableData[i].image1;
                        this.form2.image2 = this.tableData[i].image2;
                        this.srcList1=[];
                        this.srcList1.push(this.tableData[i].image1);
                        this.srcList2=[];
                        this.srcList2.push(this.tableData[i].image2);
                    }
                }

            },
            /*身份单个查返回数据*/

            /*分页查询*/
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
            handleCurrentChange(val) {//page页数
                this.ruleForm.page = val;//改变表单

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
            /*分页查询*/
            /*刷新*/
            flush(){
                this.commitup();
            }

        }
    }
</script>

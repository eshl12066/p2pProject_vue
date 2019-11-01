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
        <el-button size="mini" icon="el-icon-refresh" style="margin-left: 920px;" :click="flush" circle > </el-button>
      </el-form-item>
      <el-row>

        <div align="center">
          <el-col :span="20">状态：
            <el-select value="1" v-model="input1" placeholder="请选择">
              <el-option
                v-for="(item, index) in options"
               :key="index"
               :value="item.value"
               :label="item.label">
              </el-option>
            </el-select>申请时间：
            <el-date-picker v-model="value2" type="daterange" >
            </el-date-picker>
            <el-button type="primary" @click="commitup">查询</el-button>
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
                  <el-button v-if="scope.row.state == 1 " type="warning" plain size="small" @click="dd(scope.$index,scope.row)">待审核</el-button>
                  <el-button v-if="scope.row.state == 0 ||scope.row.state== 2 " type="success" plain size="small" @click="see(scope.$index,scope.row)">查看详情</el-button>
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
                        <el-col :span="24">
                          <el-form-item label="资料图片" :label-width="formLabelWidth">
                            <div class="demo-image__preview">
                              <el-image
                                style="width: 100px; height: 100px"
                                :src="url"
                                :preview-src-list="srcList">
                              </el-image>
                            </div>

                          </el-form-item>
                        </el-col>
                        <el-form-item label="征信分数" :label-width="formLabelWidth">
                          <el-input style="width: 90%;" v-model="form.score" autocomplete="off" ></el-input>
                        </el-form-item>

                        <el-form-item label="审核备注" :label-width="formLabelWidth">
                          <div style="margin: 20px 0;"></div>
                          <el-input
                            type="textarea"
                            placeholder="请输入内容"
                            v-model="textarea"
                            maxlength="30"
                            show-word-limit
                          ></el-input>
                        </el-form-item>
                      </el-row>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible = false">取 消</el-button>
                      <el-button type="primary" @click="dialogFormVisible = false">审核通过</el-button>
                      <el-button type="warning" @click="dialogFormVisible = false">审核拒绝</el-button>
                    </div>
                  </el-dialog>
                  <!--仅查看-->
                  <el-dialog width="35%" title="材料认证审核" :visible.sync="dialogFormVisible2"  append-to-body="false">
                    <el-form :model="form" size="mini" align="center" >
                      <el-row>
                        <el-col :span="24"align="center" >
                          <el-form-item label="用户名" :label-width="formLabelWidth">
                            <el-input style="width: 90%;" v-model="form.name" autocomplete="off" readonly="true"></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="24">
                          <el-form-item label="资料图片" :label-width="formLabelWidth">
                            <div class="demo-image__preview">
                              <el-image
                                style="width: 100px; height: 100px"
                                :src="url"
                                v-model="form.image"
                                :preview-src-list="srcList">
                              </el-image>
                            </div>
                          </el-form-item>
                        </el-col>
                        <el-form-item label="征信分数" :label-width="formLabelWidth">
                          <el-input style="width: 90%;" v-model="form.score" autocomplete="off" readonly="true"></el-input>
                        </el-form-item>

                        <el-form-item label="审核备注" :label-width="formLabelWidth">
                           <el-input type="textarea"  v-model="form.remark" autocomplete="off" readonly="true"></el-input>
                        </el-form-item>
                      </el-row>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible2 = false">取 消</el-button>
                      <el-button type="primary" @click="dialogFormVisible2 = false">审核通过</el-button>
                      <el-button type="warning" @click="dialogFormVisible2 = false">审核拒绝</el-button>
                    </div>

                  </el-dialog>
                  <!--弹出框-->
                </template>

              </el-table-column>
            </el-table>
          </el-col>
        </div>

        <div align="center">
          <el-col :span="24">
            <el-row>
              <el-col :span="24">
                <el-button>首页</el-button>
                <el-button icon="el-icon-arrow-left">
                </el-button>
                <el-input style="width: 5%;" v-model="input2">
                </el-input>
                <el-button icon="el-icon-arrow-right">
                </el-button>
                <el-button>尾页</el-button>
              </el-col>
            </el-row>
          </el-col>
        </div>
        <br>
      </el-row>
    </el-form>
  </div>

</template>

<script>
  export default {
    name: "MemberclManage",
    data() {
      return {
        input1: '',
        input2: '',
        value2:'',
        tableData: [ ],
        textarea: '',
        options: [
          {
            value: 0,
            label: '审核成功'
          },
          {
            value: 1,
            label: '待审核'
          },
          {
            value: 2,
            label: '审核失败'
          }
        ],
        dialogFormVisible: false,
        dialogFormVisible2: false,
        form: {
          name:'',
          cltype:'',
          image:'',
          score:'',
          remark:''
        },
        formLabelWidth: '100px',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ],

      }

    },created(){
      let url = this.axios.urls.MEMBER_CLSELECT;
      this.axios.post(url, {}).then((response) => {
        console.log(response);
        this.tableData = response.data.data;
      }).catch((response) => {
        //carch则是异常
        console.log(response);
      });
    },methods:{
      /*时间*/
      commitup(){
        var formData = {
          value2: '',
          start:'',
          stop: ''
        };
          formData.start =  this.value2[0];
          formData.stop =  this.value2[1];
        let url = this.axios.urls.MEMBER_CLSELECT;
        this.axios.post(url, formData).then((response) => {
          console.log(response);
          this.tableData = response.data.data;
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
      /*单个查*/
      dd(index,row){
        let url = this.axios.urls.MEMBER_CLONE;
        console.log(row.id);
        this.axios.post(url, {id:row.id}).then((response) => {
          console.log(response);
          this.form.name = response.data.name;
          this.form.image = response.data.image;
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
          this.form.name = response.data.name;
          this.form.image = response.data.image;
          this.form.score = response.data.score;
          this.form.remark = response.data.remark;
          this.dialogFormVisible2 = true;
        });
      }
      /*demo(){
       this.readValue = '1' // 此处可以替换成接口读取的内容 在内容未知情况下用Number转换即可
       this.form.select = Number(this.readValue) // 通过Number将类型转换
     }*/
    }
  }
</script>

<style scoped>

</style>

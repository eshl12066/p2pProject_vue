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
  <div id="app">
    <el-form label-width="100px">
      <el-form-item style="background-color: rgb(195, 202, 215);" label="会员身份审核">
      </el-form-item>
      <el-row>
        <el-col :span="4">
			<span>
			</span>
        </el-col>

        <div align="center">
          <el-col :span="20">状态：
            <el-select value="1" v-model="input1" @focus="focus" placeholder="请选择" popper-class="RNQuery" no-data-text="请选择" no-match-text="没有找到相应的结果..." loading-text="请稍后" multiple-limit="6" multiple collapse-tags automatic-dropdown default-first-option reserve-keyword allow-create>
              <el-option label="请选择" value="-1"></el-option>
            </el-select>申请时间：
            <el-date-picker :editable="true" :clearable="true" v-model="input2">
            </el-date-picker>到
            <el-date-picker :editable="true" :clearable="true" v-model="input3">
            </el-date-picker>
            <el-button type="primary">查询</el-button>
          </el-col>
        </div>
        <br>
      </el-row>
      <pre>

      </pre>
      <el-row>
        <div style="width: 72%;">
          <el-col style="width: 128%;" :span="24">
            <el-table  :data="tableData"  border style="left: 45px;" :fit="true" :show-header="true" highlight-current-row>
              <el-table-column prop="date" style="width: 0%;"  label="用户名" width="0px" resizable="true" sortable>
              </el-table-column>
              <el-table-column prop="name" style="width: 0%; max-height: 0px;"  label="真实姓名" resizable="true" sortable filter-multiple="true" :type="selection">
              </el-table-column>
              <el-table-column  prop="province"  label="性别" sortable resizable="true">
              </el-table-column>
              <el-table-column prop="city" label="身份证号码" resizable="true" sortable>
              </el-table-column>
              <el-table-column prop="address" label="身份证地址" resizable="true" sortable>
              </el-table-column>
              <el-table-column prop="zip" label="状态" resizable="true" sortable>
              </el-table-column>
              <el-table-column prop="city" label="审核人" resizable="true" sortable>
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope"><!--toolbar按钮-->
                  <!--弹出框-->
                  <el-button type="warning" plain size="small" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

                  <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                    <el-form :model="form">
                      <el-form-item label="活动名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="活动区域" :label-width="formLabelWidth">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                          <el-option label="区域一" value="shanghai"></el-option>
                          <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible = false">取 消</el-button>
                      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                    </div>
                  </el-dialog>


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
                <el-input style="width: 5%;" v-model="input5">
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
    name: "MembersfManage",
    data() {
      return {
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }],
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }

    }
  }
</script>

<style scoped>

</style>

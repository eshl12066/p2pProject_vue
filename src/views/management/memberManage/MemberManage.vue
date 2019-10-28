<template>
  <!--会员管理界面-->

  <!--1、	可以查询会员的信息，可以通过状态(0 审核通过，1  审核失败 , 2 审核中)，用户名，地址 ，时间，模糊查询-->
  <!--2、	删除会员信息，-->
  <!--3、	修改会员信息-->

  <div id="app">
    <el-form label-width="100px">
      <el-form-item style="background-color: rgb(195, 202, 215);" label="实名审核管理">
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
      <el-row>
        <div style="width: 72%;">
          <el-col style="width: 128%;" :span="24">
            <el-table style="left: 45px;" :data="tableList" :fit="true" :show-header="true" highlight-current-row>
              <el-table-column style="width: 0%;" prop="id" label="用户名" width="0px" resizable="true" sortable>
              </el-table-column>
              <el-table-column style="width: 0%; max-height: 0px;" prop="id" label="真实姓名" resizable="true" sortable filter-multiple="true" :type="selection">
              </el-table-column>
              <el-table-column prop="id" label="性别" sortable resizable="true">
              </el-table-column>
              <el-table-column prop="id" label="身份证号码" resizable="true" sortable>
              </el-table-column>
              <el-table-column prop="id" label="身份证地址" resizable="true" sortable>
              </el-table-column>
              <el-table-column prop="id" label="状态" resizable="true" sortable>
              </el-table-column>
              <el-table-column prop="name" label="审核人" resizable="true" sortable>
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

<script >
    export default {
      name: "MemberManage",
      data() {
        return {
          input1: '',
          input2: '',
          input3: '',
          input4: '',
          input5: '',
          input6: '',
        }
      }
    }

</script>



<style scoped>

</style>

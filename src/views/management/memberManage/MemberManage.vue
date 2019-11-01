<template>
  <!--会员管理界面-->

  <!--1、	可以查询会员的信息，可以通过状态(0 审核通过，1  审核失败 , 2 审核中)，用户名，地址 ，时间，模糊查询-->
  <!--2、	删除会员信息，-->
  <!--3、	修改会员信息-->

  <div id="app">
    <el-form label-width="100px">
      <el-form-item style="background-color: rgb(195, 202, 215);">
        实名审核管理
      </el-form-item>
      <el-row>
        <el-col :span="4">
			<span>
			</span>
        </el-col>

        <div align="center">
          <el-col :span="24">
            状态：
              <el-select value="1" @focus="focus" reserve-keyword default-first-option popper-append-to-body multiple-limit="10" placeholder="egg刚刚">
                <el-option label="请选择" value="1">
                </el-option>
              </el-select>
            <el-input
              placeholder="输入要查询的用户名、地址"
              v-model="input"
              style="width: 230px"
              clearable>
            </el-input>

            日期范围：
            <el-date-picker v-model="value2" :editable="true" :clearable="true" type="daterange">
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
              <el-table-column style="width: 0%;" prop="name" label="用户名" width="0px"  sortable>
              </el-table-column>
              <el-table-column prop="realname" style="width: 0%; max-height: 0px;" label="真实姓名"  sortable filter-multiple="true" :type="selection">
              </el-table-column>
              <el-table-column prop="sex" label="性别" sortable >
              </el-table-column>
              <el-table-column prop="id_number" label="身份证号码"  sortable>
              </el-table-column>
              <el-table-column prop="address" label="身份证地址"  sortable>
              </el-table-column>
              <el-table-column prop="state" label="状态"  sortable>
              </el-table-column>
              <el-table-column prop="auditor_id" label="审核人"  sortable>
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
        focus:'',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        tableList:{

        },
      }
    },
  created(){
    let url = this.axios.urls.MEMBER_MANAGE_GETALL;
    this.axios.post(url, {}).then((response) => {
      console.log(response);
      this.tableList = response.data.data;
    }).catch((response) => {
      //carch则是异常
      console.log(response);
    });
  }

  }

</script>



<style scoped>

</style>

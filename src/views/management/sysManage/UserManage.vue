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
          <el-col :span="16">状态
            <el-select  v-model="input1" clearable placeholder="请选择" style="width: 15%;">
              <el-option key="-1" label="全部" value="-1"></el-option>
              <el-option key="0" label="可用" value="0"></el-option>
              <el-option key="1" label="不可用" value="1"></el-option>
            </el-select>

            <div style="margin-top: 15px;">
              <span style="font-family:Microsoft YaHei ">查询</span><el-input placeholder="请输入内容" v-model="input5" class="input-with-select" style="width: 50%;">
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                  <el-option label="名字" value="username"></el-option>
                  <el-option label="角色名" value="rolename"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>

          </el-col>
        </div>
        <br>
      </el-row>
      <el-row>
        <div style="width: 72%;">
          <el-col style="width: 128%;" :span="24">
            <el-table style="left: 45px;" :data="tableList" :fit="true" :show-header="true" highlight-current-row>
              <el-table-column prop="id" label="用户名" width="0px" resizable="true" sortable>
              </el-table-column>
              <el-table-column prop="id" label="真实姓名" resizable="true" sortable filter-multiple="true" :type="selection">
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
    name: "UserManage",
    data() {
      return {
        select:'',
        tableList:null,
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


<style>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>

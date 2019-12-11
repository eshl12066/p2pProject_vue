<template>
  <div>


    <!--查询               -->
    <el-form   :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="状态">
        <el-select v-model="formInline.message_state" placeholder="请选择状态">
          <el-option label="已读" value="0"></el-option>
          <el-option label="未读" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table border :data="tableData" :show-header="true" :fit="true" style="width: 95%" highlight-current-row>
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left"  class="demo-table-expand">
            <el-form-item label="发送人：">
              <span>{{ props.row.username }}</span>
            </el-form-item>
            <el-form-item label="信息内容：">
              <span>{{ props.row.message_context }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column  prop="message_title" label="标题"width="697"> </el-table-column>

      <el-table-column  label="状态"width="146">
        <template slot-scope="scope">
          <el-button v-if="scope.row.message_state == 1" @click="read(scope.row.id)"  type="danger" round >未读</el-button>
          <el-button v-if="scope.row.message_state == 0" round  >已读</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
    export default {
      data() {
        return {
          userMembers:null,
          tableData:[],
          formInline:{
            message_state:'',
            to_message_id:'',
          },
          formEdit:{
            messageState:'',
            id:''
          }
        }

      },
      methods:{
        read(id){
          let url = this.axios.urls.SYSTEM_MESSAGE_EDIT;
          this.formEdit.messageState = 0;
          this.formEdit.id = id;
          this.axios.post(url, this.formEdit).then((response) => {
            console.log(response);
            this.seach();
          }).catch((response) => {
            //carch则是异常
            console.log(response);
          });
        },
        seach(){
          let url = this.axios.urls.SYSTEM_MESSAGE_SELECTALL;
          this.axios.post(url, this.formInline).then((response) => {
            console.log(response);
            this.tableData = response.data.data;
          }).catch((response) => {
            //carch则是异常
            console.log(response);
          });
        },
        onSubmit(){
          this.seach();
        },
      },
      created(){
        this.userMembers = this.$store.getters.getUserMembers;//用户的
        let url = this.axios.urls.SYSTEM_MESSAGE_SELECTALL;
        let id = 1;                                      //id*******************************
        this.formInline.to_message_id = id;
        this.formInline.toMessageId = id;
        this.axios.post(url, {to_message_id:id}).then((response) => {
          console.log(response);
          this.tableData = response.data.data;
        }).catch((response) => {
          //carch则是异常
          console.log(response);
        });
      },
    }
</script>

<style scoped>

</style>

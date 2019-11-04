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
      <el-form-item label="操作人">
        <el-input v-model="formInline.from_message" placeholder="请输入操作人"></el-input>
      </el-form-item>
      <el-form-item label="接受人">
        <el-input v-model="formInline.to_message" placeholder="请输入接受人"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table border :data="tableData" :show-header="true" :fit="true" style="width: 100%" highlight-current-row>
      <el-table-column prop="id" sortable label="ID" width="70"></el-table-column>
      <el-table-column prop="username" label="操作人"width="100"> </el-table-column>
      <el-table-column prop="name" width="100" label="接受人"> </el-table-column>
      <el-table-column prop="message_context" label="内容"width="250"> </el-table-column>
      <el-table-column prop="message_title" label="标题"width="225"> </el-table-column>

          <el-table-column  label="状态"width="150">
            <template slot-scope="scope">
            <el-button v-if="scope.row.message_state == 1"  type="info" round >未读</el-button>
            <el-button v-if="scope.row.message_state == 0" round  >已读</el-button>
            </template>
          </el-table-column>
        <!--<el-table-column  label="操作"width="140">
          <template slot-scope="scope">
          <el-button type="danger" @click="delinfo(scope.$index,scope.row.id)"  icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>-->




    </el-table>

    <!--删除弹出框-->
    <el-dialog title="删除" :visible.sync="Visibledel" width="35%" :before-close="handleClose">
      <span>你确定要删除该列吗?</span>
      <span slot="footer" class="dialog-footer">
            <el-button @click="Visibledel = false">取 消</el-button>
            <el-button type="primary" @click="delOk">确 定</el-button>
     </span>

    </el-dialog>


  </div>
</template>
<script>
    export default {
      data() {
        return {
          tableData:[],
          delnum:'',
          Visibledel:false,
          userManage:null,
          formInline:{
            message_state:'',
            from_message:'',
            to_message:''
        }
        }

      },
      created(){
       this.seach();
        this.userManage = this.$store.getters.getUserManage;//后台管理员

      },
      methods:{
        seach(){
          let url = this.axios.urls.SYSTEM_MESSAGE_SELECTALL;
          this.axios.post(url, {}).then((response) => {
            console.log(response);
            this.tableData = response.data.data;
          }).catch((response) => {
            //carch则是异常
            console.log(response);
          });
        }
        ,
        delinfo(index,id){
          this.Visibledel = true;
          this.delnum = id;
        },
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        },
        delOk(){
          let url = this.axios.urls.SYSTEM_MESSAGE_DELECTBYID;
          this.axios.post(url, {id:this.delnum}).then((response) => {
            console.log(response);
            this.seach();
            this.Visibledel = false;
          }).catch((response) => {
            //carch则是异常
            console.log(response);
          });
        },
        onSubmit(){
          let url = this.axios.urls.SYSTEM_MESSAGE_SELECTALL;
          this.axios.post(url, this.formInline).then((response) => {
            console.log("hhh"+response.data.data);
            this.tableData = response.data.data;
          }).catch((response) => {
            //carch则是异常
            console.log(response);
          });
        }

      }
    }

</script>

<style scoped>

</style>

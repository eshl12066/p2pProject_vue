<template>
    <!--设置页面-->
  <div>
  <el-table border :data="tableData" style="width: 100%" :default-sort = "{prop: 'k', order: 'descending'}">
    <el-table-column prop="k" label="设置项" sortable width="420"> </el-table-column>
    <el-table-column prop="ktitle" label="说明" sortable width="420"> </el-table-column>
    <el-table-column prop="value" label="设置值" sortable width="200"></el-table-column>

    <el-table-column  label="更改设置值" sortable width="120">
      <template slot-scope="scope">
        <el-button @click="apply(scope.row.id)" icon="el-icon-edit" circle></el-button>
      </template>
    </el-table-column>
  </el-table>


    <!--编辑弹出框-->
    <el-dialog title="编辑" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <el-form :model="editform" >
        <el-form-item label="说明：">
          <el-input readonly="readonly" v-model="editform.ktitle"></el-input>
        </el-form-item>
        <el-form-item label="值：">
          <el-input v-model="editform.value"></el-input>
        </el-form-item>

      </el-form>
      <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="editOk">确 定</el-button>
     </span>
    </el-dialog>


  </div>

</template>

<script>
    export default {
      data() {
        return {
          a:"",
          tableData: [],
          editid:'',
          dialogVisible:false,
          editform:{
            id:'',
            k:'',
            value:'',
            ktitle:''
          }
        }
      },
      methods:{
        apply(id){
          this.editid = id;
          let url = this.axios.urls.SYSTEM_SETTING_SETTING_SELECTONE;
          this.axios.post(url, {id:id}).then((response) => {
            console.log(response);
            this.editform.id = response.data.id;
            this.editform.k = response.data.k;
            this.editform.ktitle = response.data.ktitle;
            this.editform.value = response.data.value;
            this.dialogVisible = true;
          }).catch((response) => {
            //carch则是异常
            console.log(response);
          });
        },
        editOk(){
          let url = this.axios.urls.SYSTEM_SETTING_SETTING_EDIT;
          this.axios.post(url, this.editform).then((response) => {
            this.search();
            this.dialogVisible = false;
          }).catch((response) => {
            //carch则是异常
            console.log(response);
          });
        },
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        },
        search(){
          let url = this.axios.urls.SYSTEM_SETTING_SETTING_SELECTALL;
          this.axios.post(url, {}).then((response) => {
            console.log(response);
            this.tableData = response.data.data;
          }).catch((response) => {
            //carch则是异常
            console.log(response);
          });
        }
    },
      created(){
        this.search();
      },

    }
</script>

<style scoped>

</style>

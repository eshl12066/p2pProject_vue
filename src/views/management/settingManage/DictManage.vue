<template>
  <div>
    <!--查询               -->
    <el-form   :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="ID">
        <el-input v-model="formInline.id" placeholder="ID"></el-input>
      </el-form-item>
      <el-form-item label="字典编号">
        <el-input v-model="formInline.sn" placeholder="字典编号"></el-input>
      </el-form-item>
      <el-form-item label="字典名称">
         <el-input v-model="formInline.title" placeholder="字典名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="dialogVisible3 = true">增加</el-button>
      </el-form-item>
    </el-form>

    <el-table border :data="tableData2" :show-header="true" :fit="true" style="width: 100%" highlight-current-row>
      <el-table-column prop="id" label="ID" width="70"></el-table-column>
      <el-table-column prop="sn" label="字典编号"width="300"> </el-table-column>
      <el-table-column prop="title" width="170" label="字典名称"> </el-table-column>
      <el-table-column prop="description" label="描述"width="250"> </el-table-column>
      <el-table-column  label="操作"width="220">
        <template slot-scope="scope">
          <el-button type="info" @click="info(scope.$index,scope.row.id)">详细</el-button>
          <el-button type="warning" @click="eidtinfo(scope.$index,scope.row.id)" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" @click="delinfo(scope.$index,scope.row.id)"  icon="el-icon-delete" circle></el-button>
        </template>


      </el-table-column>
    </el-table>



    <!--编辑弹出框-->
    <el-dialog title="编辑" :visible.sync="dialogVisible2" width="50%" :before-close="handleClose">
      <el-form :model="eidtform" >
        <el-form-item label="字典编号（中文）">
          <el-input v-model="eidtform.title"></el-input>
        </el-form-item>
        <el-form-item label="字典名称（英文）">
          <el-input v-model="eidtform.sn"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" v-model="eidtform.description"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible2 = false">取 消</el-button>
            <el-button type="primary" @click="editOk">确 定</el-button>
     </span>

    </el-dialog>

    <!--增加弹出框-->
    <el-dialog title="增加" :visible.sync="dialogVisible3" width="50%" :before-close="handleClose">
      <el-form :model="addform" >
        <el-form-item label="字典编号（中文）">
          <el-input v-model="addform.title"></el-input>
        </el-form-item>
        <el-form-item label="字典名称（英文）">
          <el-input v-model="addform.sn"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" v-model="addform.description"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible3 = false">取 消</el-button>
            <el-button type="primary" @click="addOk">确 定</el-button>
     </span>

    </el-dialog>

    <!--删除弹出框-->
    <el-dialog title="删除" :visible.sync="dialogVisible4" width="35%" :before-close="handleClose">
      <span>你确定要删除该列吗?
        他所对应的子列段也会删除！！！</span>
      <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible4 = false">取 消</el-button>
            <el-button type="primary" @click="delOk">确 定</el-button>
     </span>

    </el-dialog>


    <!--详情弹出框-->
    <el-dialog title="详情" :visible.sync="dialogVisible" width="61%" :before-close="handleClose">
      <el-button style="float: right;"  @click="tkaddinfo()" icon="el-icon-plus" circle></el-button>
      <el-table border :data="infodata" :show-header="true" :fit="true" style="width: 100%" highlight-current-row>
        <el-table-column prop="id" label="ID" width="100"></el-table-column>
        <el-table-column prop="title" width="170" label="字典名称"> </el-table-column>
        <el-table-column prop="value" label="字典值"width="150"> </el-table-column>
        <el-table-column prop="description" label="描述"width="150"> </el-table-column>
        <el-table-column  label="操作"width="170">
          <template slot-scope="scope">
            <el-button type="primary" @click="tkeditinfo(scope.$index,scope.row.id)" icon="el-icon-edit" circle></el-button>
            <el-button type="danger" @click="tkdelinfo(scope.$index,scope.row.id)" icon="el-icon-close" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="infoOk">确 定</el-button>
  </span>
    </el-dialog>

    <!--子列增加弹出框-->
    <el-dialog title="增加" :visible.sync="zlVisibleadd" width="50%" :before-close="handleClose">
      <el-form :model="zladdform" >
        <el-form-item label="字典显示名称">
          <el-input v-model="zladdform.title"></el-input>
        </el-form-item>
        <el-form-item label="字典值">
          <el-input v-model="zladdform.value"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" v-model="zladdform.description"></el-input>
        </el-form-item>

      </el-form>
      <span slot="footer" class="dialog-footer">
            <el-button @click="zlVisibleadd = false">取 消</el-button>
            <el-button type="primary" @click="zladdOk">确 定</el-button>
     </span>

    </el-dialog>

    <!--子列编辑弹出框-->
    <el-dialog title="编辑" :visible.sync="zlVisibleedit" width="50%" :before-close="handleClose">
      <el-form :model="zleidtform" >
        <el-form-item label="字典显示名称">
          <el-input v-model="zleidtform.title"></el-input>
        </el-form-item>
        <el-form-item label="字典值">
          <el-input v-model="zleidtform.value"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" v-model="zleidtform.description"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
            <el-button @click="zlVisibleedit = false">取 消</el-button>
            <el-button type="primary" @click="zleditOk">确 定</el-button>
     </span>

    </el-dialog>

    <!--子列删除弹出框-->
    <el-dialog title="删除" :visible.sync="zlVisibledel" width="35%" :before-close="handleClose">
      <span>你确定要删除该列吗?</span>
      <span slot="footer" class="dialog-footer">
            <el-button @click="zlVisibledel = false">取 消</el-button>
            <el-button type="primary" @click="zldelOk">确 定</el-button>
     </span>

    </el-dialog>

  </div>
</template>

<script>
    export default {
      data() {
        return {
          userManage:null,
          value1:'',
          value2:'',
          value3:'',
          dialogVisible:false,//详情弹出框
          dialogVisible2:false,//编辑弹出框
          dialogVisible3:false,//增加弹出框
          dialogVisible4:false,//删除弹出框
          zlVisibleadd:false,//子列add
          zlVisibleedit:false,//子列edit
          zlVisibledel:false,//子列del
          delnum:'',
          zldelnum:'',
          infodata: [],
          tableData2: [],
          formInline:{
            id:'',
            title:'',
            sn:''
          },
          eidtform:{
            id:'',
            sn:'',
            title:'',
            description:''
          } ,
          zleidtform:{
            id:'',
            parentid:'',
            sequence:0,
            title:'',
            description:'',
            value:''
          },
          addform:{
            sn:'',
            title:'',
            description:''
          },
          zladdparntId:'',
          zladdform:{
            parentid:'',
            sequence:0,
            title:'',
            description:'',
            value:''
          },
          zleditform:{
            id:'',
            parentId:'',
            title:'',
            description:'',
            value:''
          }
        }
      },
      methods: {
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        },
        onSubmit() {
          let url = this.axios.urls.SYSTEM_SETTING_SYSDICT_LISTALL;
          this.axios.post(url, this.formInline).then((response) => {
            console.log(response);
            this.tableData2 = response.data.data;
          }).catch((response) => {
            //carch则是异常
            console.log(response);
          });
        },
        info(index,id){
          this.dialogVisible = true;
          this.zladdparntId = id;
          let url = this.axios.urls.SYSTEM_SETTING_SYSDICTITEM_SELECTBYDICTID;
          this.axios.post(url, {id:id}).then((response) => {
            console.log(response);
            this.infodata = response.data;
          }).catch((response) => {
            //carch则是异常
            console.log(response);
          });
        },
        editOk(){
          this.dialogVisible2 = false;
          let url = this.axios.urls.SYSTEM_SETTING_SYSDICT_EDIT;
          this.axios.post(url, this.eidtform).then((response) => {
            this.onSubmit();
          }).catch((response) => {
            //carch则是异常
            console.log(response);
          });
        },
        inforefresh(){
          let url = this.axios.urls.SYSTEM_SETTING_SYSDICTITEM_SELECTBYDICTID;
          this.axios.post(url, {id:this.zladdparntId}).then((response) => {
            console.log(response);
            this.infodata = response.data;
          }).catch((response) => {
            //carch则是异常
            console.log(response);
          });
        },
        eidtinfo(index,row){
          let url = this.axios.urls.SYSTEM_SETTING_SYSDICT_SELECTONE;
          this.axios.post(url, {id:row}).then((response) => {
            this.eidtform.id = response.data.id;
            this.eidtform.sn = response.data.sn;
            this.eidtform.title = response.data.title;
            this.eidtform.description = response.data.description;
            this.dialogVisible2 = true;
          }).catch((response) => {
            //carch则是异常
            console.log(response);
          });
        },
        delOk(){                                    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!要同时删除子类!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          this.dialogVisible4 = false;
          let url = this.axios.urls.SYSTEM_SETTING_SYSDICT_DEL;
          this.axios.post(url, {id:this.delnum}).then((response) => {
            this.onSubmit();

          }).catch((response) => {
            //carch则是异常
            console.log(response);
          });
        },
        delinfo(index,row){
          this.dialogVisible4 = true;
          this.delnum = row;
        },
        infoOk(){
          this.dialogVisible = false;
        },
        addOk(){
          this.dialogVisible3 = false;
          let url = this.axios.urls.SYSTEM_SETTING_SYSDICT_ADD;
          this.axios.post(url, this.addform).then((response) => {
            console.log(response);
            this.onSubmit();
          }).catch((response) => {
            //carch则是异常
            console.log(response);
          });
        },
        tkdelinfo(index,id){                                                                    //点击删除弹框
          this.zldelnum = id;
          this.zlVisibledel = true;
        },
        tkeditinfo(index,id){                                                                   //点击修改弹框
          let url = this.axios.urls.SYSTEM_SETTING_SYSDICTITEM_SELECTBYID;
          this.axios.post(url, {id:id}).then((response) => {
            this.zleidtform.id = response.data.id;
            this.zleidtform.parentid = response.data.parentid;
            this.zleidtform.title = response.data.title;
            this.zleidtform.description = response.data.description;
            this.zleidtform.value = response.data.value;
            this.zlVisibleedit = true;
          }).catch((response) => {
            //carch则是异常
            console.log(response);
          });
        },
        tkaddinfo(){
          this.zlVisibleadd = true;
          this.zladdform.title='';
            this.zladdform.description='';
            this.zladdform.value='';
          this.zladdform.parentid = this.zladdparntId;
        },
        zleditOk(){
          let url = this.axios.urls.SYSTEM_SETTING_SYSDICTITEM_EDIT;
          this.axios.post(url, this.zleidtform).then((response) => {
            this.inforefresh();//刷新弹框表格
            this.zlVisibleedit = false;
          }).catch((response) => {
            //carch则是异常
            console.log(response);
          });
        },
        zladdOk(){
          let url = this.axios.urls.SYSTEM_SETTING_SYSDICTITEM_ADD;
          this.axios.post(url, this.zladdform).then((response) => {
            this.inforefresh();//刷新弹框表格
            this.zlVisibleadd = false;
          }).catch((response) => {
            //carch则是异常
            console.log(response);
          });
        },
        zldelOk(){
          let url = this.axios.urls.SYSTEM_SETTING_SYSDICTITEM_DEL;
          this.axios.post(url, {id:this.zldelnum}).then((response) => {
            this.inforefresh(); //刷新弹框表格
            this.zlVisibledel = false;
          }).catch((response) => {
            //carch则是异常
            console.log(response);
          });
        },
      },
      created(){
        this.userManage = this.$store.getters.getUserManage;//后台管理员
        let url = this.axios.urls.SYSTEM_SETTING_SYSDICT_LISTALL;
        this.axios.post(url, {}).then((response) => {
          console.log(response);
          this.tableData2 = response.data.data;
        }).catch((response) => {
          //carch则是异常
          console.log(response);
        });
      }
    }
</script>

<style scoped>

</style>

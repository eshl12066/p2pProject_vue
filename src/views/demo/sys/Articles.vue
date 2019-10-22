<template>
  <div>
    <!-- 搜索筛选 -->
    <el-form :inline="true" :model="formInline" class="user-search">
      <el-form-item label="搜索：">
        <el-input size="small" v-model="formInline.title" placeholder="根据标题查询"></el-input>

      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" icon="el-icon-search" @click="search">搜索</el-button>
        <el-button size="small" type="primary" icon="el-icon-plus" @click="add()">添加</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="listData" style="width: 100%;" :border="true" max-height="550">
      <el-table-column prop="id" label="ID" min-width="10" align="center"></el-table-column>
      <el-table-column prop="title" label="标题" min-width="20"></el-table-column>
      <el-table-column prop="body" label="内容" min-width="70"></el-table-column>
      <el-table-column align="center" label="操作" min-width="30">
        <template slot-scope="scope">
          <el-button size="mini" @click="edit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="del(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination style="margin-top: 20px;" @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page="formInline.page" :page-sizes="[10, 20, 30, 50]" :page-size="formInline.rows" layout="total, sizes, prev, pager, next, jumper"
      :total="pageBean.total">
    </el-pagination>
    <!-- 编辑界面 -->
    <el-dialog :title="title" :visible.sync="editFormVisible" width="30%" @click="closeDialog">
      <el-form label-width="120px" :model="editForm" :rules="rules" ref="editForm">
        <el-form-item label="文章名称" prop="title">
          <el-input size="small" v-model="editForm.title" auto-complete="off" placeholder="请输入文章名称"></el-input>
        </el-form-item>
        <el-form-item label="文章内容" prop="body">
          <el-input size="small" v-model="editForm.body" auto-complete="off" placeholder="请输入文章内容"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="closeDialog">取消</el-button>
        <el-button size="small" type="primary" class="title" @click="submitForm()">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        listData: [],
        pageBean:{
          total:0
        },
        formInline: {
          title: '',
          page:1,
          rows:10,
          total:0
        },
        title:'',
        editFormVisible:false,
        editForm:{
          id:0,
          title:'',
          body:''
        },
        rules:{
          title: [
            { required: true, message: '请输入文章标题', trigger: 'blur' },

          ],
          body: [
            { required: true, message: '请输入文章内容', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }


      };
    },
    methods: {
      search() {
        this.doSearch(this.formInline)
      },
      doSearch(params) {
        let url = this.axios.urls.SYSTEM_ARTICLE_LIST;
        this.axios.post(url, params).then((response) => {
          console.log(response);
          this.listData = response.data.result;
          this.pageBean = response.data.pageBean;
        }).catch((response) => {
          console.log(response);
        });
      },
      handleSizeChange(rows){
        console.log("页码数量发生了改变");
        this.formInline.page = 1;
        this.formInline.rows = rows;
        this.search();
      },
      handleCurrentChange(page){
         console.log("页数发生了改变");
        this.formInline.page = page;
        this.search();

      },
      add(){
        this.title = '增加窗体';
        this.editFormVisible = true;


      },
      edit(index,rows){
        this.title = '编辑窗体';
        this.editForm.id = rows.id;
        this.editForm.title = rows.title;
        this.editForm.body = rows.body;
        this.editFormVisible = true;

      },
      del(index,rows){
        if(confirm('你是否要删除?')){
          let url = this.axios.urls.SYSTEM_ARTICLE_DEL;
          this.axios.post(url, {id:rows.id}).then((response) => {
            console.log(response);
            alert("删除成功");
            this.doSearch();
            this.clearForm();
          }).catch((response) => {
            console.log(response);
            alert("删除失败");
          });

        }
      },
      closeDialog(){

        this.clearForm();


      },
      submitForm(){
        this.$refs['editForm'].validate((valid) => {
          if (valid) {
             let url;
            if(this.editForm.id==0){
              url = this.axios.urls.SYSTEM_ARTICLE_ADD;
            }
            else{
              url = this.axios.urls.SYSTEM_ARTICLE_EDIT;
            }

            this.axios.post(url, this.editForm).then((response) => {
              console.log(response);
              alert("编辑成功");
              this.clearForm();
              this.doSearch(this.formInline);
            }).catch((response) => {
              console.log(response);
              alert("编辑失败");
            });
          } else {
            alert('增加失败，请根据格式输入');
            return false;
          }
        });

      },
      clearForm(){
        this.editForm.id = 0;
        this.editForm.title = '';
        this.editForm.body = '';
        this.formInline.page = 1;
        this.formInline.rows = 10;
        this.editFormVisible = false;
      }




    },
    created() {
      this.doSearch({});

    }


  }
</script>

<style>
</style>

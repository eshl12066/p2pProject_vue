<template>
  <el-row >
    <el-col style="background-color: rgb(188, 195, 201); height: 60px;" :span="18">
      <span style="margin-left: 50px;">个人资料填写</span>
    </el-col>
    <pre>



    </pre>
    <el-col :span="12" style="margin-left: 100px;">
      <el-form :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm" size="mini">
        <el-form-item label="用户名" prop="name">
          <span style="margin-left: 150px;">{{this.userMembers.name}}</span>
        </el-form-item>
        <el-form-item label="上传头像" prop="head_photo">
        <el-upload style="margin-left:80px;"
                   action="http://localhost:3001/gg/member/membersRealname/imgUpload"
                   list-type="picture-card"
                   :limit="1"
                   name="picture"
                   accept="head_photo/*"
                   :file-list="head_photo"
                   :multiple="isMultipls"
                   :on-preview="handlePictureCardPreview"
                   :on-error="errorimg"
                   :on-success="handleAvatarSuccess"
                   :on-remove="handleRemove"
                   :headers="headers"
                   :before-upload="beforeAvatarUpload"
                   :on-exceed="exceed"
          ><i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-col  :span="10">
            <el-input style="margin-left: 80px;" v-model="ruleForm.phone"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-col  :span="10">
            <el-input style="margin-left: 80px;" v-model="ruleForm.sex"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="个人学历" prop="myself_background">
          <el-select style="margin-left: 80px;" v-model="ruleForm.myself_background" placeholder="请选择">
            <el-option v-for="item in education1"
                       :key="item.id"
                       :label="item.title"
                       :value="item.title"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="月收入" prop="monthly_income">
          <el-select style="margin-left: 80px;" v-model="ruleForm.monthly_income" placeholder="请选择">
            <el-option v-for="item in education2"
                       :key="item.id"
                       :label="item.title"
                       :value="item.title"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="婚姻情况" prop="marital_status">
          <el-select style="margin-left: 80px;" v-model="ruleForm.marital_status" placeholder="请选择">
            <el-option v-for="item in education3"
                       :key="item.id"
                       :label="item.title"
                       :value="item.title"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="子女情况" prop="children">
          <el-select style="margin-left: 80px;" v-model="ruleForm.children" placeholder="请选择">
            <el-option v-for="item in education4"
                       :key="item.id"
                       :label="item.title"
                       :value="item.title"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="住房条件" prop="house">
          <el-select style="margin-left: 80px;" v-model="ruleForm.house" placeholder="请选择">
            <el-option v-for="item in education5"
                       :key="item.id"
                       :label="item.title"
                       :value="item.title"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button style="margin-left: 120px;" type="primary" @click="submitForm('ruleForm')">保存数据</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>

</template>

<script>
  export default {
    name: "UserDetail",
    data() {
      return {
        userMembers:null,
        ruleForm: {
          name: '',
          members_id:'',
          head_photo:'',
          phone: '',
            sex:'',
          myself_background:'',
          monthly_income: '',
          marital_status: '',
          children: '',
          house: '',

        },
        education1:null,
        education2:null,
        education3:null,
        education4:null,
        education5:null,

      };
    },created(){
      this.userMembers = this.$store.getters.getUserMembers;//用户的
      let url = this.axios.urls.SYSTEM_SETTING_SYSDICTITEM_SELECTBYDICTID;
      this.axios.post(url,this.ruleForm).then((response) => {
        console.log(response);
        this.tableData2 = response.data.data;
      }).catch((response) => {
        //carch则是异常
        console.log(response);
      });
      this.indexs();
    },
    mounted(){
      this.getEop();
    },
    methods: {

      /*增加*/
      submitForm(ruleForm) {
        this.ruleForm.members_id =this.userMembers.id;
          // this.ruleForm.auditorId= this.userMembers.id;
          var url =  this.axios.urls.MEMBER_DADD;
          this.axios.post(url, this.ruleForm).then(response => {
            if (response.data.code == 500) {
              this.$message({
                message: response.data.msg,
                type: 'warning'
              });
            } else {
              //打印成功信息
              console.log(response.data);
              this.$message({
                message: '资料已提交,请耐心等待审核',
                type: 'success'
              });
            }
          }).catch(function(error) {
            console.log(error);
          });


      },
      /*查询下拉框的值*/
      indexs(){

        let url = this.axios.urls.SYSTEM_SETTING_SYSDICTITEM_SELECTBYDICTID;
        this.axios.post(url,{}).then((response)=>{
          console.log(response);

          let ha8  = response.data.ha8;
          let ha9  = response.data.ha9;
          let ha10  = response.data.ha10;
          let ha11  = response.data.ha11;
          let ha12  = response.data.ha12;
          console.log(ha8);
          this.education1 = ha8;
          this.education2 = ha9;
          this.education3 = ha10;
          this.education4 = ha11;
          this.education5 = ha12;
          // this.ruleForm.education = response.data.data;
        }).catch(function(error){
          console.log(error);
        });
      },

      errorimg(res){
        this.$message({
          message:res.msg,
          type: 'warning'
        });
      },
      //预览图片时调用
      handlePictureCardPreview(file) {
        console.log(file);
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      //文件上传之前调用做一些拦截限制
      beforeAvatarUpload(file) {
        console.log(file);
        const isJPG = true;
        const isLt2M = file.size / 1024 / 1024 < 5;
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 5MB!');
        }
        return isJPG && isLt2M;
      },
      //图片上传成功
      handleAvatarSuccess(res, file) {
        this.ruleForm.head_photo = res.path;
      },
      //图片上传失败调用
      imgUploadError(err, file, fileList){
        console.log(err)
        this.$message.error('上传图片失败!');
      },

      // 上传成功时调用
      handleSuccess(response){
        this.addform.foodpic= response.data[0]
        console.log(this.addform.foodpic)
      },
      // 超出上传个数时调用
      exceed(){
        this.$message({
          message: "目前上传图片上限为一张",
          type: 'warning'
        });
      },

     }



  }

</script>

<style scoped>

</style>

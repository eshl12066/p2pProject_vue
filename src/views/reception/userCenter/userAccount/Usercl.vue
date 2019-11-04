<template>
  <el-row>
    <el-col style="background-color: rgb(188, 195, 201); height: 60px;" :span="18">
      <span style="margin-left: 50px;">证件上传</span>
    </el-col>
    <pre>



    </pre>

    <el-col :span="12" style="margin-left:100px;">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="mini">
        <el-form-item label="用户名编号" prop="members_id">
          <span style="margin-left: 150px;">ruleForm.members_id</span>
        </el-form-item>
        <el-form-item label="资料图片" prop="image" >
          <el-col :span="12">
            <el-upload style="margin-left:80px;"
                       action="http://localhost:8080/p2pProject/membersRealname/imgUpload"
                       list-type="picture-card"
                       :limit="1"
                       name="picture"
                       accept="image/*"
                       :file-list="image"
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
            <!--放大弹出框-->
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl">
            </el-dialog>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-button style="margin-left: 120px;" type="primary" @click="submitForm('ruleForm')">上传资料</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>

</template>

<script>
  export default {
    name: "Usersf",
    data() {
      return {

        isMultipls:true,
        dialogImageUrl:'',
        dialogVisible:false,
        image:[],

        fileList: [0,0], //缓存区文件
        uploadFile:[[],[]] ,//  上传用文件

        /* upimg:'http://localhost:8080/p2pProject/image',*/
        ruleForm: {
          members_id:'',
          apply_time:'',
          image:''
        },
      };
    },
    //在上传图片前获取token，前提是已经存到sessionStorage中
    created(){

      let url = this.axios.urls.MEMBER_QUERY_RNULL;
      this.axios.post(url, {id:7}).then((response) => {

      }).catch((response) => {
        //carch则是异常
        console.log(response);
      });
    },
    methods: {
      getTime(){//系统时间
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        //以下代码依次是获取当前时间的年月日时分秒
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var minute = date.getMinutes();
        var hour = date.getHours();
        var second = date.getSeconds();
        //固定时间格式
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        if (hour >= 0 && hour <= 9) {
          hour = "0" + hour;
        }
        if (minute >= 0 && minute <= 9) {
          minute = "0" + minute;
        }
        if (second >= 0 && second <= 9) {
          second = "0" + second;
        }
        var currentdate =  year + seperator1 + month + seperator1 + strDate
          + " " + hour + seperator2 + minute + seperator2 + second;
        return currentdate;
      },
      submitForm(ruleForm) {
        this.ruleForm.members_id =2;
        this.ruleForm.apply_time=this.getTime();
        this.$refs[ruleForm].validate((valid) => {
          var url =  this.axios.urls.MEMBER_MADD;
          this.axios.post(url, this.ruleForm).then(response => {
            //如果是操作失败
            if (response.data.code == 500) {
              this.$message({
                message: response.data.msg,
                type: 'warning'
              });
            } else {
              //打印成功信息
              console.log(response.data);
              this.$message({
                message: '材料已提交,请耐心等待审核',
                type: 'success'
              });
            }
          }).catch(function(error) {
            console.log(error);
          });

        });
      },


      resetForm(formName) {
        this.$refs[formName].resetFields();
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
        this.ruleForm.image = res.path;
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

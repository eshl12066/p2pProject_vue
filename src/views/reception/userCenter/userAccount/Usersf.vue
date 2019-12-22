<template>
  <el-row>
    <el-col style="background-color: rgb(188, 195, 201); height: 60px;" :span="18">
      <span style="margin-left: 50px;">实名认证</span>
    </el-col>
    <pre>
    </pre>

    <el-col :span="12" style="margin-left:100px;">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="mini">
        <el-form-item label="真实姓名" prop="realname">
          <el-col :span="10">
            <el-input style="margin-left: 80px;" v-model="ruleForm.realname"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="身份证号码" prop="id_number">
          <el-col :span="10">
            <el-input style="margin-left: 80px;" v-model="ruleForm.id_number"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-col :span="18" style="margin-left: 80px;">
            <el-radio  v-model="ruleForm.sex" label="男" checkd="checkd">男</el-radio>
            <el-radio v-model="ruleForm.sex" label="女">女</el-radio>
          </el-col>
        </el-form-item>
        <el-form-item label="出生日期" prop="born_date">
          <el-col :span="14">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.born_date" style="margin-left: 80px;width: 100%;" ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="证件地址" prop="address">
          <el-col :span="18">
            <el-input style="margin-left:80px;" v-model="ruleForm.address"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="身份证照片" >
          <el-col :span="12">
            <a style="margin-left:110px;color: dodgerblue" prop="image1">身份证正面</a>
            <el-upload style="margin-left:80px;"
                       action="http://localhost:3001/gg/member/membersRealname/imgUpload"
                       list-type="picture-card"
                       :limit="1"
                       name="picture"
                       accept="image/*"
                       :file-list="images1"
                       :multiple="isMultipls1"
                       :on-preview="handlePictureCardPreview"
                       :on-error="errorimg"
                       :on-success="handleAvatarSuccess1"
                       :on-remove="handleRemove"
                       :headers="headers"
                       :before-upload="beforeAvatarUpload"
                       :on-exceed="exceed"
            ><i class="el-icon-plus"></i>
            </el-upload>
            <!--放大弹出框-->
            <el-dialog :visible.sync="dialogVisible1">
              <img width="100%" :src="dialogImageUrl1">
            </el-dialog>
          </el-col>
          <el-col :span="12">
            <a style="margin-left:110px;color: dodgerblue" prop="image2">身份证反面</a>
            <el-upload style="margin-left:80px;"
                       action="http://localhost:3001/gg/member/membersRealname/imgUpload"
                       list-type="picture-card"
                       :limit="1"
                       name="picture"
                       accept="image/*"
                       :file-list="images2"
                       :multiple="isMultipls2"
                       :on-preview="handlePictureCardPreview"
                       :on-error="errorimg"
                       :on-success="handleAvatarSuccess2"
                       :on-remove="handleRemove"
                       :headers="headers"
                       :before-upload="beforeAvatarUpload"
                       :on-exceed="exceed"
            ><i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible2">
              <img width="100%" :src="dialogImageUrl2">
            </el-dialog>
          </el-col>
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
    name: "Usersf",
    data() {
      return {
        userMembers:null,
        isMultipls1:true,
        dialogImageUrl1:'',
        images1:[],//放入身份证照片地址栏的
        dialogVisible1:false,
        isMultipls2:true,
        images2:[],

        fileList: [0,0], //缓存区文件
        uploadFile:[[],[]] ,//  上传用文件
        dialogVisible2: false,
        dialogImageUrl2: '',

       /* upimg:'http://localhost:8080/p2pProject/image',*/
        ruleForm: {
          realname: '',
          sex:'男',
          id_number: '',
          born_date: '',
          address: '',
          apply_time:'',
          members_id:'',
          image1:'',
          image2:'',
            state:1
        },
        /*rules: {
          realname: [
            {required: true, message: '请输入真实姓名', trigger: 'blur'},
            {min: 2, max:6, message: '姓名长度在 2 到 6 个字符', trigger: 'blur'}
          ],
          id_number: [
            {required: true, message: '请输入身份证号码', trigger: 'blur'},
            {min: 6, max: 90, message: '长度在 3 到 6 个字符', trigger: 'blur'}
          ],
          born_date: [
            {required: true, message: '请输入与证件相同出生日', trigger: 'blur'}
          ],
          address: [
            {required: true, message: '请输入地址', trigger: 'blur'}
          ],
          type: [],
        }*/
      };
    },
    //在上传图片前获取token，前提是已经存到sessionStorage中
    created(){
      this.userMembers = this.$store.getters.getUserMembers;//用户的
      let url = this.axios.urls.MEMBER_QUERY_RNULL;
      this.axios.post(url, {id:this.userMembers.id}).then((response) => {

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
        this.ruleForm.members_id =this.userMembers.id;
        this.ruleForm.apply_time=this.getTime();
        // this.ruleForm.auditorId= this.userMembers.id;
        this.$refs[ruleForm].validate((valid) => {
            var url =  this.axios.urls.MEMBER_RADD;
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
        this.dialogImageUrl1 = file.url;
        this.dialogVisible1 = true;
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
      handleAvatarSuccess1(res, file) {
        this.ruleForm.image1 = res.path;
      },
      handleAvatarSuccess2(res, file) {
        this.ruleForm.image2 = res.path;
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
          message: "正、反面证件照各上限为一张",
          type: 'warning'
        });
      },
    }
  }
</script>

<style scoped>

</style>

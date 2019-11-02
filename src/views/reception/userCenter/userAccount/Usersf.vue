<template>
  <el-row>
    <el-col style="background-color: rgb(188, 195, 201); height: 60px;" :span="18">
      <span style="margin-left: 50px;">实名认证</span>
    </el-col>
    <pre>



    </pre>
    <el-col :span="12" style="margin-left: 100px;">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="mini">
        <el-form-item label="用户名">
          <span style="margin-left: 150px;" v-model="ruleForm.name"></span>
        </el-form-item>
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
            <el-radio  v-model="ruleForm.sex" label="1">男</el-radio>
            <el-radio v-model="ruleForm.sex" label="2">女</el-radio>
          </el-col>
        </el-form-item>
        <el-form-item label="出生日期" required>
          <el-col :span="14">
            <el-form-item prop="date1" style="margin-left:80px;">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.born_date" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="证件地址" prop="address">
          <el-col :span="18">
            <el-input style="margin-left:80px;" v-model="ruleForm.address"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="身份证照片" prop="name">
          <el-col :span="12">
            <a style="margin-left:110px;color: dodgerblue">身份证正面</a>
            <el-upload style="margin-left:80px;"
                       action="#"
                       list-type="picture-card"
                       :auto-upload="false">
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{file}">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url" alt=""
                >
                <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
              </div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-col>
          <el-col :span="12">
            <a style="margin-left:110px;color: dodgerblue">身份证反面</a>
            <el-upload style="margin-left:80px;"
                       action="#"
                       list-type="picture-card"
                       :auto-upload="false">
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{file}">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url" alt=""
                >
                <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
              </div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
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
        /**
         * 文件上传
         * */
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        ruleForm: {
          name: '',
          realname: '',
          sex:'1',
          id_number: '',
          born_date: '',
          address: '',
          type: [],
        },
        rules: {
          realname: [
            {required: true, message: '请输入真实姓名', trigger: 'blur'},
            {min: 3, max:6, message: '长度在 3 到 6 个字符', trigger: 'blur'}
          ],
          id_number: [
            {required: true, message: '请输入身份证号码', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 6 个字符', trigger: 'blur'}
          ],
          born_date: [
            {required: true, message: '请输入与证件相同出生日', trigger: 'blur'}
          ],
          address: [
            {required: true, message: '请输入地址', trigger: 'blur'}
          ],
          type: [],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      /*文件上传*/
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      }

    }
  }
</script>

<style scoped>

</style>

<template>
  <el-row>
    <el-col style="background-color: rgb(188, 195, 201); height: 60px;" :span="18">
      <span style="margin-left: 50px;">个人资料填写</span>
    </el-col>
    <pre>



    </pre>
    <el-col :span="12" style="margin-left: 100px;">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="mini">
        <el-form-item label="用户名">
          <span style="margin-left: 150px;">tess</span>
        </el-form-item>
        <el-form-item label="真实姓名" prop="name">
          <el-col :span="10">
            <el-input style="margin-left: 80px;" v-model="ruleForm.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="身份证号码" prop="name">
          <el-col :span="10">
            <el-input style="margin-left: 80px;" v-model="ruleForm.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="出生日期" required>
          <el-col :span="14">
            <el-form-item prop="date1" style="margin-left:80px;">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                              style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="证件地址" prop="name">
          <el-col :span="18">
            <el-input style="margin-left:80px;" v-model="ruleForm.name"></el-input>
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
                  @click="handleDownload(file)"
                >
                  <i class="el-icon-download"></i>
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
                  @click="handleDownload(file)"
                >
                  <i class="el-icon-download"></i>
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
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          region: [
            {required: true, message: '请选择活动区域', trigger: 'change'}
          ],
          date1: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          date2: [
            {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
          ],
          type: [
            {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
          ],
          resource: [
            {required: true, message: '请选择活动资源', trigger: 'change'}
          ],
          desc: [
            {required: true, message: '请填写活动形式', trigger: 'blur'}
          ]
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

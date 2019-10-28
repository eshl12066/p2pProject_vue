<template>
  <el-row >
    <el-col style="background-color: rgb(188, 195, 201); height: 60px;" :span="18">
      <span style="margin-left: 50px;">个人资料填写</span>
    </el-col>
    <pre>



    </pre>
    <el-col :span="12" style="margin-left: 100px;">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="mini">
            <el-form-item label="用户名">
              <span style="margin-left: 150px;" >tess</span>
            </el-form-item>
            <el-form-item label="真实姓名">
              <span style="margin-left: 150px;">颤三</span>
            </el-form-item>
            <el-form-item label="身份证号码" prop="name">
              <el-col  :span="10">
              <el-input style="margin-left: 80px;" v-model="ruleForm.name"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="手机号码" prop="name">
              <el-col  :span="10">
                <el-input style="margin-left: 80px;" v-model="ruleForm.name"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="个人学历" prop="date1">
              <el-select style="margin-left: 80px;" v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="月收入" prop="type">
              <el-select style="margin-left: 80px;" v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="婚姻情况" prop="region">
              <el-select style="margin-left: 80px;" v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="子女情况" prop="desc">
              <el-select style="margin-left: 80px;" v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="住房条件" prop="date2">
              <el-select style="margin-left: 80px;" v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
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
              { required: true, message: '请输入活动名称', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            region: [
              { required: true, message: '请选择活动区域', trigger: 'change' }
            ],
            date1: [
              { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            ],
            date2: [
              { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
            ],
            type: [
              { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
            ],
            resource: [
              { required: true, message: '请选择活动资源', trigger: 'change' }
            ],
            desc: [
              { required: true, message: '请填写活动形式', trigger: 'blur' }
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
        }
      }
    }
</script>

<style scoped>

</style>

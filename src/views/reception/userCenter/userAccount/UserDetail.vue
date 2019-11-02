<template>
  <el-row >
    <el-col style="background-color: rgb(188, 195, 201); height: 60px;" :span="18">
      <span style="margin-left: 50px;">个人资料填写</span>
    </el-col>
    <pre>



    </pre>
    <el-col :span="12" style="margin-left: 100px;">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="mini">
        <el-form-item label="用户名" prop="name">
          <span style="margin-left: 150px;" v-model="ruleForm.name"></span>
        </el-form-item>
        <el-form-item label="真实姓名" prop="id_number">
          <span style="margin-left: 150px;" v-model="ruleForm.realname"></span>
        </el-form-item>
        <el-form-item label="身份证号码" prop="id_number">
          <el-col  :span="10">
            <el-input style="margin-left: 80px;" v-model="ruleForm.id_number"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-col  :span="10">
            <el-input style="margin-left: 80px;" v-model="ruleForm.phone"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="个人学历" prop="myself_background">
          <el-select style="margin-left: 80px;" v-model="ruleForm.myself_background" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="月收入" prop="monthly_income">
          <el-select style="margin-left: 80px;" v-model="ruleForm.monthly_income" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="婚姻情况" prop="marital_status">
          <el-select style="margin-left: 80px;" v-model="ruleForm.marital_status" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="子女情况" prop="children">
          <el-select style="margin-left: 80px;" v-model="ruleForm.children" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="住房条件" prop="house">
          <el-select style="margin-left: 80px;" v-model="ruleForm.house" placeholder="请选择">
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
          realname:'',
          phone: '',
          id_number: '',
          myself_background: '',
          monthly_income: '',
          marital_status: '',
          children: '',
          house: '',
        },
        rules: {
          phone: [
            { required: true, message: '请输入电话号码', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 11 个字符', trigger: 'blur' }
          ],
          id_number:[
            { required: true, message: '请输入身份证号码', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 11 个字符', trigger: 'blur' }
          ],
          myself_background: [
            { type: 'myself_background', required: true, message: '请选择个人学历', trigger: 'change' }
          ],
          monthly_income: [
            { type: 'monthly_income', required: true, message: '请选择月收入', trigger: 'change' }
          ],
          marital_status: [
            { type: 'monthly_income', required: true, message: '请选择婚姻情况', trigger: 'change' }
          ],

          children: [
            { type: 'children', required: true, message: '请选择子女情况', trigger: 'change' }
          ],
          house: [
            { type: 'house', required: true, message: '请选择住房条件', trigger: 'change' }
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

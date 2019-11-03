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
          <span style="margin-left: 150px;">aa</span>
        </el-form-item>
        <el-form-item label="真实姓名" prop="realname">
          <span style="margin-left: 150px;" >曾狗牛逼</span>
        </el-form-item>
        <el-form-item label="身份证号码" prop="id_number">
          <el-col  :span="10">
            <span style="margin-left: 150px;" v-model="ruleForm.id_number" ></span>
          </el-col>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-col  :span="10">
            <el-input style="margin-left: 80px;" v-model="ruleForm.phone"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="个人学历" prop="myself_background">
          <el-select style="margin-left: 80px;" @change="changeProduct(8)" v-model="ruleForm.myself_background" placeholder="请选择">
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
        ruleForm: {
          name: '',
          realname:'',
          id_number:'',
          phone: '',
          myself_background: '',
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


        rules: {
          phone: [
            { required: true, message: '请输入电话号码', trigger: 'blur' },
            { min: 3, max: 11, message: '长度在 11 个字符', trigger: 'blur' }
          ],
          /*myself_background: [
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
          ]*/

        }
      };
    },created(){
      let url = this.axios.urls.SYSTEM_SETTING_SYSDICTITEM_SELECTBYDICTID;
      this.axios.post(url,this.ruleForm).then((response) => {
        console.log(response);
        this.tableData2 = response.data.data;
      }).catch((response) => {
        //carch则是异常
        console.log(response);
      });
    },
    mounted(){
      this.getEop();
    },
    methods: {
      /*增加*/
      submitForm(formName) {
        let url = this.axios.urls.MEMBER_RADD;
        this.axios.post(url, this.$refs[formName]).then((response) => {

        }).catch((response) => {
          //carch则是异常
          console.log(response);
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


     },
    created(){
      this.indexs();
    },



  }

</script>

<style scoped>

</style>

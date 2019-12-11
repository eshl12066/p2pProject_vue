<template>
  <el-row>
    <el-col :span="8">
     <br/>
      <el-avatar style=" margin-left: 20px;" shape="square" :size="180" fit="fill" :src="ruleForm.head_photo">
      </el-avatar>
    </el-col>
    <pre>


	  </pre>
    <el-col :span="14">用户名：
      <span>{{this.userMembers.name}}</span>
    </el-col>
    <pre>


	</pre>

    <pre>


    </pre>
    <el-col style="margin-left: 50px;" :span="6">
      <el-button type="primary" @click="this.$router.push({path:'/reception/userCenter/UserRecharge.vue'})">账户充值</el-button>
      <el-button type="danger"  @click="this.$router.push({path:'/reception/userCenter/UserWithdraw'})">账户提现</el-button>
    </el-col>
    <pre>


	  </pre>
    <el-divider></el-divider>
    <div>
      <el-col style="margin-left: 50px;" :span="6">
        <el-divider direction="vertical"></el-divider>
		<span>账户总额:
			<el-link style="font-size: 20px;" :underline="false">
				<a style="color: rgb(255, 69, 0);">8003</a>元</el-link>
		</span>
      </el-col>
      <el-col style="margin-left: 50px;" :span="6">
        <el-divider direction="vertical"></el-divider>
		<span>待收本息:
			<el-link style="font-size: 20px;" :underline="false">
				<a style="color: rgb(255, 69, 0);">889</a>元</el-link>
		</span>
      </el-col>
      <el-col style="margin-left: 50px;" :span="6">
        <el-divider direction="vertical"></el-divider>
		<span>累计收益:
			<el-link style="font-size: 20px;" :underline="false">
				<a style="color: rgb(255, 69, 0);">6701</a>元</el-link>
		</span>
      </el-col>
      <pre>
      <el-divider></el-divider>
      </pre>
    </div>


    <el-row>
      <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index ">
        <el-card style="width: 50%;" :body-style="{ padding: '0px' }">
          <el-image
            style="width: 200px; height: 200px"
            src="http://localhost:8080/p2pProject/image/r3.png"
          >
          </el-image>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <span >实名认证</span>
              <el-tag type="success" style="margin-left: 10px;" effect="dark">已认证√</el-tag>
              <br> <br>
              <el-button class="button" type="text">查看</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index ">
        <el-card style="width: 50%;" :body-style="{ padding: '0px' }">
          <el-image
            style="width: 200px; height: 200px"
            src="http://localhost:8080/p2pProject/image/r2.jpg"
          >
          </el-image>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <span >短信验证</span>
              <el-tag type="info" style="margin-left: 10px;" effect="dark">未认证</el-tag>
              <br> <br>
              <el-button class="button" type="text">立即绑定</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index ">
        <el-card style="width: 50%;" :body-style="{ padding: '0px' }">
          <el-image
            style="width: 200px; height: 200px"
            src="http://localhost:8080/p2pProject/image/r1.jpg"
          >
          </el-image>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <span >材料认证</span>
              <el-tag type="info" style="margin-left: 10px;" effect="dark">未认证</el-tag>
              <br> <br>
              <el-button class="button" type="text">立即绑定</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </el-row>
</template>

<script>
  export default {
    name: "UserAccount",
    data() {
      return {
        userMembers:null,
        ruleForm: {
          head_photo:'',
          name:'',
          data:'',
        }
      };
    },
    created(){
      this.userMembers = this.$store.getters.getUserMembers;//用户的
    }
  }
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>

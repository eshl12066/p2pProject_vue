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
      <el-button type="primary" @click="toUserRecharge">账户充值</el-button>
      <el-button type="danger"  @click="toUserWithdraw">账户提现</el-button>
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
            src="http://localhost:1008/apply.png"
          >
          </el-image>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <span >实名认证</span>
              <template>

                <el-tag type="info" style="margin-left: 10px;" effect="dark" v-if="ruleForm.state == 0">已认证</el-tag>
                <br> <br>
                <el-button class="button" type="text" @click="toUsersf"  v-if="ruleForm.state == null">立即绑定</el-button>

                <el-tag type="successful" style="margin-left: 10px;" effect="dark" v-if="ruleForm.state == 2">认证失败</el-tag>
                <el-tag type="successful" style="margin-left: 10px;" effect="dark" v-if="ruleForm.state == 1">认证中</el-tag>

              </template>



              <!--<el-tag type="info" style="margin-left: 10px;" effect="dark">未认证</el-tag>
              <br> <br>
              <el-button class="button" type="text" @click="toUsersf">立即绑定</el-button>

              <el-tag type="successful" style="margin-left: 10px;" effect="dark">以认证</el-tag>-->

            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index ">
        <el-card style="width: 50%;" :body-style="{ padding: '0px' }">
          <el-image
            style="width: 200px; height: 200px"
            src="http://localhost:1008/finally.png"
          >
          </el-image>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <span >个人信息</span>

              <template>
                <!--<el-button v-if="scope.row.realname == null"  type="info" round >待审核</el-button>-->
                <!--                <el-tag v-if="ruleForm.realname" type="info" style="margin-left: 10px;" effect="dark">未认证</el-tag>-->
                <!--                <el-tag type="info" style="margin-left: 10px;" effect="dark">未认证</el-tag>-->
                <!-- <el-button v-if="scope.row.realname == 1"  type="danger" round >失败</el-button>
                 <el-button v-if="scope.row.state == 0" round  >成功</el-button>-->



                <el-tag type="info" style="margin-left: 10px;" effect="dark" v-if="ruleForm.phone != null">已认证</el-tag>
                <br> <br>
                <el-button class="button" type="text" @click="toUsersf"  v-if="ruleForm.phone == null">立即绑定</el-button>

                <el-tag type="successful" style="margin-left: 10px;" effect="dark" v-if="ruleForm.phone == null">未认证</el-tag>

              </template>

            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index ">
        <el-card style="width: 50%;" :body-style="{ padding: '0px' }">
          <el-image
            style="width: 200px; height: 200px"
            src="http://localhost:1008/audit.png"
          >
          </el-image>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <span >材料认证</span>
              <template>
             <!--   <el-button v-if="scope.row.realname == null"  type="info" round >待审核</el-button>
                                <el-tag v-if="ruleForm.realname" type="info" style="margin-left: 10px;" effect="dark">未认证</el-tag>
                                <el-tag type="info" style="margin-left: 10px;" effect="dark">未认证</el-tag>
                 <el-button v-if="scope.row.realname == 1"  type="danger" round >失败</el-button>
                 <el-button v-if="scope.row.state == 0" round  >成功</el-button>-->



                <el-tag type="info" style="margin-left: 10px;" effect="dark" v-if="ruleForm.state1 == 0">已认证</el-tag>
                <br> <br>
                <el-button class="button" type="text" @click="toUsersf"  v-if="ruleForm.state1 == null">立即绑定</el-button>

                <el-tag type="successful" style="margin-left: 10px;" effect="dark" v-if="ruleForm.state1 == 2">认证失败</el-tag>
                <el-tag type="successful" style="margin-left: 10px;" effect="dark" v-if="ruleForm.state1 == 1">认证中</el-tag>

              </template>
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
          state:'',
          state1:'',
          phone:'',
        },
         detail:''
      };
    },
      methods: {
          //查看详情按钮
          checkrlone(id) {
              //  实名验证
              let url = this.axios.urls.MEMBER_CLONE;
              this.axios.post(url,{"id":id}).then((response)=>{
                  let data = response.data;
                  console.log(data);
                  this.detail = data;
                  console.log(this.detail)
                  this.ruleForm.state = this.detail.state;
                  console.log("士大夫但是：" + this.ruleForm.state)
              }).catch(function(error){//carch则是异常
                  console.log(error);
              });

          },
          //查看详情按钮
          checkrdnull(id) {
              //  个人信息
              let url = this.axios.urls.MEMBER_QUERY_DNULL;
              this.axios.post(url,{"id":id}).then((response)=>{
                  let data = response.data;
                  console.log(data);
                  this.detail = data;
                  // this.detail.id = data.id;//借款总额
                  // this.detail.realname = data.realname;//已有多少人投资
                  // this.detail.sex = data.sex;//已收到的投资总额
                  // this.detail.borndate = data.born_date;
                  // this.detail.idnumber = data.id_number;
                  // this.detail.address = data.address;
                  // this.detail.state = data.state;
                  // this.detail.image1 = data.image1;
                  // this.detail.image2 = data.image2;
                  // this.detail.remark = data.remark;
                  // this.detail.audittime = data.audit_time;
                  // this.detail.applytime = data.apply_time;
                  // this.detail.auditorid = data.auditor_id;
                  // this.detail.membersid = data.members_id;
                  console.log(this.detail)
                  this.ruleForm.phone = this.detail.phone;
                  console.log("士大夫但是：" + this.ruleForm.phone)
              }).catch(function(error){//carch则是异常
                  console.log(error);
              });

          },
          //材料认证
          checkclone(id) {
              //  材料认证
              let url = this.axios.urls.MEMBER_CLONE;
              this.axios.post(url,{"id":id}).then((response)=>{
                  let data = response.data;
                  console.log(data);
                  this.detail = data;
                  console.log(this.detail)
                  this.ruleForm.state1 = this.detail.state;
                  console.log("士大夫但是：" + this.ruleForm.state1)
              }).catch(function(error){//carch则是异常
                  console.log(error);
              });

          },
          //跳转到实名认证
          toUsersf(){
              // 跳转路由 去实名认证界面 Usersf
              this.$router.push({
                  path:"/reception/userCenter/Usersf"
              });
          },
          //跳转到个人信息
          toUserDetail(){
              // 跳转路由 去个人信息界面 UserDetail
              this.$router.push({
                  path:"/reception/userCenter/UserDetail"
              });
          },
          //跳转到材料认证
          toUsercl(){
              // 跳转路由 去材料认证界面 Usercl
              this.$router.push({
                  path:"/reception/userCenter/Usercl"
              });
          },
          //跳转到充值中心
          toUserRecharge(){
              // 跳转路由 去充值中心界面 UserRecharge
              this.$router.push({
                  path:"/reception/userCenter/UserRecharge"
              });
          },
          //跳转到账户提现
          toUserWithdraw(){
              // 跳转路由 去账户提现界面 UserWithdraw
              this.$router.push({
                  path:"/reception/userCenter/UserWithdraw"
              });
          },

      },
    created(){
      this.userMembers = this.$store.getters.getUserMembers;//用户的
      console.log(this.userMembers);

      this.checkrlone(this.userMembers.id);
      this.checkrdnull(this.userMembers.id);
      this.checkclone(this.userMembers.id);
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

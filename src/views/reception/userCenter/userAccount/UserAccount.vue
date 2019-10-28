<template>
  <el-row>
    <el-col :span="8">
      <el-avatar style=" margin-left: 20px;" shape="square" :size="180" fit="fill" :src="avatarUrl">
      </el-avatar>
    </el-col>
    <pre>


	  </pre>
    <el-col :span="14">用户名：
      <span>admin</span>
    </el-col>
    <pre>


	</pre>
    <el-col :span="14">最后登录时间：
      <span>2019-10-28</span>
    </el-col>
    <pre>


    </pre>
    <el-col style="margin-left: 50px;" :span="6">
      <el-button type="primary">账户充值</el-button>
      <el-button type="danger">账户提现</el-button>
    </el-col>
    <pre>


	  </pre>
    <el-divider></el-divider>
    <div>
      <el-col style="margin-left: 50px;" :span="6">
		<span>账户总额:
			<el-link style="font-size: 20px;" :underline="false" type="primary">
				<a>0</a>元</el-link>
		</span>
      </el-col>
      <el-col style="margin-left: 50px;" :span="6">
		<span>可用总额:
			<el-link style="font-size: 20px;" :underline="false" type="primary">
				<a>0</a>元</el-link>
		</span>
      </el-col>
      <el-col style="margin-left: 50px;" :span="6">
		<span>冻结总额:
			<el-link style="font-size: 20px;" :underline="false" type="primary">
				<a>0</a>元</el-link>
		</span>
      </el-col>
      <pre>



      </pre>
      <el-col style="margin-left: 50px;" :span="6">
		<span>待收利息:
			<el-link style="font-size: 20px;" :underline="false" type="primary">
				<a>0</a>元</el-link>
		</span>
      </el-col>
      <el-col style="margin-left: 50px;" :span="6">
		<span>待收本金:
			<el-link style="font-size: 20px;" :underline="false" type="primary">
				<a>0</a>元</el-link>
		</span>
      </el-col>
      <el-col style="margin-left: 50px;" :span="6">
		<span>待还本息:
			<el-link style="font-size: 20px;" :underline="false" type="primary">
				<a>0</a>元</el-link>
		</span>
      </el-col>
    </div>
    <pre>
      <el-divider></el-divider>
    </pre>
    <el-row>
      <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index ">
        <el-card style="width: 50%;" :body-style="{ padding: '0px' }">
          <img class="image"  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
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
          <img class="image"  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <span >手机认证</span>
              <el-tag type="info" style="margin-left: 10px;" effect="dark">未认证</el-tag>
              <br> <br>
              <el-button class="button" type="text">立即绑定</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index ">
        <el-card style="width: 50%;" :body-style="{ padding: '0px' }">
          <img class="image"  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <span >邮箱认证</span>
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


        };
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

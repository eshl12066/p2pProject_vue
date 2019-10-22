<template>
	<el-menu router default-active="$route.path" class="el-menu-vertical-demo"  background-color="#334157"
	 text-color="#fff" active-text-color="#ffd04b"  >
		<!-- <el-menu default-active="2" :collapse="collapsed" collapse-transition router :default-active="$route.path" unique-opened class="el-menu-vertical-demo" background-color="#334157" text-color="#fff" active-text-color="#ffd04b"> -->
		<div class="logobox">
			<img class="logoimg" src="../../assets/img/logo.png" alt="">
		</div>
    <!-- index是必须填写的属性，1,代表着ID的唯一性，2,可以为路由跳转提供位置-->
<!-- 		<el-submenu :index="'id_'+m.treeNodeId" v-for="m in menus">
			<template slot="title">
				<i :class="m.icon"></i>
				<span>{{m.treeNodeName}}</span>
			</template>
			<el-menu-item :key="'id_'+m2.treeNodeId" :index="m2.url" v-for="m2 in m.children">
        <template slot="title">
        	<i :class="m2.icon"></i>
        	<span>{{m2.treeNodeName}}</span>
        </template>
      </el-menu-item>
		</el-submenu> -->


      <el-submenu :index="'id_'+m1.treeNodeId" v-for="m1 in treemenus">
          <template slot="title">
            <i :class="m1.icon"></i>
            <span  @click="changeNode(m1.treeNodeId)" >{{m1.treeNodeName}}</span>
          </template>
       </el-submenu>


	</el-menu>
</template>
<script>
	export default {
      data(){
        return{
          // collapsed:false,
          treemenus:[],
        };
      },
      created(){
        // this.$root.Bus.$on("collapsed-side",(v)=>{
        //   this.collapsed = v;
        // });
        let url = this.axios.urls.SYSTEM_MENU_TREE;

        this.axios.post(url,{}).then((response)=>{
          console.log(response);
          let data = response.data.result;

           this.treemenus = data;

            this.$store.dispatch('doMenus',{
              _this: this,
              treeNodeId:1
            })




        }).catch(function(error){
            console.log(error);
        });


      }
      ,
      methods: {
        changeNode(treeNodeId) {
            console.log("调用成功:"+treeNodeId)
             this.$store.dispatch('doMenus',{
              _this: this,
              treeNodeId:treeNodeId
            })


        }
      },
	}
</script>
<style>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 240px;
		min-height: 400px;
	}

	.el-menu-vertical-demo:not(.el-menu--collapse) {
		border: none;
		text-align: left;
	}

	.el-menu-item-group__title {
		padding: 0px;
	}

	.el-menu-bg {
		background-color: #1f2d3d !important;
	}

	.el-menu {
		border: none;
	}

	.logobox {
		height: 40px;
		line-height: 40px;
		color: #9d9d9d;
		font-size: 20px;
		text-align: center;
		padding: 20px 0px;
	}

	.logoimg {
		height: 40px;
	}
</style>

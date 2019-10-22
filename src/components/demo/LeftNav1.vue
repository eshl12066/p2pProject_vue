<template>
	<el-row class="tac">
  <el-col :span="12">
    <h5></h5>
    <el-menu>
      <el-submenu :key="'id_'+m.treeNodeId" :index="m.url" v-for="m in menus">
        <template slot="title">
          <i :class="m.icon"></i>
         <span  >{{m.treeNodeName}}</span>
        </template>
      </el-submenu>

    </el-menu>
  </el-col>

</el-row>
</template>
<script>
	export default {
      data(){
        return{

        };
      }
      ,
      computed: {
        menus() {
          return  this.$store.getters.getMenus;
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

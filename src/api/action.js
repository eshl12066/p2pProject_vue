/**
 * 对后台请求的地址的封装，URL格式如下：
 * 模块名_实体名_操作
 */
export default {
  //业务模块
  'SERVER': 'http://localhost:8080/p2pProject', //服务器
  'SYSTEM_USER_VERIFICATION':'/sysUser/verificationCode',//验证码验证
  'SYSTEM_USER_DOLOGIN': '/sysUser/login', //用户登陆
  'SYSTEM_USER_USERCODE': '/vue/userAction_userCode.action',

  //后台
  'SYSTEM_TREE': '/sysPermission/selectTreeNode', //树菜单
  'SYSTEM_ASSET_RECHARGE_LISTALL': '/moneyRecharge/selectAll',  //分页模糊查找充值表

  //会员模块
  'MEMBER_MANAGE_GETALL':'/members/getMAll',//会员管理模糊查
  'MEMBER_CLSELECT':'/membersMaterials/getCAll',//会员材料模糊查询
  'MEMBER_CLONE':'/membersMaterials/getCLOne',//会员材料单个查询

  //资产模块
  'SYSTEM_MENU_TREE_LIST': '/vue/treeNodeAction_selectbylist.action', //树形的另一个
	'SYSTEM_MENU_TREE': '/vue/treeNodeAction_selectlist.action', //左侧树形菜单加载
	'getFullPath': k => { //获得请求的完整地址，用于mockjs测试时使用
		return this.SERVER + this[k];
	}

}

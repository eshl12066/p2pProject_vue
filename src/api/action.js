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

  //前台-我要投标界面
  'SYSTEM_BID_BIDQUERY': '/business/bidQuery', //投标界面数据展示
  'SYSTEM_BID_SELECTONE':'/business/selectOne',//投标详情
  'SYSTEM_BID_BIDADD': '/business/bidAdd', //我要投标

  //后台
  'SYSTEM_TREE': '/sysPermission/selectTreeNode', //树菜单

  //资产模块
  'SYSTEM_MENU_TREE_LIST': '/vue/treeNodeAction_selectbylist.action', //树形的另一个
	'SYSTEM_USER_DOREG': '/vue/userAction_reg.action', //用户注册
	'SYSTEM_MENU_TREE': '/vue/treeNodeAction_selectlist.action', //左侧树形菜单加载
	'SYSTEM_ARTICLE_LIST': '/vue/articleAction_list.action', //文章列表
	'SYSTEM_ARTICLE_ADD': '/vue/articleAction_add.action', //文章新增
	'SYSTEM_ARTICLE_EDIT': '/vue/articleAction_edit.action', //文章修改
	'SYSTEM_ARTICLE_DEL': '/vue/articleAction_del.action', //文章删除
	'SYSTEM_USER_GETASYNCDATA': '/vue/userAction_getAsyncData.action', //vuex中的异步加载数据
	'getFullPath': k => { //获得请求的完整地址，用于mockjs测试时使用
		return this.SERVER + this[k];
	}
}

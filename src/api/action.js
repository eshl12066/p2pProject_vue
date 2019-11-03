/**
 * 对后台请求的地址的封装，URL格式如下：
 * 模块名_实体名_操作
 */
export default {
  //权限模块
  'SERVER': 'http://localhost:8080/p2pProject', //服务器
  'SYSTEM_USER_VERIFICATION':'/sysUser/verificationCode',//验证码验证
  'SYSTEM_USER_DOLOGIN': '/sysUser/login', //用户登陆
  'SYSTEM_USER_SELECTONE': '/sysUser/selectOne',//查询单个员工
  'SYSTEM_USER_USERQUERY': '/sysUser/userQuery',//查询员工
  'SYSTEM_USER_USERADD': '/sysUser/userAdd',//增加员工
  'SYSTEM_USER_USERUPDATE': '/sysUser/userUpdate',//修改员工
  'SYSTEM_USER_USERDEL': '/sysUser/userDel',//删除员工
  'SYSTEM_USER_ADDUSERROLE': '/sysUser/addUserRole',//增加员工角色

  'SYSTEM_ROLE_ROLESELECT': '/sysRole/roleSelect',//获取所有角色下拉（其次是可用的状态）
  'SYSTEM_ROLE_ROLEQUERY': '/sysRole/roleQuery',//查询角色
  'SYSTEM_ROLE_SELECTONE': '/sysRole/selectOne',//查询角色单个角色
  'SYSTEM_ROLE_ROLEADD': '/sysRole/roleAdd',//增加角色
  'SYSTEM_ROLE_ROLEUPDATE': '/sysRole/roleUpdate',//修改角色
  'SYSTEM_ROLE_ROLEDEL': '/sysRole/roleDel',//删除角色
  'SYSTEM_PERMISSION_DELROLEPERMISSION': '/sysPermission/delRolePermission',//清空角色
  'SYSTEM_PERMISSION_ADDROLEPERMISSION': '/sysPermission/addRolePermission',//为角色授权
  'SYSTEM_USER_MEMBERLOGIN': '/sysUser/memberLogin',//前台登陆


  //业务模块
  'SYSTEM_TREE': '/sysPermission/selectTreeNode', //树菜单
  'SYSTEM_ROLE_TREE':'/sysPermission/selectTreeNodeRoleid',//权限角色赋值所用
  'SYSTEM_ASSET_RECHARGE_LISTALL': '/moneyRecharge/selectAll',  //分页模糊查找充值表
  'SYSTEM_ASSET_WITHDRAW_LISTALL': '/moneyWithdraw/selectAll',  //分页模糊查找充值表
  'SYSTEM_ASSET_WITHDRAW_LISTALL': '/moneyWithdraw/selectAll',  //分页模糊查找充值表

  //会员模块
  'MEMBER_MANAGE_GETALL':'/members/getAll',//会员管理模糊查
  'MEMBER_MANAGE_GETCALL':'/membersMaterials/getCAll',//会员材料模糊查询
  'MEMBER_MANAGE_GETRALL':'/membersRealname/getRAll',//会员实名模糊查

  'MEMBER_CLONE':'/membersMaterials/getCLOne',//会员材料单个查询
  'MEMBER_RLONE':'/membersRealname/getRLOne',//会员实名认证单个查询

  'MEMBER_CEDITSTATE':'/membersMaterials/updateState',//修改会员材料状态已经增加备注*/
  'MEMBER_REDITSTATE':'/membersRealname/updateRState',//修改会员实名认证审核状态

//投资模块

  //投标模块
  'SYSTEM_BID_BIDQUERY': '/bid/bidQuery',//投资界面数据展示
  'SYSTEM_BID_SELECTONE': '/bid/selectOne',//投资界面，查询单个投资数据
  'SYSTEM_BID_BIDADD': '/bid/bidAdd',//进行投资

  //借款模块
  'SYSTEM_BIDREQUEST_INSERTBIDREQUEST': '/bidRequest/insertBidRequest',//进行借款




  //设置模块
  'SYSTEM_SETTING_SYSDICT_LISTALL': '/sysdict/selectAll',  //分页模糊查找字典表
  'SYSTEM_SETTING_SYSDICT_ADD': '/sysdict/sysdictAdd',  //增加dict
  'SYSTEM_SETTING_SYSDICT_DEL': '/sysdict/sysdictDel',  //删除dict
  'SYSTEM_SETTING_SYSDICT_EDIT': '/sysdict/sysdictUpdate',  //修改dict
  'SYSTEM_SETTING_SYSDICT_SELECTONE': '/sysdict/selectOne',  //查单个dict

  'SYSTEM_SETTING_SYSDICTITEM_SELECTBYDICTID': '/sysdictitem/selectByDictId',  //根据dictID查看dictitem详情
  'SYSTEM_SETTING_SYSDICTITEM_DELBYPARENTID': '/sysdictitem/sysdictitemDelByParentId',  //根据父ID删除所有子
  'SYSTEM_SETTING_SYSDICTITEM_SELECTBYID': '/sysdictitem/selectOne',  //根据ID查找单个
  'SYSTEM_SETTING_SYSDICTITEM_ADD': '/sysdictitem/sysdictitemAdd',  //增加
  'SYSTEM_SETTING_SYSDICTITEM_DEL': '/sysdictitem/sysdictitemDel',  //删除
  'SYSTEM_SETTING_SYSDICTITEM_EDIT': '/sysdictitem/sysdictitemUpdate',  //修改



//资产模块

	'getFullPath': k => { //获得请求的完整地址，用于mockjs测试时使用
		return this.SERVER + this[k];
	}
}

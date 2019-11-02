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


  //资产模块

  //会员模块

  //设置模块


	'getFullPath': k => { //获得请求的完整地址，用于mockjs测试时使用
		return this.SERVER + this[k];
	}
}

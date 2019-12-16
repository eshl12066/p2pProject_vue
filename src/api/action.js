/**
 * 对后台请求的地址的封装，URL格式如下：
 * 模块名_实体名_操作
 */
export default {
  //权限模块
  'SERVER': 'http://localhost:3001/gg', //服务器
  'SYSTEM_USER_VERIFICATION':'/sys/sysUser/verificationCode',//验证码验证
  'SYSTEM_USER_DOLOGIN': '/sys/sysUser/login', //用户登陆
  'SYSTEM_USER_SELECTONE': '/sys/sysUser/selectOne',//查询单个员工
  'SYSTEM_USER_USERQUERY': '/sys/sysUser/userQuery',//查询员工
  'SYSTEM_USER_USERADD': '/sys/sysUser/userAdd',//增加员工
  'SYSTEM_USER_USERUPDATE': '/sys/sysUser/userUpdate',//修改员工
  'SYSTEM_USER_USERDEL': '/sys/sysUser/userDel',//删除员工
  'SYSTEM_USER_ADDUSERROLE': '/sys/sysUser/addUserRole',//增加员工角色

  'SYSTEM_ROLE_ROLESELECT': '/sys/sysRole/roleSelect',//获取所有角色下拉（其次是可用的状态）
  'SYSTEM_ROLE_ROLEQUERY': '/sys/sysRole/roleQuery',//查询角色
  'SYSTEM_ROLE_SELECTONE': '/sys/sysRole/selectOne',//查询角色单个角色
  'SYSTEM_ROLE_ROLEADD': '/sys/sysRole/roleAdd',//增加角色
  'SYSTEM_ROLE_ROLEUPDATE': '/sys/sysRole/roleUpdate',//修改角色
  'SYSTEM_ROLE_ROLEDEL': '/sys/sysRole/roleDel',//删除角色
  'SYSTEM_PERMISSION_DELROLEPERMISSION': '/sys/sysPermission/delRolePermission',//清空角色
  'SYSTEM_PERMISSION_ADDROLEPERMISSION': '/sys/sysPermission/addRolePermission',//为角色授权
  'SYSTEM_USER_MEMBERLOGIN': '/sys/sysUser/memberLogin',//前台用户登陆addMembers
  'SYSTEM_USER_ADDMEMBERS': '/sys/sysUser/addMembers',//前台用户注册
  'SYSTEM_USER_MANAGELOGINOUT': '/sys/sysUser/manageLoginout',//后台管理员登出
  'SYSTEM_USER_MEMBERSLOGINOUT': '/sys/sysUser/membersLoginout',//前台会员登出

  //后台借贷（***）
  'SYSTEM_USERROLE_BIDREQUESTSELECT': '/sys/sysUserRole/bidRequestSelect',//后台信用贷的所有查
  'SYSTEM_USERROLE_BIDREQUESTSELECT0': '/sys/sysUserRole/bidRequestSelect0',//0
  'SYSTEM_USERROLE_BIDREQUESTSELECT3': '/sys/sysUserRole/bidRequestSelect3',//3
  'SYSTEM_USERROLE_BIDREQUESTSELECT1': '/sys/sysUserRole/bidRequestSelect1',//1
  'SYSTEM_USERROLE_BIDREQUESTSELECT7': '/sys/sysUserRole/bidRequestSelect7',//7
  'SYSTEM_USERROLE_UPBIDREQUEST0': '/sys/sysUserRole/upBidRequest0',//初审核通过后的修改
  'SYSTEM_USERROLE_NOUPBIDREQUEST0': '/sys/sysUserRole/noupBidRequest0',//初审核不通过后的修改

  'SYSTEM_USERROLE_MANUPDATE3': '/sys/sysUserRole/manUpdate3',//满标审核通过后的修改
  'SYSTEM_USERROLE_NOMANUPDATE3': '/sys/sysUserRole/nomanUpdate3',//满标审核不通过后的修改








  //业务模块
  'SYSTEM_TREE': '/sys/sysPermission/selectTreeNode', //树菜单
  'SYSTEM_ROLE_TREE':'/sys/sysPermission/selectTreeNodeRoleid',//权限角色赋值所用


  //业务模块

  'ZFBTIAOZHUAN':'/asset/alipay.trade.page.pay.jsp',//支付宝跳转
  'ALIPAY_PAY':'/asset/alipay/alipayIumpSum',//沙箱支付宝


  'SYSTEM_ASSET_RECHARGE_LISTALL': '/asset/moneyRecharge/selectAll',  //分页模糊查找充值表
  'SYSTEM_ASSET_WITHDRAW_LISTALL': '/asset/moneyWithdraw/selectAll',  //分页模糊查找充值表
  //资产模块
  'SYSTEM_ASSET_RECHARGE_ADD': '/asset/moneyRecharge/moneyRechargeAdd',  //增加单个充值表
  'SYSTEM_ASSET_RECHARGE_SELECTZFB': '/asset/moneyRecharge/selectZFB',  //根据ID获取支付宝账号
  'SYSTEM_ASSET_RECHARGE_UPDATEJE': '/asset/moneyRecharge/updateJE',  //根据ID修改资产


  'SYSTEM_ASSET_WITHDRAW_LISTMEMBER': '/asset/moneyWithdraw/ListBymemberPager',  //分页模糊查找提现表  用户用
  'SYSTEM_ASSET_WITHDRAW_LISTUSER': '/asset/moneyWithdraw/ListByuserPager',  //分页模糊查找提现表  管理员用
  'SYSTEM_ASSET_WITHDRAW_DEL': '/asset/moneyWithdraw/moneyWithdrawDel',  //根据ID删除提现表
  'SYSTEM_ASSET_WITHDRAW_ADD': '/asset/moneyWithdraw/moneyWithdrawAdd',  //增加提现表
  'SYSTEM_ASSET_WITHDRAW_EDIT': '/asset/moneyWithdraw/moneyWithdrawUpdate',  //根据ID修改单个提现表

  'SYSTEM_BID_SELECTALL': '/bid/selectAllPager',//投标表查所有
  'SYSTEM_BID_SELECTMEMBERS': '/bid/selectMembers',//根据ID查找会员
  'SYSTEM_BID_SELECTREQUEST': '/bid/selectRequest',//根据ID查找借贷表




  //投标模块
  'SYSTEM_BID_BIDQUERY': '/bid/bidQuery',//投资界面数据展示
  'SYSTEM_BID_SELECTONE': '/bid/selectOne',//投资界面，查询单个投资数据
  'SYSTEM_BID_BIDADD': '/bid/bidAdd',//进行投资





  //会员模块
  'MEMBER_MANAGE_GETALL':'/members/getAll',//会员管理模糊查
  'MEMBER_MANAGE_GETCALL':'/membersMaterials/getCAll',//会员材料模糊查询
  'MEMBER_MANAGE_GETRALL':'/membersRealname/getRAll',//会员实名模糊查

  'MEMBER_CLONE':'/membersMaterials/getCLOne',//会员材料单个查询
  'MEMBER_RLONE':'/membersRealname/getRLOne',//会员实名认证单个查询

  'MEMBER_CEDITSTATE':'/membersMaterials/updateState',//修改会员材料状态已经增加备注*/
  'MEMBER_REDITSTATE':'/membersRealname/updateRState',//修改会员实名认证审核状态

  'MEMBER_DADD':'/membersDetail/membersDetailAdd',//增加会员详细资料实名表
  'MEMBER_RADD':'/membersRealname/membersRealnameAdd',//增加会员身份实名表
  'MEMBER_MADD':'/membersMaterials/membersMaterialsAdd',//增加会员身材料表

  'MEMBER_QUERY_RNULL':'/membersRealname/queryRnull',//返回实名表是否进行认证
  'MEMBER_QUERY_DNULL':'/membersDetail/queryDnull',//返回资料表是否进行认证
  'MEMBER_QUERY_MNULL':'/membersMaterials/queryMnull',//返回材料表是否进行认证

//投资模块

  //投标模块


  'SYSTEM_BID_SELECTUSERBID': '/bid/selectUserBid',//用户的投资界面
  'SYSTEM_BID_SELECTUSERBIDDETAILS': '/bid/selectUserBidDetails',//用户的投资详情

  'SYSTEM_BID_SELECTUSERBIDREQUEST': '/bidRequest/selectUserBidRequest',//用户的贷款界面

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


  'SYSTEM_SETTING_SETTING_SELECTALL': '/sysSetting/sysSettingQuery',  //查询所有
  'SYSTEM_SETTING_SETTING_EDIT': '/sysSetting/sysSettingUpdate',  //修改单个
  'SYSTEM_SETTING_SETTING_SELECTONE': '/sysSetting/selectOne',  //查询单个


  'SYSTEM_MESSAGE_SELECTONE': '/message/selectOne', //查找单个
  'SYSTEM_MESSAGE_SELECTALL': '/message/selectAll', //查找全部
  'SYSTEM_MESSAGE_DELECTBYID': '/message/messageDel', //删除单个
  'SYSTEM_MESSAGE_INSERT': '/message/messageAdd', //增加
  'SYSTEM_MESSAGE_EDIT': '/message/messageEdit', //修改

//资产模块

	'getFullPath': k => { //获得请求的完整地址，用于mockjs测试时使用
		return this.SERVER + this[k];
	}
}

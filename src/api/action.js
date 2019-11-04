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
  'SYSTEM_ROLE_ROLEQUERY': '/sysRole/roleQuery',//查询角色
  'SYSTEM_ROLE_SELECTONE': '/sysRole/selectOne',//查询角色单个角色
  'SYSTEM_ROLE_ROLEADD': '/sysRole/roleAdd',//增加角色
  'SYSTEM_ROLE_ROLEUPDATE': '/sysRole/roleUpdate',//修改角色
  'SYSTEM_ROLE_ROLEDEL': '/sysRole/roleDel',//删除角色

  'SYSTEM_TREE': '/sysPermission/selectTreeNode', //树菜单

  //业务模块

  'ZFBTIAOZHUAN':'/alipay.trade.page.pay.jsp',//支付宝跳转
  'ALIPAY_PAY':'/alipay/alipayIumpSum',//沙箱支付宝

  'SYSTEM_BID_SELECTALL': '/bid/selectAllPager',//投标表查所有
  'SYSTEM_BID_SELECTMEMBERS': '/bid/selectMembers',//根据ID查找会员
  'SYSTEM_BID_SELECTREQUEST': '/bid/selectRequest',//根据ID查找借贷表


  'SYSTEM_BID_BIDQUERY': '/business/bidQuery',//投资界面数据展示
  'SYSTEM_BID_SELECTONE': '/business/selectOne',//投资界面，查询单个投资数据
  'SYSTEM_BID_BIDADD': '/business/bidAdd',//进行投资

  //资产模块
  'SYSTEM_ASSET_RECHARGE_LISTALL': '/moneyRecharge/selectAll',  //分页模糊查找充值表
  'SYSTEM_ASSET_RECHARGE_ADD': '/moneyRecharge/moneyRechargeAdd',  //增加单个充值表
  'SYSTEM_ASSET_RECHARGE_SELECTZFB': '/moneyRecharge/selectZFB',  //根据ID获取支付宝账号
  'SYSTEM_ASSET_RECHARGE_UPDATEJE': '/moneyRecharge/updateJE',  //根据ID修改资产


  'SYSTEM_ASSET_WITHDRAW_LISTMEMBER': '/moneyWithdraw/ListBymemberPager',  //分页模糊查找提现表  用户用
  'SYSTEM_ASSET_WITHDRAW_LISTUSER': '/moneyWithdraw/ListByuserPager',  //分页模糊查找提现表  管理员用
  'SYSTEM_ASSET_WITHDRAW_DEL': '/moneyWithdraw/moneyWithdrawDel',  //根据ID删除提现表
  'SYSTEM_ASSET_WITHDRAW_ADD': '/moneyWithdraw/moneyWithdrawAdd',  //增加提现表
  'SYSTEM_ASSET_WITHDRAW_EDIT': '/moneyWithdraw/moneyWithdrawUpdate',  //根据ID修改单个提现表

  //会员模块

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


	'getFullPath': k => { //获得请求的完整地址，用于mockjs测试时使用
		return this.SERVER + this[k];
	}
}

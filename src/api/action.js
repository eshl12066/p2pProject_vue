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


  //业务模块
  'SYSTEM_TREE': '/sysPermission/selectTreeNode', //树菜单
  'SYSTEM_ASSET_RECHARGE_LISTALL': '/moneyRecharge/selectAll',  //分页模糊查找充值表
  'SYSTEM_ASSET_WITHDRAW_LISTALL': '/moneyWithdraw/selectAll',  //分页模糊查找充值表

  //投标模块
  'SYSTEM_BID_BIDQUERY': '/bid/bidQuery',//投资界面数据展示
  'SYSTEM_BID_SELECTONE': '/bid/selectOne',//投资界面，查询单个投资数据
  'SYSTEM_BID_BIDADD': '/bid/bidAdd',//进行投资

  //借款模块
  'SYSTEM_BIDREQUEST_INSERTBIDREQUEST': '/bidRequest/insertBidRequest',//进行借款

  //资产模块

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


  'getFullPath': k => { //获得请求的完整地址，用于mockjs测试时使用
    return this.SERVER + this[k];
  }
}

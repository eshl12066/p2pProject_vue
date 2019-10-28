import Vue from 'vue'
import Router from 'vue-router'

//管理员登陆界面
import ManageLogin from '@/views/management/home/ManageLogin'
//用户登陆注册界面
import ReceptionLogin from '@/views/reception/home/ReceptionLogin'
import ReceptionReg from '@/views/reception/home/ReceptionReg'

//1、后台界面
import ManageMent from '@/views/management/ManageMent'

//2、后台其他组件
//3、后台财务管理模块
//4、平台资金记录
import BackMoneyDetail from '@/views/management/financeManage/BackMoneyDetail'
//4、会员充值提现记录
import MemMoneyDetail from '@/views/management/financeManage/MemMoneyDetail'
//4、会员交易记录
import MemDealDetail from '@/views/management/financeManage/MemDealDetail'
//4、平台提现记录
import FinanceCheck from '@/views/management/financeManage/FinanceCheck'

//3、会员管理模块
//4、会员管理
import MemberManage from '@/views/management/memberManage/MemberManage'
//4、会员身份认证
import MembersfManage from '@/views/management/memberManage/MembersfManage'
//4、会员材料认证
import MemberclManage from '@/views/management/memberManage/MemberclManage'

//3、业务管理模块
//4、投资管理
import BidManage from '@/views/management/professionManage/BidManage'
//4、信用贷管理
import BidRequestCredit from '@/views/management/professionManage/BidRequestCredit'
//4、车贷管理
import BidRequestCar from '@/views/management/professionManage/BidRequestCar'
//4、房贷管理
import BidRequestHome from '@/views/management/professionManage/BidRequestHome'

//3、权限模块
//4、管理员管理
import UserManage from '@/views/management/sysManage/UserManage'
//4、角色管理
import RoleManage from '@/views/management/sysManage/RoleManage'
//4、登陆日记
import LoginManage from '@/views/management/sysManage/LoginManage'
//4、请求日记
import OpenManage from '@/views/management/sysManage/OpenManage'


//3、设置模块
//4、数据字典
import DictManage from '@/views/management/settingManage/DictManage'
//4、消息管理
import MessageManage from '@/views/management/settingManage/MessageManage'
//4、基础数据设置
import SettingManage from '@/views/management/settingManage/SettingManage'


//1、前台界面
import Reception from '@/views/reception/Reception'

//2、前台其他组件
//3、前台首页
//4、首页界面
import ReceptionHome from '@/views/reception/home/ReceptionHome'

//3、我要投资
//4、投资列表
import Bid from '@/views/reception/bid/Bid'
//4、进行投资界面
import Bidding from '@/views/reception/bid/Bidding'

//3、我要借贷
//4、借贷列表bidRequestCreditting
import BidRequest from '@/views/reception/bidRequest/BidRequest'
//4、信用贷  进行贷款  BidRequestCreditting
import BidRequestCreditting from '@/views/reception/bidRequest/BidRequestCreditting'

//3、会员中心
//4、会员中心首页（默认跳转到用户信息界面）
import UserCenter from '@/views/reception/userCenter/UserCenter'

//5、会员投资管理
import UserBid from '@/views/reception/userCenter/userBid/UserBid'

//5、会员借贷管理
import UserBidRequest from '@/views/reception/userCenter/userBidRequest/UserBidRequest'

//5、会员消息管理
import UserMessage from '@/views/reception/userCenter/userMessage/UserMessage'

// //5、会员账户管理
import UserAccount from '@/views/reception/userCenter/userAccount/UserAccount'
import Usercl from '@/views/reception/userCenter/userAccount/Usercl'
import Usersf from '@/views/reception/userCenter/userAccount/Usersf'
import UserDetail from '@/views/reception/userCenter/userAccount/UserDetail'


// //5、会员资产管理
import UserMoney from '@/views/reception/userCenter/userMoney/UserMoney'
import UserRecharge from '@/views/reception/userCenter/userMoney/UserRecharge'
import UserWithdraw from '@/views/reception/userCenter/userMoney/UserWithdraw'


Vue.use(Router)

export default new Router({
  routes: [{//管理员登陆
    path: '/ManageLogin',
    name: 'ManageLogin',
    component: ManageLogin

  },
    {//前台登陆
      path: '/ReceptionLogin',
      name: 'ReceptionLogin',
      component: ReceptionLogin

    },
    {//前台注册
      path: '/ReceptionReg',
      name: 'ReceptionReg',
      component: ReceptionReg

    }
    ,
    {//后台管理的主界面
      path: '/ManageMent',
      name: 'ManageMent',
      component: ManageMent,
      children: [{//资金管理
        path: '/financeManage/BackMoneyDetail',
        name: 'BackMoneyDetail',
        component: BackMoneyDetail
      },
        {
          path: '/financeManage/MemMoneyDetail',
          name: 'MemMoneyDetail',
          component: MemMoneyDetail
        },
        {
          path: '/financeManage/MemDealDetail',
          name: 'MemDealDetail',
          component: MemDealDetail
        }
        ,
        {
          path: '/financeManage/FinanceCheck',
          name: 'FinanceCheck',
          component: FinanceCheck
        }
        ,
        {//会员管理
          path: '/memberManage/MemberManage',
          name: 'MemberManage',
          component: MemberManage
        },
        {
          path: '/memberManage/MembersfManage',
          name: 'MembersfManage',
          component: MembersfManage
        }
        ,
        {
          path: '/memberManage/MemberclManage',
          name: 'MemberclManage',
          component: MemberclManage
        }
        ,
        {//业务管理
          path: '/professionManage/BidManage',
          name: 'BidManage',
          component: BidManage
        }
        ,
        {
          path: '/professionManage/BidRequestCredit',
          name: 'BidRequestCredit',
          component: BidRequestCredit
        },
        {
          path: '/professionManage/BidRequestCar',
          name: 'BidRequestCar',
          component: BidRequestCar
        }
        ,
        {
          path: '/professionManage/BidRequestHome',
          name: 'BidRequestHome',
          component: BidRequestHome
        }
        ,
        {//权限管理
          path: '/sysManage/UserManage',
          name: 'UserManage',
          component: UserManage
        }
        ,
        {
          path: '/sysManage/RoleManage',
          name: 'RoleManage',
          component: RoleManage
        },
        {
          path: '/sysManage/LoginManage',
          name: 'LoginManage',
          component: LoginManage
        }
        ,
        {
          path: '/sysManage/OpenManage',
          name: 'OpenManage',
          component: OpenManage
        }
        ,
        {//设置管理
          path: '/settingManage/DictManage',
          name: 'DictManage',
          component: DictManage
        },
        {
          path: '/settingManage/MessageManage',
          name: 'MessageManage',
          component: MessageManage
        }
        ,
        {
          path: '/settingManage/SettingManage',
          name: 'SettingManage',
          component: SettingManage
        }
      ]
    }
    ,
    {//前台的主界面
      path: '/',
      name: 'Reception',
      component: Reception,
      children: [{//首页载体
        path: '/reception/ReceptionHome',
        name: 'ReceptionHome',
        component: ReceptionHome
      },
        {//投资载体
          path: '/reception/Bid',
          name: 'Bid',
          component: Bid
        },
        {//正在投资载体
          path: '/reception/Bidding',
          name: 'Bidding',
          component: Bidding
        },
        {//借贷载体
          path: '/reception/BidRequest',
          name: 'BidRequest',
          component: BidRequest
        },
        {// 信用贷  信用贷贷款载体  bidRequestCreditting
          path: '/reception/BidRequestCreditting',
          name: 'BidRequestCreditting',
          component: BidRequestCreditting
        },
        {//用户中心载体
          path: '/reception/UserCenter',
          name: 'UserCenter',
          component: UserCenter,
          children: [{//会员中心下面的跳转组件(会员投资)
            path: '/reception/userCenter/UserBid',
            name: 'UserBid',
            component: UserBid
          },
            {//会员借贷
              path: '/reception/userCenter/UserBidRequest',
              name: 'UserBidRequest',
              component: UserBidRequest
            },
            {//会员信息
              path: '/reception/userCenter/UserMessage',
              name: 'UserMessage',
              component: UserMessage
            }
            ,
            {//会员账户
              path: '/reception/userCenter/UserAccount',
              name: 'UserAccount',
              component: UserAccount
            },
            {
              path: '/reception/userCenter/UserDetail',
              name: 'UserDetail',
              component: UserDetail
            }
            ,
            {
              path: '/reception/userCenter/Usersf',
              name: 'Usersf',
              component: Usersf
            },
            {
              path: '/reception/userCenter/Usercl',
              name: 'Usercl',
              component: Usercl
            }
            ,
            {//会员资产
              path: '/reception/userCenter/UserMoney',
              name: 'UserMoney',
              component: UserMoney
            },
            {
              path: '/reception/userCenter/UserRecharge',
              name: 'UserRecharge',
              component: UserRecharge
            }
            ,
            {
              path: '/reception/userCenter/UserWithdraw',
              name: 'UserWithdraw',
              component: UserWithdraw
            }

          ]
        }
      ]
    }

  ]
})

export default{
  //ll
  userManage:null,//管理员的实体(ll)
  userMembers:null,//前台登陆后的实体

  resturantName:'五星餐馆',
  uname:'张飞',
  jwt:null,
  verificationJwt:null,
  menus:[],
  options:[],  //存放tab页对象的容器（主要是路由路径以及tab页的名字）
  activeIndex:'',//被激活的tab页路由路径
  showName:'show',//tab页的标题
  role:'', //用来区分是否是因为左侧菜单被点击造成的路由路径发生改变；是：pass；不是：nopass

  //dj
  bidDetails:null,//投标界面，查询某一投标的详细信息
  bidCredit:null,//用户信用贷，申请信息
  computed: {
    bidDetails: function() {
      return this.$store.getters.bidDetails;
    }
  }


}

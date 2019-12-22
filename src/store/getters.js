export default{

  getUserManage:(state)=>{//会员登陆后的实体(ll)
    return state.userManage;
  },
  getUserMembers:(state)=>{//会员登陆后的实体(ll)
    return state.userMembers;
  },

  getResturantName:(state)=>{
    return "这是通过getters方法获取到的数："+state.resturantName;
  },
  getJwt:(state)=>{
    return state.jwt;
  }
  ,
  getVerificationJwt:(state)=>{
    return state.verificationJwt;
  },

  getMenus:(state)=>{
    return state.menus;
  },
  getShowName:(state) => {
    return state.showName;
  },
  getOptions:(state) => {
    return state.options;
  },
  getRole:(state) =>{
    return state.role;
  },
  getBidDetails:(state)=>{
    return state.bidDetails;
  },


}

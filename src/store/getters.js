export default{
  getResturantName:(state)=>{
    return "这是通过getters方法获取到的数："+state.resturantName;
  },
  getJwt:(state)=>{
    return state.jwt;
  },
  getMenus:(state)=>{
    return state.menus;
  }

}

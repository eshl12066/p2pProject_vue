export default{
  getResturantName:(state)=>{
    return "这是通过getters方法获取到的数："+state.resturantName;
  },
  getJwt:(state)=>{
    return state.jwt;
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
  }

}

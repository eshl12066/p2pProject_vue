export default{
  setResturantName:(state, payload)=>{
    state.resturantName = payload.resturantName;
  },
  setJwt:(state, payload)=>{
    state.jwt = payload.jwt;
  }
  ,
  setVerificationJwt:(state, payload)=>{
    state.verificationJwt = payload.verificationJwt;
  },
  setMenus:(state, payload)=>{
    state.menus = payload.menus;
  },
  // 添加tabs（data包含了路由路径跟tab页名字）
  add_tabs(state, data) {
    this.state.options.push(data);
  },
  // 删除tabs	（route是路由路径）
  delete_tabs(state, route) {
    let index = 0;
    for (let option of state.options) {
      if (option.route === route) {
        break;
      }
      index++;
    }
    this.state.options.splice(index, 1); //删除options里面下标为Index的一个数
  },
  // 设置当前激活的tab
  set_active_index(state, index) {
    this.state.activeIndex = index;
  },
  //设置tab页显示标题
  set_showName(state, name) {
    this.state.showName = name;
  },
  set_role(state, role) {
    this.state.role = role;
  }

}

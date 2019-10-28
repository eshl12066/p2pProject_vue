export default{
  setResturantName:(state, payload)=>{
    state.resturantName = payload.resturantName;
  },
  setJwt:(state, payload)=>{
    state.jwt = payload.jwt;
  },
  setMenus:(state, payload)=>{
    state.menus = payload.menus;
  },
  setVerificationJwt:(state, payload)=>{
    state.verificationJwt = payload.verificationJwt;
  }



}

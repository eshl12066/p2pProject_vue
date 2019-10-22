export default{
  setResturantNameByAsync:(state,payload)=>{
    console.log("aaa");
    setTimeout(()=>{
      console.log("bbb");
      state.commit('setResturantName',payload);
      // state.resturantName = payload.resturantName;//这个是没办法将state容器里面的值改变的
    },3000);
    console.log("ccc");
  },
  doAjax: (context, payload) => {
		let _this = payload._this
		let url = _this.axios.urls.SYSTEM_USER_DOLOGIN;
		_this.axios.post(url, {}).then((response)=> {
			console.log(response);
		}).catch(function(error) {
			console.log(error);
		});
	},

  doMenus:(state, payload) => {
    let _this = payload._this
    let url = _this.axios.urls.SYSTEM_MENU_TREE_LIST;

     _this.axios.post(url,{treeNodeId:payload.treeNodeId}).then((response)=>{
      console.log(response);
     _this.$store.commit('setMenus',{
        menus:response.data.result
      });
      console.log("改变后"+_this.$store.getters.getMenus);


    }).catch(function(error){
        console.log(error);
    });

  }

}

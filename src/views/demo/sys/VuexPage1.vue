<template>
  <div>
    <h3 style="margin: 60px;">第一个vuex界面title内容为:{{title}}</h3>
    <button @click="change">改变title值为四星餐馆</button>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        title:''
      }
    },
    created(){
        //1,直接通过访问state库里面的变量来获取变量值.
         this.title  = this.$store.state.resturantName;
        //2,通过引用getters里面写好的get方法来返回变量。
        // this.title = this.$store.getters.getResturantName;
    },
    methods: {
      change() {
         this.$store.commit('setResturantName',{
          resturantName:'四星餐馆'
        })
      }
    }


  }
</script>

<style>
</style>

<template>
  <div>
    <h3 style="margin: 60px;">第二个vuex界面title内容为:{{title}}</h3>
    <button @click="change">改变title值为四星餐馆</button>
    <button @click="changeAsync">四个月后改变为四星餐馆</button>
    <button @click="doAjax">doAjax</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    computed: {
      title() {
        //1,直接通过访问state库里面的变量来获取变量值.
        // return this.$store.state.resturantName;
        //2,通过引用getters里面写好的get方法来返回变量。
        return this.$store.getters.getResturantName;
      }
    },
    methods: {

      change() { //用同步方法调用(mutation)
        this.$store.commit('setResturantName', {
          resturantName: '用mutations改变的四星餐馆'
        })
      },
      changeAsync() { //用异步方法调用(actions)
        this.$store.dispatch('setResturantNameByAsync', {
          resturantName: '用actios改变的四星餐馆'
        })
      },
      doAjax() {
        this.$store.dispatch('doAjax', {
          _this: this
        })

      }

    }

  }
</script>

<style>
</style>

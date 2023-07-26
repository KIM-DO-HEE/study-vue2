<template>
<!-- vue2 버전은 루트 엘리먼트 div가 하나만 있어야한다 -->
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- 파스칼 케이스 -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- 케밥 기법 -->
    <!-- <hello-world></hello-world>  -->
    <div>
      <!-- {{ str }} -->
      <app-header v-bind:propsdata="str" v-on:renew = "renewStr"></app-header>
    </div>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/AppHeader.vue'

export default { // new vue({})
  name: 'App',
  components: {
    HelloWorld, // = 'hello-word' : HelloWorld 
    AppHeader
  },
  data : function(){
    return {
      str : 'Header(props)'
    }
  },
  methods : {
    renewStr : function(){
      this.str = 'hi'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

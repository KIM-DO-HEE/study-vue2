<template>
 <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username"> id : </label>
      <input id="username" type="text" v-model="username"> 
    </div>
    <div>
      <label for="password">password : </label>
      <input id="password" type="password" v-model="password" >
    </div>
    <button type="submit">login</button>
 </form>
</template>

<script>
// 브라우저에서 서버로 데이터 주고받기위한 라이브러리
import axios from 'axios'

export default {
  data : function(){
    return {
      username : '',
      password : ''
    }
  }, 
  methods : {
    submitForm : function(){
      // event.preventDefault() //새로고침 방지
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/users'
      var data = {
        username : this.username, 
        password : this.password
      }
      axios.post(url, data)
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error)
      })
    }
  }
}
</script>

<style>

</style>
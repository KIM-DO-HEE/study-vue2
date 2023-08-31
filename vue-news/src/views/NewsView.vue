<template>
  <div>
    <div v-for="user in users"> {{ user.title }}</div>
  </div>
</template>

<script>
// import { fetchNewsList } from '../api/index.js';
import axios from 'axios'

export default {
    data() {
        return {
            users : []
        }
        
    },
    created(){
        var vm = this;
        // fetchNewsList()
        // .then(response => {
        //     console.log('응답'+response)
        //     this.users = response.data
        // })
        // .catch(error => {
        //     console.log(error)
        // })
        axios.get('https://api.hnpwa.com/v0/news/1.json')
        .then(response => vm.users = response.data)
        .catch((error)=>{
            console.log(error)
        })
    }

}
</script>

<style>

</style>
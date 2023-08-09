<template>
  <div>
    <div v-for="ask in asks">{{ ask.title }}</div>
 </div>
</template>

<script>
import { fetchAskList } from '../api/index.js'
export default {
    data(){
        return {
            asks : []
        }
    },
    created(){
        console.log('호출 전' + this)
        var vm = this;
        fetchAskList()
        .then(response => {
            console.log('호출 후' + this)
            vm.asks = response.data;
        })
        .catch(error => {
            console.log(error)
        });
    }

}
</script>

<style>

</style>
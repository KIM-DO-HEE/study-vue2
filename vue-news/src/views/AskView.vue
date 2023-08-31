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
    // 컴포넌트 생성되자마자 들어가는 것
    // created , beforeMount에서 데이터 요청을 한다
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
<template>
  <div id="app">
      <TodoHeader></TodoHeader>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
      <TodoFooter></TodoFooter>
      
      <!-- event 발생하고 받는 부분은 store와 TodoInput과 연관있다 -->
      <!-- <TodoInput v-on:addTodoItem = "addOneItem"></TodoInput> -->
      <!-- <TodoList v-bind:propsdata = "todoItems"
        v-on:removeItem = "removeOneItem"
        v-on:toggleItem = "toggleOneItem"></TodoList>] -->
      <!-- <TodoList v-bind:propsdata = "todoItems"></TodoList> -->
      <!-- <TodoFooter v-on:clearAll = "clearAllItem"></TodoFooter> -->
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  // created(){
  //   if(localStorage.length > 0 ){
  //     for ( let i = 0; i < localStorage.length; i ++){
  //       console.log(JSON.parse(localStorage.getItem(localStorage.key(i))))
  //       this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
  //     }
  //   }
  // },
  // data(){
  //   return {
  //     todoItems : []
  //   }
  // },
  methods : {
    // ES6문법 - 향상된 객체 리터럴 문법
    //  addOneItem(todoItem){
    //   const obj = {completed : false, item : todoItem}
    //   console.log(todoItem)
    //   // 저장하는 로직
    //   // localStorage.setItem(this.newTodoItem, obj)
    //   localStorage.setItem(todoItem, JSON.stringify(obj))
    //   this.todoItems.push(obj)
    // },
    // removeOneItem(todoItem, index){
    //   console.log('삭제 데이터' + todoItem)
    //   localStorage.removeItem(todoItem.item);
    //   console.log('아이템' + todoItem.item)
    //   this.todoItems.splice(index, 1);
    // },
    // toggleOneItem(todoItem, index){
    //   console.log(todoItem)
    //   // todoItem.completed = !todoItem.completed;
    //   this.todoItems[index].completed = !this.todoItems[index].completed
    //   // 로컬 스토리지 데이터 갱신
    //   localStorage.removeItem(todoItem.item)
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    // },
    // clearAllItem(){
    //   localStorage.clear()
    //   this.todoItems = []
    // }
  },
  components : {
    // 컴포넌트 태그명 : 컴포넌트 내용
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
body{
  text-align:  center;
  background-color: #F6F6F6;
}

input {
  border-style : groove;
  width : 200px;
}

button{
  border-style: groove;
}

.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}


</style>

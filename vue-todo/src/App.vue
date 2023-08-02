<template>
  <div id="app">
      <TodoHeader></TodoHeader>
      <TodoInput v-on:addTodoItem = "addOneItem"></TodoInput>
      <TodoList v-bind:propsdata = "todoItems"
        v-on:removeItem = "removeOneItem"
        v-on:toggleItem = "toggleOneItem"></TodoList>
      <TodoFooter v-on:clearAll = "clearAllItem"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  created: function(){
    if(localStorage.length > 0 ){
      for ( var i = 0; i < localStorage.length; i ++){
        console.log(JSON.parse(localStorage.getItem(localStorage.key(i))))
        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
      }
    }
  },
  data : function(){
    return {
      todoItems : []
    }
  },
  methods : {
     addOneItem : function(todoItem){
      var obj = {completed : false, item : todoItem}
      console.log(todoItem)
      // 저장하는 로직
      // localStorage.setItem(this.newTodoItem, obj)
      localStorage.setItem(todoItem, JSON.stringify(obj))
      this.todoItems.push(obj)
    },
    removeOneItem : function(todoItem, index){
      console.log('삭제 데이터' + todoItem)
      localStorage.removeItem(todoItem.item);
      console.log('아이템' + todoItem.item)
      this.todoItems.splice(index, 1);
    },
    toggleOneItem : function(todoItem, index){
      console.log(todoItem)
      // todoItem.completed = !todoItem.completed;
      this.todoItems[index].completed = !this.todoItems[index].completed
      // 로컬 스토리지 데이터 갱신
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    clearAllItem : function(){
      localStorage.clear()
      this.todoItems = []
    }
  },
  components : {
    // 컴포넌트 태그명 : 컴포넌트 내용
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter
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

<template>
  <div>
     <transition-group name="list" tag="ul">
    <!-- <ul> -->
      <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
        <i class="fas fa-check checkBtn" v-bind:class="{checkBtnCompleted : todoItem.completed}"
            v-on:click="toggleComplete({ todoItem, index })"></i>
        <span v-bind:class="{textCompleted : todoItem.completed}"> {{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo({ todoItem, index })">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    <!-- </ul> -->
    </transition-group>

    <!-- {{ todoItems }} -->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default { 
  // props : ['propsdata'], store를 사용하기 때문에 props는 사용 X
  methods : {
    ...mapMutations({
      removeTodo : 'removeOneItem', // removeTodo 호출할 때 사용하는 인자를 암묵적으로 전달함
      toggleComplete : 'toggleOneItem'
    }),

    // removeTodo(todoItem, index){
    //   // this.$emit('removeItem', todoItem, index)
    //   // console.log(todoItem, index)
    //   // console.log('인덱스' + index)
    //   this.$store.commit('removeOneItem', { todoItem, index }) // 파라미터도 ES6 축약형으로 쓰임 => { todoItem : todoItem , index : index} 
    // },
    // toggleComplete(todoItem, index){
    //   // this.$emit('toggleItem', todoItem, index)
    //   console.log('인덱스' + index)
    //   this.$store.commit('toggleOneItem', { todoItem, index })
    // }
  },
  computed : {
    // todoItems(){
    //   return this.$store.getters.storedTodoItems
    // }
    ...mapGetters(['storedTodoItems'])
  }

}
</script>

<style scoped>
ul{
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}

li{
  display : flex;
  min-height: 50px;
  height :50px;
  line-height: 50px;
  margin : 0.5rem 0;
  padding : 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.checkBtn{
  line-height: 45px;
  color : #65acde ;
  margin-right : 5px;
}

.checkBtnCompleted{
  color : #b3adad;
}

.textCompleted{
  text-decoration: line-through;
  color: #b3adad;
}

.removeBtn{
  margin-left : auto;
  color : #de4343;
}

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to  {
  opacity: 0;
  transform: translateY(30px);
}

</style>



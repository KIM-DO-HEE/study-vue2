import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'

Vue.use(Vuex)

// const storage = {
//     fetch() {
//         const arr = [];
//         if(localStorage.length > 0 ) {
//             for ( let i = 0; i < localStorage.length; i ++){
//                 console.log(JSON.parse(localStorage.getItem(localStorage.key(i))))
//                 arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
//             }
//         }
//         return arr
//     },
// }

export const store = new Vuex.Store({

    // state : {
    //     todoItems : storage.fetch()
    // },

    modules: {
        todoApp : todoApp
    }
    
    // js로 분리 후
    // getters : getters,
    // mutations : mutations,

    // js로 분리 후
    // getters :{
    //     storedTodoItems(state){
    //         return state.todoItems
    //     }
    // },

    // mutations : {
        // addOneItem(state, todoItem){
        //     // console.log('recived')
        //     const obj = {completed : false, item : todoItem}
        //     console.log(todoItem)
        //     // 저장하는 로직
        //     // localStorage.setItem(this.newTodoItem, obj)
        //     localStorage.setItem(todoItem, JSON.stringify(obj))
        //     // this.todoItems.push(obj)
        //     state.todoItems.push(obj)
        // }, 
        // removeOneItem(state, payload){
        //     console.log('삭제 데이터' + JSON.stringify(payload.todoItem))
        //     localStorage.removeItem(payload.todoItem.item);
        //     console.log('아이템' + payload.todoItem.item)
        //     // this.todoItems.splice(index, 1)/
        //     state.todoItems.splice(payload.index, 1);
        // },
        // toggleOneItem(state, payload){
        //     console.log(payload.todoItem)
        //     // // todoItem.completed = !todoItem.completed;
        //     state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
        //     // // 로컬 스토리지 데이터 갱신
        //     localStorage.removeItem(payload.todoItem.item)
        //     localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
        // },
        //  clearAllItem(state){
        //     localStorage.clear()
        //     state.todoItems = []
        // }
    // }
});
const addOneItem  = (state, todoItem) => {
    // console.log('recived')
    const obj = {completed : false, item : todoItem}
    console.log(todoItem)
    // 저장하는 로직
    // localStorage.setItem(this.newTodoItem, obj)
    localStorage.setItem(todoItem, JSON.stringify(obj))
    // this.todoItems.push(obj)
    state.todoItems.push(obj)
}

const removeOneItem = (state, payload) => {
    console.log('삭제 데이터' + JSON.stringify(payload.todoItem))
    localStorage.removeItem(payload.todoItem.item);
    console.log('아이템' + payload.todoItem.item)
    // this.todoItems.splice(index, 1)/
    state.todoItems.splice(payload.index, 1);
}

const toggleOneItem = (state, payload) => {
    console.log(payload.todoItem)
    // // todoItem.completed = !todoItem.completed;
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
    // // 로컬 스토리지 데이터 갱신
    localStorage.removeItem(payload.todoItem.item)
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
}

const clearAllItem = (state) => {
    localStorage.clear()
    state.todoItems = []
}



export { addOneItem, removeOneItem, toggleOneItem, clearAllItem }
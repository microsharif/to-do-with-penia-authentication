import {ref, reactive} from 'vue';
import {defineStore} from 'pinia';


const todoStore = defineStore('todo', () =>{
    const todos = reactive([])

    const action = {
        add: (todo) => {
            todos.push(todo)
            localStorage.setItem('todos', todos )
            console.log(todos)
        }

    }

    return {todos, action};

})

export default todoStore
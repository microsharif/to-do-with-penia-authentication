import {ref, reactive} from 'vue';
import {defineStore} from 'pinia';


const todoStore = defineStore('todo', () =>{
    const todos = reactive([])

    const action = {
        getList: () => {
            todos.length = 0
            let todoList = JSON.parse(localStorage.getItem('todos'))
            if(todoList){
                Object.assign(todos, todoList)
            }
            //localStorage.removeItem("todos"); 
        },
        add: (todo) => {
            todos.push(todo)
            localStorage.setItem('todos', JSON.stringify(todos) )
        },
        update: () => {
            localStorage.setItem('todos', JSON.stringify(todos) )
        },
        delete: (index) => {
            todos.splice(index,1)
            localStorage.setItem('todos', JSON.stringify(todos) )
        }


    }

    return {todos, action};

})

export default todoStore
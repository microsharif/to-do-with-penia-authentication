<script setup>
import {ref,reactive,onMounted} from 'vue';
import authStore from '../store/authStore';
import todoStore from '../store/todoStore';

const auth = authStore();
const todoPstore = todoStore();
const warning = ref(false);


const todoItem = reactive({
  content:'',
  status: 'pending',
  isComplete: false,
})

const add = () => {
  if(!todoItem.content){
    warning.value = true
    return
  }
  todoItem.id = Date.now()
  todoPstore.action.add({...todoItem})
  warning.value = false
  todoItem.content = ''
}

onMounted(() => {
  todoPstore.action.getList()
})
</script>

<template>
  <div>
    <section class="greeting">
      <h2 class="title">
        What's up, {{ auth.user.email }}
      </h2>
    </section>

    <section class="create-todo">
      <h3>CREATE A TODO</h3>

      <form id="new-todo-form" @submit.prevent="add">
        <h4>What's on your todo list?</h4>
        <span v-show="warning" class="todo-warning">What's on your todo list?</span>
        <input 
          type="text" 
          name="content" 
          id="content" 
          placeholder="e.g. make a video"
          v-model="todoItem.content" />

        <input type="submit" value="Add todo" />
      </form>
    </section>

    <section class="todo-list">
      <h3>TODO LIST</h3>
      <div class="list" id="todo-list">
        <div v-for="(todo, index) in todoPstore.todos" :key="id"  :class="`todo-item ${todo.isComplete && 'done'}`">
          <label>
            <input @change.prevent="todoPstore.action.update()" type="checkbox" v-model="todo.isComplete" />
            <span :class="`bubble ${
							todo.isComplete 
								? 'business' 
								: 'personal'
						}`"></span>
          </label>

          <div class="todo-content">
            <p>{{ todo.content }}</p>
          </div>

          <div class="actions">
            <span class="todo-status">{{todo.isComplete ? 'Done' : 'Pending' }}</span>
            <button class="delete" @click.prevent="todoPstore.action.delete(index)">Delete</button>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
  
</style>

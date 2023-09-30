<script setup>
import {ref,reactive} from 'vue';
import todoStore from '../store/todoStore';
const todoPstore = todoStore();

const todoItem = reactive({
  content:'',
  status: 'pending',
  isComplete: false,
})

const add = () => {
  todoItem.id = Date.now()
  todoPstore.action.add({...todoItem})
  todoItem.content = ''
}
</script>

<template>
  <div>
    <section class="greeting">
      <h2 class="title">
        What's up, <input type="text" id="name" placeholder="Name here" v-model="name">
      </h2>
    </section>

    <section class="create-todo">
      <h3>CREATE A TODO</h3>

      <form id="new-todo-form" @submit.prevent="add">
        <h4>What's on your todo list?</h4>
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
        <div v-for="todo in todoPstore.todos" :key="id"  :class="`todo-item ${todo.isComplete && 'done'}`">
          <label>
            <input type="checkbox" v-model="todo.isComplete" />
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
            <button class="delete" @click="">Delete</button>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
  
</style>

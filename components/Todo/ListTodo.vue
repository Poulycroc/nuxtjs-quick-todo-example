<template>
  <div class="list-todo--component_wrapper">
    <ul class="list-items">
      <list-item-todo
        v-for="(todo, index) in todoListMap"
        :key="index"
        :index="index"
        :todo="todo"
      />
    </ul>
  </div>
</template>

<script>
import ListItemTodo from '~/components/Todo/ListItemTodo'

export default {
  name: 'ListTodoComponent',
  components: { ListItemTodo },
  props: {
    search: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    /**
     * @return {Array}
     */
    todoListMap() {
      const td = this.$store.getters['todo/todoList']
      if (this.search === null || this.search === '') return td
      return td.filter((item) => {
        return item.message.toLowerCase().includes(this.search.toLowerCase())
      })
    },
  },
}
</script>

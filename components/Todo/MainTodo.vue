<template>
  <el-card>
    <search-todo @change="handleSearchChange" />
    <list-todo :search="currSearch" />
  </el-card>
</template>

<script>
import ListTodo from '~/components/Todo/ListTodo'
import SearchTodo from '~/components/Todo/SearchTodo'

export default {
  name: 'MainTodoComponent',
  components: { ListTodo, SearchTodo },
  data() {
    return {
      currSearch: null,
    }
  },
  methods: {
    handleSearchChange(search) {
      this.currSearch = search
    },
  },
}
</script>

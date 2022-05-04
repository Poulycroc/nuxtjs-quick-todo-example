<template>
  <div class="search-todo--component_wrapper">
    <el-input v-model="search" placeholder="ex: 'coucou'" clearable />

    <el-button
      type="primary"
      :loading="isAddLoading"
      :disabled="isAddDisabled"
      @click="handleAddTodo"
    >
      Add
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'SearchTodoComponent',
  data() {
    return {
      search: null,
      isAddDisabled: false,
      isAddLoading: false,
    }
  },
  watch: {
    search: {
      handler(search) {
        this.$emit('change', search)
      },
      immediate: true,
    },
  },
  methods: {
    handleAddTodo() {
      console.log({ handleAddTodo: 'handleAddTodo' })
    },
  },
}
</script>

<style lang="scss" scoped>
.search-todo--component_wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .el-button {
    margin-left: 20px;
  }
}
</style>

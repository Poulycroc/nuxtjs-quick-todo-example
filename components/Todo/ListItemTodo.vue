<template>
  <li class="list-item-todo--component_wrapper">
    <el-card>
      <div class="list-item-content">
        <div class="left-side">
          <span v-if="!isEditMode" class="title">{{ todo.message }}</span>

          <el-input
            v-else
            v-model="todoEditPayload"
            placeholder="ex: 'buy a house'"
          />
        </div>

        <div v-if="isEditMode" class="actions">
          <el-button icon="el-icon-close" circle @click="cancelEditMode" />
          <el-button
            type="success"
            icon="el-icon-check"
            circle
            @click="handleEditTodoItemMessage"
          />
        </div>
        <div v-else class="actions">
          <el-button
            type="primary"
            icon="el-icon-edit"
            circle
            @click="toggleEditMode"
          />
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            @click="handleDeleteTodoItem"
          />
        </div>
      </div>
    </el-card>
  </li>
</template>

<script>
export default {
  name: 'ListItemTodoComponent',
  props: {
    todo: {
      type: Object,
      required: true,
      default: () => {},
    },
    index: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  data() {
    return {
      isEditMode: false,
      todoEditPayload: '',
    }
  },
  created() {
    this.todoEditPayload = this.todo.message
  },
  methods: {
    toggleEditMode() {
      this.isEditMode = !this.isEditMode
    },

    cancelEditMode() {
      this.todoEditPayload = this.todo.message
      this.toggleEditMode()
    },

    handleDeleteTodoItem() {
      this.$confirm('Ceci effacera le fichier. Continuer?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Annuler',
        type: 'warning',
      })
        .then(() => {
          this.$store.dispatch('todo/delTodoItem', this.index)
          this.$message({
            type: 'success',
            message: 'Fichier supprimé',
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: 'Suppression annulée',
          })
        })
    },

    handleEditTodoItemMessage() {
      this.$store.dispatch('todo/updateTodoItemMessage', {
        index: this.index,
        message: this.todoEditPayload,
      })
      this.isEditMode = false
    },
  },
}
</script>

<style lang="scss" scoped>
.list-item-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>

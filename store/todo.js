const state = () => ({
  todoList: [
    {
      message: 'coucou',
      status: 'done',
      order: 0,
    },
    {
      message: 'azdoabuzd',
      status: 'done',
      order: 1,
    },
    {
      message: 'coucazdpoazjdou',
      status: 'done',
      order: 2,
    },
    {
      message: 'couazdâpzdkcou',
      status: 'done',
      order: 3,
    },
  ],
})

const getters = {
  todoList: (state) => state.todoList,
}

const mutations = {
  DEL_TODO_ITEM(state, index) {
    state.todoList.splice(index, 1)
  },

  UPDATE_MESSAGE_TODO_ITEM(state, { index, message }) {
    state.todoList[index].message = message
  },
}

const actions = {
  delTodoItem({ commit }, index) {
    console.log({ index })
    commit('DEL_TODO_ITEM', index)
  },

  updateTodoItemMessage({ commit }, { index, message }) {
    commit('UPDATE_MESSAGE_TODO_ITEM', { index, message })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}

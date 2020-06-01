import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasksList: JSON.parse(localStorage.getItem('list')) || [],
  },
  mutations: {
    ADD_TASK(state, newTask) {
      state.tasksList = [newTask, ...state.tasksList];
      localStorage.setItem('list', JSON.stringify(state.tasksList));
    },

    CHANGE_TASK_STATU(state, index) {
      state.tasksList[index].isDone = !state.tasksList[index].isDone;
      localStorage.setItem('list', JSON.stringify(state.tasksList));
    },

    DELETE_TASK(state, index) {
      state.tasksList.splice(index, 1);
      localStorage.setItem('list', JSON.stringify(state.tasksList));
    },
  },
  actions: {
    addTask(context, newTask) {
      context.commit('ADD_TASK', newTask);
    },

    changeTaskStatu(context, taskContent) {
      const index = context.state.tasksList.findIndex(
        (el) => el.content === taskContent
      );
      context.commit('CHANGE_TASK_STATU', index);
    },

    deleteTask(context, taskContent) {
      const index = context.state.tasksList.findIndex(
        (el) => el.content === taskContent
      );
      context.commit('DELETE_TASK', index);
    },
  },
  modules: {},
});

<template>
  <form @submit="submit">
    <input type="text" placeholder="New task" v-model="newTask" />
    <input type="submit" value="add" :disabled="!(newTask.length > 0)" />
  </form>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      newTask: '',
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      this.$store.dispatch('addTask', { content: this.newTask, isDone: false });
      this.newTask = '';
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  margin: 30px 0;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

input {
  margin: 0 10px;

  &[type='text'] {
    height: 30px;
    width: 90%;
  }

  &[type='submit'] {
    cursor: pointer;
    border: none;
    border: 1px solid rgb(79, 193, 141);
    border-radius: 30px;
    padding: 10px 20px;
    color: rgb(79, 193, 141);
    background-color: white;

    &:disabled {
      cursor: default;
      opacity: 0.5;
    }
  }
}
</style>

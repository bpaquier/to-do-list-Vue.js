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

  min-width: 200px;
  max-width: 700px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    width: 50%;
  }
}

input {
  margin: 0 10px;

  &[type='text'] {
    border: none;
    border-radius: 30px;
    border: 1px solid grey;
    height: 30px;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;

    @media (min-width: 600px) {
      width: 80%;
      margin: 0;
    }
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

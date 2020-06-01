<template>
  <li :class="{ 'is-done': task.isDone }">
    <p>
      {{ task.content }}
    </p>
    <div>
      <Button
        :click="isDone"
        :content="task.isDone ? 'to do' : 'done'"
        class="taskStatuButton"
      />
      <Button
        :click="deleteTask"
        :content="'delete'"
        class="deleteTaskButton"
      />
    </div>
  </li>
</template>

<script>
import Button from './Button';

export default {
  name: 'ListItem',
  props: {
    task: {
      type: Object,
    },
  },
  components: {
    Button,
  },
  methods: {
    isDone() {
      this.$store.dispatch('changeTaskStatu', this.task.content);
    },
    deleteTask() {
      this.$store.dispatch('deleteTask', this.task.content);
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  & div {
    width: 30%;
    display: flex;
    justify-content: space-between;

    & .taskStatuButton {
      background-color: rgb(64, 185, 131);
    }
    & .deleteTaskButton {
      background-color: rgb(255, 102, 101);
    }
  }
  &.is-done {
    & p {
      text-decoration: line-through;
    }
    & div .taskStatuButton {
      background-color: white;
      color: rgb(64, 185, 131);
      border: 1px solid rgb(64, 185, 131);
    }
  }
}
</style>

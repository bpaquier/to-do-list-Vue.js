<template>
  <ul>
    <ListItem v-for="task in list" :key="task.content" :task="task" />
  </ul>
</template>

<script>
import ListItem from './../components/ListItem';
import { mapState } from 'vuex';

export default {
  name: 'List',
  computed: {
    ...mapState({
      list: 'tasksList',
    }),
  },
  components: {
    ListItem,
  },
};
</script>

<style lang="scss" scoped>
ul {
  width: 60%;
}
</style>

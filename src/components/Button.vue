<template>
  <button @click="click">
    {{ content }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    app: {
      type: Object,
    },
    content: {
      type: String,
    },
    click: {
      type: Function,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  padding: 10px 21px;
  color: white;
  border: 1px solid white;
  border-radius: 30px;
  cursor: pointer;
}
</style>

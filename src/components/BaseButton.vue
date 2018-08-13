<template>
  <button
    class="button"
    @click="$emit('click', $emit)"
  >
    {{ name }}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/util.scss';
.button {
  min-width: 150px;
  border: 0;
  border-radius: 20px;
  outline: none;
  padding: 10px;

  font-size: 16px;

  background-color: $color-skyblue;
  color:white;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s;
  }
}
</style>


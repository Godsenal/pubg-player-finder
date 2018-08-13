<template>
  <input
    class="input"
    :value="value"
    @input="handleInput($event.target.value)"
    @keyup.enter="$emit('enter')"
  />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: {
      type: String,
      required: true,
      default: '',
    },
  },
  methods: {
    handleInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/util';

.input {
  border: 0;
  outline: none;
  border-bottom: 1px solid $color-dark-gray;

  padding: 5px 0;
  font-size: 1.5rem;
}
</style>

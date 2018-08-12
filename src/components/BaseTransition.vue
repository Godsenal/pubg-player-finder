<template>
  <transition
    @before-enter="$emit('before-enter')"
    @enter="$emit('enter')"
    @after-enter="$emit('after-enter')"
    @enter-cancelled="$emit('enter-cancelled')"
    :name="type"
  >
    <slot v-if="mounted && active"/>
  </transition>
</template>

<script>
export default {
  name: 'BaseTransition',
  mounted() {
    this.mounted = true;
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      mounted: false,
    }
  }
}
</script>

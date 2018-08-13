<template>
  <div class="header">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/util.scss';
.header {
  color: white;
  background-color: $color-purple;

  height: 60px;
}
</style>


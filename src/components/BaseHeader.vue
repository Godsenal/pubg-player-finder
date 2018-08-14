<template>
  <div class="header">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/util.scss';
.header {
  color: $color-skyblue;

  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
}
</style>


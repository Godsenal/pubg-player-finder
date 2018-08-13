<template>
  <div class="container">
    <h1 class="header">404 Not Found</h1>
    <h3 class="sub-header">
      Back to Home
    </h3>
    <BaseButton name="Home" @click="$router.push('/')" />
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton';

export default {
  name: 'NotFoundPage',
  components: {
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/util.scss';

.container {
  margin-top: 10%;
  text-align: center;
}
.header {
  @include header(1);
}
.sub-header {
  @include header(3);
}
</style>

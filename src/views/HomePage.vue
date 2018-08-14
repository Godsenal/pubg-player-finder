<template>
  <div class="container">
    <BaseTransition type="fade" @after-enter="increaseTransition">
      <h1 class="header">Welcome to PUBG Player Finder!</h1>
    </BaseTransition>
    <BaseTransition type="fade" :active="transition >= 1" @after-enter="increaseTransition">
      <p class="paragraph">
        My First Vue Project.<br/>
        vuex and vue-router<br />
      </p>
    </BaseTransition>
    <BaseTransition type="fade" :active="transition >= 2" @after-enter="increaseTransition">
      <BaseButton name="Get Started!" @click="$router.push('/find')" />
    </BaseTransition>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton';
import BaseInput from '@/components/BaseInput';
import BaseTransition from '@/components/BaseTransition';

export default {
  name: 'HomePage',
  components: {
    BaseButton,
    BaseInput,
    BaseTransition,
  },
  data() {
    return {
      transition: 0,
      value: '',
      finder: '',
    };
  },
  methods: {
    increaseTransition() {
      this.transition = this.transition + 1;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/util.scss';
.container {
  margin-top: 10%;
}
.header {
  @include header(1);
}
.paragraph {
  font-size: 16px;
}
.input {
  width: 80%;
  padding: 10px;

  text-align: center;
}
</style>

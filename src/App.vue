<template>
  <div id="app">
    <BaseTransition type="fade">
      <HomePage v-if="route === 'home'" v-on:change-route="changeRoute" />
    </BaseTransition>
    <BaseTransition type="fade">
      <FindPage v-if="route === 'find'" />
    </BaseTransition>
  </div>
</template>

<script>
import HomePage from './views/HomePage';
import FindPage from './views/FindPage';
import BaseTransition from './components/BaseTransition';

export default {
  name: 'app',
  components: {
    HomePage,
    FindPage,
    BaseTransition,
  },
  data() {
    return {
      route: 'home',
    };
  },
  methods: {
    changeRoute(path) {
      this.route = path;
    },
  },
};
</script>

<style lang="scss">
@import './styles/index.scss';
</style>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div>
    <BaseHeader>
      <div class="navigation">
        <router-link
          class="navigation-item"
          v-for="(route, index) in navigations"
          :key="index"
          :to="route.path"
        >
          {{ route.name }}
        </router-link>
      </div>
    </BaseHeader>
    <div id="app">
      <BaseTransition type="fade">
        <router-view />
      </BaseTransition>
    </div>
  </div>
</template>

<script>
import { routes } from './router';
import HomePage from './views/HomePage';
import FindPage from './views/FindPage';
import BaseHeader from './components/BaseHeader';
import BaseTransition from './components/BaseTransition';

export default {
  name: 'app',
  components: {
    HomePage,
    FindPage,
    BaseHeader,
    BaseTransition,
  },
  data() {
    return {
      routes: 'home',
    };
  },
  methods: {
    changeRoute(path) {
      this.route = path;
    },
  },
  computed: {
    navigations() {
      return routes.filter(route => route.path !== '/*');
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/index.scss';
</style>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.navigation {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.navigation-item {
  margin-left: 10px;
}
</style>

<template>
  <div>
    <BaseHeader>
      <router-link
        to="/"
        class="navigation-item">
        <span class="logo">PUBG Finder</span>
      </router-link>
      <router-link
        exact
        class="navigation-item"
        v-for="(route, index) in navigations"
        :key="index"
        :to="route.path"
      >
        {{ route.name }}
      </router-link>
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
      const excludePath = ['/', '/*']; // Root and NotFound
      return routes.filter(route => !excludePath.some(path => path === route.path));
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/index.scss';
</style>

<style lang="scss" scoped>
@import '@/styles/util.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.logo {
  font-size: 1.5em;
  font-weight: 600;
  box-sizing: border-box;
  padding: 10px;
}
.navigation-item {
  position: relative;
  font-size: 1.2em;
  margin-left: 20px;
  color: $color-skyblue;
  text-decoration: none;
  opacity: 0.6;
  &:hover {
    opacity: 1;
    transition: opacity 0.3s;
  }
}
.router-link-active {
  opacity: 1;
}
</style>

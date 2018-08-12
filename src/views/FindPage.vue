<template>
<div>
  <div>
    <BaseInput class="input" v-auto-focus v-model="playerId" v-on:enter="handleEnter" />
  </div>
  <div class="result-container">
    <PlayerList v-if="searchStatus === 'SUCCESS'" :players="playerResults" />
    <BaseLoader v-else-if="searchStatus === 'WAITING'" />
    <div class="error-container" v-else-if="searchStatus === 'FAILURE'">
      <BaseTransition type="fade">
        <h3 class="error-message">{{ message }}</h3>
      </BaseTransition>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

import BaseInput from '../components/BaseInput';
import BaseLoader from '../components/BaseLoader';
import BaseTransition from '../components/BaseTransition';
import PlayerList from './layouts/PlayerList';

export default {
  name: 'FindPage',
  components: {
    BaseInput,
    BaseLoader,
    BaseTransition,
    PlayerList,
  },
  data() {
    return {
      playerId: '',
    }
  },
  computed: {
    ...mapState({
      searchStatus: state => state.player.status,
      searchKeyword: state => state.player.search.keyword,
      message: state => state.player.message,
    }),
    ...mapGetters('player', ['playerResults']),
  },
  methods: {
    ...mapActions('player', ['searchPlayer']),
    handleEnter() {
      this.searchPlayer({ keyword: this.playerId });
      this.playerId = '';
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/util';
.input {
  width: 80%;
  padding: 10px;
  
  text-align: center;
}
.result-container {
  min-height: 500px;
}
.error-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.error-message {
  @include header(3);
  color: $color-red;
}
</style>

<template>
  <div>
    <div v-if="players.length > 0">
      <transition-group appear class="list" name="fade" tag="ul">
        <li v-for="(player, index) in players" :key="index">
          {{ player.id }}
        </li>
      </transition-group>
    </div>
    <div v-else>
      Couldn't find anyone.
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerList",
  props: {
    players: {
      type: Array,
      default: [],
    },
  },
}
</script>

<style lang="scss" scoped>
.list {
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 20px;
    margin-top: 20px;
  }
}
</style>



<template>
  <div id="app">
    <ChocolateItem
      v-for="(chocolate, position) in chocolates" :key="position"
      :msg="chocolate.name"
      :position="position"/>
    <h1>State chocolates</h1>
    {{ state_chocolates }}
  </div>
</template>

<script>
import ChocolateItem from './components/ChocoItem.vue'

export default {
  name: 'App',
  components: {
    ChocolateItem
  },
  computed: {
    chocolates() {
      return this.$store.getters['getChocolates'];
    },
    state_chocolates() {
      return this.$store.state.chocolates;
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

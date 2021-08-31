<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div class="container">
    <!-- <starter-card></starter-card> -->
    <!-- <router-view name="feelings"></router-view> -->
    <!-- <feeling-btn></feeling-btn> -->
    <router-view></router-view>
  </div>
  
</template>

<script>
import StarterCard from './views/Cards/StarterCard.vue'
import FeelingBtn from './views/Cards/FeelingBtn.vue'
export default {
  components: {
    StarterCard,
    FeelingBtn
  }
}
</script>

<style lang="scss">

.container {
    display: flex;
    background-color: #a3a3a3;
    height: 100vh;
    width: 100%;
}
</style>

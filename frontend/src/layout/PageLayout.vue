<template>
  <div>
    <Menu class="menu"></Menu>
    <div id="contents">
      <NavBar></NavBar>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import Menu from '../components/Menu.vue';
import NavBar from '../components/NavBar.vue';

export default Vue.extend({
  name: 'PageLayout',
  components: {
    Menu,
    NavBar,
  },

  data: () => ({
    //
  }),
});
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .menu {
    display: none;
  }
  #contents {
    width: 100% !important;
  }
}

#contents {
  background-color: #f4f3ef;
  position: relative;
  z-index: 2;
  float: right;
  width: calc(100% - 15rem);
  min-height: 100%;
  overflow: auto;
}
</style>

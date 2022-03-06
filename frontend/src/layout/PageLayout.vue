<template>
  <div class="wrapper">
    <side-menu class="menu"></side-menu>
    <div id="contents">
      <nav-bar></nav-bar>
      <content-layout/>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import SideMenu from '../components/Menu.vue';
import NavBar from '../components/NavBar.vue';
import ContentLayout from '@/layout/ContentLayout.vue';

export default Vue.extend({
  name: 'PageLayout',
  components: {
    SideMenu,
    NavBar,
    ContentLayout
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

.wrapper {
    position: relative;
    top: 0;
    height: 100vh;
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

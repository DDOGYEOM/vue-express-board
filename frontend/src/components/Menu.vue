<template>
  <b-sidebar id="sidebar" width="15rem" visible no-slide no-header bg-variant="dark" text-variant="light">
    <div class="row mx-3 my-2 px-3 py-2 menu-title">
      <h5>Vue + express project</h5>
    </div>
    <div class="px-3 py-2">
      <b-list-group>
        <b-list-group-item style="background-color: rgba(255, 255, 255, 0); color: white; border: 0"> <router-link to="/board">게시판</router-link> </b-list-group-item>
        <b-list-group-item style="background-color: rgba(255, 255, 255, 0); color: white; border: 0"> <router-link to="/write">글쓰기</router-link> </b-list-group-item>
      </b-list-group>
      <!-- <ul>
          <li>
            <a href="/board">board</a>
          </li>
          <li>
            <a href="/login">login</a>
          </li>
        </ul> -->
    </div>
  </b-sidebar>
</template>

<script lang="ts">

import Vue from 'vue';
export default Vue.extend({
  name: 'Menu',
  data(): unknown {
    return {
    };
  },
});
</script>

<style>
.b-sidebar-outer {
  width: 15rem !important;
  height: 100% !important;
}
#sidebar {
  display: block !important;
}
.menu-title {
  border-bottom: 1px solid;
}
</style>

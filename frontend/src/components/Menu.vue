<template>
  <b-sidebar id="sidebar" width="15rem" visible no-header bg-variant="dark" text-variant="light">
    <div class="row mx-3 my-2 px-3 py-2 menu-title">
      <h5>Vue + express project</h5>
    </div>
    <div class="px-3 py-2">
      <b-list-group>
        <b-list-group-item style="background-color: rgba(255, 255, 255, 0); color: white; border: 0"> 게시판 </b-list-group-item>
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
export default {
  name: 'Menu',
  data(): unknown {
    return {};
  },
};
</script>

<style>
.b-sidebar-outer {
  width: 15rem !important;
  height: 100% !important;
}
.menu-title {
  border-bottom: 1px solid;
}
</style>

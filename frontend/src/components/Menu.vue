<template>
  <b-sidebar
    id="sidebar"
    width="15rem"
    visible
    no-slide
    no-header
    bg-variant="dark"
    text-variant="light"
  >
    <div class="row mx-3 my-2 px-3 py-2 menu-title">
      <h5>my project</h5>
    </div>
    <div class="px-3 py-2">
      <b-list-group>
        <b-list-group-item
          class="menu-list-item"
          :key="menu.id"
          v-for="menu in menuList"
          :to="menu.menuTo"
          v-bind:class="{ selected: isSelected(menu.id) }"
          @click="selected = menu.id"
        >
          <b>{{ menu.menuName }}</b>
        </b-list-group-item>
      </b-list-group>
    </div>
  </b-sidebar>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Menu',

  data: () => ({
    selected: 0,
    menuPath: '/board/list',
    menuList: [
      {
        id: 1,
        menuName: '글 리스트',
        menuTo: '/board/list',
      },
      {
        id: 2,
        menuName: '글 작성',
        menuTo: '/board/write',
      },
    ],
  }),

  mounted() {
    const menu = this.menuList.find((menu) => menu.menuTo === this.$route.path);
    this.selected = menu?.id as number;
  },

  methods: {
    isSelected(id: number): boolean {
      return id === this.selected;
    },
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

.menu-list-item {
  background-color: rgba(0, 0, 0, 0) !important;
  border: 0px !important;
  color: white !important;
}

.selected {
  color: rgb(69, 184, 140) !important;
}

.menu-list-item:hover {
  transition: 0.2s;
  color: rgb(98, 126, 109) !important;
}
</style>

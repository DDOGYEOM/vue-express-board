<template>
  <b-navbar
    class="px-2 py-3"
    style="
      background-color: #f4f3ef;
      border-bottom: 1.5px solid rgba(10, 10, 10, 0.3);
    "
  >
    <div class="container-fluid">
      <div class="left">
        <a class="navbar-brand" style="margin: auto" v-bind:href="routeName">{{
          routeName
        }}</a>
      </div>
      <div class="right d-flex justify-content-between px-2">
        <p>username</p>
        <a href="#">logout</a>
      </div>
    </div>
  </b-navbar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavBar",
  data(): unknown {
    return {};
  },
  computed: {
    routeName(): string {
      const name = this.$route.name as string;

      return this.capitalizeFirstLetter(name);
    },
  },
  methods: {
    capitalizeFirstLetter(string: string): string {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
});
</script>

<style>
.left {
  float: left;
}
.right {
  float: right;
}

p {
  margin-bottom: 0 !important;
  margin-right: 0.5rem !important;
}
</style>

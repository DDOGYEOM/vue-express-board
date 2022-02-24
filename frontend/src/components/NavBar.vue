<template>
  <b-navbar style="background-color: #f4f3ef; border-bottom: 1.5px solid rgba(10, 10, 10, 0.3)">
    <div class="container-fluid">
      <div class="left">
        <h3>Board</h3>
      </div>
      <div class="right d-flex justify-content-between px-2">
        <p>username</p>
        <a href="#">logout</a>
      </div>
    </div>
  </b-navbar>
</template>

<script lang="ts">
export default {
  name: 'NavBar',
  data(): unknown {
    return {};
  },
};
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

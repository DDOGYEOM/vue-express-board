<template>
  <div class="content">
    <div class="container-fluid">
        <transition name="fade" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </transition>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({});
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>

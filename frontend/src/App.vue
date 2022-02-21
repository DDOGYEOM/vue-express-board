<template>
  <v-app>
    <v-app-bar app color="indigo darken-1" dark>
      <div class="d-flex align-center">
        <span class="">dogyeom CRUD</span>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>

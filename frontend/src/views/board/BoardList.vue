<template>

    <b-table hover :items="items"></b-table>

    <!-- <b-button @click="deleteTest()" >삭제!</b-button> -->

</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'BoardList',
  data() {
    return {
      items: [{
      }],
    };
  },

  created() {
    this.getBoardList();    
  },

  methods: {
    async getBoardList() {
      try{
        const res = await this.$store.dispatch('board/loadBoardList');
        console.log(res.data.body);
        this.items = res.data.body;
      }catch (error) {
        console.log(error);
      }    
    },

    async deleteTest() {
      try {
        const idx = 3
        const res = await this.$store.dispatch('board/loadBoardById', {idx});
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  }
})
</script>

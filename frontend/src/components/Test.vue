<template>
  <div class="container">
    <p>dbTest</p>

    <!-- <b-table striped hover :items="items"></b-table> -->
  </div>
</template>
<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import { BoardModel } from '../service/board/model/BoardModel';

export default {
  name: 'Test',

  data(): unknown {
    return {
      items: Array<BoardModel>(),
    };
  },
  methods: {
    async handleBoardList() {
      const response = await this.setAndLoadBoardListData();
      this.items = response.data;
    },
    ...mapGetters('boardStore', ['getList']),
    ...mapActions('boardStore', ['setAndLoadBoardListData']),
  },
  created(): void {
    this.handleBoardList();
  },
  mounted() {
    console.log(this.items);
  },
};
</script>

<template>
  <b-card class="m-3" title="BoardList">
    <b-card-body>
      <b-table
        hover
        :items="items"
        :fields="fields"
        v-model="items"
        @row-clicked="moveToDetail"
      >
      </b-table>
    </b-card-body>
    <div class="px-3 row justify-content-end align-items-center">
      <div class="empty-space col-2"></div>
      <b-pagination
        class="col-8 my-auto"
        v-model="currentPage"
        :total-rows="totalCount"
        :per-page="perPage"
        align="center"
        @page-click="pageClick"
      ></b-pagination>
      <div class="button-space col-2">
        <b-button class="float-end" @click="moveToWrite()">글쓰기</b-button>
      </div>
    </div>
  </b-card>
</template>

<script lang="ts">
import { BoardModel } from '@/service/board/model/BoardModel';
import Vue from 'vue';

export default Vue.extend({
  name: 'BoardList',
  data() {
    return {
      items: [{}],
      fields: ['idx', 'title', 'writer', 'write_date'],
      currentPage: 1,
      totalCount: 0,
      perPage: 10,
    };
  },

  created() {
    this.getBoardList(this.currentPage);
  },

  methods: {
    async getBoardList(page: number) {
      try {
        var limit = 10;
        var offset = (page - 1) * limit;
        const res = await this.$store.dispatch('BoardModule/loadBoardList', {
          limit,
          offset,
        });
        this.totalCount = res.data.totalCount;
        this.items = res.data.body;
      } catch (error) {
        console.log(error);
      }
    },

    async moveToWrite() {
      this.$router.push('/board/write');
    },
    moveToDetail(item: BoardModel) {
      this.$router.push('/board/detail/' + item.idx);
    },

    pageClick(button: any, page: number) {
      this.currentPage = page;
      this.getBoardList(page);
    },
  },
});
</script>

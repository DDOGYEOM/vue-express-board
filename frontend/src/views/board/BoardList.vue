<template>
  <b-card class="m-3" title="BoardList">
    <b-card-body>
      <b-table hover :items="items" :fields="fields" v-model="items" @row-clicked="moveToDetail">
      </b-table>
    </b-card-body>
    <b-card-body>
      <b-button style="float: right" @click="moveToWrite()">글쓰기</b-button>
    </b-card-body>
  </b-card>
</template>

<script lang="ts">
import { BoardModel } from "@/service/board/model/BoardModel";
import Vue from "vue";

var board:BoardModel = {
  idx:0,
  title:'',
  writer:'',
  contents:'',
  writeDate:'',
  updateDate:'',
}
export default Vue.extend({
  name: "BoardList",
  data() {
    return {
      items: [ {} ],
      fields: ['idx','title','writer','write_date']
    };
  },

  created() {
    this.getBoardList();
  },

  methods: {
    async getBoardList() {
      try {
        const res = await this.$store.dispatch("BoardModule/loadBoardList");
        
        this.items = res.data.body;
      } catch (error) {
        console.log(error);
      }
    },

    async moveToWrite() {
       this.$router.push('/board/write');
    },
    moveToDetail(item:BoardModel) {
      this.$router.push('/board/detail/' + item.idx);
  }
  },
});
</script>

<template>
  <b-card class="m-3">
    <div class="info py-2 px-2 mx-3">
      <div class="info-left">
        <span>{{ board.title }}</span>
      </div>

      <div class="info-right">
        <span>{{ board.writer }}</span>
        <span style="margin-left: 5px">{{ board.updateDate }}</span>
      </div>
    </div>
    <b-card-body>
      <vue-editor
        class="editor"
        :disabled="true"
        :editor-toolbar="customToolbar"
        v-model="board.contents"
      />
    </b-card-body>
  </b-card>
</template>

<script lang="ts">
import { BoardModel } from '@/service/board/model/BoardModel';
import Vue from 'vue';
import { VueEditor } from 'vue2-editor';

const boardData: BoardModel = {
  idx: 0,
  title: '',
  writer: '',
  contents: '',
  writeDate: '',
  updateDate: 'aa',
};

export default Vue.extend({
  components: { VueEditor },
  name: 'BoardDetail',
  data() {
    return {
      board: boardData,
      customToolbar: [[]],
    };
  },

  mounted() {
    const idx = parseInt(this.$route.params.idx);
    console.log(idx);
    this.getBoard(idx);
  },

  methods: {
    async getBoard(idx: number) {
      try {
        const res = await this.$store.dispatch(
          'BoardModule/loadBoardById',
          idx
        );
        this.board = res.data.body;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>

<style>
.info {
  height: 5vh;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}

.info > div {
  line-height: 3vh;
}

.info-left {
  width: 70%;
  float: left;
  text-align: left;
}

.info-right {
  float: right;
  height: 30%;
  margin-right: 5px;
}

.editor {
  width: 100% !important;
  height: 100% !important;
}

.editor .ql-toolbar.ql-snow {
  padding: 0 !important;
  display: none !important;
}

.editor #quill-container {
  border: 0;
}
</style>

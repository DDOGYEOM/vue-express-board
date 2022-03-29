<template>
  <b-card style="background-color: #f4f3ef" class="m-3" title="글 작성">
    <b-card-body>
      <b-form-input
        style="margin-top:5px; "
        v-model="board.title"
        placeholder="제목을 작성하세요!"
        :state="titleState"
        ref="title"
      >
      </b-form-input>
      <b-form-invalid-feedback id="input-live-feedback" style="margin-bottom:20px;">
        {{msg}}
      </b-form-invalid-feedback>
      <vue-editor
        class="contents"
        v-model="board.contents"
        placeholder="글을 입력하세요!"
      />
    </b-card-body>
    <b-card-body>
      <b-button class="float-right" variant="dark" @click="btnWrite()">
        게시물 올리기</b-button
      >
    </b-card-body>
  </b-card>
</template>

<script lang="ts">
import { BoardAddModel } from "@/service/board/model/BoardModel";
import Vue, { VueConstructor } from "vue";
import { VueEditor } from "vue2-editor";

const boardInputData:BoardAddModel = {
      title: "",
      contents: "",
      writer: "admin1234",
} 

export default (
  Vue as VueConstructor<Vue & { $refs: { title: HTMLElement } }>).extend({
  components: { VueEditor },
  computed: {
    titleState() {
      if(this.board.title.trim() === '') {
        return false;
      }
      return this.board.title.length <= 30 ? true : false;
    },
  },

  data: () => ({
    board: boardInputData,
    msg:'제목은 공백이거나 30글자 이상은 안됩니다.',
  }),

  created() {
    if(this.$route.params.idx != undefined) {
       const idx = parseInt(this.$route.params.idx);
       this.getBoard(idx);   
    }
  },

  // mounted() {
  //   const idx = parseInt(this.$route.params.idx);
  //   console.log(idx);
  //   this.getBoard(idx);
  // },

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


    btnWrite() {
      if (this.board.title.trim() === "" ) {
        alert("제목을 입력하세요!");
        this.$refs.title.focus();
      }else {
        if(this.$route.params.idx != undefined) {
          this.updateBoard(parseInt(this.$route.params.idx), this.board);
        }else {
          this.addBoard(this.board);
        }
        
        this.$router.replace('/board/list');
      }
      
    },
    
    async updateBoard(idx: number,inputData:BoardAddModel) {
        console.log(inputData);
        try {
          await this.$store.dispatch("BoardModule/updateBoardById", { idx: idx, data: inputData } , {root: true});
        } catch (error) {
          console.log(error);
        }
    },
    

    async addBoard(inputData:BoardAddModel) {
      console.log(inputData);
      try {
        await this.$store.dispatch("BoardModule/addBoard", inputData, {root: true});
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>

<style>
.contents {
  background: #fff;
  margin-top: 1.5rem;
}

</style>

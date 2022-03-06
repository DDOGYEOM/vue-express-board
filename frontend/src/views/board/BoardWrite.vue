<template>

  <b-card style="background-color: #f4f3ef;" class="m-3" title="글 작성">
    <b-card-body>
       <b-form-input class="my-3" v-model="board.title" placeholder="제목을 작성하세요!" ref="title"></b-form-input>
      <vue-editor class="test" v-model="board.content" placeholder="글을 입력하세요!"/>
    </b-card-body>
    <b-card-body>
      <b-button class="float-right" variant="dark" @click="btnWrite()"> 게시물 올리기</b-button>
    </b-card-body>
    
  </b-card>

  
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import { VueEditor } from "vue2-editor";

export default (Vue as VueConstructor< Vue & { $refs: { title: HTMLElement; }; }>)
  .extend({
  components: { VueEditor },

  data: () => ({
    board: {
      title: '',
      content: '',
      writer: '',
    },


  }),

  watch: {
    // content: function(newContent:string) {
    //   console.log(this.content);
    // }
  },
   
  methods: {
    btnWrite(){
      if(this.board.title === '') {
        alert('제목을 입력하세요!');
        this.$refs.title.focus();
      }
      console.log(this.board);
    }
  }
});
</script>

<style>
  .test{
    background: #fff;
  }
</style>
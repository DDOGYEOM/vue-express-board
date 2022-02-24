<template>
  <b-container>
    <b-table hover :items="items"></b-table>
  </b-container>
</template>

<script lang="ts">
export default {
  name: 'BoardList',
  data(): unknown {
    return {
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 40, first_name: 'Thor', last_name: 'MacDonald' },
        { age: 29, first_name: 'Dick', last_name: 'Dunlap' },
      ],
    };
  },
};
</script>

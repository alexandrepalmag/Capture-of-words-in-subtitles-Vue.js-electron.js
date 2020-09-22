<template>
 <v-container fluid>
<div class="cards">
  <Card v-for="word in groupOfWords" :key="word.name" :name="word.name" :amount="word.amount" />
</div>
 </v-container>
</template>

<script>
import Card from './Card'

export default {
  components: { Card },
  data: function () {
    return{
      groupOfWords: [
          {name: 'Hello', amount:800},
          {name: 'Hello', amount:800},
          {name: 'Hello', amount:800},
          {name: 'Hello', amount:800},
          {name: 'Hello', amount:800},
      ]
    }
  },
};
</script>

<style>
.cards {
  display: flex;
  
}
</style>
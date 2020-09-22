<template>
  <v-container fluid>
    <v-fom>
      <v-file-input label="Select subtitles to be processed" prepend-icon="mdi-message-text" 
      append-icon="mdi-send"
      multiple chips v-model="files"
      @click:append-outer="accessSubtitles"></v-file-input>
    </v-fom>
    <div class="cards">
      <Card v-for="word in groupOfWords" :key="word.name" :name="word.name" :amount="word.amount" />
    </div>
  </v-container>
</template>

<script>
import Card from "./Card";

export default {
  components: { Card },
  data: function () {
    return {
      groupOfWords: [
        { name: "Hello", amount: 800 },
        { name: "Hello", amount: 800 },
        { name: "Hello", amount: 800 },
        { name: "Hello", amount: 800 },
        { name: "Hello", amount: 800 },
      ],
    };
  },
  methods: {
    accessSubtitles() {
      console.log(this.files);
    },
  },
};
</script>

<style>
.cards {
  display: flex;
}
</style>
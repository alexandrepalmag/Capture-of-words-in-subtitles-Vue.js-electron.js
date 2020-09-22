<template>
  <v-container fluid>
    <v-form>
      <v-file-input
      label="Select subtitles to be processed"
      prepend-icon="mdi-message-text" 
      append-icon="mdi-send"
      multiple chips
      @click:append="accessSubtitles"/>
    </v-form>
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
        { name: "Holliday", amount: 800 },
        { name: "Hi", amount: 500 },
        { name: "Helopslo", amount: 402 },
        { name: "Hikis", amount: 802 },
        { name: "Hello", amount: 128 },
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
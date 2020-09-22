<template>
  <v-container fluid>
    <v-form>
      <v-file-input
        label="Select subtitles to be processed"
        prepend-icon="mdi-message-text"
        append-icon="mdi-send"
        multiple
        chips
        @click:append="accessSubtitles"
      />
    </v-form>
    <div class="cards">
      <Card v-for="word in groupOfWords" :key="word.name" :name="word.name" :amount="word.amount" />
    </div>
  </v-container>
</template>

<script>
import { ipcRenderer } from "electron";
import Card from "./Card";

export default {
  components: { Card },
  data: function () {
    return {
      groupOfWords: [],
    };
  },
  methods: {
    accessSubtitles() {
      const paths = this.files.map(f => f.path)
      ipcRenderer.send("treatment-subtitles", paths);
      ipcRenderer.on("treatment-subtitles", (event, resp) => {
        this.accessSubtitles = resp;
      });
    },
  },
};
</script>

<style>
.cards {
  display: flex;
}
</style>
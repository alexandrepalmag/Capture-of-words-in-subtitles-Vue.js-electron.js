<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Most Popular Words</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "App",

  components: {
    Home,
  },
  data: () => ({}),
};
</script>

<template>
  <Header />
  <RouterView />
</template>

<script>
  import Header from "../components/Header.vue";
  //import Footer from "../components/Footer.vue";

  export default {
    components: {
      Header,
    },
  };
</script>

<style>
  @import "../style/reset.css";
  @import "../style/variables.css";
  @import "../style/fonts.css";
  @import "../style/style.css";
</style>

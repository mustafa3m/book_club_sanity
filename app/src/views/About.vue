<template>

<div v-if="loading === true">...</div>

  <div v-else class="about-content-txt">

    <h2>{{ result[0].about.title }}</h2>
    <p>{{result[0].about.description }}</p>

  </div>

</template>

<script>
  
  import query from "../groq/home.groq?raw";
  import viewMixin from "../mixins/viewMixin.js";

  export default {
    mixins: [viewMixin],
     data() {
      return {
     
      }
    },

    async created() {
      await this.sanityFetch(query, {
        type: "post",
      });
     
    },
  
  };
</script>

<style lang="css" scoped>
  .about-content-txt {
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }

  .about-content-txt h2 {
    margin-bottom: 2rem;
  }

  .about-content-txt p {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }
   @media screen and (max-width: 600px) {
     .about-content-txt {
       padding : 2rem;
     }

   }
</style>

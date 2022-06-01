<template>

  <main>

    <Intro />

    <div v-if="loading === true">...</div>

    <div v-else> <h2 class="title">Read ours books</h2> </div>

    <div class="article">

      <div v-for="article in result" :key="article" class="article-container">

        <img class="article-image" :src="article.image" alt="profile" />

        <h2>{{ article.title }}</h2>

        <h2 class="article-author">{{ article.author }}</h2>

        <p class="article-content">{{ article.description }}</p>

      </div>

    </div>

  </main>

  <Footer />
  
</template>

<script>
  import query from "../groq/home.groq?raw";
  import viewMixin from "../mixins/viewMixin.js";
  import Intro from "../components/Intro.vue";
  import Footer from "../components/Footer.vue";

  export default {
    components: {
      Intro,
      Footer,
    },
    mixins: [viewMixin],

    data() {
      return {
        result: [],
      }
    },
    

    /* fetch from sanity  */
    async created() {
      try {
         await this.sanityFetch(query, {
        type: "post",
      })
        
      } catch (error) {
        console.log(error);
        
      }
     

      this.metaTags({
        title: "Christiania book club",
      });
    },
  };
</script>

<style lang="css" scoped>

  .article-container {
    max-width: 800px;
    margin: 5rem 0 10rem 0;
    background: var(--color-white);
    width: 100%;
    padding: 4rem;
    box-shadow: var(--box-shadow);
    border-radius: 3px;
    margin-top: 2rem;
    margin-bottom: 5rem;
    border-radius: 0.3rem;
  }
  .article {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2rem;
  }
  .article-actions {
    padding: 0 5rem;
    margin-bottom: 5rem;
    border-radius: 0.3rem;
  }
  .article-image {
    height: 6rem;
    width: 6rem;
    max-width: 100%;
    border-radius: 50%;
    margin-top: -3rem;
  }
  div h2 {
    margin-top: 2rem;
    margin-bottom: 0;
  }

  .title {
    text-align: center;
    font-size: 3rem;
  }
  .article-author {
    color: var(--hint);
    margin-bottom: 3rem;
  }
  

  .article-content {
    max-width: 550px;
    white-space: pre-line;
  }
  .article-content p {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }
  
  .article-author {
    margin-top: 1rem;
  }

  .btn {
    margin-left: 1rem;
  }

  @media screen and (max-width: 600px) {
    .article {
      margin-top: 2rem;
      flex-direction: column;
    }
    .article-container {
      gap: 2rem;
      margin-top: 1rem;
    }
    .title {
      font-size: 1.2rem;
    }
    p {
      font-size: 1.9rem;
    }
  }
</style>

<template>
  <main>
    <Intro />

    <div v-if="loading === true">...</div>

    <div v-else><h2 class="title">Read ours books</h2></div>

    <div class="article">
      <div v-for="article in result" :key="article" class="article-container">
        <img class="article-image" :src="article.image" alt="profile" />
        <h2 class="article-title">{{ article.title }}</h2>
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
      return {};
    },

    /* fetch from sanity  */
    async created() {
      try {
        await this.sanityFetch(query, {
          type: "post",
        });
      } catch (error) {
        console.log(error);
      }

      this.metaTags({
        title: "Christiania Book club",
      });
    },
  };
</script>

<style lang="css" scoped>
  .article-container {
    max-width: 700px;
    margin: 1rem 0 3rem 0;
    background: var(--color-white);
    width: 100%;
    padding: 2rem;
    box-shadow: var(--box-shadow);
    border-radius: 3px;
  /*   margin-top: 2rem; */
    margin-bottom: 2rem;
    border-radius: 0.3rem;
  }

  .article {
    display: flex;
    flex-wrap:  wrap;
    flex-direction: row;
    gap: 6rem; 
    max-width: 100%;
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
    
  }
  .article-title {
    margin-top: 2rem;
    margin-bottom: 0;
    font-size: 1.4rem;
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
   /*  max-width: 550px; */
    white-space: pre-line;
  }
  .article-content p {
    font-size: 1rem;
    line-height: 1.8rem;
  }

  .article-author {
    margin-top: 1rem;
  }

  .btn {
    margin-left: 1rem;
  }

  div h2{
    margin-top: 2rem;
  }

  @media screen and (max-width: 600px) {
    .article {
       width: 100%;
      flex-direction: column;
      
    }
    .article-container {
      margin-bottom: 1rem;
      width: 100%;
      padding: 0 1rem;
    }
    .title {
      font-size: 1.2rem;
    }
    .article-title {
      font-size: 0.8rem;
    }
    .article-image {
      margin-top: 1rem ;

    }
    p {
      font-size: 1.9rem;
    }
     .article-content p {
    font-size: 1rem;
    line-height: 1rem;
  }
  }
</style>

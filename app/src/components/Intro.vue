<template>
  <div v-if="loading">Loading</div>
  <!-- den if hindre feil av bilde som kommer før loading -->

  <div v-else class="presentation">
    <div class="presentation-content-image">
      <img
        class="presentation-image"
        :src="result[0].intro.image"
        alt="Presentation image"
      />
    </div>

    <div class="presentation-content-txt">
      <h2 class="presentation-title">{{ result[0].intro.title }}</h2>
      <p>{{ result[0].intro.description }}</p>
    </div>
  </div>
</template>

<script>
  import sanity from "../sanity.js";
  import query from "../groq/home.groq?raw";
  import viewMixin from "../mixins/viewMixin.js";

  export default {
    mixins: [viewMixin],

    async created() {
      await this.sanityFetch(query, {
        type: "post",
      });
    },
  };
</script>

<style scoped>
  .presentation {
    display: flex;
    flex-flow: row nowrap;
  }
  .presentation-content-image {
    flex: 1;
  }
  .presentation-content-image .presentation-image {
    width: 100%;
  }

  .presentation-content-txt {
    flex: 1;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

    .presentation-title{
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  .presentation-content-txt p {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }

  @media screen and (max-width: 600px) {
    .presentation {
      flex-direction: column-reverse;
    }
    .presentation-content-image {
      min-height: 300px;
    }
    .presentation-content-txt {
      padding: 0;
    }
    .presentation-title {
      font-size:1rem;
    }
  }
</style>

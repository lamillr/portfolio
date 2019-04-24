<template>
  <nuxt-link :to="id" class="project-preview">
    <article>
      <div :style="{backgroundImage: 'url('+ image + ')'}" class="project-preview-thumbnail"></div>
      <div class="project-preview-content">
        <h1>{{ title }}</h1>
        <p>{{ excerpt }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: grey;
  }
  .project-preview {
    border-radius: 3px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, .5);
    width: 100%;
    margin: 1rem;
    height:20rem;
  }
  .project-preview-thumbnail {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 10rem;
  }
  .project-preview-content {
    text-align: center;
    padding: 1rem;
  }

  @media (min-width: 35rem){
    .project-preview {
      width:25rem;
    }
  }
</style>

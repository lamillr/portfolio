<template>
  <section class="container">
    <nuxt-link v-for="project in projects" :key="project.id" :to="project.id">
      <article class="project-preview">
        <div :style="{backgroundImage: project.thumbnailUrl}" class="project-preview-thumbnail"></div>
        <div class="project-preview-content">
          <h1>{{ project.title }}</h1>
          <p>{{ project.previewText }}</p>
        </div>
      </article>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [{
        title: 'Midday Ordering App',
        previewText: 'Built with Vue.js and Firebase',
        thumbnailUrl: 'https://images.app.goo.gl/Psiq14SD3zhCXKzm9',
        id: 'midday-ordering-app'
      },
      {
        title: 'Innovation Next Steps App',
        previewText: 'Built with Vue.js and Firebase',
        thumbnailUrl: 'https://images.app.goo.gl/Psiq14SD3zhCXKzm9',
        id: 'midday-ordering-app'
      }
      ]
    }
  }
}
</script>

<style>

</style>

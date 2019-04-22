<template>
  <section id="projects">
    <ProjectPreview
      v-for="project in projects"
      :id="project.id"
      :key="project.id"
      :title="project.title"
      :excerpt="project.previewText"
      :image="project.thumbnailUrl"
    />
  </section>
</template>

<script>
import ProjectPreview from '@/components/Projects/ProjectPreview'

export default {
  components: {
    ProjectPreview
  },

  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories', {
      version: 'draft',
      starts_with: 'work/'
    })
      .then((res) => {
        return {
          projects: res.data.stories.map((sp) => {
            return {
              id: sp.slug,
              title: sp.content.title,
              previewText: sp.content.summary,
              thumbnailUrl: sp.content.thumbnail
            }
          })
        }
      })
  }
}
</script>

<style scoped>

#projects {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
}

@media (min-width: 35rem) {
  #projects{
    flex-direction: row;
  }
}
</style>

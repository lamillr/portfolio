<template>
  <div id="container">
    <section class="intro">
      <Intro />
    </section>
    <div class="img-container">
      <img src="~/assets/code-laptop.jpg">
    </div>
    <section class="about">
      <About />
    </section>
    <h3>Selected Work</h3>
    <section class="projects">
      <ProjectPreview
        v-for="project in projects"
        :id="project.id"
        :key="project.id"
        :title="project.title"
        :excerpt="project.previewText"
        :image="project.thumbnailUrl"
      />
    </section>
  </div>
</template>

<script>
import ProjectPreview from '@/components/Projects/ProjectPreview'
import Intro from '@/components/Intro/Intro'
import About from '@/components/About/About'

export default {
  components: {
    ProjectPreview,
    Intro,
    About
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

#container {
  display: grid;
  grid-template-rows:50px 250px 250px 200px 200px 350px 150px 250px 250px 250px;
  grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 10px;
}
.intro {
  grid-row: 1/2;
  grid-column: 1/5;
}
.img-container{
  grid-row: 3/5;
  grid-column: 1/7;
}
img{
  object-fit: cover;
  height:100%;
  width:100%;
}
.about {
  grid-row:5 / 6;
  grid-column: 1 / 7;
  color:#464E47;
}
h3{
  grid-row: 7 / 8;
  grid-column: 1 / 4;
  color:#464E47;
  font-family: Lato;
  font-size:2em;
  margin-left: 2rem;
}

.projects {
  grid-row: 8 / 9;
  grid-column: 1/8;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(max-content, 200px));
}

@media (min-width: 35rem) {
  .projects{
    flex-direction: row;
  }
}
</style>

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
  grid-template-rows:200px 250px 250px 200px auto-fit 250px 20px 250px 250px 250px;
  grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
}
.intro {
  grid-row: 1/2;
  grid-column: 1 / 7;
}

.about {
  grid-row: 3/ 5;
  grid-column: 1/ 4;
  color:#464E47;
  align-self: center;
  justify-self: center;
}
@media screen  and (max-width:40em){
  body{
    font-size: 95%;
  }
}

.img-container{
  grid-row: 3/7;
  grid-column: 4 / 7;
  align-self: center;
  justify-self: center;
}
img{
  object-fit: contain;
  height:100%;
  width:100%;
}
h3{
  grid-row: 7 / 7;
  grid-column: 1 / 4;
  color:#464E47;
  font-family: Lato;
  font-size:2em;
  margin-left: 2rem;
}

.projects {
  grid-row: 8 / 9;
  grid-column: 1 / 8;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(max-content,300px));
}
</style>

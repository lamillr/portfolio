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
    <section class="info">
      <Footer />
    </section>
  </div>
</template>

<script>
import ProjectPreview from '@/components/Projects/ProjectPreview'
import Intro from '@/components/Intro/Intro'
import About from '@/components/About/About'
import Footer from '@/components/Footer/Footer'

export default {
  components: {
    ProjectPreview,
    Intro,
    About,
    Footer
  },

  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories', {
      version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
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
  grid-template-rows: 200px min-content min-content min-content 40vw repeat(3, min-content);
  grid-template-columns: minmax(6rem, 1fr) repeat(6, minmax(min-content, 14rem)) minmax(6rem, 1fr);
  grid-column-gap: 1rem;
}
.intro {
  grid-row: 1/2;
  grid-column: 1 / -1;
  align-self: center;
}

.about {
  grid-row: 3 / 6;
  grid-column: 1/ 5;
  color:#464E47;
  align-self: center;
  justify-self: center;
}
@media screen  and (max-width:40em){
  body{
    font-size: 80%;
  }
  .about {
    grid-column: 1 / -1;
    margin-right:1em;
  }
}

.img-container{
  grid-row: 3/7;
  grid-column: 6 / 10;
  align-self: center;
}
img{
  object-fit: contain;
  height:100%;
  width:100%;

}

@media screen  and (max-width:40em){
  .img-container{
    grid-row: 2;
    grid-column: 1/-1;
    margin-left: 2.5em;
    margin-bottom: 1em;
    margin-right: 1em;
  }
  img{
  object-fit: contain;
  height:100%;
  width:100%;

}
}
h3{
  grid-row: 7 / 7;
  grid-column: 1 / 4;
  color:#464E47;
  font-family: Lustria, serif;
  font-size:2em;
  margin-left: 2rem;
  margin-top:2rem;
}

.projects {
  grid-row: 8 / 9;
  grid-column: 1 / 8;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min-content,300px));
}

@media screen  and (max-width:40em){
  .projects{
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    padding: 1rem;
    margin-right: 1em;
  }
}
.info {
  grid-row: 10 /12;
  grid-column: 1 / -1;
}
@media screen  and (max-width:40em){
  .info {
    margin-right:1em;
  }
}
Footer {
  grid-row: 10/10;
   background: #f6f5f3;
}
</style>

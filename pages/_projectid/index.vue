<template>
  <div id="project" v-editable="blok">
    <div class="project-thumbnail" :style="{backgroundImage: 'url(' + image + ')'}"></div>
    <section class="project-content">
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
      <button><a href="https://github.com/lamillr/if-elif">App Here</a></button>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/work/' + context.params.projectId, {
        version: 'draft'
      })
      .then((res) => {
        console.log(res.data)
        return {
          blok: res.data.story.content,
          image: res.data.story.content.thumbnail,
          title: res.data.story.content.title,
          content: res.data.story.content.content,
          link: res.data.story.content.link.url
        }
      })
  },
  mounted() {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        window.location.reload()
      }
    })
  }
}
</script>

<style>
#project {
  color: gray;
}
.project-content{
  width: 80%;
  max-width: 500px;
  margin: auto;
  padding:20px;
}
.project-content p {
  white-space: pre-line;
}
.project-thumbnail {
  width:100%;
  height: 300px;
  background-size: cover;
  background-position: center;
}

</style>

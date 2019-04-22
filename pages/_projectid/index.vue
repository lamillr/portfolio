<template>
  <div id="project">
    <div class="project-thumbnail" :style="{backgroundImage: 'url(' + image + ')'}"></div>
    <section class="project-content">
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
      <a :href="link">{{ link }}</a>
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
        return {
          image: res.data.story.content.thumbnail,
          title: res.data.story.content.title,
          content: res.data.story.content.content,
          link: res.data.story.content.link.url
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

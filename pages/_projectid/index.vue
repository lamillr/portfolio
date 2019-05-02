<template>
  <div id="project" v-editable="blok">
    <div class="project-thumbnail" :style="{backgroundImage: 'url(' + image + ')'}"></div>
    <section class="project-content">
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
      <button><a :href="link">App Here</a></button>
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
  display:grid;
    grid-template-columns: 300px 600px 300px 300px;
    align-items: center;
  }
   .project-thumbnail {
    grid-column: 2/ 4;
    width:100%;
    height: 300px;
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
    margin: 0;
  }
  .project-content {
    grid-column: 2 / 4;
    width: 100%;
    margin: auto;
    padding:20px;
 }
.project-content p {
  grid-column: 2 / 3;
  white-space: pre-line;
  font-size: 1.5em;
  margin-top:1.5em;
}

@media screen and (max-width:40em) {
  #project {
    display:grid;
    grid-template-columns: 300px 300px;
  }
   .project-thumbnail {
    background-size: cover;
    background-repeat:no-repeat;
    grid-column: 1 / 2;
    margin-left: 20px;
  }
  .project-content {
    grid-column: 1 / 2;
  }
}
button {
display:inline-block;
padding:0.2em 1.45em;
margin:0.1em;
border:0.15em solid #CCCCCC;
box-sizing: border-box;
text-decoration:none;
font-family:'Lato',sans-serif;
font-weight:400;
color:#000000;
background-color:#CCCCCC;
text-align:center;
position:relative;
margin-top: 2em;
}
button:hover{
border-color:#7a7a7a;
}
button:active{
background-color:#999999;
}

button a {
  color: #464E47;
  text-decoration: none;
  font-family: Lato;
  font-size: 1.5em;
  margin-left: 2px;
}

</style>

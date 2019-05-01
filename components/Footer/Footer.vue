<template>
  <section class="seemore">
    <footer class="main-footer">
      <h3 class="more">
        See more work
      </h3>
      <ul class="more-links">
        <li class="more-link">
          <a href="https://github.com/lamillr?tab=repositories" class="fa-icon"><font-awesome-icon :icon="['fab', 'python']" size="3x" /></a>
        </li>
        <li class="more-link">
          <a href="https://github.com/lamillr?tab=repositories"><font-awesome-icon :icon="['fab', 'js']" size="3x" /></a>
        </li>
        <li class="more-link">
          <a href="https://github.com/lamillr?tab=repositories"><font-awesome-icon :icon="['fab', 'sass']" size="3x" /></a>
        </li>
        <li class="more-link">
          <a href="https://github.com/lamillr?tab=repositories"><font-awesome-icon :icon="['fab', 'css3']" size="3x" /></a>
        </li>
        <li class="more-link">
          <a href="https://github.com/lamillr?tab=repositories"><font-awesome-icon :icon="['fab', 'html5']" size="3x" /></a>
        </li>
      </ul>
      <section class="contact">
        <h3 class="more">
          Contact
        </h3>
        <ul class="footer-links">
          <li class="footer-link">
            <a href="https://www.linkedin.com/in/lisabmiller2080/"><font-awesome-icon :icon="['fab', 'linkedin']" size="3x" /></a>
          </li>
        </ul>
      </section>
      <section class="portfolio-info">
        <p>Portfolio built with Vue and Nuxt.js, Storyblok, a headless CMS, and Git.</p>
      </section>
    </footer>
  </section>
</template>

<style scoped>
.see-more{
  grid-column: 1 / -1;
  background: #f6f5f3;
}
  .main-footer {
    background: #f6f5f3;
    display: grid;
    grid-template-rows: 100px 100px 100px 100px 200px;
    grid-template-columns: 200px 200px 400px 600px 600px;
  }
  .more {
    grid-row: 1 / 1;
    grid-column: 1 / 4;
    font-family: Lustria, sans-serif;
    margin-left: 2em;
    font-size:2em;
    background: #f6f5f3;
  }
  .more-links{
    grid-row: 2 / 2;
    grid-column: 1 / 4;
    list-style: none;
    margin-left:2em;
    padding: 0;
    display: flex;
    justify-content: space-between;
    height: 100%;
    background: #f6f5f3;;
  }
  .more-link{
    margin-left: 2em;
  }

  .contact {
    grid-row: 4/4;
    background: #f6f5f3;
    display: grid;
    grid-template-columns: 50px 50px;
  }
 .footer-links{
   grid-row: 1 / 1;
   grid-column: 2 / 2;
   list-style: none;
  margin-left:1em;
  }

  a {
  color:#464E47;
  margin: 5px 5px;
  }
   a:hover ,
   a:active  {
    color:#568259;
  }

  .portfolio-info {
    grid-row: 3 /3;
    grid-column: 1 / -1;
    margin-left:2em;
    font-family: Lato, sans-serif;
    font-size:2em;
  }

 .name {
  grid-row: 3 / 3;
  margin-left: 2rem;
  }

  .h2-link a {
    color: #464E47;
    font-family: Lustria, sans-serif;
    text-decoration: none;
    font-size:80%;

}
  .name .h2-link a:hover,
  .name .h2-link a:active,
  .name .h2-link .nuxt-link-exact-active a {
   color: #568259;
}
</style>

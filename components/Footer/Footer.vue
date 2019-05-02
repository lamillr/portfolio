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
      <h3 class="cont">
        Contact
      </h3>
      <a href="https://github.com/lamillr?tab=repositories" class="contact-link"><font-awesome-icon :icon="['fab', 'linkedin']" size="3x" /></a>
      <a href="https://github.com/lamillr?tab=repositories" class="github-link"><font-awesome-icon :icon="['fab', 'github']" size="3x" /></a>
      <section class="portfolio-info">
        <p>Portfolio built with Vue.js and Nuxt.js, Storyblok, a headless CMS, and Git.</p>
      </section>
      <h3 class="thanks">
        Thank you
      </h3>
      <h3 class="foot-name">
        Lisa Miller
      </h3>
    </footer>
  </section>
</template>

<style scoped>
.see-more{
  grid-column: 1 / -1;
  background: #f6f5f3;
  color:#464E47;
  }
  .main-footer {
    display:grid;
    grid-template-rows: 100px 100px 50px 50px 50px 100px 100px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    margin-top: 1em;
  }
  .more {
    grid-row: 1 / 1;
    grid-column: 1 / 4;
    font-family: Lustria, sans-serif;
    margin-left: 2em;
    margin-top:1em;
    font-size:2em;
    color:#464E47;
  }
  .more-links{
    grid-row: 2 / 2;
    grid-column: 1 / 4 ;
    list-style: none;
    margin-left:3em;
    padding: 0;
    display: flex;
    height: 100%;
    color:#464E47;
  }
  .cont {
    grid-row: 3 /3;
    font-family: Lustria, sans-serif;
    margin-left: 2em;
    font-size:2em;
    color:#464E47;
  }
  .contact-link{
    grid-row: 4 / 4;
    grid-column: 1 / 2;
    margin-left:4em;
    margin-top: 0;
    margin-bottom: 0;
    padding:0;
  }
  .github-link{
    grid-row: 4 /4;
    grid-column: 1/2;
    margin-left:7em;
    margin-top: 0;
    margin-bottom: 0;
    padding:0;
  }

  .contact {
    grid-row: 1/3;
    grid-column: 3 / 4;
    margin-left: 2em;
   }
 .footer-links{
  list-style: none;
  margin-left:1em;
  }

  .footer-link{
    grid-column: 3 / 3;
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
    grid-row: 1 /2;
    grid-column: 3/ -1;
    margin-top: 1em;
    font-family: Lato, sans-serif;
    font-size:2em;
    color:#464E47;
    padding:0;
  }
  @media only screen and (min-width : 320px) and (max-width : 890px) {
  .portfolio-info{
    grid-row: 5/5;
    grid-column: 1 /1;
    font-size:1.5em;
    margin-left:2.5em;
  }
 }
 @media only screen and (min-width : 890px) and (max-width : 1300px) {
  .portfolio-info{
    grid-row: 1/3;
    grid-column: 2 /-1;
    font-size:1.5em;
  }
 }

  .thanks {
    grid-row: 2/ 3;
    grid-column: 3 / -1;
    font-family: Lustria, sans-serif;
    color:#464E47;
    font-size:2em;
    margin-top:2em;
    padding:0;
  }
  @media only screen and (min-width : 320px) and (max-width : 890px) {
  .thanks{
    grid-row: 6/6;
    grid-column: 1 / 1;
    margin-left:2em;
    padding:0;
  }
 }
 @media only screen and (min-width : 890px) and (max-width : 1300px) {
  .thanks{
    grid-row: 2/3;
    grid-column: 2 /-1;
    font-size:1.5em;
  }
 }

  .foot-name {
   grid-row: 4 / 5;
   grid-column: 3/ -1;
   font-family: Lustria, sans-serif;
   font-size:2em;
   color:#464E47;
   padding:0;
  }
  @media only screen and (min-width : 320px) and (max-width : 890px) {
  .foot-name{
    grid-row: 7/7;
    grid-column: 1 /1;
    margin-left:2em;
    padding:0;
  }
 }
 @media only screen and (min-width : 890px) and (max-width : 1300px) {
  .foot-name{
    grid-row: 4/5;
    grid-column: 2 /-1;
    font-size:1.5em;
  }
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

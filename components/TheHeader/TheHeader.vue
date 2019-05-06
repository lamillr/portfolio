<template>
  <header class="main-header">
    <h2 class="name">
      <nuxt-link to="/" tag="h2" class="h2-link">
        Lisa Miller
      </nuxt-link>
    </h2>
    <nav class="main-nav">
      <ul class="nav-links">
        <a href="https://github.com/lamillr?tab=repositories" class="fa-icon"><font-awesome-icon :icon="['fab', 'github']" size="2x" /></a>
        <a href="https://www.linkedin.com/in/lisabmiller2080/"><font-awesome-icon :icon="['fab', 'linkedin']" size="2x" /></a>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  .main-header {
    background: #FFF;
    height:4.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .main-nav {
    height:100%;
  }
  .nav-links{
    list-style: none;
    margin:0 20px;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
  }
  a {
  color:#464E47;
  margin: 5px 5px;
  }
   a:hover ,
   a:active  {
    color:#568259;
  }

 .name {
    margin-left: 2rem;
  }

  .h2-link {
    color: #464E47;
    font-family: Lustria, sans-serif;
    text-decoration: none;
    font-size:1.5em;

}
  .h2-link:hover,
  .h2-link:active,
  .h2-link .nuxt-link-exact-active{
   color: #568259;
}
  </style>

<template>
  <header class="main-header">
    <h2 class="name">
      Lisa Miller
    </h2>
    <nav class="main-nav">
      <ul class="nav-links">
        <nuxt-link to="/" tag="li" class="nav-link">
          <a>About</a>
        </nuxt-link>
        <nuxt-link to="/journal" tag="li" class="nav-link">
          <a>Journal</a>
        </nuxt-link>
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

  .name {
    margin-left: 2rem;
    font-family: Lustria, sans-serif;
    color: #464E47;
  }

  .main-nav {
    height:100%;
  }
  .nav-links{
    list-style: none;
    margin:0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
  }

  .nav-link {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    padding: 0.3rem;
  }
  .nav-link a{
    display: block;
    text-decoration: none;
    color: #464E47;
  }
  .nav-link a:hover,
  .nav-link a:active,
  .nav-link.nuxt-link-exact-active a {
   color: #568259;
   border-bottom: 3px solid #568259;
  }
 </style>

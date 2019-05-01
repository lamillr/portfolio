<template>
  <div>
    <TheHeader />
    <main class="main-content">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'
import Footer from '@/components/Footer/Footer'
export default {
  components: {
    TheHeader,
    Footer
  }
}
</script>

<style>
* {
 box-sizing:border-box;
}

body {
  font-family: Lato, sans-serif;
  background-color: #ffffff;
  margin: 0;
}
@media screen  and (max-width:40em){
  body{
    font-size: 75%;
  }
}

.main-content {
  margin-top: 3rem;
}
</style>

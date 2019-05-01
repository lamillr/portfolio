<template>
  <div>
    <TheHeader />
    <main class="main-content">
      <nuxt />
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'
export default {
  components: {
    TheHeader
  }
}
</script>

<style>
* {
 box-sizing:border-box;
 margin:0;
 padding:0;
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

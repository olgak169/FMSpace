<template>
  <main class="container container__home">
    <div class="home-content">
      <h1 class="heading-5">So, you want to travel to</h1>
      <h2 class="heading-1">Space</h2>
      <p class="text-p">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
    </div>
    <div class="home-cta">
      <router-link to="/destination" class="home-cta--btn">Explore</router-link>
    </div>
  </main>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  created() {
    document.body.classList.add('home-page-bg')
  },
  unmounted() {
    document.body.classList.remove('home-page-bg')
  }
}
</script>

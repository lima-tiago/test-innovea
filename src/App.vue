<script setup lang="ts">
import TheArticles from './components/TheArticles.vue'
</script>

<template>
  <header>
    <img alt="Innovea logo" class="logo" src="./assets/logo.png" height="125" />

    <div class="wrapper">
      <Hello />
    </div>
  </header>

  <main>
    <TheArticles />
  </main>
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  max-width: 100%;
  object-fit: contain;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    max-height: 100vh;
    position: sticky;
    top: 0;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

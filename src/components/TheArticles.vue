<script setup lang="ts">
import { ref, watchEffect, type Ref } from 'vue'
import { useArticlesStore } from '../stores/articles'

interface ArticlesInfo {
  id: string
  author: string
  title: string
  description: string
}

const { fetchArticles } = useArticlesStore()
const articles: Ref<ArticlesInfo[]> = ref([])

watchEffect(async () => {
  articles.value = await fetchArticles()
})
</script>

<template v-if="articles.length">
  <div v-for="(article, index) in articles" :key="index">
    <h1>{{ article?.title }}</h1>
    <p>{{ article?.description }}</p>
    <span>Author: {{ article?.author }}</span>
    <hr />
  </div>
</template>

<style lang="scss" scoped>
div {
  h1 {
    margin-bottom: 16px;
    color: #fff;
  }
  p {
    margin-bottom: 8px;
    color: #fff;
  }
  hr {
    margin: 16px 0;
  }
}
</style>

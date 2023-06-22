import { defineStore } from 'pinia'

export const useArticlesStore = defineStore('articles', () => {
  const fetchArticles: () => Promise<ArticlesInfo[]> = async () => {
    const params = new URLSearchParams({
      q: 'tesla',
      from: '2023-05-22',
      sortBy: 'publishedAt',
      apiKey: import.meta.env.VITE_API_KEY || ''
    })

    const data = await fetch(`${import.meta.env.VITE_API_URL}?${params}`).then((response) => {
      return response.json()
    })
    if (data.status === 'ok') {
      return data.articles
    }
    return []
  }

  return {
    fetchArticles
  }
})

interface ArticlesInfo {
  id: string
  author: string
  title: string
  description: string
}

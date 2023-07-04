import { useQuery } from 'react-query'

export function usePosts(limit: number) {
  return useQuery<Post[]>(
    ['posts', limit],
    async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      return await response.json()
    },
    {
      refetchOnWindowFocus: false
    }
  )
}

export interface Post {
  id: number
  title: string
  body: string
}

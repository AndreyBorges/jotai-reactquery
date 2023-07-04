import { useQuery } from 'react-query'

export function usePosts(limit: number) {
  return useQuery<Post[]>(
    'posts',
    async () =>
      await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`).then(res =>
        res.json()
      )
  )
}

export interface Post {
  id: number
  title: string
  body: string
}

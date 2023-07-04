import { useEffect, useState } from 'react'
import { usePosts } from './api'
import { useAtom } from 'jotai'
import { countAtom } from './store'

function App() {
  const [count, setCount] = useAtom(countAtom)
  const { data, isLoading, error, status } = usePosts(count)
  const [posts, setPosts] = useState(data)

  useEffect(() => {
    setPosts(data)
  }, [count, data])

  useEffect(() => {
    console.log({ count, data, posts })
  }, [count, data, posts])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error:{status} </div>
  }

  return (
    <div>
      {posts?.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
      <button onClick={() => setCount(count + 5)}>More +5</button>
      <button onClick={() => setCount(count - 5)}>Less -5</button>
    </div>
  )
}

export default App

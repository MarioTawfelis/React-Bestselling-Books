import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'






function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>

  )
}

function Book(props) {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => <h2>Image Placeholder</h2>
const Title = () => <h2>Title Placeholder</h2>
const Author = () => <h4>Author Placeholder</h4>

export default App

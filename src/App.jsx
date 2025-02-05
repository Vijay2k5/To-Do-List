import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import InputField from './components/InputField'
import ShowTask from './components/ShowTask'
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout />
    </>
  )
}

export default App

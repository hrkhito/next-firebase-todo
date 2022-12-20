import Head from 'next/head'
import Image from 'next/image'
import { AllTodos } from '../components/AllTodos'
import { InputTodo } from '../components/InputTodo'
import styles from '../styles/Home.module.css'

const Home = () => {

  return (
    <div>
      <InputTodo />
      <AllTodos />
    </div>
  )
}

export default Home

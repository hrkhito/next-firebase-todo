import Head from 'next/head'
import Image from 'next/image'
import { TodosGet } from '../components/TodosGet'
import { Form } from '../components/Form'
import styles from '../styles/Home.module.css'

const Home = () => {

  return (
    <div>
      <Form />
      <TodosGet />
    </div>
  )
}

export default Home

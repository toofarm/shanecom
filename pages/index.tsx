import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

// Components
import Layout from 'components/Layout'
import HeadStateful from 'components/HeadStateful'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeadStateful pageTitle='' />
      <Layout />
    </div>
  )
}

export default Home

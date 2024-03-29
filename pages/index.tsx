import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import dynamic from 'next/dynamic'

// const DynamicComponentWithNoSSR = dynamic(() =>
// import('../components/Header'),
// {ssr:false})

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  )
}

export default Home

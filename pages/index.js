import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import { useState } from 'react'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>
}

export default function Home({ allPostsData }) {
  const names = [ 'Cesar Miya', 'Vitor Sai', 'Graça Faustino']
  const [likes, setLikes] = useState(0)

  function handleClick() {
    setLikes(likes + 1)
  }
  
  return (
    <Layout home className="container">
      <Head>
      <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <section className={utilStyles.headingMd}>
          <p>Hello! Eu sou o Cesar Miya. Sou um engenheiro de software que estuda na Univesp SP</p>
          <p>
            (Este é o website de teste - construindo um site como esse no{' '}
            <a href="https://nextjs.org/learn"> tutorial Next.js</a>.)
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
         <h2 className={utilStyles.headingLg}>Blog</h2>
         <ul className={utilStyles.list}>
           {allPostsData.map(({ id, date, title }) => (
             <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
               <br />
               {id}
               <br />
               <small className={utilStyles.lightText}>
                 {date} 
                </small>
             </li>
           ))}
         </ul>
        </section>

        <section className="description">
          Get started by editing <code>pages/index.js</code>
        </section>

        <h1 className="title">
          {' '}
          <Link href={"/quiz/disastre"}>
            <a>Começar Quiz Disastre</a>
          </Link>
        </h1>

        <div>
          <Header title="PI Testando o Header 🚀" />
          <ul>
            {names.map(name => (
              <li key={name}>{name}</li>
            ))}
          </ul>

          <button onClick={handleClick}>Like ({likes})</button>

          
        </div>



      </main>

      

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

    </Layout>
  )
}

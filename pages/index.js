import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {  
  return (
    <Layout home>
      <Head>
        <title>Next - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Summary</h2>
      <p>I'm <u>Masfikul Alam</u> , a self-taught programmer having expertise in modern front-end technologies and a deep interest in JavaScript. I desire to work in the software industry with a good learning environment to grow my skills to the next level.</p>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link> <br />
              <small className={utilStyles.lightText}>{id} / {date}</small>
            </li>
          ))}
        </ul>
      </section>

      <h2>Portfolio</h2>
      <p>Visit <a href="https://masfikul-alam.web.app">my website</a> to see my projects.</p>
      
      <h2>Contact</h2>
      <a href="mailto:masfikalamfrp@gmail.com">Email</a>,{' '}
      <a href="https://github.com/masfikalam">Github</a>,{' '}
      <a href="https://linkedin.com/in/masfik-alam">Linkedin</a>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}
import Head from 'next/head';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { getAllPostIds, getPostData  } from '../../lib/posts';

export default function Post({ postData }) {

    return (
        <Layout>
            <Head>
                <title>Next - {postData.title}</title>
            </Head>

            <article>
              <h2 className={utilStyles.headingXl}>{postData.title}</h2>
              <small className={utilStyles.lightText}>{postData.id} / {postData.date}</small>
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}
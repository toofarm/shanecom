import type { NextPage } from 'next'
import { getAllContentByType, getContentBySlug } from './api/get_content'
import { EContentTypes, TIntro, TPost, TProject } from 'types'
import markdownToHtml from 'lib/markdownToHtml'
import shared_styles from '../styles/Content.module.scss'
import styles from 'styles/pages/Index.module.scss'

// Components
import Layout from 'components/Layout'
import HeadStateful from 'components/HeadStateful'
import PostStub from 'components/PostStub'
import Image from 'next/image'

// Types
type TProps = {
  intro: TIntro;
  projects: TProject[];
  posts: TPost[];
  content: string;
}

const Home: NextPage<TProps> = ({ intro, projects, posts, content }) => {
  return (
    <div>
      <HeadStateful pageTitle='' />
      <Layout>
        <div className={styles.intro_grid}>
          <div className={styles.profile_pic}>
            <div className={styles.profile_wrap}>
              <Image
                src='/uploads/2022_02_25_shaner_happy.jpeg'
                alt='Shane Made That'
                layout='fill'
                className={styles.hero}
              />
            </div>
            <ul className={styles.links}>
              <li>
                <a href={intro.linkedin_link} target='_blank' rel='noreferrer'>
                LinkedIn
                </a>
              </li>
              <li>
                <a href={intro.github_link} target='_blank' rel='noreferrer'>
                GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1>{intro.headline}</h1>
            <div 
              className={`${shared_styles.post_content} ${styles.custom_post_content}`} 
              dangerouslySetInnerHTML={{ __html : content }}></div>
          </div>
        </div>
        <div className={styles.lists}>
          <h2>Recent Posts</h2>
          {posts.map((post) => <PostStub stub={post} type={EContentTypes.POSTS} key={post.title} />)}
          <h2>Recent Projects</h2>
          {projects.map((project) => <PostStub stub={project} type={EContentTypes.PROJECTS} key={project.title} />)}
        </div>
      </Layout>
    </div>
  )
}

export const getStaticProps = async () => {
  const intro = getContentBySlug('intro_copy', 
    ['headline', 
      'linkedin_link', 
      'github_link', 
      'profile_photo',
      'content'],
    EContentTypes.INTRO)
  const content = await markdownToHtml(intro.content || '')

  let projects = 
    getAllContentByType(EContentTypes.PROJECTS, 
      ['tags', 
        'title',
        'featured_image', 
        'date_created',
        'slug'])

  let posts = 
      getAllContentByType(EContentTypes.POSTS, 
        ['tags', 
          'title',
          'featured_image', 
          'date_created',
          'slug'])

  projects = projects.slice(0, 3)
  posts = posts.slice(0, 3)

  return {
    props : {
      intro,
      projects,
      posts,
      content
    }
  }
}

export default Home

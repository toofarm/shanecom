import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { IContent, EContentTypes, TPost, TProject } from '../../types'


export const getSlugs = (type : EContentTypes) => {
  const contentUrl = join(
    process.cwd(), `_content/${type}`
  )
  return fs.readdirSync(contentUrl)
}

export const getContentBySlug = (
  slug: string,
  fields: string[] = [], 
  type : EContentTypes
) => {
  const contentUrl = join(
    process.cwd(), `_content/${type}`
  )
  const realSlug = slug.replace(
    /\.md$/,
    ''
  )
  const fullPath = join(
    contentUrl, `${realSlug}.md`
  )
  const fileContents = fs.readFileSync(
    fullPath, 'utf8'
  )
  const { data, content } = matter(fileContents)

  const items: IContent = {  
    date_created : ''
  }

  fields.forEach((field) => {
    if (field === 'slug') items[field] = realSlug
    if (field === 'content') items[field] = content
    // We do this so we can sort Jobs as if they were Posts/Projects
    if (field === 'start_date') {
      items[field] = data[field]
      items.date_created = data[field]
    }
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })
  return items
}

export function getSortedList<T> (
  list: T[], 
  param: string
):T[] {
  return list.sort((
    a, b
  ) => (a > b ? 1 : -1))
}

export const getAllContentByType = (
  type:EContentTypes = EContentTypes.POSTS, 
  fields: string[] = []
) => {
  const slugs = getSlugs(type)
  const posts = slugs
    .map((slug) => getContentBySlug(
      slug,
      fields,
      type
    ))
    .sort((
      postA, postB
    ) => (postA.date_created > postB.date_created ? -1 : 1))
  return posts
}

export const getAllContentByTag = (
  type:EContentTypes = EContentTypes.POSTS, 
  tag: string, 
  fields: string[] = []
) => {
  const slugs = getSlugs(type)
  const posts = slugs
    .map((slug) => getContentBySlug(
      slug,
      fields,
      type
    ))
    .filter((post: unknown): post is { tags: string[] } => {
      return typeof post === 'object' 
        && post !== null 
        && Array.isArray((post as { tags: unknown }).tags)
        && (post as { tags: string[] }).tags.includes(tag)
    })
  return posts
}


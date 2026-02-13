import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { IContent, EContentTypes, TTag } from '../../types'
import format from 'date-fns/format'

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
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }

    if (field === 'slug') items[field] = realSlug
    if (field === 'content') items[field] = content
    if (field === 'tags' && data.tags) {
      items[field] = data.tags.map((tag: { tag: string }) => {
        return getContentBySlug(
          tag.tag.split('/')[2].split('.')[0] as string,
          ['name', 'color', 'slug'],
          EContentTypes.TAGS
        )
      })
    }
    
    // We do this so we can sort Jobs as if they were Posts/Projects
    if (field === 'start_date') {
      items[field] = data[field]
      items.date_created = data[field]
    } else if (
      /^(date_)\w+/.test(field) && 
      typeof data[field] !== 'string') {
      items[field] = format(
        new Date(data.date_created), 'MMMM d, yyyy'
      )
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
    ) => (new Date(postA.date_created) > new Date(postB.date_created) ? -1 : 1))
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
        && (post as { tags: TTag[] }).tags.filter((t) => t.slug === tag).length > 0
    })
  return posts
}


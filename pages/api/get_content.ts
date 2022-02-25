import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { IContent, EContentTypes } from '../../types'


const getSlugs = (type : EContentTypes) => {
  const contentUrl = join(process.cwd(), `_content/${type}`)
  return fs.readdirSync(contentUrl)
}

export const getContentBySlug = (slug: string,
  fields: string[] = [], type : EContentTypes): IContent => {
  const contentUrl = join(process.cwd(), `_content/${type}`)
  const realSlug = slug.replace(/\.md$/,
    '')
  const fullPath = join(contentUrl, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
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

export const getAllContentByType = (type:EContentTypes = EContentTypes.POSTS, fields: string[] = []) => {
  const slugs = getSlugs(type)
  const posts = slugs
    .map((slug) => getContentBySlug(slug,
      fields,
      type))
    .sort((postA, postB) => (postA.date_created > postB.date_created ? -1 : 1))
  return posts
}

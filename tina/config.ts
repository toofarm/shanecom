import { defineConfig } from 'tinacms'

import { introFields } from './templates'
import { jobFields } from './templates'
import { postFields } from './templates'
import { projectFields } from './templates'
import { skillFields } from './templates'
import { tagFields } from './templates'

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main'

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  client: { skip: true },
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        format: 'md',
        label: 'Intro',
        name: 'intro',
        path: '_content/intro',
        match: {
          include: '**/*',
        },
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
          ...introFields(),
        ],
      },
      {
        format: 'md',
        label: 'Posts',
        name: 'posts',
        path: '_content/posts',
        match: {
          include: '**/*',
        },
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
          ...postFields(),
        ],
      },
      {
        format: 'md',
        label: 'Projects',
        name: 'projects',
        path: '_content/projects',
        match: {
          include: '**/*',
        },
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
          ...projectFields(),
        ],
      },
      {
        format: 'md',
        label: 'Jobs',
        name: 'jobs',
        path: '_content/jobs',
        match: {
          include: '**/*',
        },
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
          ...jobFields(),
        ],
      },
      {
        format: 'md',
        label: 'Skills',
        name: 'skills',
        path: '_content/skills',
        match: {
          include: '**/*',
        },
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
          ...skillFields(),
        ],
      },
      {
        format: 'md',
        label: 'Tags',
        name: 'tags',
        path: '_content/tags',
        match: {
          include: '**/*',
        },
        fields: [
          ...tagFields(),
        ],
      },
    ],
  },
})

import type { TinaField } from 'tinacms'
export function introFields() {
  return [
    {
      type: 'string',
      name: 'headline',
      label: 'Headline',
      required: true,
    },
    {
      type: 'string',
      name: 'linkedin_link',
      label: 'LinkedIn link',
      required: true,
    },
    {
      type: 'string',
      name: 'github_link',
      label: 'GitHub Link',
      required: true,
    },
    {
      type: 'image',
      name: 'profile_photo',
      label: 'Profile photo',
    },
  ] as TinaField[]
}
export function jobFields() {
  return [
    {
      type: 'string',
      name: 'title',
      label: 'Job title',
      required: true,
    },
    {
      type: 'string',
      name: 'company',
      label: 'Company',
      required: true,
    },
    {
      type: 'string',
      name: 'company_link',
      label: 'Company link',
      required: true,
    },
    {
      type: 'datetime',
      name: 'start_date',
      label: 'Start date',
      required: true,
    },
    {
      type: 'datetime',
      name: 'end_date',
      label: 'End date',
    },
    {
      type: 'string',
      name: 'description',
      label: 'Description',
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'image',
      name: 'logo',
      label: 'Company logo',
    },
    {
      type: 'string',
      name: 'tags',
      label: 'Tags',
      list: true,
    },
  ] as TinaField[]
}
export function postFields() {
  return [
    {
      type: 'object',
      name: 'tags',
      label: 'tags',
      list: true,
      fields: [
        {
          type: 'reference',
          label: 'Tag',
          name: 'tag',
          collections: ['tags'],
        },
      ],
    },
    {
      type: 'string',
      name: 'title',
      label: 'Post Title',
    },
    {
      type: 'string',
      name: 'sub_head',
      label: 'Post Sub-Head',
    },
    {
      type: 'image',
      name: 'featured_image',
      label: 'Featured Image',
    },
    {
      type: 'string',
      name: 'caption',
      label: 'Featured image caption',
    },
    {
      type: 'string',
      name: 'additional_images',
      label: 'Additional Images',
    },
    {
      type: 'datetime',
      name: 'date_created',
      label: 'Date created',
      required: true
    },
    {
      type: 'datetime',
      name: 'date_updated',
      label: 'Date updated',
    },
    {
      type: 'boolean',
      name: 'highlighted',
      label: 'Highlighted post',
    },
  ] as TinaField[]
}
export function projectFields() {
  return [
    {
      type: 'string',
      name: 'tags',
      label: 'tags',
      list: true,
    },
    {
      type: 'string',
      name: 'title',
      label: 'Project Title',
    },
    {
      type: 'string',
      name: 'sub_head',
      label: 'Project Sub-Head',
    },
    {
      type: 'image',
      name: 'featured_image',
      label: 'Featured Image',
    },
    {
      type: 'string',
      name: 'caption',
      label: 'Featured image caption',
    },
    {
      type: 'string',
      name: 'project_web_link',
      label: 'Project Web Link',
    },
    {
      type: 'string',
      name: 'project_repo_link',
      label: 'Project Repo Link',
    },
    {
      type: 'string',
      name: 'additional_images',
      label: 'additional_images',
      list: true,
    },
    {
      type: 'boolean',
      name: 'highlighted',
      label: 'Highlighted project',
    },
    {
      type: 'datetime',
      name: 'date_created',
      label: 'Date created',
      required: true,
    },
    {
      type: 'datetime',
      name: 'date_updated',
      label: 'Date updated',
    },
  ] as TinaField[]
}
export function skillFields() {
  return [
    {
      type: 'string',
      name: 'name',
      label: 'Name',
      required: true,
    },
    {
      type: 'number',
      name: 'years',
      label: 'Years\' experience',
      required: true,
    },
    {
      type: 'boolean',
      name: 'keySkill',
      label: 'Key Skill',
    },
    {
      type: 'image',
      name: 'logo',
      label: 'Logo',
    },
  ] as TinaField[]
}

export function tagFields() {
  return [
    {
      type: 'string',
      name: 'name',
      label: 'Name',
      required: true,
    },
    {
      type: 'string',
      name: 'color',
      label: 'Badge Color',
      required: true,
    },
  ] as TinaField[]
}

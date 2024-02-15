// INTERFACES

export interface IContent {
  [key: string]: unknown;
  content?: string;
  date_created: string;
  start_date?: string;
  years?: number;
  slug?: string;
  title?: string
}

// TYPES

export type TPost = {
  tags: string[],
  title: string;
  sub_head?: string;
  featured_image: string;
  caption?: string;
  additional_images?: string[],
  date_created: string;
  date_updated?: string;
  highlighted: boolean;
  slug: string;
}

export type TProject = {
  tags: string[];
  title: string;
  sub_head: string;
  date_created: string;
  featured_image: string;
  caption: string;
  project_web_link?: string;
  project_repo_link?: string;
  additional_images?: string[];
  highlighted: boolean;
  slug: string;
}

export type TJob = {
  title: string;
  company: string;
  company_logo: string;
  company_link: string;
  start_date: string;
  date_created: string;
  end_date?: string;
  description: string;
  tags: string[]
  logo: string;
}

export type TIntro = {
  headline: string;
  linkedin_link: string;
  github_link: string;
  profile_photo: string;
}

export type TSkill = {
  name: string;
  years: number;
  keySkill: boolean;
  logo: string
}

export type TTag = {
  name: string;
  color: string;
  slug: string;
}

export type TParams = {
  [key: string] : any
}

// ENUMS

export enum EThemes {
  DARK = 'darkTheme',
  LIGHT = 'lightTheme',
  SYSTEM = 'system'
}

export enum EContentTypes {
  POSTS = 'posts',
  PROJECTS = 'projects',
  JOBS = 'jobs',
  INTRO = 'intro',
  SKILLS = 'skills',
  TAGS = 'tags'
}
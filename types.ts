export interface IContent {
  [key: string]: unknown;
  content?: string;
  date_created: string;
  start_date?: string
}

export enum EContentTypes {
  POSTS = 'posts',
  PROJECTS = 'projects',
  JOBS = 'jobs',
  INTRO = 'intro'
}

export type TPost = {
  tags: string[],
  title: string;
  sub_head?: string;
  featured_image: string;
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

export enum EThemes {
  DARK = 'darkTheme',
  LIGHT = 'lightTheme'
}
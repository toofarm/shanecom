export interface IContent {
  [key: string]: unknown;
  content?: string;
  date_created: string;
}

export enum EContentTypes {
  POSTS = 'posts',
  PROJECTS = 'projects'
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
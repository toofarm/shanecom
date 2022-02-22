export interface IContent {
  [key: string]: unknown;
  content?: string;
  date: string;
}

export enum EContentTypes {
  POSTS = 'posts',
  PROJECTS = 'projects'
}

export type TPost = {
  tags: string[],
  post_title: string;
  post_sub_head?: string;
  featured_image: string;
  additional_images?: string[],
  date_created: string;
  date_updated?: string;
  highlighted_post: boolean;
}

export type TProject = {
  tags: string[];
  project_title: string;
  project_sub_head: string;
  featured_image: string;
  project_web_link?: string;
  project_repo_link?: string;
  additional_images?: string[];
  highlighted_project: boolean;
}
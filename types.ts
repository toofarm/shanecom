export interface IContent {
  [key: string]: unknown;
  content?: string;
  date: string;
}

export enum EContentTypes {
  POSTS = 'posts',
  PROJECTS = 'projects'
}
export interface IContent {
  [key: string]: unknown;
  content?: string;
  date: Date;
}

export enum EContentTypes {
  POSTS = 'posts',
  PROJECTS = 'projects'
}
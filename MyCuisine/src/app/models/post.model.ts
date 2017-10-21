import {UserComment} from './comment.model';

export class Post {
  title: string;
  content: string;
  category: PostCategory;
}

export enum PostCategory {
  food,
  cuisine,
  lifestyle
}

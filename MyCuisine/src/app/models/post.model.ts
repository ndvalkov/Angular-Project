import {UserComment} from './comment.model';

export class Post {
  author: string;
  title: string;
  content: string;
  category: PostCategory;
  imageUrl: string;
  comments: UserComment[];
}

export enum PostCategory {
  food,
  cuisine,
  lifestyle
}

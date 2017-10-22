export class Post {
  _id: string;
  title: string;
  author: string;
  content: string;
  category: PostCategory;
}

export enum PostCategory {
  food,
  cuisine,
  lifestyle
}

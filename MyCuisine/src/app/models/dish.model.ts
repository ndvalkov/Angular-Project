export class Dish {
  type: DishType;
  name: string;
  description: string;
  price: number;
}

export enum DishType {
  appetizer,
  mainCourse,
  dessert
}

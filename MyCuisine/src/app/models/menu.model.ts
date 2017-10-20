import {Dish} from './dish.model';

export class Menu {
  type: MenuType;
  appetizers: Dish[];
  mainCourses: Dish[];
  desserts: Dish[];
}

export enum MenuType {
  dinner,
  lunch,
  breakfast
}

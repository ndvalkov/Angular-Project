import { Pipe, PipeTransform } from '@angular/core';
import {PostCategory} from '../../models/post.model';

@Pipe({
  name: 'toPostCategory'
})
export class ToPostCategoryPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    return PostCategory[value];
  }
}

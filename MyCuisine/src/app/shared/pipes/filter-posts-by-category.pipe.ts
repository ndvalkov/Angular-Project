import {Pipe, PipeTransform} from '@angular/core';
import {Post, PostCategory} from '../../models/post.model';

@Pipe({
  name: 'filterPostsByCategory'
})
export class FilterPostsByCategoryPipe implements PipeTransform {

  transform(items: Post[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    const filterResult = items.filter(it => {
      const categoryStr = PostCategory[it.category];
      return categoryStr.toLowerCase().includes(searchText);
    });

    if (filterResult.length === 0) {
      return items;
    }

    return filterResult;
  }
}

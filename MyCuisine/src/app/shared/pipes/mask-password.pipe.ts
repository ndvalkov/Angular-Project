import { Pipe, PipeTransform } from '@angular/core';
import {UserData} from '../../models/user-data.model';

@Pipe({name: 'maskPassword'})
export class MaskPasswordPipe implements PipeTransform {
  transform(value: UserData): UserData {
    const count = value.password ? value.password.length : 0;
    value.password = '*'.repeat(count);
    return value;
  }
}

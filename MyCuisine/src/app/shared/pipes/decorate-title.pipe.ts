import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

// not working
// TODO: Try with Renderer2
@Pipe({
  name: 'decorateTitle'
})
export class DecorateTitlePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: string, target: string) {
    const title = target ? target.toLowerCase() : '';
    const newTitle = `<h3>${title}</h3>`;
    const decorated = value.replace(title, newTitle);
    return this.sanitizer.bypassSecurityTrustHtml(decorated);
  }
}

import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDecorateTitle]'
})
export class DecorateTitleDirective implements OnInit {
  constructor(public el: ElementRef, public renderer: Renderer2) {
  }

  @Input() appDecorateTitle: string;

  ngOnInit() {
    // Use renderer to render the element with styles
    /*`<h3 style="font-style: italic; color: ${this.appDecorateTitle};">myCuisine</h3>`*/
    const titleDecoration = this.renderer
      .createElement('h3');
    const text = this.renderer.createText('MyCuisine');
    this.renderer.appendChild(titleDecoration, text);
    this.renderer.setStyle(
      titleDecoration,
      'color',
      this.appDecorateTitle
    );
    this.renderer.appendChild(this.el.nativeElement, titleDecoration);
  }
}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.css']
})
export class SubheaderComponent implements OnInit {
  private _navItemTop: string;
  private _navItemMiddle: string;
  private _navItemBottom: string;
  middleHidden = true;
  bottomHidden = true;
  @Input() activePosition: number;
  @Input() searchPlaceholder = 'Search this website ...';

  get navItemTop(): string {
    return this._navItemTop;
  }

  @Input()
  set navItemTop(value: string) {
    this._navItemTop = value;
  }

  get navItemMiddle(): string {
    return this._navItemMiddle;
  }

  @Input()
  set navItemMiddle(value: string) {
    this.middleHidden = false;
    this._navItemMiddle = value;
  }

  get navItemBottom(): string {
    return this._navItemBottom;
  }

  @Input()
  set navItemBottom(value: string) {
    this.bottomHidden = false;
    this._navItemBottom = value;
  }

  constructor() {
  }

  ngOnInit() {
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private _price: number;
  private _name: string;
  private _description: string;


  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  constructor() {
  }

  ngOnInit() {
    this.price = 2.00;
    this.name = 'Steak';
    this.description = 'Some dish description';
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import {DataService} from '../services/data.service';
import {NotificationService} from '../services/notification.service';
import {Dish, DishType} from '../models/dish.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  dish: Dish = new Dish();
  @ViewChild('f') form: any;
  isLoading: boolean;
  options = {
    position: ['bottom', 'right'],
    timeOut: 2000,
    lastOnBottom: true
  };
  dishTypes: string[] = Object.keys(DishType)
    .map(key => DishType[key])
    .filter(value => typeof value === 'string') as string[];
  selectedType: string = this.dishTypes[0];

  constructor(private readonly dataService: DataService,
              private readonly notificationService: NotificationService) { }

  ngOnInit() {
  }

  onSubmit($event) {
    if (this.form.valid) {
      this.isLoading = true;

      this.dish.type = DishType[this.selectedType];
      console.log(this.dish);
      this.dataService
        .createDish(this.dish)
        .then(res => {
          this.isLoading = false;
          this.notificationService.showSuccess('Dish added successfully');
          this.form.reset();
        })
        .catch(err => {
          this.isLoading = false;
          this.notificationService.showError(err._body);
        });
    }
  }

  setDishType(category: string) {
    this.selectedType = category;
  }
}


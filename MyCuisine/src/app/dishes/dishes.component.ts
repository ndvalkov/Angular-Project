import { Component, OnInit } from '@angular/core';
import {Dish} from '../models/dish.model';
import {DataService} from '../services/data.service';
import {NotificationService} from '../services/notification.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  isLoading: boolean;
  options = {
    position: ['bottom', 'right'],
    timeOut: 1000,
    lastOnBottom: true
  };

  dishes: Dish[] = [];
  middleNavItem = 'All';

  constructor(private readonly dataService: DataService,
              private readonly notificationService: NotificationService) { }

  ngOnInit() {
    this.isLoading = true;

    this.dataService
      .getDishes()
      .then(res => {
        console.log(res);
        this.isLoading = false;
        this.dishes = res.reverse();
      })
      .catch(err => {
        this.isLoading = false;
        this.notificationService.showError(err._body);
      });
  }
}

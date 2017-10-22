import {Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoading: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.isLoading = true;
    this.dataService
      .getAllPosts()
      .then(posts => {
        this.isLoading = false;
      })
      .catch(err => {
        this.isLoading = false;
      });
  }
}

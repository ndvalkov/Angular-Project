import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

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
        console.log(posts);
        this.isLoading = false;
      })
      .catch(err => {
        console.log(err);
        this.isLoading = false;
      });
  }
}

import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/post.model';

@Component({
  selector: 'app-search-post',
  templateUrl: './search-post.component.html',
  styleUrls: ['./search-post.component.css']
})
export class SearchPostComponent implements OnInit {

  isLoading: boolean;
  options = {
    position: ['bottom', 'right'],
    timeOut: 1000,
    lastOnBottom: true
  };

  posts: Post[] = [];

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
  }
}

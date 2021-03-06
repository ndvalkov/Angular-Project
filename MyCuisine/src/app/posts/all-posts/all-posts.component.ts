import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../../services/notification.service';
import {DataService} from '../../services/data.service';
import {Post, PostCategory} from '../../models/post.model';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  isLoading: boolean;
  options = {
    position: ['bottom', 'right'],
    timeOut: 1000,
    lastOnBottom: true
  };

  posts: Post[] = [];
  categoryFilter = 'Category';
  categories: string[] = Object.keys(PostCategory)
    .map(key => PostCategory[key])
    .filter(value => typeof value === 'string') as string[];
  middleNavItem = 'All';

  constructor(private readonly dataService: DataService,
              private readonly notificationService: NotificationService) { }

  ngOnInit() {
      this.isLoading = true;

      this.dataService
        .getAllPosts()
        .then(res => {
          this.isLoading = false;
          this.posts = res;
        })
        .catch(err => {
          this.isLoading = false;
          this.notificationService.showError(err._body);
        });
  }

  onSearchQueryResult(res: any) {
    this.posts = res;
  }

  setCategory(category: string) {
    this.categoryFilter = category;
    this.middleNavItem = category;
  }
}

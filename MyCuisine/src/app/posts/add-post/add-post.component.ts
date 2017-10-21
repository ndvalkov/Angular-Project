import {Component, OnInit, ViewChild} from '@angular/core';
import {Post, PostCategory} from '../../models/post.model';
import {DataService} from '../../services/data.service';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  post: Post = new Post();
  @ViewChild('f') form: any;
  isLoading: boolean;
  options = {
    position: ['bottom', 'right'],
    timeOut: 2000,
    lastOnBottom: true
  };
  categories: string[] = Object.keys(PostCategory)
    .map(key => PostCategory[key])
    .filter(value => typeof value === 'string') as string[];
  selectedCategory: string = this.categories[0];

  constructor(private readonly dataService: DataService,
              private readonly notificationService: NotificationService) { }

  ngOnInit() {
  }

  onSubmit($event) {
    if (this.form.valid) {
      this.isLoading = true;

      this.post.category = PostCategory[this.selectedCategory];
      this.dataService
        .createPost(this.post)
        .then(res => {
          this.isLoading = false;
          this.notificationService.showSuccess('Post created successfully');
          this.form.reset();
        })
        .catch(err => {
          this.isLoading = false;
          this.notificationService.showError(err._body);
        });
    }
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }
}

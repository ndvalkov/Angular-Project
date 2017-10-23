import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {NotificationService} from '../../services/notification.service';
import {Subscription} from 'rxjs/Subscription';
import {Post, PostCategory} from '../../models/post.model';
import {UserComment} from '../../models/comment.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {
  isLoading: boolean;
  options = {
    position: ['bottom', 'right'],
    timeOut: 500,
    lastOnBottom: true
  };

  sub: Subscription;
  id: string;

  post: Post;
  comments: UserComment[] = [];
  category: string;

  constructor(private readonly dataService: DataService,
              private readonly notificationService: NotificationService,
              private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.isLoading = true;

      const getPostPromise = this.dataService.getPostById(this.id);
      const getCommentsPromise = this.dataService.getCommentsByPost(this.id);

      Promise.all([getPostPromise, getCommentsPromise])
        .then(res => {
          this.isLoading = false;
          this.post = res[0];
          this.category = this.post ? PostCategory[this.post.category] : 'No category';
          this.comments = res[1];
        })
        .catch(err => {
          this.isLoading = false;
          this.notificationService.showError(err._body);
        });
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  keyDownFunction($event: KeyboardEvent, text: string) {
    const ENTER_KEYCODE = 13;
    if ($event.keyCode === ENTER_KEYCODE) {
      // console.log(text);
      const userComment = new UserComment();
      userComment.comment = text;
      this.dataService
        .addCommentToPost(userComment, this.id)
        .then(res => {
          this.isLoading = false;
          this.notificationService.showSuccess('Comment added successfully');
        })
        .catch(err => {
          this.isLoading = false;
          this.notificationService.showError(err._body);
        });
    }
  }

  destroyed($event) {
    if ($event.type !== 'error') {
      // this.reloadPostPage();
      this.reloadComments();
    }
  }

  reloadComments() {
    this.isLoading = true;
    this.dataService.getCommentsByPost(this.id)
      .then(res => {
        this.isLoading = false;
        this.comments = res;
      })
      .catch(err => {
        this.isLoading = false;
        this.notificationService.showError(err._body);
      });
  }

  reloadPostPage() {
    const url = '/posts/' + this.id;
    // console.log(url);
    this.router.navigate([url]);
  }
}

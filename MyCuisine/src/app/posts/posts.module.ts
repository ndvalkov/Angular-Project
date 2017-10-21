import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostComponent} from './post/post.component';
import {CommentComponent} from './comment/comment.component';
import {AllPostsComponent} from './all-posts/all-posts.component';
import {SharedModule} from '../shared/shared.module';
import {PostsRoutingModule} from './posts-routing.module';
import { AddPostComponent } from './add-post/add-post.component';
import {FormsModule} from '@angular/forms';
import {SimpleNotificationsModule} from 'angular2-notifications/dist';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PostsRoutingModule,
    FormsModule,
    SimpleNotificationsModule
  ],
  declarations: [PostComponent, CommentComponent, AllPostsComponent, AddPostComponent]
})
export class PostsModule {
}

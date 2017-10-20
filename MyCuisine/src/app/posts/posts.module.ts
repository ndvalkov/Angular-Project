import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostComponent} from './post/post.component';
import {CommentComponent} from './comment/comment.component';
import {AllPostsComponent} from './all-posts/all-posts.component';
import {SharedModule} from '../shared/shared.module';
import {PostsRoutingModule} from './posts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PostsRoutingModule
  ],
  declarations: [PostComponent, CommentComponent, AllPostsComponent]
})
export class PostsModule {
}

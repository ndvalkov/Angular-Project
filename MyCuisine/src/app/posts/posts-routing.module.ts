import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllPostsComponent} from './all-posts/all-posts.component';
import {PostComponent} from './post/post.component';
import {AddPostComponent} from './add-post/add-post.component';
import {AuthGuardService} from '../services/auth-guard.service';
import {SearchComponent} from '../shared/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'add', component: AddPostComponent,  canActivate: [AuthGuardService]},
  { path: 'all', component: AllPostsComponent },
  { path: 'search', component: SearchComponent },
  { path: ':id', component: PostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }

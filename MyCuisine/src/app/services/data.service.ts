import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Dish} from '../models/dish.model';
import {Menu, MenuType} from '../models/menu.model';
import {Post} from '../models/post.model';
import {UserComment} from '../models/comment.model';
import {Http, Headers, RequestOptions} from '@angular/http';
import { URLSearchParams } from '@angular/http';

const USERNAME_KEY = 'signed-in-user-username';
const AUTH_KEY = 'signed-in-user-auth-key';

// TODO: Add base url to global config
const BASE_URL = 'http://localhost:3001';
const REGISTER_URL = BASE_URL + '/' + 'api/users';
const SIGNIN_URL = BASE_URL + '/' + 'api/users/auth';
const DISHES_URL = BASE_URL + '/' + 'api/dishes';
const RECOMMENDATIONS_URL = BASE_URL + '/' + 'api/recommendations';
const TESTIMONIALS_URL = BASE_URL + '/' + 'api/testimonials';
const MENUS_URL = BASE_URL + '/' + 'api/menus';
const POSTS_URL = BASE_URL + '/' + 'api/posts';
const POSTS_SEARCH_URL = BASE_URL + '/' + 'api/search/posts';
const COMMENTS_URL = BASE_URL + '/' + 'api/posts/comments';

@Injectable()
export class DataService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  register(user: User): Promise<any> {
    const reqUser = {
      username: user.username,
      passHash: (user.username + user.password).toString(),
    };

    const data = reqUser;

    return this.http.post(REGISTER_URL, JSON.stringify(data), {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        const regUser = resp.json().result;
        localStorage.setItem(USERNAME_KEY, regUser.username);
        localStorage.setItem(AUTH_KEY, regUser.authKey);
        return {
          username: regUser.username
        };
      });
  }

  signIn(user: User): Promise<any> {
    const reqUser = {
      username: user.username,
      passHash: (user.username + user.password).toString(),
    };

    const data = reqUser;

    return this.http.put(SIGNIN_URL, JSON.stringify(data), {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        const signedUser = resp.json().result;
        localStorage.setItem(USERNAME_KEY, signedUser.username);
        localStorage.setItem(AUTH_KEY, signedUser.authKey);
        return signedUser;
      });
  }

  signOut(): Promise<any> {
    return Promise.resolve()
      .then(() => {
        localStorage.removeItem(USERNAME_KEY);
        localStorage.removeItem(AUTH_KEY);
      });
  }

  hasUser() {
    return !!localStorage.getItem(USERNAME_KEY) &&
      !!localStorage.getItem(AUTH_KEY);
  }

  getUser(): string {
    return localStorage.getItem(USERNAME_KEY);
  }

  isAdmin(): boolean {
    // TODO: Implement server-side check
    return this.getUser() === 'niki';
  }

  getDishes(): Promise<any> {
    return this.http.get(DISHES_URL, {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        return resp.json().result;
      });
  }

  getRecommendations(): Promise<any> {
    return this.http.get(RECOMMENDATIONS_URL, {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        return resp.json().result;
      });
  }

  getTestimonials(): Promise<any> {
    return this.http.get(TESTIMONIALS_URL, {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        return resp.json().result;
      });
  }

  createDish(dish: Dish): Promise<any> {
    const data = dish;
    return this.http.post(DISHES_URL, JSON.stringify(data), {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        return resp.json();
      });
  }

  getMenus(): Promise<any> {
    return this.http.get(MENUS_URL, {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        return resp.json().result;
      });
  }

  getMenusByType(type: MenuType): Promise<any> {
    const url = MENUS_URL + '/' + type;
    return this.http.get(url, {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        return resp.json().result;
      });
  }

  createMenu(menu: Menu): Promise<any> {
    const data = menu;
    return this.http.post(MENUS_URL, JSON.stringify(data), {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        return resp.json().result;
      });
  }

  getAllPosts(): Promise<any> {
    return this.http.get(POSTS_URL, {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        return resp.json().result;
      });
  }

  getAllComments(): Promise<any> {
    return this.http.get(COMMENTS_URL, {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        return resp.json().result;
      });
  }

  getPostById(id: string): Promise<any> {
    const url = POSTS_URL + '/' + id;
    return this.http.get(url, {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        return resp.json().result;
      });
  }

  createPost(post: Post): Promise<any> {
    const data = post;
    return this.http.post(POSTS_URL, JSON.stringify(data), {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        return resp.json().result;
      });
  }

  getCommentsByPost(postId: string): Promise<any> {
    const url = POSTS_URL + '/' + postId + '/comments';
    return this.http.get(url, {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        return resp.json().result;
      });
  }

  addCommentToPost(comment: UserComment, postId: string): Promise<any> {
    const data = comment;
    const url = POSTS_URL + '/' + postId + '/comments';
    return this.http.post(url, JSON.stringify(data), {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        return resp.json().result;
      });
  }

  // TODO: Works correctly, need to fix server->search by more than one word bug
  searchPosts(query: string): Promise<any> {
    const myParams  = new URLSearchParams();
    myParams.append('t', query);
    const options = new RequestOptions({ params: myParams });

    // const params = new URLSearchParams();
    // params.set('t', query);
    //
    // const data = {
    //   query: params
    // };

    return this.http.get(POSTS_SEARCH_URL, options)
      .toPromise()
      .then(resp => {
        return resp.json().result;
      });
  }
}

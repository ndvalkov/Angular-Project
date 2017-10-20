import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Dish} from '../models/dish.model';
import {Menu, MenuType} from '../models/menu.model';
import {Post} from '../models/post.model';
import {UserComment} from '../models/comment.model';
import {Http, Headers} from '@angular/http';

const USERNAME_KEY = 'signed-in-user-username';
const AUTH_KEY = 'signed-in-user-auth-key';

const REGISTER_URL = 'api/users';
const SIGNIN_URL = 'api/users/auth';
const DISHES_URL = 'api/dishes';
const MENUS_URL = 'api/menus';
const POSTS_URL = 'api/posts';
const POSTS_SEARCH_URL = 'api/search/posts';
const COMMENTS_URL = 'api/posts/comments';

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

    const data = {data: reqUser};

    return this.http.post(REGISTER_URL, JSON.stringify(data), {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        const regUser = resp.json();
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

    const data = {data: reqUser};

    return this.http.put(SIGNIN_URL, JSON.stringify(data), {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        const signedUser = resp.json();
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

  getDishes(): Promise<any> {
    return this.http.get(DISHES_URL, {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        return resp.json();
      });
  }

  createDish(dish: Dish): Promise<any> {
    const data = {data: dish};
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
        return resp.json();
      });
  }

  getMenusByType(type: MenuType): Promise<any> {
    const url = MENUS_URL + '/' + type;
    return this.http.get(url, {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        return resp.json();
      });
  }

  createMenu(menu: Menu): Promise<any> {
    const data = {data: menu};
    return this.http.post(MENUS_URL, JSON.stringify(data), {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        return resp.json();
      });
  }

  getAllPosts(): Promise<any> {
    return this.http.get(POSTS_URL, {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        return resp.json();
      });
  }

  getAllComments(): Promise<any> {
    return this.http.get(COMMENTS_URL, {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        return resp.json();
      });
  }

  getPostById(id: string): Promise<any> {
    const url = POSTS_URL + '/' + id;
    return this.http.get(url, {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        return resp.json();
      });
  }

  createPost(post: Post): Promise<any> {
    const data = {data: post};
    return this.http.post(POSTS_URL, JSON.stringify(data), {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        return resp.json();
      });
  }

  getCommentsByPost(postId: string): Promise<any> {
    const url = POSTS_URL + '/' + postId + '/comments';
    return this.http.get(url, {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        return resp.json();
      });
  }

  addCommentToPost(comment: UserComment, postId: string): Promise<any> {
    const data = {data: comment};
    const url = POSTS_URL + '/' + postId + '/comments';
    return this.http.post(url, JSON.stringify(data), {
      headers: this.headers
    })
      .toPromise()
      .then(resp => {
        return resp.json();
      });
  }

  searchPosts(query: string): Promise<any> {
    const params = new URLSearchParams();
    params.set('q', query);
    const data = {
      search: params
    };

    return this.http.get(POSTS_SEARCH_URL, data)
      .toPromise()
      .then(resp => {
        return resp.json();
      });
  }
}

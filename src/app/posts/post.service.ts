import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject } from 'rxjs';
import { map  } from 'rxjs/operators';
import {Router} from '@angular/router'

import {Post} from './post.model';
import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiUrl + "/posts/";

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http:HttpClient , private router: Router) {}

  getPosts() {
    this.http.get<{message: string, posts: any}>(BACKEND_URL+'/city')
      .pipe(map((postData) => {
        return postData.posts.map(post => {
          return {
            title: post.title,
            content: post.content,
            id: post._id,
          }
        });
      }))
      .subscribe((transformedPosts) => {
        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts]);
      }) ;
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  getPost(id: string) {
    return this.http.get<{_id:string, title:string, content:string}>(
      BACKEND_URL + id);
  }

  addPost(title: string, content: string) {
    const post: Post = {id: null, title: title, content: content};
    this.http.post<{message: string, postId: string}>(BACKEND_URL, post)
    .subscribe((responseData) => {
      const id = responseData.postId;
      post.id = id;
      this.posts.push(post);
      this.postsUpdated.next([...this.posts]);
      this.router.navigate(["/"]);
    });

  }

  updatePost(id: string, title: string, content: string) {
    const post: Post = {id: id, title: title, content: content};
    this.http.put(BACKEND_URL + id, post)
    .subscribe(response => {
      const updatedPosts = [...this.posts];
      const oldPostIndex =updatedPosts.findIndex(p => p.id ===post.id);
      updatedPosts[oldPostIndex] =post;
      this.posts =updatedPosts;
      this.postsUpdated.next([...this.posts]);
      this.router.navigate(["/"]);
    });
  }

  deletePost(postId: string) {
    this.http.delete(BACKEND_URL + postId)
    .subscribe(() => {
      const updatedPosts = this.posts.filter(post => postId !== post.id);
      this.posts= updatedPosts;
      this.postsUpdated.next([...this.posts]);
    });
  }
}

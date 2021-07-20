import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';

import { PostsService } from "../post.service";
import { Post } from '../post.model';
import { AuthService } from "src/app/auth/auth.service";


@Component ({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']

})
export class PostListComponent implements OnInit , OnDestroy{
  posts:Post[] = [];
  isLoading = false;
  private postsSub: Subscription;
  private authStatusSub: Subscription;
  userIsAuthenticated = false;

  constructor(public postsService: PostsService, private authService: AuthService) { }

  ngOnInit() {
    this.isLoading = true;
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe( (posts: Post[]) => {
        this.isLoading = false;
        this.posts = posts;
      });
      this.userIsAuthenticated = this.authService.getIsAuth();
      this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  onDelete(postId: string) {
    this.isLoading = true;
    this.postsService.deletePost(postId);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }
}

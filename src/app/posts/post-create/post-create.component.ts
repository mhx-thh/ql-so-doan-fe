import {Component, OnInit,NgModule, OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostsService } from '../post.service';
import { Post } from '../post.model'
import { AuthService } from 'src/app/auth/auth.service';

@Component ({
  selector: 'app-post-create',
  templateUrl:'./post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit, OnDestroy{
  post: Post;
  isLoading = false;
  private postId: string;
  private mode = 'create';
  private authStatusSubs: Subscription;

  constructor(public postsService: PostsService, public route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.authStatusSubs = this.authService.getAuthStatusListener().subscribe(authStatus => {
      this.isLoading = false;
    });
    this.route.paramMap.subscribe( (paramMap: ParamMap) => {
      if(paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.isLoading = true;
        this.postsService.getPost(this.postId).subscribe(postData => {
          this.isLoading = false;
          this.post = {id: postData._id, title: postData.title, content: postData.content }
        });
      } else {
        this.mode = 'create';
        console.log(this.post);
        this.postId = null;
      }
    });
  }

  onSavePost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading =true;
    if(this.mode === 'create') {
      this.postsService.addPost(
        form.value.title,
        form.value.content
      );
    } else {
      this.postsService.updatePost(
        this.postId,
        form.value.title,
        form.value.content
        );
    }
    form.resetForm();
  }

  ngOnDestroy() {
    this.authStatusSubs.unsubscribe();
  }
}

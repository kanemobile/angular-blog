import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../model/post';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  @Input()
  posts: Post[];

  postSubscription: Subscription;

  constructor(private postService: PostsService) {
  }

  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}

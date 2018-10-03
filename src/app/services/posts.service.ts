import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];

  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
  }

  getPosts() {
    firebase.database().ref('/posts').on('value',
      (data: DataSnapshot) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      }
    );
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl: Post) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  loveIt(post: Post) {
    this.posts.findIndex(
      (postEl: Post) => {
        if (postEl === post) {
          post.loveIts++;
          return true;
        }
      }
    );
    this.savePosts();
    this.emitPosts();
  }

  dontLoveIt(post: Post) {
    this.posts.findIndex(
      (postEl: Post) => {
        if (postEl === post) {
          post.loveIts--;
          return true;
        }
      }
    );
    this.savePosts();
    this.emitPosts();
  }

}

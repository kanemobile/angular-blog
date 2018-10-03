import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from '../model/post';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostsService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        content: ['', Validators.required]
      }
    );
  }

  onSubmitForm() {
    const formValue = this.postForm.value;
    const newPost = new Post();
    newPost.title = formValue['title'];
    newPost.content = formValue['content'];
    newPost.loveIts = 0;
    newPost.created_at = new Date().getTime();
    this.postService.addPost(newPost);
    this.router.navigate(['/posts']);
  }
}

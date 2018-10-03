import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../model/post';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle;
  @Input() postContent;
  @Input() postLoveIts;
  @Input() postCreatedAt;
  @Input() postItem;

  constructor(private postService: PostsService, private router: Router) { }

  ngOnInit() {
  }

  onLoveIt(post: Post) {
    this.postService.loveIt(post);
  }

  onDontLoveIt(post: Post) {
    this.postService.dontLoveIt(post);
  }

  onSupprimer(post: Post) {
    this.postService.removePost(post);
    this.router.navigate(['/posts']);
  }

}

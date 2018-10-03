import { Component } from '@angular/core';
import { Post } from './model/post';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-blog';

  // posts: Post[] = [];

  constructor() {
    const config = {
      apiKey: 'AIzaSyC3o-XRwjdnVdhiloCwj_q3w83agJbYAfg',
      authDomain: 'post-166c4.firebaseapp.com',
      databaseURL: 'https://post-166c4.firebaseio.com',
      projectId: 'post-166c4',
      storageBucket: '',
      messagingSenderId: '1006687859451'
    };
    firebase.initializeApp(config);
  }
}

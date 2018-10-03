import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostsService } from './services/posts.service';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'posts', component: PostListComponent },
    { path: 'new', component: NewPostComponent },
    { path: '', component: PostListComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'routePath' }
];

@NgModule({
    declarations: [
        AppComponent,
        PostListComponent,
        PostListItemComponent,
        NewPostComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [PostsService],
    bootstrap: [AppComponent]
})
export class AppModule { }

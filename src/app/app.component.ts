import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PostDetailsComponent } from './post-details/post-details.component';
import { ProektApiService } from './proekt-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proektche';
  posts: Post[] = [];

  constructor(public dialog: MatDialog, private apiService: ProektApiService) {
    
    this.apiService.getPosts().subscribe((receivedPosts)=>{
      this.posts = receivedPosts;
    });
  }

  onClick(post: Post){
    const dialogRef = this.dialog.open(PostDetailsComponent, {
      width: '750px',
      height: '700px',
      data: {clickedPost: post}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // // this.animal = result;
    });
  }
}


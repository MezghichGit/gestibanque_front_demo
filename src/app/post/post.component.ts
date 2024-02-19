import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{
  posts:any;
  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
 //prepare les data

    this.postService.getPosts().subscribe(

      response=> this.posts = response,

      error => console.log(error+"Problème dans l'api")
    );
  }

}

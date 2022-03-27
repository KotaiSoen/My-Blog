import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts?: Post[];
  editState: boolean = false;
  postToEdit?: Post;

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    })
  }

  deletePost(post: Post) {
    this.postService.deletePost(post);
  }

  editPost(post: Post) {
    this.editState = true;
    this.postToEdit = post;
  }

}

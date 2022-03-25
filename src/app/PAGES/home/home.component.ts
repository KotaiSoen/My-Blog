import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts!: Post[];

  blogPosts: { title: string, img: string, content: string }[] = [
    {
      title: '',
      img: "",
      content: ''
    },
    {
      title: '',
      img: '',
      content: ''
    },
    {
      title: '',
      img: '',
      content: ''
    }
  ]

  

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      // console.log(posts);
      this.posts = posts;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  post = history.state;

  constructor(private postService: PostsService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(post: Post) {
    this.postService.updatePost(post);
    this.router.navigate(['admin']);
  }

}

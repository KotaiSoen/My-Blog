import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  post: Post = {
    header: '',
    image: '',
    content: '',
  }

  constructor(private postService: PostsService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.post.header !== '' && this.post.image !== '' && this.post.content !== '') {
      this.postService.addPost(this.post);
      this.post.header = '';
      this.post.content = '';
      this.post.image = '';

      this.router.navigate(['admin']);
    }

  }

}

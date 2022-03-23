import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts?: Post[];

  blogPosts: { title: string, img: string, content: string }[] = [
    {
      title: 'The Effects Of Soot On The City Of Port-Harcourt',
      img: "https://media.istockphoto.com/photos/ecological-catastrophy-picture-id1141520118?k=20&m=1141520118&s=612x612&w=0&h=PQGV43vNhRvg6qlPfhd7UQoYgKjUh9sbxWW2kVuyLDg=",
      content: 'The City of Port-Harcourt is now a dense fog of haze. The citizens have go on various social media to complain...'
    },
    {
      title: 'Smokers are liable to die young',
      img: 'https://media.istockphoto.com/photos/smoking-cigarettes-tobacco-in-hand-with-a-softfocus-concept-quit-are-picture-id951149066?b=1&k=20&m=951149066&s=170667a&w=0&h=aU3HW8bmcvb8GDjy84h0X-UWZ-Bc5pBU6bqj_xXZ4qc=',
      content: 'There is a popular saying that we are all used to. Is it true or not?...'
    },
    {
      title: 'Heart attacks: The leading cause of deaths in the world',
      img: 'https://intermountainhealthcare.org/-/media/images/modules/blog/posts/2020/02/how-to-know-if-youre-having-a-heart-attack.jpg?mw=1600',
      content: 'It goes lub dub. What is it?...'
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

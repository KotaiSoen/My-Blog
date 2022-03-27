import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Post } from '../post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  postDoc!: AngularFirestoreDocument<Post>;

  constructor(private afs: AngularFirestore) { 
    this.postsCollection = afs.collection<Post>('posts', ref => ref.orderBy('header', 'asc'));
    // this.posts = this.postsCollection.valueChanges();
    this.posts = this.postsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { id, ...data};
      }))
    )
  }

  getPosts() {
    return this.posts;
  }

  addPost(post: Post) {
    this.postsCollection.add(post);
  }

  deletePost(post: Post) {
    console.log('i was clicked');
    this.postDoc = this.afs.doc(`posts/${post.id}`);
    this.postDoc.delete();
    
  }

  updatePost(post: Post) {
    this.postDoc = this.afs.doc(`posts/${post.id}`);
    this.postDoc.update(post);
  }


}


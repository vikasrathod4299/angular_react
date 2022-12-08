import { Component, EventEmitter, Input, Output } from '@angular/core';
import { postInterface } from './postInterface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent  {
  @Output() likedPosts= new EventEmitter<postInterface>()
  @Input() post!:postInterface


   addLike(){
     this.likedPosts.emit(this.post)
      this.post.likeClass = this.post.likeClass=="fa-regular fa-heart fs-2" 
      ? "fa-solid fa-heart fs-2 text-danger" 
      : "fa-regular fa-heart fs-2"
    }

}

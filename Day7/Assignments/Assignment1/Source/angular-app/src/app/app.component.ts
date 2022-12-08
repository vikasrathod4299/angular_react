
import { Component } from '@angular/core';
import { postInterface } from './post-list/postInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'angular-app';
  likeToggle:boolean=true;
  postList:postInterface[] =[
    {
      name:'Post-1',
      disc:'discription Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis est quae ratione at odio, tempora quia' ,
      img:'https://source.unsplash.com/random/200x200?sig=1',
      likeClass:"fa-regular fa-heart fs-2" 
    },
    {
      name:'Post-2',
      disc:'discription Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis est quae ratione at odio, tempora quia' ,
      img:'https://source.unsplash.com/random/200x200?sig=2',
      likeClass:"fa-regular fa-heart fs-2"  
    },
    {
      name:'Post-3',
      disc:'discription Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis est quae ratione at odio, tempora quia' ,
      img:'https://source.unsplash.com/random/200x200?sig=3',
      likeClass:"fa-regular fa-heart fs-2"  
    },
    {
      name:'Post-4',
      disc:'discription Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis est quae ratione at odio, tempora quia' ,
      img:'https://source.unsplash.com/random/200x200?sig=4',
      likeClass:"fa-regular fa-heart fs-2"  
    }
  ] 
  likedPosts:postInterface[]=[];


  addLikedPosts(data:postInterface){
    let index = this.likedPosts.findIndex((item)=> item == data)
    console.log(index);
    
    if(index<0){
      this.likedPosts.push(data)
    }else{
      this.likedPosts.splice(index,1)
    }
  }
  handleLikeToggle(){
    this.likeToggle = this.likeToggle ? false : true 

  }

}


import './App.css';
import { useState } from 'react';
import Post from './components/Post';

function App() {
  let [likeToggle, setLikeToggle] = useState(true);
  let [likedPosts, setLikedPost] = useState([]);
  let [postList,setPostList] = useState([
    
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
    
  ])

  const addLikedPosts = (data)=>{
    let index = likedPosts.findIndex((item)=> (item==data))
    if(index<0){
      setLikedPost((p)=>[...p,data])
    }else{
      setLikedPost([...likedPosts.splice(index,1)])
    }

  }

  return (
    <div className="App">
          <p className="m-5 px-5 fs-3 text-end pe-auto" onClick={(e)=>setLikeToggle(likeToggle?false:true)}>{likedPosts.length} ❤️</p>
          <div >

                  {!likeToggle && (
                    <div  className="container d-flex flex-wrap justify-content-around mt-5">
                    
                      {likedPosts.map((item)=>{
                          <Post post={item} func={addLikedPosts}/>
                      })}
                  </div>
                  )}

                  {likeToggle && (
                    
                    <div className="container d-flex flex-wrap justify-content-around mt-5">
                      {postList.map((item)=>{
                          return <Post post={item} func={addLikedPosts} />
                      })}
                  </div>
                  )}

          </div>
    </div>
  );
}

export default App;

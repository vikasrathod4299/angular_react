import React from 'react'

const Post = (props) => {
    const addLike = (e)=>{
        props.func(props.post)
        props.post.likeClass= props.post.likeClass == 'fa-regular fa-heart fs-2' ? 'fa-solid fa-heart text-danger fs-2' : 'fa-regular fa-heart fs-2';
    }

  return (
    <div>
            <div className={'card shadow-lg'} style={{'width': '18rem'}}>
                <img className={"card-img-top w-75 mx-auto rounded shadow mt-3"}  src={props.post.img} alt="Card image cap"/>
                <div className={"card-body"}>
                    <h3 className={"card-title"}>{props.post.name}</h3>
                    <p className={"card-text"}>{props.post.disc}</p>
                <div className={"d-flex justify-content-end me-4"} onClick={addLike}>
                    <i className={props.post.likeClass}></i>
                </div>
                </div>
            </div>
    </div>
  )
}

export default Post
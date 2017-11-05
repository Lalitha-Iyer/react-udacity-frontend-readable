import React from 'react'
import { Panel, ListGroup, ListGroupItem, Badge} from 'react-bootstrap/lib/'
import PostDetails from './PostDetails'

const Post = (props)=>{
  console.log(props.post.title)
  return(
    <div >
      <br/>
      <div>
        <div>

        <h3>  {props.post.author}: {props.post.title} <Badge> comments:1 </Badge> </h3>
        <PostDetails post={props.post}> {props.post.title}</PostDetails>
        </div>
      </div>
    </div>
  )

}

export default Post

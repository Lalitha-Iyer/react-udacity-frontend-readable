import React from 'react'
import { Panel, ListGroup, ListGroupItem} from 'react-bootstrap/lib/'
import Comment from './Comment.js'

const PostDetails = (props)=>{
  return(
    <div >
      <br/>
         {props.post.body}
            <Comment></Comment>
    </div>
  )

}

export default PostDetails

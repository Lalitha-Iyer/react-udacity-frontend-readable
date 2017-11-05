import React from 'react'
import { Panel, ListGroup, ListGroupItem} from 'react-bootstrap/lib/'
import Comment from './Comment.js'

const PostDetails = (props)=>{
  return(
    <div >
      <br/>
      <Panel>
            <ul>
              <li> Body : {props.post.body} </li>
              <li> Author:  {props.post.author} </li>
             </ul>
            <Comment></Comment>
      </Panel>
    </div>
  )

}

export default PostDetails










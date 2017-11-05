import React from 'react'
import { Panel, ListGroup, ListGroupItem} from 'react-bootstrap/lib/'
import PostDetails from './PostDetails'

const Post = (props)=>{
  console.log(props.post.title)
  return(
    <div >
      <br/>
      <Panel  collapsible defaultExpanded header={props.post.title}>
          <PostDetails post={props.post}> {props.post.title}</PostDetails>
      </Panel>
    </div>
  )

}

export default Post










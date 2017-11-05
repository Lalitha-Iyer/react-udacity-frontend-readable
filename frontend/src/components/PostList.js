import React from 'react'
import { Panel, ListGroup, ListGroupItem} from 'react-bootstrap/lib/'
import Post from './Post'
import { connect } from 'react-redux'

const PostList = (props)=>{
  console.log('Props',props)
  const listItems = props.posts.map( (post) =>
    <ListGroupItem  key={post.id} bordered= {false}>
      <Post post={post}></Post>
    </ListGroupItem>
  )
  return(
    <div >
      <br/>
        <Panel>
          <ListGroup fill bordered= {false}>
            {listItems}
          </ListGroup>
        </Panel>
    </div>
  )
}

function mapStateToProps (state){
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostList)

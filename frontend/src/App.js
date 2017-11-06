import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Categories from './components/Categories'
import PostList from './components/PostList'
import { Grid, Row, Col, Panel } from 'react-bootstrap/lib/'
import { connect } from 'react-redux'
import { addPost } from './actions'

const App = ( props) => {

  let postInput;
  const addPostHandler = (evt) =>{
    props.addPost({title: postInput.value})
    evt.preventDefault()
  }
  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Content & Comments</h1>
        </header>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4}><Categories> </Categories></Col>
            <Col xs={12} md={8}>
              <br/><br/>
              <Panel>
                <form onSubmit={addPostHandler}>
                  New Post <input type="text"  ref= {(input)=> postInput = input} ></input>
                </form>
              </Panel>
              <PostList store={props.store}> </PostList>
            </Col>
          </Row>
        </Grid>
      </div>
  );
}

function mapStateToProps (state){
  return {
    posts_name: state.posts
  }
}

function mapDispatchToProps (dispatch){
 return {
   addPost: (post) => {
      dispatch(addPost(post))
   }
 }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

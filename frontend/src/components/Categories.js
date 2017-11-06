import React from 'react'
import { Panel, ListGroup, ListGroupItem, NavItem, Nav } from 'react-bootstrap/lib/'
import { connect } from 'react-redux'
import { filterByCategory } from '../actions'

const Categories = (props)=>{
  const categoryList = props.categories.map(function(element) {
    return <NavItem id={element.id} href="/home" onClick={props.handleClick}>{element.value }</NavItem>
  })
  return(
    <div >
      <br/>
      <Nav bsStyle="pills" stacked>
        {
          categoryList
        }
      </Nav>

    </div>
  )

}

function mapStateToProps (state){
  return {
    categories: state.categories
  }
}

function mapDispatchToProps (dispatch){
  return {
    handleClick: (evt) => {
      evt.preventDefault()
      dispatch(filterByCategory(evt.target.id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)





import React from 'react'
import { Panel, ListGroup, ListGroupItem, NavItem, Nav } from 'react-bootstrap/lib/'
import { connect } from 'react-redux'

const Categories = (props)=>{
  console.log(props)
  const categoryList = props.categories.map(function(element) {
    return <NavItem eventKey={element.id} href="/home">{element.value}</NavItem>
  })
  return(
    <div >
      <br/>
      <Nav bsStyle="pills" stacked activeKey={1} >
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

export default connect(mapStateToProps)(Categories)





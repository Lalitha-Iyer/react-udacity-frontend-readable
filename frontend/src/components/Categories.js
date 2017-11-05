import React from 'react'
import { Panel, ListGroup, ListGroupItem, NavItem, Nav } from 'react-bootstrap/lib/'

const Categories = ({props})=>{


  return(
    <div >
      <br/>
        <Nav bsStyle="pills" stacked activeKey={1} >
          <NavItem eventKey={1} href="/home">Kitchen</NavItem>
          <NavItem eventKey={2} title="Item">Play Area</NavItem>
          <NavItem eventKey={3} disabled>Study</NavItem>
        </Nav>
    </div>
  )

}

export default Categories





import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink
} from 'reactstrap'
import CartSummary from './CartSummary'

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">
            Northwind App
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}}/>
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <Link to="form1">
                  <NavLink>
                    Form Demo 1
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="form2">
                  <NavLink>
                    Form Demo 2
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              <Nav>
                <CartSummary cart={this.props.cart} removeFromCart={this.props.removeFromCart}/>
              </Nav>
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

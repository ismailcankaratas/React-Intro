import React, {Component} from 'react'
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from 'reactstrap'

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown inNavbar nav>
        <DropdownToggle caret nav>
          Your Cart &nbsp;
          <Badge color='success'>{this.props.cart.length}</Badge>
        </DropdownToggle>
        <DropdownMenu right>
          {this
            .props
            .cart
            .map(cartItem => (
              <DropdownItem key={cartItem.product.id}>
                <Badge color='danger' onClick={() => this.props.removeFromCart(cartItem.product)}>X</Badge>
                &nbsp;
                {cartItem.product.productName}
                &nbsp;
                <Badge color='success'>{cartItem.quantity}</Badge>
              </DropdownItem>
            ))
}
          < DropdownItem divider/>
          <DropdownItem>
            {this.props.cart.length}
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown >
    )
  }
  renderEmptyCart() {
    return (
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
    )
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderSummary()
          : this.renderEmptyCart()}
      </div>
    )
  }
}

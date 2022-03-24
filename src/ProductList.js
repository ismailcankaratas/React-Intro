import React, {Component} from 'react'
import { Outlet } from 'react-router-dom'
import {Table, Button} from 'reactstrap'

export default class ProductList extends Component {

  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}
          &nbsp;-&nbsp;{this.props.currentCategory}
        </h3>
        <Table>
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                Product Name
              </th>
              <th>
                Unit Price
              </th>
              <th>
                Quantity Per Unit
              </th>
              <th>
                Unit In Stock
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this
              .props
              .products
              .map(product => (
                <tr key={product.id}>
                  <th scope="row">
                    {product.id}
                  </th>
                  <td>
                    {product.productName}
                  </td>
                  <td>
                    {product.quantityPerUnit}
                  </td>
                  <td>
                    {product.unitPrice}
                  </td>
                  <td>
                    {product.unitsInStock}
                  </td>
                  <td>
                    <Button color="info" onClick={() => this.props.addToCart(product)}>
                      Add to cart
                    </Button>
                  </td>
                </tr>
              ))}

          </tbody>

          <Outlet />
        </Table>
      </div>
    )
  }
}

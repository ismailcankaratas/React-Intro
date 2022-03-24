import React, {Component} from 'react'
import {Col, Container, Row} from 'reactstrap';
import CategoryList from './CategoryList';
import Navi from './Navi';
import ProductList from './ProductList';
import alertify from 'alertifyjs';
import {Route, Routes} from 'react-router-dom';
import NotFound from './NotFound';
import CartList from './CartList';
import FormDemo1 from './FormDemo1';
import FormDemo2 from './FormDemo2';
export default class App extends Component {

  state = {
    currentCategory: "",
    products: [],
    cart: []
  }

  changeCategory = (category) => {
    this.setState({currentCategory: category.categoryName})
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({products: data}));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({product: product, quantity: 1});
    }
    this.setState({cart: newCart});
    alertify.success(product.productName + " added to cart", 1.5);
  }

  removeFromCart = (product) => {
    let newCart = this
      .state
      .cart
      .filter(c => c.product.id !== product.id);
    this.setState({cart: newCart});
    alertify.error(product.productName + " remove to cart", 1.5);

  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    let productInfo = {
      title: "ProductList"
    };
    let categoryInfo = {
      title: "CategoryList"
    };
    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} removeFromCart={this.removeFromCart}/>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}/>
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={< ProductList products = {
                  this.state.products
                }
                currentCategory = {
                  this.state.currentCategory
                }
                addToCart = {
                  this.addToCart
                }
                info = {
                  productInfo
                } />}/>
                <Route
                  exact
                  path="/cart"
                  element={< CartList products = {
                  this.state.products
                }
                cart = {
                  this.state.cart
                }
                removeFromCart = {
                  this.removeFromCart
                } />}/>
                <Route path="/form1" element={< FormDemo1 />}></Route>
                <Route path="/form2" element={< FormDemo2 />}></Route>
                <Route path="*" element={< NotFound />}></Route>
              </Routes>

            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

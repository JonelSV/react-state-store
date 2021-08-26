import React, { Component } from 'react';

// Initiating state should always be above render but inside class name.

class ProductList extends Component {

    
state = {
    inShoppingCart: false
}

// the exclamation mark on inshopping cart only changes its value to the opposite, whicn is true
// WHENEVER WE WANT TO ACCESS STATE ANYWHERE INSIDE COMPONENT
// this.state must be used
toggleCart = () => {
    this.setState({
        inShoppingCart : !this.state.inShoppingCart
    })
}

    render() {
        // console.log('inside props product list', this.props.product)
        return (
            <div>

            {this.props.product.name}  {this.props.product.price} {this.state.inShoppingCart ? <span>In shopping cart</span> : ''}
            
           
            </div>
        );
    }
}
//This.props refers to the object being passed from the main component from APP .js
// Ternary operators

export default ProductList;

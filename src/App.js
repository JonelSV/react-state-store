// * Before we were importing React by import React from 'react'
// * Line 3 is a way for us to import one specific part of React
// * destructing
import React, { Component } from 'react';
import products from './data.js'
import ProductList from './ProductList'

console.table(products)

// * we are going to create our class component
// * the shortcut for the class component boilerplate using react code snippets is rcc


// * we can export default on the same line where we create our component
// * Before we would have to do React.Component

// * subclass
export default class App extends Component {
  // we need to initialize our state before our render method

  // * ===== old syntax ======
  // * props is data or properties being passed down from a parent component
  // constructor(props) {
  //   // * super() refers to the parent component (superclass)
  //   super(props)
  //   // * this.state is the object that comes with React Component that we can store data inside
  //   // * we write our state just like any objects in JS
  //   this.state = {
  //     // * key value pairs just like any object, left side is the property name and the right side is the value
  //     // * the right side refers to the products array list that we imported
  //     products: products
  //   }
  // }
  
  // * ==== new syntax ====
  // ! HIGHLY RECOMMEND
  //* we no longer need to initiate our state object with "this"
  state = {
    products: products,
    name: '',
    price: 0,
    description: ''



    // value: ''
  }

  // create handlechange function just under the state.
  // handle change is a naming convention used by developers
  // typing in this input. the event is typing


  handleChange = (event) => {
    console.log(event.target)
    this.setState({
      [event.target.id]: event.target.value
      //event.target.id will change ti either name price or description
      // array above targets multiple id's updating multiple states
      // name: event.target.value
    })
    // value is pointing at the state that we are trying to change
    // event.target.value is the input we type in our input field.
    
    // this.state.value = event.target.value 
    // proper way of updating state is using setState() funciton
    // always use curly bracks inside setState method
  }

  //preventDefault() prevents site from refreshing
  //HTML automatically refreshes page on submit as a default and
  // defeats purose of SPA

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log('you prevented the default')
  
// To create a new item added to the list

const newItem = {
  name: this.state.name,
  price: this.state.price,
  description: this.state.description
  }

// spread operator is written with 3 dots ... 
// lets us add things to our array or objects without mutating original
// array or object
// newItem can be put at the end of the state.products preceeded by comma
// To update multiple states in one setStat()

this.setState({
  products: [newItem, ...this.state.products],
  name: '',
  price: 0,
  description: 'Describe this item'
})


}


  render() {
    // console.log(this.state.products)
    // label is attached inside forms. Works with input fields and connects
    // the forms and input fields.
    // Add name on HTMLfor inside label tag and add name on ID in the input field
    // Good for accessibility eg screen readers
    // forms have onSubmit attribute and acts like a eventListener

    return (
      <div>
        <h1>Big Time Shopping!</h1>
        <form onSubmit = {this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type='text' value={this.state.name} onChange={this.handleChange} id="name"/>
        <br />
        <label htmlFor="price">Price:</label>
        <input type='text' value={this.state.price} onChange={this.handleChange} id="price"/>
        <br />
        <label htmlFor="description">Description:</label>
        <input type='text' value={this.state.description} onChange={this.handleChange} id="description"/>
        <br />
        <input type="submit" />
        </form>

        <div>
          <h2>Preview our new item</h2>
          <h3>{this.state.name}</h3>
          <h4>{this.state.price}</h4>
          <h5>{this.state.description}</h5>


        </div>

        {/* good practice to wrap input inside a form. Input takes
        attribute called value that can take in any data */}
        <ul>
          {/* map over our products list that we imported */}
          {
            // map is just another iterator just like any for loops
            // what makes special is that it lets us return JSX
            // add item parameter inside our arrow function
            // each item represents each element in our products array

            // whether or not we choose to write new syntax or old syntax, we always have to REFER to our state object with the "this" keyword
            
            // * we know that products is an array of items
            // * best practices for naming convention is to refer to a single object with the singular name of the array
            // WARNING Each child on list should have unique ID - seen when using map method
            //  fixed by passing attribute KEY using "i" iterator or index of the array
            // passed as a parameter in the map function and called upon as key in the component section.
            
            this.state.products.map((product, index) => {
              return (

                <ProductList key={index} product={product}/>
              )
            })

          }

          {/* we can call on just one item if we wanted to */}
          {/* {this.state.products[0].name} */}
        </ul>
      </div>
    );
  }
}

// console.log("we are outside of our component", products)
// console.log("we are outside trying to access our state", this.state.products)
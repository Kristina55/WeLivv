import React, { Component } from 'react'
import Api from '../api'
import { Link } from 'react-router-dom'

// components
import Card from './Card'

// css
import '../css/Card.css'

class Business extends Component {
  static defaultProps = {
    match: { params: {} },
  }
  constructor(props) {
    super(props)
    this.state = {
      business: null,
    }
  }
  // Using react-router-dom library that passes in a prop called "match" into every route that is rendered.
  // Inside this match object is another object called "params". This holds all matching params where the key is the name we specified when creating the route ("id") and the value is the actual value in the URL.
  // Passing the id to API call and get response for one Business object.
  async componentDidMount() {
    const { id } = this.props.match.params
    const business = await Api.getBusiness(id)
    this.setState({ business })
  }

  render() {
    // Destructuring the state
    const { business } = this.state

    if (!this.state.business) {
      return <div>Loading...</div>
    }
    return (
      <div className="container">
        <div className="row business-component">
          <div className="go-back">
            <Link to="/business">Go back</Link>
          </div>
          <h1 className="update-info">Business Information</h1>
          <div className="row">
            <div className="col-md-3 offset-md-3"></div>
            <div className="col-md-6 business-borders"></div>
            <div className="col-md-3 offset-md-3"></div>
          </div>

          <Card card={business} />
        </div>
      </div>
    )
  }
}

export default Business

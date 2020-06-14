import React, { Component } from 'react'
// api
import Api from '../api'
// components
import CardList from './CardList'
// css
import '../css/Businesses.css'

class Businesses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      businesses: [],
      search: '',
    }
  }

  // componentDidMount is a method that is called after the component gets mounted on the DOM,
  // and it is called once in a lifecycle.
  // This is a good place to make API calls and update the state with API response.
  async componentDidMount() {
    let businesses = await Api.getBusinesses()
    this.setState({ businesses })
  }

  // Calling handleChange whenever someone changes anything in the input area. (each letter)
  handleChange = (evt) => {
    this.setState({ search: evt.target.value })
  }

  render() {
    const { search } = this.state
    let filteredBusinesses = this.state.businesses.filter((business) => {
      // Added a conditional OR to allow the search meachanism to seach by business name or address
      // The search term is not case-sensitive
      return (
        business.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        business.address.toLowerCase().indexOf(search.toLowerCase()) !== -1
      )
    })
    return (
      <div className="container-fluid businesses-page">
        <div className="row businesses-row">
          <div className="col-md-8 offset-md-2 ">
            <h1 className="businesses">Businesses</h1>
            <div className="row">
              <div className="col-md-3 offset-md-3"></div>
              <div className="col-md-6 business-borders"></div>
              <div className="col-md-3 offset-md-3"></div>
            </div>
            <div className="Search mb-4">
              <input
                className="form-control form-control-lg flex-grow-1"
                name="search"
                placeholder="Enter search term.."
                value={this.state.search}
                onChange={this.handleChange}
              />
            </div>
            {/* CardList is a child component of Businesses Component and all the values can be passed as props */}
            <CardList cards={filteredBusinesses} />
          </div>
        </div>
      </div>
    )
  }
}

export default Businesses

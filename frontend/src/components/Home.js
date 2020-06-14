import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// css
import '../css/Home.css'

// Simple Home Component that displays image background and link to businesses array.
class Home extends Component {
  render() {
    return (
      <div className="container-fluid  home-container text-center">
        <div className="row">
          <Link to={`/business`}>
            <div className="home-style">
              <div>SEARCH THOUSANDS OF BUSINESSES</div>
              <span>&#8658;</span>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home

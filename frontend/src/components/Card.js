import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// css
import '../css/Card.css'

// Reusing the Card Component
// It is child component on both (Businesses and Business Component)
class Card extends Component {
  static defaultProps = {
    item: {},
  }
  render() {
    // Destructuring the item object with the following properties
    const { id, name, address, city, state } = this.props.item

    // Checking the props origin comming from parent components (by card or item object)
    return this.props.card ? (
      <div className="one-business">
        <h2 className="card-title d-flex justify-content-between">
          <span className="text-capitalize card-name">
            {this.props.card.name}
          </span>
        </h2>
        {this.props.card.address2 ? (
          <p className="card-address">
            {this.props.card.address} / {this.props.card.address2},
          </p>
        ) : (
          <p className="card-address">{this.props.card.address},</p>
        )}
        <p className="card-city"> {this.props.card.city}, </p>
        <p className="card-state">{this.props.card.state}, </p>
        <p className="card-country">{this.props.card.country}</p>
        <p className="card-country">{this.props.card.zip}</p>
        <div>
          <div className="contact-number">CONTACT </div>
          <p className="card-phone">{this.props.card.phone}</p>
        </div>
        <a href={this.props.card.website}>
          <h6 className="card-website">{this.props.card.website}</h6>
        </a>
        <div className="edit-button">
          <Link to={`/business/${this.props.card.id}/edit`}>
            <button className="btn btn-sm btn-outline-primary">Edit</button>
          </Link>
        </div>
      </div>
    ) : (
      <Link className="Card card" to={`/business/${id}`}>
        <div className="card-body">
          <h2 className="card-title d-flex justify-content-between">
            <span className="text-capitalize">{name}</span>
          </h2>
          <p>{address},</p>
          <p>{city},</p>
          <p>{state}</p>
        </div>
      </Link>
    )
  }
}

export default Card

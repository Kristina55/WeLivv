import React, { Component } from 'react'
import Card from './Card'

class CardList extends Component {
  static defaultProps = { cards: [] }

  render() {
    // Destructuring props
    const { cards } = this.props

    // Checking if the cards array is empty or not.
    // If is not empty map through the array and pass each object to child Card Component
    // If is empty (is still loading the result)
    return cards.length ? (
      <div className="CardList">
        {cards.map((cardData, idx) => (
          <Card item={cardData} key={idx} idx={idx} />
        ))}
      </div>
    ) : (
      <p className="lead">Loading...</p>
    )
  }
}

export default CardList

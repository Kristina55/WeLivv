import React, { Component } from 'react'

class Alert extends Component {
  static defaultProps = {
    type: 'danger',
    messages: [],
  }
  // Show message when the business is updated
  render() {
    return (
      <div className={`alert alert-${this.props.type}`} role="alert">
        {this.props.messages.map((error) => (
          <p className="mb-0 large font-italic" key={error}>
            {error}
          </p>
        ))}
      </div>
    )
  }
}

export default Alert

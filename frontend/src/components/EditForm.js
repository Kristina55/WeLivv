import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// api
import Api from '../api'
// components
import Alert from '../components/Alert'
// css
import '../css/Card.css'

const MESSAGE_SHOW_PERIOD_IN_MSEC = 3000

class EditForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      getData: {},
      name: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      phone: '',
      website: '',
      errors: [],
      saveConfirmed: false,
    }
    this.updateBusiness = this.updateBusiness.bind(this)
  }

  // Using react-router-dom library that passes in a prop called "match" into every route that is rendered.
  // Inside this match object is another object called "params". This holds all matching params where the key is the name we specified when creating the route ("id") and the value is the actual value in the URL.
  // Passing the id to API call and get response for one Business object.
  // Set the state with the returned data.
  async componentDidMount() {
    let { id } = this.props.match.params
    if (id) {
      const data = await Api.getBusiness(id)
      this.setState({
        getData: data,
        name: data.name,
        address: data.address,
        address2: data.address2,
        city: data.city,
        state: data.state,
        zip: data.zip,
        country: data.country,
        phone: data.phone,
        website: data.website,
      })
    }
  }

  // When clicking on Update button take the value from input fields
  // pass the data to API call and update the object
  async updateBusiness(e) {
    e.preventDefault()
    try {
      const data = {
        name: this.state.name,
        address: this.state.address,
        address2: this.state.address2,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        country: this.state.country,
        phone: this.state.phone,
        website: this.state.website,
      }
      const { getData } = this.state

      await Api.editBusiness(getData.id, data)

      this.setState(
        {
          saveConfirmed: true,
        },
        () => {
          setTimeout(
            () => this.setState({ saveConfirmed: false }),
            MESSAGE_SHOW_PERIOD_IN_MSEC,
          )
        },
      )
    } catch (errors) {
      this.setState({ errors })
    }
  }
  // Calling handleChange whenever someone changes anything in the input area. (each letter)
  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  render() {
    const { getData } = this.state
    return (
      <div className="container edit-page">
        <div className="row edit-row">
          <div className="go-back">
            <Link to={`/business/${getData.id}`}>Go back</Link>
          </div>
          <h1 className="update-info">Update Information</h1>
          <div className="row">
            <div className="col-md-3 offset-md-3"></div>
            <div className="col-md-6 borders"></div>
            <div className="col-md-3 offset-md-3"></div>
          </div>
          <form className="col-md-12">
            <div class="form-row">
              <div class="form-group col-md-12">
                <label>Name</label>
                <input
                  name="name"
                  type="text"
                  class="form-control"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Address</label>
                <input
                  name="address"
                  type="text"
                  class="form-control"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
              </div>
              <div class="form-group col-md-6">
                <label>Address 2</label>
                <input
                  name="address2"
                  type="text"
                  class="form-control"
                  value={this.state.address2}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label>City</label>
                <input
                  name="city"
                  type="text"
                  class="form-control"
                  value={this.state.city}
                  onChange={this.handleChange}
                />
              </div>
              <div class="form-group col-md-4">
                <label>State</label>
                <input
                  name="state"
                  type="text"
                  class="form-control"
                  value={this.state.state}
                  onChange={this.handleChange}
                />
              </div>
              <div class="form-group col-md-2">
                <label>Zip</label>
                <input
                  name="zip"
                  type="text"
                  class="form-control"
                  value={this.state.zip}
                  onChange={this.handleChange}
                />
              </div>
              <div class="form-group col-md-2">
                <label>Country</label>
                <input
                  name="country"
                  type="text"
                  class="form-control"
                  value={this.state.country}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Phone</label>
                <input
                  name="phone"
                  type="number"
                  class="form-control"
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
              </div>
              <div class="form-group col-md-6">
                <label>Website</label>
                <input
                  name="website"
                  type="text"
                  class="form-control"
                  value={this.state.website}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            {this.state.errors.length ? (
              <Alert type="danger" messages={this.state.errors} />
            ) : null}

            {this.state.saveConfirmed ? (
              <Alert
                type="dark"
                messages={['Business updated successfully.']}
              />
            ) : null}
            <div className="text-center">
              <button
                onClick={this.updateBusiness}
                type="submit"
                class="btn btn-outline-primary update-button"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default EditForm

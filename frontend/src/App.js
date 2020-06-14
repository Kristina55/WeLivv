import React from 'react'
import './App.css'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

// components
import Businesses from './components/Businesses'
import Business from './components/Business'
import EditForm from './components/EditForm'
import Home from './components/Home'

class App extends React.Component {
  render() {
    return (
      // Using React Router (client-site routing) to allow navigation troughout the page
      // without refreshing as the user navigates.
      // React Router uses component structure to call components, and display the appropriate information.
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/business" render={() => <Businesses />} />
          <Route
            exact
            path="/business/:id"
            render={(props) => <Business {...props} />}
          />
          <Route
            exact
            path="/business/:id/edit"
            render={(props) => <EditForm {...props} />}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

// 9. Import connect feature
// 10. Import actions
import { connect } from 'react-redux'
import { updateUser } from './actions/userActions'

class App extends Component {
  onUpdateUser = (e) => {
    this.props.updateUser(e.target.value)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input onChange={this.onUpdateUser} />
        <p>{this.props.user}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  user: state.user
})

const mapActionsToProps = {
  updateUser: updateUser
}

export default connect(mapStateToProps, mapActionsToProps)(App)

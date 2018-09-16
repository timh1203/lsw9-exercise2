import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

// 9. Import connect feature
// 10. Import actions
// 11. Bind action creators
import { connect } from 'react-redux'
import { updateUser } from './actions/userActions'
import { bindActionCreators } from 'redux'

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

const mapStateToProps = (state, props) => ({
  products: state.products,
  user: state.user,
  randomUser:  `${state.user} ${props.randomProp}`
})

const mapActionsToProps = (dispatch, props) => (
  bindActionCreators({
    updateUser: updateUser
  }, dispatch)
)
const mergeProps = (propsFromState,propsFromDispatch, ownProps) => {
  console.log(propsFromState,propsFromDispatch, ownProps)

  return {}
}
export default connect(mapStateToProps, mapActionsToProps, mergeProps)(App)

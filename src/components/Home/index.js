// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: true}

  onLogin = () => {
    this.setState({isLoggedIn: false})
  }

  onLogout = () => {
    this.setState({isLoggedIn: true})
  }

  authButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return (
        <button type="button" onClick={this.onLogin}>
          Login
        </button>
      )
    }
    return (
      <button type="button" onClick={this.onLogout}>
        Logout
      </button>
    )
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        {isLoggedIn ? (
          <Message name="Please Login" />
        ) : (
          <Message name="Welcome User!" />
        )}

        {isLoggedIn ? (
          <Login button={this.authButton()} />
        ) : (
          <Logout button={this.authButton()} />
        )}
      </div>
    )
  }
}
export default Home

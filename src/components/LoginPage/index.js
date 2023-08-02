import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {
    Email: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    isPasswordType: true,
    userRole: {adminRole: '', normalUserRole: ''},
    loginUserId: 0,
  }

  onTogglePassword = () =>
    this.setState(prevState => ({
      isPasswordType: !prevState.isPasswordType,
    }))

  onChangeEmail = event => {
    this.setState({Email: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()

    const jwtToken =
      'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF'

    const {Email, password} = this.state
    const userDetails = {email: Email, password}
    const url = 'https://bursting-gelding-24.hasura.app/api/rest/get-user-id'
    const options = {
      method: 'POST',
      headers: {
        'x-hasura-admin-secret': jwtToken,
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    // console.log(data)

    //     {
    //     "get_user_id": [
    //         {
    //             "id": 1
    //         }
    //     ]
    // }
    if (response.ok === true) {
      this.onSubmitSuccess(jwtToken)
      //   console.log(data.get_user_id[0])
    } else {
      this.onSubmitFailure(data.code)
    }
  }

  renderPasswordField = () => {
    const {password, isPasswordType} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type={isPasswordType ? 'password' : 'text'}
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
        <div className="showPassword-container">
          <input
            id="showPassword"
            onChange={this.onTogglePassword}
            type="checkbox"
            className="checkbox"
          />
          <label className="input-label" htmlFor="showPassword">
            Show Password
          </label>
        </div>
      </>
    )
  }

  renderEmailField = () => {
    const {Email} = this.state

    return (
      <>
        <label className="input-label" htmlFor="Email">
          EMAIL
        </label>
        <input
          type="text"
          id="Email"
          className="Email-input-field"
          value={Email}
          onChange={this.onChangeEmail}
          placeholder="EMAIL"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-form-container">
        <img
          className="login-website-logo-mobile-img"
          alt="website logo"
          src="img/money-matter-app-logo.png"
        />
        <h1 className="money">
          Money <br />
          <span className="Matters">Matters</span>
        </h1>
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="img/money-matter-app-logo.png"
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
          <div className="input-container">{this.renderEmailField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm

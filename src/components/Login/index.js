import './index.css'

import {Component} from 'react'

import Cookies from 'js-cookie'

import ColorModeContext from '../../context/ColorModeContext'

import {
  BgContainer,
  Label,
  StyledInput,
  ShowPasswordLabel,
} from '../../styles/styledComponents'

class Login extends Component {
  state = {
    showPassword: false,
    username: '',
    password: '',
    showError: false,
    errMsg: '',
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const credentials = {username, password}
    const details = {
      method: 'POST',
      body: JSON.stringify(credentials),
    }

    const result = await fetch('https://apis.ccbp.in/login/', details)
    const data = await result.json()

    if (result.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 7, path: '/'})

      const {history} = this.props
      history.push('/')
    } else {
      console.log('err', data)
      this.setState({showError: true, errMsg: data.error_msg})
    }
  }

  render() {
    const {showPassword, username, password, showError, errMsg} = this.state

    return (
      <ColorModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const logoUrl = isDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <BgContainer isDarkMode={isDarkMode}>
              <form onSubmit={this.onSubmitLogin} className="card-container">
                <img className="login-app-logo" src={logoUrl} alt="logo" />
                <Label htmlFor="usernameInput">USERNAME</Label>
                <StyledInput
                  type="text"
                  placeholder="Username"
                  id="usernameInput"
                  value={username}
                  onChange={this.onChangeUsername}
                />
                <Label htmlFor="passwordInput">PASSWORD</Label>
                <StyledInput
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  id="passwordInput"
                  value={password}
                  onChange={this.onChangePassword}
                />
                <div className="checkbox-container">
                  <input
                    id="showPasswordCheckbox"
                    type="checkbox"
                    checked={showPassword}
                    onChange={this.onChangeShowPassword}
                  />
                  <ShowPasswordLabel
                    isDarkMode={isDarkMode}
                    htmlFor="showPasswordCheckbox"
                  >
                    Show Password
                  </ShowPasswordLabel>
                </div>
                <button className="login-button" type="submit">
                  Login
                </button>
                {showError && <p style={{color: 'red'}}>*{errMsg}</p>}
              </form>
            </BgContainer>
          )
        }}
      </ColorModeContext.Consumer>
    )
  }
}

export default Login
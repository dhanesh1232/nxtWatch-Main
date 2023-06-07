import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import YouTubeContext from '../../Context/youtubeContext'

import {
  LoginMainPage,
  UserInputs,
  LoginFromLogo,
  FormLogin,
  LoginCard,
  FormLabel,
  CheckboxContainer,
  CheckboxInput,
  LoginFormButton,
  CheckboxLabel,
  ErrorMessage,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isDisplayPassword: false,
    errorMsg: false,
    errorMessage: '',
  }

  // After Login Status
  loginFailureView = errorMessage => {
    this.setState({errorMsg: true, errorMessage})
  }

  loginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  // Update State Login With User Details
  updateUserName = e => {
    this.setState({username: e.target.value})
  }

  updateUserPassword = e => {
    this.setState({password: e.target.value})
  }

  // User Login
  onSubmitLoginForm = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, option)
    const fetchedData = await response.json()
    console.log(fetchedData)
    if (response.ok) {
      this.loginSuccess(fetchedData.jwt_token)
      this.setState({username: '', password: ''})
    } else {
      this.loginFailureView(fetchedData.error_msg)
      console.log(fetchedData)
    }
  }

  showPassword = () => {
    this.setState(prevState => ({
      isDisplayPassword: !prevState.isDisplayPassword,
    }))
  }

  // Login Form UI
  displayLoginForm = () => {
    const {
      username,
      password,
      errorMessage,
      errorMsg,
      isDisplayPassword,
    } = this.state
    const passwordText = isDisplayPassword ? 'text' : 'password'
    return (
      <YouTubeContext.Consumer>
        {value => {
          const {themeDark} = value
          const bgColor = themeDark ? '#212121' : '#ffffff'
          const bgShadow = themeDark ? '#212121' : ' #cbd5e1'
          const LoginLogo = themeDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const labelText = themeDark ? '#ffffff' : '#475569'
          const inputColor = themeDark ? '#ffffff' : '#000000'
          const errorStyle = themeDark ? '#ff0000' : '#ff0b37'
          return (
            <LoginMainPage bgColor={bgColor}>
              <LoginCard bgShadow={bgShadow} loginCard={themeDark}>
                <LoginFromLogo src={LoginLogo} alt="website logo" />
                <FormLogin onSubmit={this.onSubmitLoginForm}>
                  <FormLabel htmlFor="userName" labelText={labelText}>
                    USERNAME
                  </FormLabel>
                  <UserInputs
                    value={username}
                    onChange={this.updateUserName}
                    id="userName"
                    type="text"
                    inputColor={inputColor}
                    placeholder="Username"
                  />
                  <FormLabel htmlFor="userPassword" labelText={labelText}>
                    PASSWORD
                  </FormLabel>
                  <UserInputs
                    onChange={this.updateUserPassword}
                    value={password}
                    id="userPassword"
                    type={passwordText}
                    inputColor={inputColor}
                    placeholder="Password"
                  />
                  <CheckboxContainer>
                    <CheckboxInput
                      type="checkbox"
                      id="showPassword"
                      onChange={this.showPassword}
                    />
                    <CheckboxLabel htmlFor="showPassword" labelText={labelText}>
                      Show Password
                    </CheckboxLabel>
                  </CheckboxContainer>
                  <LoginFormButton type="submit">Login</LoginFormButton>
                  {errorMsg && (
                    <ErrorMessage errorStyle={errorStyle}>
                      *{errorMessage}
                    </ErrorMessage>
                  )}
                </FormLogin>
              </LoginCard>
            </LoginMainPage>
          )
        }}
      </YouTubeContext.Consumer>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return <>{this.displayLoginForm()}</>
  }
}
export default LoginForm

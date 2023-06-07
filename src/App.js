import {Component} from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'

// Components
import YouTubeContext from './Context/youtubeContext'
import ProtectedRouter from './components/ProtectedRouter'
import Home from './components/Home'
import LoginForm from './components/Login'
import NotFound from './components/NotFound'
import VideoDetail from './components/VideoDetailsPage'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/savedVideos'
import './App.css'

// Replace your code here
class App extends Component {
  state = {themeDark: false, savedList: []}

  themeIsClicked = () => {
    this.setState(prevState => ({themeDark: !prevState.themeDark}))
  }

  onAddSavedList = item => {
    const {savedList} = this.state
    const productObject = savedList.find(
      eachCartItem => eachCartItem.id === item.id,
    )
    if (productObject) {
      this.setState(prevState => ({
        savedList: prevState.savedList.filter(each => each.id !== item.id),
      }))
    } else {
      const updatedCartList = [...savedList, item]
      this.setState({savedList: updatedCartList})
    }
  }

  render() {
    const {themeDark, savedList} = this.state
    return (
      <YouTubeContext.Provider
        value={{
          themeDark,
          savedList,
          themeIsClicked: this.themeIsClicked,
          onAddSavedList: this.onAddSavedList,
        }}
      >
        <Switch>
          <ProtectedRouter exact path="/" component={Home} />
          <ProtectedRouter exact path="/trending" component={Trending} />
          <ProtectedRouter exact path="/gaming" component={Gaming} />
          <ProtectedRouter exact path="/videos/:id" component={VideoDetail} />
          <ProtectedRouter exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/login" component={LoginForm} />
          <Route path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </YouTubeContext.Provider>
    )
  }
}

export default App

import './App.css'

import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import ColorModeContext from './context/ColorModeContext'
import SavedVideosContext from './context/SavedVideosContext'

import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import VideosRoute from './components/VideosRoute'
import TrendingView from './components/TrendingView'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'

class App extends Component {
  state = {
    isDarkMode: true,
    savedVideos: [], // Assuming you want to manage saved videos in the state
  }

  toggleColorMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  addSavedVideo = video => {
    //console.log(video)
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, video],
    }))
  }

  removeSavedVideo = videoId => {
    this.setState(prevState => ({
      savedVideos: prevState.savedVideos.filter(video => video.id !== videoId),
    }))
  }

  render() {
    const {isDarkMode, savedVideos} = this.state
    return (
      <ColorModeContext.Provider
        value={{isDarkMode, toggleColorMode: this.toggleColorMode}}
      >
        <SavedVideosContext.Provider
          value={{
            savedVideos,
            addSavedVideo: this.addSavedVideo,
            removeSavedVideo: this.removeSavedVideo,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/videos/:id" component={VideosRoute} />
            <ProtectedRoute exact path="/trending" component={TrendingView} />
            <ProtectedRoute exact path="/gaming" component={GamingRoute} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideosRoute}
            />
          </Switch>
        </SavedVideosContext.Provider>
      </ColorModeContext.Provider>
    )
  }
}

export default App
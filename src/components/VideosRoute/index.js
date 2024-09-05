import './index.css'

import LeftMenuBar from '../LeftMenuBar'
import Header from '../Header'

import {Component} from 'react'

import Cookies from 'js-cookie'

import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'

import SavedVideosContext from '../../context/SavedVideosContext'

class VideosRoute extends Component {
  state = {isLoading: true, videoDetails: {}}

  componentDidMount = () => {
    this.fetchVideoData()
  }

  fetchVideoData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
    if (response.ok) {
      const data = await response.json()

      // Utility function to convert keys to camel case
      const toCamelCase = str =>
        str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase())

      const keysToCamelCase = obj => {
        if (Array.isArray(obj)) {
          return obj.map(item => keysToCamelCase(item))
        } else if (obj !== null && obj.constructor === Object) {
          return Object.keys(obj).reduce((result, key) => {
            const camelKey = toCamelCase(key)
            result[camelKey] = keysToCamelCase(obj[key])
            return result
          }, {})
        }
        return obj
      }

      const videoDetails = keysToCamelCase(data)

      this.setState({isLoading: false, videoDetails: videoDetails.videoDetails})
    }
  }

  render() {
    const {videoDetails, isLoading} = this.state

    const {
      channel = {},
      description,
      id,
      publishedAt,
      thumbnailUrl,
      title,
      videoUrl,
      viewCount,
    } = videoDetails

    const {name, profileImageUrl, subscriberCount} = channel

    return (
      <SavedVideosContext.Consumer>
        {({addSavedVideo}) => (
          <div data-testid="videoItemDetails">
            <Header />
            <div style={{display: 'flex'}}>
              <LeftMenuBar />
              {isLoading ? (
                <div className="loader-container" data-testid="loader">
                  <Loader type="ThreeDots" color="red" height="50" width="50" />
                </div>
              ) : (
                <div style={{width: '100%'}}>
                  <ReactPlayer url={videoUrl} />
                  <p>{title}</p>
                  <p>{viewCount} views</p>
                  <img src={profileImageUrl} alt={name} />
                  <p>{name}</p>
                  <p>{subscriberCount} subscribers</p>
                  <p>{description}</p>
                  <button onClick={() => addSavedVideo(videoDetails)}>
                    Save
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </SavedVideosContext.Consumer>
    )
  }
}

export default VideosRoute

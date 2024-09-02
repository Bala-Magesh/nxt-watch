import './index.css'

import {Component} from 'react'

import Header from '../Header'
import LeftMenuBar from '../LeftMenuBar'
import GameCard from '../GameCard'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {IoGameController} from 'react-icons/io5'

class GamingRoute extends Component {
  state = {isLoading: true, videoList: []}

  componentDidMount = () => {
    this.fetchVideos()
  }

  fetchVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch('https://apis.ccbp.in/videos/gaming', options)
    if (response.ok) {
      const data = await response.json()

      const formattedVideos = data.videos.map(eachVid => ({
        id: eachVid.id,
        thumbnailUrl: eachVid.thumbnail_url,
        title: eachVid.title,
        viewCount: eachVid.view_count,
      }))

      this.setState({isLoading: false, videoList: formattedVideos})
    }
  }

  render() {
    const {isLoading, videoList} = this.state

    return (
      <div data-testid="gaming">
        <Header />
        <div style={{display: 'flex'}}>
          <LeftMenuBar />
          <div>
            {isLoading ? (
              <div className="loader-container" data-testid="loader">
                <Loader type="ThreeDots" color="red" height="50" width="50" />
              </div>
            ) : (
              <>
                <div>
                  <IoGameController style={{color: '#ff0b37'}} />
                  <h1>Trending</h1>
                </div>
                <ul className="gaming-ul">
                  {videoList.map(eachVid => (
                    <GameCard key={eachVid.id} data={eachVid} />
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default GamingRoute
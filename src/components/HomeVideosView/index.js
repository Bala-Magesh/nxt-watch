import './index.css'

import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import NxtWatchPremiumBanner from '../NxtWatchPremiumBanner'
import HomeVideoCard from '../HomeVideoCard'

class HomeVideosView extends Component {
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
    const response = await fetch(
      'https://apis.ccbp.in/videos/all?search=',
      options,
    )
    if (response.ok) {
      const data = await response.json()
      const {videos} = data

      const formattedVideos = videos.map(eachVid => ({
        channel: eachVid.channel,
        id: eachVid.id,
        publishedAt: eachVid.published_at,
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
      <div>
        <NxtWatchPremiumBanner />
        {isLoading ? (
          <div className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="red" height="50" width="50" />
          </div>
        ) : (
          <ul className="home-videos-ul">
            {videoList.map(eachVid => (
              <HomeVideoCard key={eachVid.id} videoInfo={eachVid} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default HomeVideosView
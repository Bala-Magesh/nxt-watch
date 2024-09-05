import './index.css'

import {Component} from 'react'

import LeftMenuBar from '../LeftMenuBar'
import Header from '../Header'
import TrendingVideoCard from '../TrendingVideoCard'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import { FaFire } from "react-icons/fa";

class TrendingView extends Component {
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
      'https://apis.ccbp.in/videos/trending',
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
      <div data-testid="trending">
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
                  <FaFire style={{color: '#ff0b37'}} />
                  <h1>Trending</h1>
                </div>
                <ul className="trending-ul">
                  {videoList.map(eachVid => (
                    <TrendingVideoCard key={eachVid.id} data={eachVid} />
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

export default TrendingView

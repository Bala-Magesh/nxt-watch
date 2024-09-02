import './index.css'

import {Component} from 'react'

import SavedVideosContext from '../../context/SavedVideosContext'

import Header from '../Header'
import LeftMenuBar from '../LeftMenuBar'
import TrendingVideoCard from '../TrendingVideoCard'

import {PiListPlusBold} from 'react-icons/pi'

class SavedVideosRoute extends Component {
  render() {
    return (
      <SavedVideosContext.Consumer>
        {({savedVideos}) => (
          <div data-testid="savedVideos">
            {console.log(savedVideos)}
            <Header />
            <div style={{display: 'flex'}}>
              <LeftMenuBar />
              <div>
                <div>
                  <PiListPlusBold style={{color: '#ff0b37'}} />
                  <h1>Saved Videos</h1>
                </div>
                {savedVideos.length === 0 ? (
                  <p>No saved videos yet!</p>
                ) : (
                  <ul className="trending-ul">
                    {savedVideos.map(eachVid => (
                      <TrendingVideoCard key={eachVid.id} data={eachVid} />
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}
      </SavedVideosContext.Consumer>
    )
  }
}

export default SavedVideosRoute
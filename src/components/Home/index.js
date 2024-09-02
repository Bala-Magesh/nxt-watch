import './index.css'

import {Component} from 'react'

import Header from '../Header'
import LeftMenuBar from '../LeftMenuBar'
import HomeVideosView from '../HomeVideosView'

const currentPageConstants = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED VIDEOS',
}

class Home extends Component {
  state = {currentPage: currentPageConstants.home}

  render() {
    const {currentPage} = this.state

    let pageElement = undefined

    switch (currentPage) {
      case currentPageConstants.home:
        pageElement = <HomeVideosView />
        break
    }
    return (
      <div style={{width: '100%'}} data-testid="home">
        <Header />
        <div className="home-body-container">
          <LeftMenuBar />
          {pageElement}
        </div>
      </div>
    )
  }
}

export default Home
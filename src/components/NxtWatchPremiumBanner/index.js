import './index.css'

import {Component} from 'react'

import {IoMdClose} from 'react-icons/io'

import Button from 'react-bootstrap/Button'

class NxtWatchPremiumBanner extends Component {
  state = {showBanner: true}

  onClickCloseBtn = () => {
    this.setState({showBanner: false})
  }

  render() {
    const {showBanner} = this.state

    if (showBanner) {
      return (
        <div className="nxt-watch-premium-banner-container">
          <div className="banner-wrapper">
            <img
              className="banner-app-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="logo-light"
            />
            <button
              onClick={this.onClickCloseBtn}
              className="banner-close-button"
              data-testid="banner"
            >
              <IoMdClose className="close-icon" />
            </button>
          </div>

          <p className="banner-text">
            Buy NxtWatch Premium prepaid plans with UPI
          </p>
          <Button className="banner-payment-button" variant="outline-dark">
            GET IT NOW
          </Button>
        </div>
      )
    } else {
      return <></>
    }
  }
}

export default NxtWatchPremiumBanner
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import {Component} from 'react'

import ColorModeContext from '../../context/ColorModeContext'

import {HeaderContainer} from './styledComponents'

import {MdOutlineLightMode, MdDarkMode} from 'react-icons/md'
import {HiMiniUserCircle} from 'react-icons/hi2'

import Button from 'react-bootstrap/Button'

class Header extends Component {
  render() {
    return (
      <ColorModeContext.Consumer>
        {value => {
          const {isDarkMode, toggleColorMode} = value
          const appLogoUrl = isDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <HeaderContainer isDarkMode={isDarkMode}>
              <div>
                <img
                  className='header-app-logo'
                  src={appLogoUrl}
                  alt='nxt-watch-logo'
                />
              </div>
              <div className='header-sub-container'>
                <button
                  className='icon-button'
                  onClick={() => toggleColorMode()}
                  data-testid='theme'
                >
                  {isDarkMode ? (
                    <MdOutlineLightMode className='light-mode-icon' />
                  ) : (
                    <MdDarkMode className='dark-mode-icon' />
                  )}
                </button>
                <button className='icon-button'>
                  <HiMiniUserCircle className='profile-icon' />
                </button>
                {isDarkMode ? (
                  <Button className='logout-button' variant='outline-light'>
                    Logout
                  </Button>
                ) : (
                  <Button className='logout-button' variant='outline-dark'>
                    Logout
                  </Button>
                )}
              </div>
            </HeaderContainer>
          )
        }}
      </ColorModeContext.Consumer>
    )
  }
}

export default Header
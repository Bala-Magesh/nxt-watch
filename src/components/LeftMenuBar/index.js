import './index.css'

import {Component} from 'react'
import {Link} from 'react-router-dom'

import ColorModeContext from '../../context/ColorModeContext'

import {StyledUl, StyledLi, StyledTopic} from './styledComponents'

import {AiFillHome} from 'react-icons/ai'
import {BsFire} from 'react-icons/bs'
import {IoGameController} from 'react-icons/io5'
import {PiListPlusBold} from 'react-icons/pi'

class LeftMenuBar extends Component {
  state = {selectedMenu: 'home'}

  onChangeMenuItem = menuId => {
    this.setState({selectedMenu: menuId})
  }

  render() {
    return (
      <ColorModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const iconClassName = isDarkMode
            ? 'dark-mode-title-icon'
            : 'light-mode-title-icon'

          const {selectedMenu} = this.state
          return (
            <div className="left-menu-bar-container">
              <StyledUl isDarkMode={isDarkMode}>
                <Link to="/">
                  <StyledLi
                    isDarkMode={isDarkMode}
                    isSelected={selectedMenu === 'home'}
                    onClick={() => this.onChangeMenuItem('home')}
                  >
                    <AiFillHome
                      className={
                        selectedMenu === 'home'
                          ? 'red-title-icon'
                          : iconClassName
                      }
                    />
                    <StyledTopic
                      isSelected={selectedMenu === 'home'}
                      isDarkMode={isDarkMode}
                    >
                      Home
                    </StyledTopic>
                  </StyledLi>
                </Link>

                <Link to="/trending">
                  <StyledLi
                    isDarkMode={isDarkMode}
                    isSelected={selectedMenu === 'trending'}
                    onClick={() => this.onChangeMenuItem('trending')}
                  >
                    <BsFire
                      className={
                        selectedMenu === 'trending'
                          ? 'red-title-icon'
                          : iconClassName
                      }
                    />
                    <StyledTopic
                      isSelected={selectedMenu === 'trending'}
                      isDarkMode={isDarkMode}
                    >
                      Trending
                    </StyledTopic>
                  </StyledLi>
                </Link>
                <Link to="/gaming">
                  <StyledLi
                    isDarkMode={isDarkMode}
                    isSelected={selectedMenu === 'gaming'}
                    onClick={() => this.onChangeMenuItem('gaming')}
                  >
                    <IoGameController
                      className={
                        selectedMenu === 'gaming'
                          ? 'red-title-icon'
                          : iconClassName
                      }
                    />
                    <StyledTopic
                      isSelected={selectedMenu === 'gaming'}
                      isDarkMode={isDarkMode}
                    >
                      Gaming
                    </StyledTopic>
                  </StyledLi>
                </Link>
                <Link to="saved-videos">
                  <StyledLi
                    isDarkMode={isDarkMode}
                    isSelected={selectedMenu === 'savedVideos'}
                    onClick={() => this.onChangeMenuItem('savedVideos')}
                  >
                    <PiListPlusBold
                      className={
                        selectedMenu === 'savedVideos'
                          ? 'red-title-icon'
                          : iconClassName
                      }
                    />
                    <StyledTopic
                      isSelected={selectedMenu === 'savedVideos'}
                      isDarkMode={isDarkMode}
                    >
                      Saved Videos
                    </StyledTopic>
                  </StyledLi>
                </Link>
              </StyledUl>
            </div>
          )
        }}
      </ColorModeContext.Consumer>
    )
  }
}

export default LeftMenuBar
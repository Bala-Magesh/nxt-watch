import styled from 'styled-components'

export const StyledUl = styled.ul`
    height: 90vh;
    width: 20vw;
    padding:0;
    margin:0;
    padding-top: 24px;
    background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
    list-style-type: none;
`

export const StyledLi = styled.li`
    width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 24px;
    background-color: ${props => {
      const {isDarkMode, isSelected} = props

      if (isSelected) {
        return isDarkMode ? '#1e293b' : ' #d7dfe9'
      } else {
        return isDarkMode ? 'transparent' : 'transparent'
      }
    }};

    display: flex;
    align-items: center;
`

export const StyledTopic = styled.p`
    margin: 0;
    font-weight: ${props => (props.isSelected ? 'bold' : 'normal')};
    margin-left: 24px;
    font-size: 16px;
    color: ${props => (props.isDarkMode ? '#f1f5f9' : '#616e7c')};
`
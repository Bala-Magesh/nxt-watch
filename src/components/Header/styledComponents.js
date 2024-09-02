import styled from 'styled-components'

export const HeaderContainer = styled.nav`
    background-color: ${props => (props.isDarkMode ? '#212121' : '#f9f9f9')};
    padding: 32px;
    height: 10vh;

    display: flex;
    justify-content: space-between;
    align-items: center;
`
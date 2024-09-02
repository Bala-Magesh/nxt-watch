import styled from 'styled-components'

export const BgContainer = styled.div`
    background-color: ${props => (props.isDarkMode ? '#231f20' : '#f9f9f9')};
    height: 100vh;
    font-family: Roboto;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Label = styled.label`
    color: ${props => (props.isDarkMode ? '#f9f9f9' : '#f1f5f9')};
    align-self: flex-start;
    margin-top: 24px;
`

export const StyledInput = styled.input`
    background-color: transparent;
    height: 42px;
    width: 100%;
    border-radius: 4px;
    margin-top: 12px;
    border: 2px solid #475569;
    outline: none;
    font-size: 14px;
    padding-left: 24px;
    caret-color: #475569;
    color: #f8fafc;
`
export const ShowPasswordLabel = styled.label`
    color: ${props => (props.isDarkMode ? '#f8fafc' : '#0f0f0f')}
`
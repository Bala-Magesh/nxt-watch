import React from 'react'

const ColorModeContext = React.createContext({
  isDarkMode: false,
  toggleColorMode: () => {},
})

export default ColorModeContext
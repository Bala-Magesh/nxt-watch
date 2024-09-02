import React from 'react'

const SavedVideosContext = React.createContext({
  savedVideosList: [],
  addSavedVideos: () => {},
})

export default SavedVideosContext
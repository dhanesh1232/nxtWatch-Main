import React from 'react'

const YouTubeContext = React.createContext({
  cartList: [],
  themeDark: false,
  themeIsClicked: () => {},
  onAddSavedList: () => {},
})
export default YouTubeContext

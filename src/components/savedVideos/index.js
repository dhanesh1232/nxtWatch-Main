import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'
import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendVideoItem from '../TrendsItem'

import './index.css'
import {
  SavedContainer,
  SavedVideoList,
  SavedVideosContentCon,
  SavedVideosHead,
  SavedVideosLogoCon,
  SavedBanner,
  SavedVideosNotFound,
  ImageSavedCon,
  SavedImage,
  SavedFailureHead,
  SavedFailurePara,
} from './styledComponents'
import YouTubeContext from '../../Context/youtubeContext'

class SavedVideos extends Component {
  renderSavedVideoList = (videos, themeDark) => {
    const paraColor = themeDark ? '#ffffff' : '#606060'
    const headColor = themeDark ? '#ffffff' : '#000000'
    const savedBanner = themeDark ? '#181818' : '#d7dfe9'
    const logoBg = themeDark ? '#000000' : '#f1f1f1'
    const bHeadColor = themeDark ? '#ffffff' : '#000000'
    if (videos.length === 0) {
      return (
        <SavedVideosNotFound>
          <ImageSavedCon>
            <SavedImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <SavedFailureHead fontColor={bHeadColor}>
              No saved videos found
            </SavedFailureHead>
            <SavedFailurePara paraColor={paraColor}>
              You can save your videos while watching them
            </SavedFailurePara>
          </ImageSavedCon>
        </SavedVideosNotFound>
      )
    }
    return (
      <>
        <SavedBanner bgColor={savedBanner}>
          <SavedVideosLogoCon bgColor={logoBg}>
            <AiFillFire />
          </SavedVideosLogoCon>
          <SavedVideosHead fontColor={headColor}>Saved Videos</SavedVideosHead>
        </SavedBanner>
        <SavedVideoList>
          {videos.map(eachVideo => (
            <TrendVideoItem key={eachVideo.id} trendItem={eachVideo} />
          ))}
        </SavedVideoList>
      </>
    )
  }

  render() {
    return (
      <YouTubeContext.Consumer>
        {value => {
          const {themeDark, savedList} = value
          const bgColorSaved = themeDark ? '#000000' : ' #f1f1f1'
          console.log(savedList)
          return (
            <>
              <Header />
              <SavedContainer>
                <Sidebar />
                <SavedVideosContentCon bgColor={bgColorSaved}>
                  {this.renderSavedVideoList(savedList, themeDark)}
                </SavedVideosContentCon>
              </SavedContainer>
            </>
          )
        }}
      </YouTubeContext.Consumer>
    )
  }
}
export default SavedVideos

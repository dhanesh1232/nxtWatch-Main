import {Link} from 'react-router-dom'
import YouTubeContext from '../../Context/youtubeContext'
import {
  GameItemList,
  TopWatching,
  GamingTitle,
  GamingViewImg,
} from './styledComponents'
import './index.css'

const GamingItem = props => {
  const {gameItem} = props
  const {id, title, thumbnailUrl, viewCount} = gameItem
  return (
    <YouTubeContext.Consumer>
      {value => {
        const {themeDark} = value
        const fontHead = themeDark ? '#ffffff' : '#000000'
        const fontColor = themeDark ? '#f1f1f1f1' : 'gray'
        return (
          <Link to={`/videos/${id}`} className="nav-link">
            <GameItemList>
              <GamingViewImg src={thumbnailUrl} />
              <GamingTitle fontHead={fontHead}>{title}</GamingTitle>
              <TopWatching colorFont={fontColor}>
                {viewCount} Watching Worldwide
              </TopWatching>
            </GameItemList>
          </Link>
        )
      }}
    </YouTubeContext.Consumer>
  )
}
export default GamingItem

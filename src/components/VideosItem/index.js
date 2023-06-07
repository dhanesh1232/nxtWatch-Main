import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {
  VideoItemList,
  VideoInfoContainer,
  VideosListImage,
  VideoProfile,
  VideoThumbNameCon,
  VideoChannelName,
  VideoNameAgoContainer,
  VideoNameTag,
} from './styledComponents'
import './index.css'

const VideoItem = props => {
  const {videoItem, themeDark} = props
  const {
    title,
    id,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    viewCount,
    name,
  } = videoItem
  const agoDate = formatDistanceToNow(new Date(publishedAt), {addSuffix: true})
  const years = agoDate.replace(/almost |above |over |about/i, '')
  const fontColor = themeDark ? '#ffffff' : null
  return (
    <VideoItemList>
      <Link to={`/videos/${id}`} className="nav-link-item">
        <VideosListImage src={thumbnailUrl} alt="video thumbnail" />
        <VideoInfoContainer>
          <VideoProfile src={profileImageUrl} alt="channel logo" />
          <VideoThumbNameCon fontColor={fontColor}>
            <VideoChannelName>{title}</VideoChannelName>
            <VideoNameAgoContainer>
              <VideoNameTag>{name}</VideoNameTag>
              <VideoNameTag>• {viewCount}</VideoNameTag>
              <VideoNameTag>• {years}</VideoNameTag>
            </VideoNameAgoContainer>
          </VideoThumbNameCon>
        </VideoInfoContainer>
      </Link>
    </VideoItemList>
  )
}
export default VideoItem

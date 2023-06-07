import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import './index.css'

import YouTubeContext from '../../Context/youtubeContext'

import {
  TrendListItem,
  TrendLogo,
  TrendChannelInfo,
  TrendThumbImg,
  TrendTitleHead,
  TitleContainer,
  ViewP,
  NameP,
  NamingContainer,
  NamePA,
  ViewPA,
} from './styledComponents'

const TrendVideoItem = props => {
  const {trendItem} = props
  const {
    id,
    publishedAt,
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
  } = trendItem
  return (
    <YouTubeContext.Consumer>
      {value => {
        const {themeDark} = value
        const trendTitleHead = themeDark ? '#ffffff' : '#000000'
        const trendPara = themeDark ? '#cccccc' : '#909090'
        const agoDate = formatDistanceToNow(new Date(publishedAt), {
          addSuffix: true,
        })
        const years = agoDate.replace(/almost |above |over |about/i, '')
        return (
          <Link to={`/videos/${id}`} className="link-item">
            <TrendListItem>
              <TrendThumbImg src={thumbnailUrl} alt="video thumbnail" />
              <TrendChannelInfo>
                <TrendLogo src={profileImageUrl} alt="channel logo" />
                <TitleContainer>
                  <TrendTitleHead headColor={trendTitleHead}>
                    {title}
                  </TrendTitleHead>
                  <NamingContainer>
                    <NameP trendPara={trendPara}>{name}</NameP>
                    <ViewP trendPara={trendPara}>
                      <p>{viewCount}</p>
                      <p>• {years}</p>
                    </ViewP>
                  </NamingContainer>
                  <NamePA trendPara={trendPara}>{name}</NamePA>
                  <ViewPA trendPara={trendPara}>
                    <p>{viewCount}</p>
                    <p>• {years}</p>
                  </ViewPA>
                </TitleContainer>
              </TrendChannelInfo>
            </TrendListItem>
          </Link>
        )
      }}
    </YouTubeContext.Consumer>
  )
}

export default TrendVideoItem

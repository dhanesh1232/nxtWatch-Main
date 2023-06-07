import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendVideoItem from '../TrendsItem'
import YouTubeContext from '../../Context/youtubeContext'

import {
  TrendingMainContainer,
  TrendingPageViewContainer,
  TrendingLogoIcon,
  LogoContainer,
  TrendingHead,
  TrendsLoadingView,
  FailureViewTrends,
  FailureViewImg,
  FailureViewHead,
  FailureViewPara,
  TryAgainButton,
  TrendsList,
} from './styledComponents'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {trendsData: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendsApiData()
  }

  getTrendsApiData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()
    if (response.ok) {
      const updatedData = fetchedData.videos.map(eachVideo => ({
        title: eachVideo.title,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        id: eachVideo.id,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        trendsData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderTrendsLoadingView = () => (
    <TrendsLoadingView data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </TrendsLoadingView>
  )

  // Show Trends Videos Success View
  renderTrendingVideosView = () => {
    const {trendsData} = this.state
    return (
      <TrendsList>
        {trendsData.map(eachTrend => (
          <TrendVideoItem key={eachTrend.id} trendItem={eachTrend} />
        ))}
      </TrendsList>
    )
  }

  onRetryMakeApiCall = () => {
    this.getTrendsApiData()
  }

  renderTrendsFailureView = themeDark => {
    const notFoundHeadColor = themeDark ? '#ffffff' : '#1e293b'
    const notFoundParaColor = themeDark ? '#616e7c' : '#475569'
    const failureImg = themeDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <FailureViewTrends>
        <FailureViewImg src={failureImg} />
        <FailureViewHead headColor={notFoundHeadColor}>
          Oops! Something Went Wrong
        </FailureViewHead>
        <FailureViewPara paraColor={notFoundParaColor}>
          We are having some trouble to complete your request.
          <br />
          Please Try Again
        </FailureViewPara>
        <TryAgainButton type="button" onClick={this.onRetryMakeApiCall}>
          Retry
        </TryAgainButton>
      </FailureViewTrends>
    )
  }

  renderTrendsPageView = themeDark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'IN_PROGRESS':
        return this.renderTrendsLoadingView()
      case 'SUCCESS':
        return this.renderTrendingVideosView(themeDark)
      case 'FAILURE':
        return this.renderTrendsFailureView(themeDark)
      default:
        return null
    }
  }

  render() {
    return (
      <YouTubeContext.Consumer>
        {value => {
          const {themeDark} = value
          const bgColorTrend = themeDark ? '#000000' : ' #f1f1f1'
          const trendBanner = themeDark ? '#181818' : '#d7dfe9'
          const logoBg = themeDark ? '#000000' : '#f1f1f1'
          const headColor = themeDark ? '#ffffff' : '#000000'
          return (
            <>
              <Header />
              <TrendingMainContainer>
                <Sidebar />
                <TrendingPageViewContainer bgColor={bgColorTrend}>
                  <TrendingLogoIcon logoBgCon={trendBanner}>
                    <LogoContainer logoBg={logoBg}>
                      <HiFire className="trend-icon" />
                    </LogoContainer>
                    <TrendingHead headColor={headColor}>Trending</TrendingHead>
                  </TrendingLogoIcon>
                  {this.renderTrendsPageView(themeDark)}
                </TrendingPageViewContainer>
              </TrendingMainContainer>
            </>
          )
        }}
      </YouTubeContext.Consumer>
    )
  }
}

export default Trending

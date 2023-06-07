import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import Sidebar from '../Sidebar'
import GamingItem from '../GamingItem'
import YouTubeContext from '../../Context/youtubeContext'
import './index.css'
import {
  GamingMainContainer,
  GamingBannerView,
  GamingPageViewContainer,
  LogoGamingCon,
  GamingHead,
  GamingLoadingView,
  FailureViewGaming,
  FailureViewImg,
  FailureViewHead,
  FailureViewPara,
  TryAgainButton,
  GamingItemContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {gameData: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingDataMakeAPiCall()
  }

  getGamingDataMakeAPiCall = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        gameData: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetryMakeApiCall = () => {
    this.getGamingDataMakeAPiCall()
  }

  // Loading View
  renderLoadingView = () => (
    <GamingLoadingView data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </GamingLoadingView>
  )

  // failure View
  renderGamingFailureView = themeDark => {
    const notFoundHeadColor = themeDark ? '#ffffff' : '#1e293b'
    const notFoundParaColor = themeDark ? '#616e7c' : '#475569'
    const failureImg = themeDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <FailureViewGaming>
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
      </FailureViewGaming>
    )
  }

  renderSuccessView = () => {
    const {gameData} = this.state
    return (
      <GamingItemContainer>
        {gameData.map(eachGame => (
          <GamingItem key={eachGame.id} gameItem={eachGame} />
        ))}
      </GamingItemContainer>
    )
  }

  renderGamingPageView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'IN_PROGRESS':
        return this.renderLoadingView()
      case 'FAILURE':
        return this.renderGamingFailureView()
      case 'SUCCESS':
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return (
      <YouTubeContext.Consumer>
        {value => {
          const {themeDark} = value
          const bgColorGaming = themeDark ? '#000000' : ' #f1f1f1'
          const gameBanner = themeDark ? '#181818' : '#d7dfe9'
          const logoBg = themeDark ? '#000000' : '#f1f1f1'
          const headColor = themeDark ? '#ffffff' : '#000000'
          return (
            <>
              <Header />
              <GamingMainContainer>
                <Sidebar />
                <GamingPageViewContainer bgColor={bgColorGaming}>
                  <GamingBannerView bgColor={gameBanner}>
                    <LogoGamingCon bgColor={logoBg}>
                      <SiYoutubegaming />
                    </LogoGamingCon>
                    <GamingHead fontColor={headColor}>Gaming</GamingHead>
                  </GamingBannerView>
                  {this.renderGamingPageView()}
                </GamingPageViewContainer>
              </GamingMainContainer>
            </>
          )
        }}
      </YouTubeContext.Consumer>
    )
  }
}
export default Gaming

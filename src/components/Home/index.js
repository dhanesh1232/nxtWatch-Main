import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Banner from '../Banner'
import YouTubeContext from '../../Context/youtubeContext'

import VideoItem from '../VideosItem'

import {
  HomeContainer,
  HomeSearchInput,
  HomePageContainer,
  SearchButton,
  SearchContainerHome,
  LoaderContainer,
  MainContainerFailureView,
  NoResultPara,
  NoResultHead,
  NoResultImg,
  FailureViewPara,
  FailureViewHead,
  FailureViewImg,
  FailureViewContainer,
  TryAgainButton,
  VideosListItem,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    isBanner: true,
    searchInput: '',
    videos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideosDataFromUrl()
  }

  getVideosDataFromUrl = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(product => ({
        title: product.title,
        publishedAt: product.published_at,
        thumbnailUrl: product.thumbnail_url,
        id: product.id,
        name: product.channel.name,
        profileImageUrl: product.channel.profile_image_url,
        viewCount: product.view_count,
      }))
      this.setState({
        videos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  // Home Page Loading View
  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  // Home Page Success View
  renderSuccessView = themeDark => {
    const {videos} = this.state
    const noResultHeadColor = themeDark ? '#ffffff' : '#1e293b'
    const noResultParaColor = themeDark ? '#616e7c' : '#475569'

    if (videos.length !== 0) {
      return (
        <VideosListItem>
          {videos.map(eachVideo => (
            <VideoItem
              key={eachVideo.id}
              videoItem={eachVideo}
              themeDark={themeDark}
            />
          ))}
        </VideosListItem>
      )
    }
    return (
      <MainContainerFailureView>
        <NoResultImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoResultHead headColor={noResultHeadColor}>
          No search result found
        </NoResultHead>
        <NoResultPara paraColor={noResultParaColor}>
          Try different key words or remove search result
        </NoResultPara>
        <TryAgainButton type="button" onClick={this.onRetryMakeApiCall}>
          Retry
        </TryAgainButton>
      </MainContainerFailureView>
    )
  }

  onRetryMakeApiCall = () => {
    this.getVideosDataFromUrl()
  }

  renderFailureView = themeDark => {
    const notFoundHeadColor = themeDark ? '#ffffff' : '#1e293b'
    const notFoundParaColor = themeDark ? '#616e7c' : '#475569'
    const failureImg = themeDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <FailureViewContainer>
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
      </FailureViewContainer>
    )
  }

  // API Statue Display
  displayApiStatus = themeDark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'IN_PROGRESS':
        return this.renderLoadingView()
      case 'SUCCESS':
        return this.renderSuccessView(themeDark)
      case 'FAILURE':
        return this.renderFailureView(themeDark)
      default:
        return null
    }
  }

  removeBanner = () => {
    this.setState({isBanner: false})
  }

  updateSearchInputInState = e => {
    this.setState({searchInput: e.target.value}, this.getVideosDataFromUrl)
  }

  makeApiCall = () => {
    this.getVideosDataFromUrl()
    this.setState({searchInput: ''})
  }

  render() {
    const {isBanner, searchInput} = this.state
    return (
      <YouTubeContext.Consumer>
        {value => {
          const {themeDark} = value
          const bgColorHome = themeDark ? '#000000' : ' #f1f1f1'
          const btnBgColor = themeDark ? '#616e7c' : '#d7dfe9'
          const iconColor = themeDark ? '#21212121' : '#000000'
          return (
            <>
              <Header />
              <HomeContainer>
                <Sidebar />
                <HomePageContainer bgColor={bgColorHome}>
                  {isBanner && (
                    <Banner onClickRemoveBanner={this.removeBanner} />
                  )}
                  <SearchContainerHome>
                    <HomeSearchInput
                      type="search"
                      value={searchInput}
                      onChange={this.updateSearchInputInState}
                      placeholder="Search"
                    />
                    <SearchButton
                      type="button"
                      btnBgColor={btnBgColor}
                      iconColor={iconColor}
                      onClick={this.makeApiCall}
                      data-testid="searchButton"
                    >
                      <BsSearch />
                    </SearchButton>
                  </SearchContainerHome>
                  {this.displayApiStatus(themeDark)}
                </HomePageContainer>
              </HomeContainer>
            </>
          )
        }}
      </YouTubeContext.Consumer>
    )
  }
}

export default Home

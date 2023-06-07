import {Component} from 'react'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {AiFillDislike, AiFillLike} from 'react-icons/ai'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import Cookies from 'js-cookie'
import Header from '../Header'
import Sidebar from '../Sidebar'
import YouTubeContext from '../../Context/youtubeContext'
import {
  VideoDetailsPage,
  VideoPlayerLoading,
  VideosViewContainer,
  FailureViewContainer,
  FailureViewImg,
  FailureViewHead,
  FailureViewPara,
  TryAgainButton,
  VideoPLayerSucContainer,
  ReactPlayerView,
  TitleName,
  LikePageCon,
  LikeDisLikeCon,
  ViewPageCon,
  ViewPara,
  LikeCon,
  SeparatorLine,
  DescriptionViewContainer,
  ProfileName,
  ProfileNameCon,
  ProfileInfo,
  ProfileLogo,
  SubPara,
  DescriptionPara,
} from './styledComponents'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetail extends Component {
  state = {
    videos: [],
    apiStatus: apiStatusConstants.initial,
    like: false,
    disLike: false,
    saved: false,
  }

  componentDidMount() {
    this.getVideoDataUsingId()
  }

  getVideoDataUsingId = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()
    if (response.ok) {
      const updatedData = {
        videoUrl: fetchedData.video_details.video_url,
        title: fetchedData.video_details.title,
        publishedAt: fetchedData.video_details.published_at,
        description: fetchedData.video_details.description,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        id: fetchedData.video_details.id,
        name: fetchedData.video_details.channel.name,
        profileImageUrl: fetchedData.video_details.channel.profile_image_url,
        subscriberCount: fetchedData.video_details.channel.subscriber_count,
        viewCount: fetchedData.video_details.view_count,
      }
      this.setState({
        videos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  // Render Video PLayer Loading View
  renderVideoPlayerLoadingView = () => (
    <VideoPlayerLoading data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </VideoPlayerLoading>
  )

  // Render Video Player Failure View

  onRetryMakeApiCall = () => {
    this.getVideoDataUsingId()
  }

  renderVideoPlayerFailureView = themeDark => {
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

  changeSavedVideosStatus = () => {
    this.setState(prevState => ({saved: !prevState.saved}))
  }

  // Render Video PLayer Success View
  renderVideoPlayerSuccessView = (themeDark, onAddSavedList) => {
    const {videos, disLike, saved, like} = this.state
    const {
      description,
      profileImageUrl,
      videoUrl,
      title,
      subscriberCount,
      name,
      publishedAt,
      viewCount,
    } = videos
    const agoDate = formatDistanceToNow(new Date(publishedAt), {
      addSuffix: true,
    })
    const years = agoDate.replace(/almost |above |over |about/i, '')
    const titleHeadColor = themeDark ? '#ffffff' : '#1e293b'
    const desColor = themeDark ? '#ffffff' : '#231f20'
    const isDisLike = disLike ? 'like-and-save-color' : null
    const isLike = like ? 'like-and-save-color' : null
    const isSaved = saved ? 'like-and-save-color' : null

    const changeSavedVideosStatus = () => {
      this.setState(prevState => ({saved: !prevState.saved}))
      onAddSavedList(videos)
    }

    const changeLikeStatus = () => {
      this.setState(prevState => ({like: !prevState.like, disLike: false}))
    }

    const changeDisLikeStatus = () => {
      this.setState(prevState => ({like: false, disLike: !prevState.disLike}))
    }
    return (
      <VideoPLayerSucContainer>
        <ReactPlayerView>
          <ReactPlayer url={videoUrl} width="100%" height="100%" />
        </ReactPlayerView>
        <TitleName titleColor={titleHeadColor}>{title}</TitleName>
        <LikePageCon>
          <ViewPageCon>
            <ViewPara>{viewCount} views</ViewPara>
            <ViewPara>• {years}</ViewPara>
          </ViewPageCon>
          <LikeDisLikeCon>
            <LikeCon
              type="button"
              onClick={changeLikeStatus}
              className={isLike}
              fontColor={desColor}
            >
              {like ? <AiFillLike size="20" /> : <BiLike size="20" />}
              <ViewPara>Like</ViewPara>
            </LikeCon>
            <LikeCon
              type="button"
              onClick={changeDisLikeStatus}
              fontColor={desColor}
              className={isDisLike}
            >
              {disLike ? <AiFillDislike size="20" /> : <BiDislike size="20" />}
              <ViewPara>Dislike</ViewPara>
            </LikeCon>
            <LikeCon
              type="button"
              onClick={changeSavedVideosStatus}
              fontColor={desColor}
              className={isSaved}
            >
              <BiListPlus size="20" />
              <ViewPara>Save</ViewPara>
            </LikeCon>
          </LikeDisLikeCon>
        </LikePageCon>
        <SeparatorLine />
        <DescriptionViewContainer>
          <ProfileInfo>
            <ProfileLogo src={profileImageUrl} />
            <ProfileNameCon>
              <ProfileName nameColor={titleHeadColor}>{name}</ProfileName>
              <SubPara>{subscriberCount} subscribers</SubPara>
            </ProfileNameCon>
          </ProfileInfo>
          <DescriptionPara desColor={desColor}>{description}</DescriptionPara>
        </DescriptionViewContainer>
      </VideoPLayerSucContainer>
    )
  }

  renderVideoPlayer = (themeDark, onAddSavedList) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'SUCCESS':
        return this.renderVideoPlayerSuccessView(themeDark, onAddSavedList)
      case 'FAILURE':
        return this.renderVideoPlayerFailureView(themeDark)
      case 'IN_PROGRESS':
        return this.renderVideoPlayerLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <YouTubeContext.Consumer>
        {value => {
          const {themeDark, onAddSavedList} = value
          const bgColor = themeDark ? '#000000' : ' #f1f1f1'
          return (
            <>
              <Header />
              <VideoDetailsPage>
                <Sidebar />
                <VideosViewContainer bgColor={bgColor}>
                  {this.renderVideoPlayer(themeDark, onAddSavedList)}
                </VideosViewContainer>
              </VideoDetailsPage>
            </>
          )
        }}
      </YouTubeContext.Consumer>
    )
  }
}
export default VideoDetail

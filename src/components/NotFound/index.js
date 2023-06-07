import YouTubeContext from '../../Context/youtubeContext'
import Header from '../Header'

import {
  NotFoundMainContainer,
  NotFoundImage,
  NotFoundContainer,
  NotFoundHead,
  NotFoundCard,
  NotFoundPara,
} from './styledComponents'
import Sidebar from '../Sidebar'

const NotFound = () => (
  <YouTubeContext.Consumer>
    {value => {
      const {themeDark} = value
      const bgColorNotFound = themeDark ? '#000000' : ' #f1f1f1'
      const notFoundHeading = themeDark ? '#ebebeb' : '#212121'
      const notFoundImage = themeDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />

          <NotFoundMainContainer>
            <Sidebar />
            <NotFoundContainer bgColor={bgColorNotFound}>
              <NotFoundCard>
                <NotFoundImage src={notFoundImage} />
                <NotFoundHead notHead={notFoundHeading}>
                  Page Not Found
                </NotFoundHead>
                <NotFoundPara>
                  We are sorry, the page you requested cloud not be found.
                </NotFoundPara>
              </NotFoundCard>
            </NotFoundContainer>
          </NotFoundMainContainer>
        </>
      )
    }}
  </YouTubeContext.Consumer>
)
export default NotFound

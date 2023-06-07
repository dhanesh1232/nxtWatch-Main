import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import YouTubeContext from '../../Context/youtubeContext'
// StyledComponent
import './index.css'
import {
  SideBarContainer,
  ContactUs,
  NavName,
  ContactHead,
  NavLinkItems,
  SocialMediaImage,
  SocialMedia,
  AboutUSInfo,
} from './styledComponents'

const Sidebar = () => (
  <YouTubeContext.Consumer>
    {value => {
      const {themeDark} = value
      const bgColor = themeDark ? '#212121' : '#ffffff'
      const colorInfo = themeDark ? '#ffffff' : '#000000'
      const navItemDisplay = themeDark
        ? 'nav-item-sidebar-dark'
        : 'nav-item-sidebar-light'
      return (
        <SideBarContainer bgColor={bgColor}>
          <NavLinkItems className="nav-list-item">
            <Link to="/" className={navItemDisplay}>
              <AiFillHome className="icon-color" />
              <NavName className="name">Home</NavName>
            </Link>
            <Link to="/trending" className={navItemDisplay}>
              <HiFire className="icon-color" />
              <NavName className="name">Trending</NavName>
            </Link>
            <Link to="/gaming" className={navItemDisplay}>
              <SiYoutubegaming className="icon-color" />
              <NavName className="name">Gaming</NavName>
            </Link>
            <Link to="/saved-videos" className={navItemDisplay}>
              <BiListPlus className="icon-color" />
              <NavName className="name">Saved videos</NavName>
            </Link>
          </NavLinkItems>
          <ContactUs colorInfo={colorInfo}>
            <ContactHead>CONTACT US</ContactHead>
            <SocialMedia>
              <SocialMediaImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                alt="linked in logo"
              />
            </SocialMedia>
            <AboutUSInfo>
              Enjoy! Now to see your <br />
              channels and <br />
              recommendations!
            </AboutUSInfo>
          </ContactUs>
        </SideBarContainer>
      )
    }}
  </YouTubeContext.Consumer>
)

export default Sidebar

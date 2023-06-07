import {withRouter, Link} from 'react-router-dom'
import {BsMoon} from 'react-icons/bs'
import {AiOutlineClose, AiFillHome} from 'react-icons/ai'
import {BiSun, BiListPlus} from 'react-icons/bi'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import Popup from 'reactjs-popup'
import {FiLogOut, FiMenu} from 'react-icons/fi'

import Cookies from 'js-cookie'
import YouTubeContext from '../../Context/youtubeContext'

// Styles In StyledComponents
import './index.css'
import {
  MainContainerHeader,
  LogoThemeContainer,
  ProfileLogo,
  ImageLogo,
  PopupButton,
  ThemeButton,
  UserLogout,
  LogoutPara,
  CustomButtonOne,
  CustomButtonTwo,
  LogoutButton,
  MobileButton,
  MobileResponsiveMenuBtn,
  MenuPagePopup,
  MenuCloseButton,
  NavListItems,
  NavItem,
  NavName,
} from './styledComponents'

const Header = props => {
  const onConfirmLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <YouTubeContext.Consumer>
      {value => {
        const {themeIsClicked, themeDark} = value
        const onChangeThemeColor = () => {
          themeIsClicked()
        }
        const LogoHeader = themeDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        const popupBg = themeDark ? '#212121' : '#ffffff'
        const bgColor = themeDark ? '#212121' : '#ffffff'
        const borderColorBtn = themeDark ? '#ffffff' : '#3b82f6'
        const logoutBtnPara = themeDark ? '#ffffff' : '#4f46e5'
        const mobileResponsiveLogoutBtn = themeDark ? '#ffffff' : '#000000'
        const outline = themeDark ? '#ffffff' : '#cccccc'
        const menuPopup = themeDark ? '#212121' : '#ffffff'
        const menuColor = themeDark ? '#ffffff' : '#000000'
        const navColor = themeDark ? 'nav-item-light' : 'nav-item'
        return (
          <MainContainerHeader bgColor={bgColor}>
            <Link to="/" className="nav-logo">
              <ImageLogo src={LogoHeader} alt="website logo" />
            </Link>
            <LogoThemeContainer>
              <ThemeButton
                type="button"
                data-testid="theme"
                onClick={onChangeThemeColor}
              >
                {themeDark ? (
                  <BiSun className="theme-icon" color="#ffffff" />
                ) : (
                  <BsMoon className="theme-icon" />
                )}
              </ThemeButton>
              <ProfileLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />

              <Popup
                modal
                trigger={
                  <MobileResponsiveMenuBtn
                    mobileResponsiveLogoutBtn={mobileResponsiveLogoutBtn}
                  >
                    <FiMenu className="menu-btn" />
                  </MobileResponsiveMenuBtn>
                }
              >
                {close => (
                  <MenuPagePopup menuPopup={menuPopup}>
                    <MenuCloseButton
                      type="button"
                      menuColor={menuColor}
                      onClick={() => close()}
                    >
                      <AiOutlineClose size="40px" />
                    </MenuCloseButton>
                    <NavListItems>
                      <NavItem>
                        <Link to="/" className={navColor}>
                          <AiFillHome />
                          <NavName>Home</NavName>
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link to="/trending" className={navColor}>
                          <HiFire />
                          <NavName>Trending</NavName>
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link to="/gaming" className={navColor}>
                          <SiYoutubegaming />
                          <NavName>Gaming</NavName>
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link to="/saved-videos" className={navColor}>
                          <BiListPlus />
                          <NavName>Saved videos</NavName>
                        </Link>
                      </NavItem>
                    </NavListItems>
                  </MenuPagePopup>
                )}
              </Popup>

              <Popup
                modal
                trigger={
                  <div>
                    <PopupButton type="button" borderColorBtn={borderColorBtn}>
                      Logout
                    </PopupButton>
                    <MobileButton
                      mobileResponsiveLogoutBtn={mobileResponsiveLogoutBtn}
                    >
                      <FiLogOut className="logout-btn" />
                    </MobileButton>
                  </div>
                }
              >
                {close => (
                  <UserLogout popupBg={popupBg}>
                    <LogoutPara logoutBtnPara={logoutBtnPara}>
                      Are you sure, you want to logout
                    </LogoutPara>
                    <LogoutButton>
                      <CustomButtonOne
                        type="button"
                        onClick={() => close()}
                        outline={outline}
                      >
                        Cancel
                      </CustomButtonOne>
                      <CustomButtonTwo type="button" onClick={onConfirmLogout}>
                        Confirm
                      </CustomButtonTwo>
                    </LogoutButton>
                  </UserLogout>
                )}
              </Popup>
            </LogoThemeContainer>
          </MainContainerHeader>
        )
      }}
    </YouTubeContext.Consumer>
  )
}
export default withRouter(Header)

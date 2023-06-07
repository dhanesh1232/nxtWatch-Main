import {AiOutlineClose} from 'react-icons/ai'
import {
  BannerContainer,
  BannerDescription,
  BannerCon,
  PremiumButton,
  BannerWebLogo,
  BannerCloseBtn,
} from './styledComponents'

const Banner = props => {
  const {onClickRemoveBanner} = props
  const removeBanner = () => {
    onClickRemoveBanner()
  }
  return (
    <BannerContainer>
      <BannerCon>
        <BannerWebLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
        <BannerDescription>
          Buy Nxt Watch Premium prepaid plans with UPI
        </BannerDescription>
        <PremiumButton type="button">GET IT NOW</PremiumButton>
      </BannerCon>
      <BannerCloseBtn type="button" onClick={removeBanner}>
        <AiOutlineClose />
      </BannerCloseBtn>
    </BannerContainer>
  )
}
export default Banner

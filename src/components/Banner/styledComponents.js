import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 30%;
  width: 100%;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`
export const BannerCon = styled.div`
  display: flex;
  flex-direction: column;
`
export const BannerWebLogo = styled.img`
  height: 3rem;
  width: 15rem;
  @media screen and (max-width: 768px) {
    height: 2rem;
    width: 8rem;
  }
`
export const BannerDescription = styled.p`
  font-size: 18px;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const PremiumButton = styled.button`
  border: 2px solid #231f20;
  color: #231f20;
  height: 2.7rem;
  width: 8rem;
  margin-top: 10px;
  font-weight: 600;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    height: 1.8rem;
    width: 6rem;
    font-size: 13px;
  }
`
export const BannerCloseBtn = styled.button`
  height: 3rem;
  width: 3rem;
  font-size: 18px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

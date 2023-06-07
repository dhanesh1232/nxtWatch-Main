import styled from 'styled-components'

export const GamingMainContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  padding-top: 0px;
  display: flex;
`
export const GamingPageViewContainer = styled.div`
  width: 100%;
  background-color: ${props => props.bgColor};
  padding: 0px;
  margin: 0px;
  height: 100%;
  min-height: 100vh;
`
export const GamingBannerView = styled.div`
  width: 100%;
  background-color: ${props => props.bgColor};
  padding: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
`
export const LogoGamingCon = styled.div`
  background-color: ${props => props.bgColor};
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  border-radius: 50%;
  color: red;
  padding: 15px;
  @media screen and (max-width: 768px) {
    font-size: 40px;
    height: 60px;
    width: 60px;
  }
`
export const GamingHead = styled.h1`
  color: ${props => props.fontColor};
  font-size: 50px;
  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
`
export const GamingLoadingView = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const FailureViewGaming = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
export const FailureViewImg = styled.img`
  height: 75%;
  width: 40%;
  margin-top: 25px;
`
export const FailureViewHead = styled.h1`
  font-size: 40px;
  font-weight: 500;
  color: ${props => props.headColor};
`
export const FailureViewPara = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.paraColor};
`
export const TryAgainButton = styled.button`
  height: 2.4rem;
  width: 7rem;
  background-color: #00306e;
  color: #ffffff;
  border: none;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
`
export const GamingItemContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 15px;
  padding: 0px;
  @media screen and (max-width: 576px) {
    justify-content: center;
  }
`

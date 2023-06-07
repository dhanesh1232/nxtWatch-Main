import styled from 'styled-components'

export const TrendingMainContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  padding-top: 0px;
  display: flex;
`
export const TrendingPageViewContainer = styled.div`
  width: 100%;
  background-color: ${props => props.bgColor};
  padding: 0px;
  margin: 0px;
  height: 100%;
  min-height: 100vh;
  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0px;
    width: 100%;
  }
`
export const TrendingLogoIcon = styled.div`
  background-color: ${props => props.logoBgCon};
  padding: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: flex-start;
  padding-left: 25px;
`
export const LogoContainer = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  background-color: ${props => props.logoBg};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    height: 50px;
    width: 50px;
  }
`
export const TrendingHead = styled.h1`
  font-size: 45px;
  color: ${props => props.headColor};
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`
export const TrendsLoadingView = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const FailureViewTrends = styled.div`
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
export const TrendsList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px;
`

import styled from 'styled-components'

export const VideoDetailsPage = styled.div`
  min-height: 90vh;
  width: 100%;
  padding-top: 0px;
  display: flex;
`
export const VideosViewContainer = styled.div`
  width: 100%;
  background-color: ${props => props.bgColor};
  padding: 0px;
  margin: 0px;
  height: 100%;
  min-height: 100vh;
`
export const VideoPlayerLoading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const FailureViewContainer = styled.div`
  width: 100%;
  text-align: center;
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
// Video Player Success View
export const VideoPLayerSucContainer = styled.div`
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ReactPlayerView = styled.div`
  width: 100%;
  margin: 15px;
  height: 450px;
  @media screen and (max-width: 1100px) {
    height: 350px;
  }
  @media screen and (max-width: 900px) {
    height: 300px;
  }
`
export const TitleName = styled.p`
  font-size: 26px;
  padding: 0px;
  margin-top: 0px;
  align-self: flex-start;
  color: ${props => props.titleColor};
`
export const LikePageCon = styled.div`
  width: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #475569;
  @media screen and (min-width: 768px) and (max-width: 850px) {
    justify-content: flex-start;
    gap: 10px;
  }
  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ViewPageCon = styled.div`
  width: 30%;
  display: flex;
  gap: 10px;
  padding: 0px;
  margin: 0px;
  @media screen and (max-width: 1050px) {
    width: 40%;
  }
  @media screen and (max-width: 900px) {
    width: 50%;
    font-size: 16px;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
export const ViewPara = styled.p`
  font-size: 20px;
  font-weight: 500;
`
export const LikeDisLikeCon = styled.div`
  width: 23%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0px;
  margin: 0px;

  @media screen and (max-width: 1300px) {
    width: 35%;
  }
  @media screen and (max-width: 900px) {
    width: 40%;
    font-size: 16px;
  }
`
export const LikeCon = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0px;
  margin: 0px;
  cursor: pointer;
  color: ${props => props.fontColor};
`
export const SeparatorLine = styled.hr`
  width: 100%;
  color: #475569;
`
export const DescriptionViewContainer = styled.div`
  width: 100%;
`
export const ProfileInfo = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
`
export const ProfileNameCon = styled.div`
  display: flex;
  flex-direction: column;
`
export const ProfileName = styled.p`
  font-size: 20px;
  padding: 0px;
  margin: 0px;
  font-weight: 500;
  color: ${props => props.nameColor};
`
export const ProfileLogo = styled.img`
  width: 50px;
  height: 50px;
`
export const SubPara = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #475569;
`
export const DescriptionPara = styled.p`
  padding-left: 50px;
  padding-top: 0px;
  margin: 0px;
  font-size: 18px;
  color: ${props => props.desColor};
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

import styled from 'styled-components'

export const VideoItemList = styled.li`
  width: 30%;
  height: 400px;
  margin: 10px;
  @media screen and (max-width: 1150px) {
    width: 45%;
    height: 300px;
  }
  @media screen and (max-width: 768px) {
    width: 45%;
  }
  @media screen and (max-width: 610px) {
    width: 95%;
    height: 350px;
  }
  @media screen and (min-width: 768px) and (max-width: 910px) {
    width: 47%;
    margin: 5px;
    gap: 10px;
  }
`
export const VideosListImage = styled.img`
  width: 100%;
  height: 60%;
  @media screen and (max-width: 1150px) {
    height: 45%;
  }
  @media screen and (max-width: 610px) {
    height: 65%;
  }
`
export const VideoInfoContainer = styled.div`
  height: 23%;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2%;
  margin-top: 5px;
`
export const VideoProfile = styled.img`
  height: 50px;
  width: 50px;
  @media screen and (max-width: 576px) {
    width: 35px;
    height: 35px;
  }
`
export const VideoThumbNameCon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin: 0px;
  padding: 0px;
  color: ${props => props.fontColor};
`
export const VideoChannelName = styled.p`
  font-size: 16px;
  font-weight: normal;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 6100x) {
    font-size: 18px;
  }
`
export const VideoNameAgoContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0px;
  padding: 0px;
  gap: 5px;
  font-weight: 500;
  @media screen and (min-width: 610px) {
    gap: 3px;
  }
  @media screen and (max-width: 610px) {
    gap: 8px;
  }
  @media screen and (min-width: 768px) and (max-width: 910px) {
    font-size: 14px;
  }
`
export const VideoNameTag = styled.p`
  font-size: 18px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 910px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1100px) and (max-width: 1200px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1300px) {
    font-size: 16px;
  }
`

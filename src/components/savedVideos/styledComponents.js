import styled from 'styled-components'

export const SavedContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  padding-top: 0px;
  display: flex;
`
export const SavedVideosContentCon = styled.div`
  width: 100%;
  background-color: ${props => props.bgColor};
  padding: 0px;
  margin: 0px;
  height: 100%;
  min-height: 100vh;
`
export const SavedVideoList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px;
`
export const SavedBanner = styled.div`
  width: 100%;
  background-color: ${props => props.bgColor};
  padding: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
`
export const SavedVideosLogoCon = styled.div`
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
export const SavedVideosHead = styled.h1`
  color: ${props => props.fontColor};
  font-size: 50px;
  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
`
export const SavedVideosNotFound = styled.div`
  height: 75%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ImageSavedCon = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SavedImage = styled.img`
  height: 75%;
  width: 75%;
`
export const SavedFailureHead = styled.h1`
  font-size: 36px;
  color: ${props => props.fontColor};
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`
export const SavedFailurePara = styled.p`
  font-size: 20px;
  color: ${props => props.paraColor};
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

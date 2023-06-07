import styled from 'styled-components'

export const TrendListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 8px;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`
export const TrendThumbImg = styled.img`
  width: 48%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
export const TrendChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin-left: 25px;
  padding: 0px;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: row;
    padding: 0px;
    margin: 0px;
    margin-top: 10px;
    gap: 10px;
  }
`
export const TrendLogo = styled.img`
  height: 50px;
  width: 50px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const TitleContainer = styled.div`
  padding: 0px;
  margin: 0px;
  gap: 0px;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`
export const NamingContainer = styled.div`
  display: none;
  padding: 0px;
  margin: 0px;
  @media screen and (max-width: 576px) {
    display: flex;
    gap: 10px;
  }
`
export const TrendTitleHead = styled.p`
  font-size: 22px;
  color: ${props => props.headColor};
  font-weight: 500;
  padding: 0px;
  margin: 0px;
  @media screen and (max-width: 1200px) {
    font-size: 20px;
  }
`
export const NameP = styled.p`
  font-size: 16px;
  color: ${props => props.trendPara};
`
export const ViewP = styled.div`
  font-size: 16px;
  margin: 0px;
  color: ${props => props.trendPara};
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
  gap: 10px;
`
export const NamePA = styled.p`
  font-size: 16px;
  padding: 0px;
  margin: 0px;
  color: ${props => props.trendPara};
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const ViewPA = styled.div`
  font-size: 16px;
  margin: 0px;
  color: ${props => props.trendPara};
  display: flex;
  align-items: center;
  padding: 0px;
  margin: 0px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`

import styled from 'styled-components'

export const GameItemList = styled.li`
  width: 20vw;
  flex-grow: 0;
  margin: 5px;
  @media screen and (max-width: 576px) {
    width: 40vw;
    margin: 5px;
  }
  @media screen and (max-width: 768px) {
    width: 28vw;
    margin: 3px;
  }
`
export const GamingViewImg = styled.img`
  height: 350px;
  width: 100%;
  @media screen and (max-width: 576px) {
    height: 200px;
  }
`
export const GamingTitle = styled.p`
  font-size: 20px;
  padding: 0px;
  margin: 0px;
  color: ${props => props.fontHead};
  font-weight: 500;
`
export const TopWatching = styled.p`
  font-size: 16px;
  color: ${props => props.colorFont};
  font-weight: 500;
`

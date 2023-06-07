import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  padding-top: 0px;
  display: flex;
`
export const HomePageContainer = styled.div`
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
export const SearchContainerHome = styled.div`
  width: 50%;
  margin-top: 10px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  border: 1.2px solid #383838;
  border-radius: 3px;
  @media screen and (max-width: 768px) {
    width: 55%;
    flex-shrink: 1;
  }
  @media screen and (max-width: 600px) {
    width: 85%;
  }
`
export const HomeSearchInput = styled.input`
  height: 2.1rem;
  width: 80%;
  font-size: 1.1rem;
  padding-left: 10px;
  border: none;
  @media screen and (max-width: 768px) {
    width: 85%;
    flex-shrink: 1;
  }
  @media screen and (max-width: 576px) {
    width: 80%;
  }
`
export const SearchButton = styled.button`
  height: 2.1rem;
  width: 20%;
  background-color: ${props => props.btnBgColor};
  border: none;
  font-size: 18px;
  border-left: 1.5px solid #383838;
  color:${props => props.iconColor}
  display:flex;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor:pointer;
  @media screen and (max-width: 768px) {
    width: 15%;
    flex-shrink: 1;
    font-size:18px;
    font-weight:bold;
  }
  @media screen and (max-width: 576px) {
    width: 20%;
    font-size:18px;
  }
`
// API Data Display with Styles
export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const MainContainerFailureView = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
export const NoResultImg = styled.img`
  height: 75%;
  width: 40%;
  margin-top: 25px;
`
export const NoResultHead = styled.h1`
  font-size: 40px;
  font-weight: 500;
  color: ${props => props.headColor};
`

export const NoResultPara = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.paraColor};
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
export const VideosListItem = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

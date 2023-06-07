import styled from 'styled-components'

export const NotFoundMainContainer = styled.div`
  height: 90vh;
  width: 100%;
  padding-top: 0px;
  display: flex;
`
export const NotFoundContainer = styled.div`
  width: 100%;
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NotFoundCard = styled.div`
  height: 75%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NotFoundImage = styled.img`
  height: 80%;
  width: 70%;
`
export const NotFoundHead = styled.h1`
  font-weight: 500;
  font-size: 36px;
  color: ${props => props.notHead};
`
export const NotFoundPara = styled.p`
  font-weight: 400;
  font-size: 22px;
  color: #606060;
`

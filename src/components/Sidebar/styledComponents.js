import styled from 'styled-components'

export const SideBarContainer = styled.div`
  width: 20%;
  min-height: 88.5vh;
  background-color: ${props => props.bgColor};
  margin: 0px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 170px;
  @media screen and (max-width: 1300px) {
    width: 32%;
  }
  @media screen and (max-width: 1060px) {
    width: 37%;
  }
  @media screen and (max-width: 890px) {
    width: 46%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavLinkItems = styled.ul`
  list-style: none;
  padding-left: 30px;
`
export const NavName = styled.p`
  font-size: 20px;
`
export const ContactUs = styled.div`
  font-family: 'Roboto';
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  color: ${props => props.colorInfo};
`
export const ContactHead = styled.p`
  font-size: 20px;
  font-weight: 500;
`
export const SocialMedia = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
`
export const SocialMediaImage = styled.img`
  height: 30px;
  width: 30px;
`
export const AboutUSInfo = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 20px;
`

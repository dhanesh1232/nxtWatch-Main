import styled from 'styled-components'

export const MainContainerHeader = styled.div`
  padding: 20px;
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`
export const ImageLogo = styled.img`
  height: 40px;
  width: 140px;
  @media screen and (max-width: 768px) {
    height: 25px;
    width: 90px;
  }
`

export const LogoThemeContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    width: 30%;
    justify-content: space-between;
  }
`
export const ThemeButton = styled.button`
  height: 50px;
  width: 50px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const ProfileLogo = styled.img`
  height: 40px;
  width: 40px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const PopupButton = styled.button`
  cursor: pointer;
  width: 7rem;
  margin-left: 10px;
  height: 2rem;
  border: 2px solid ${props => props.borderColorBtn};
  background-color: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: ${props => props.borderColorBtn};
  font-weight: 600;
  @media screen and (max-width: 1050px and min-width:768px) {
    width: 5rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const UserLogout = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 500px;
  background-color: ${props => props.popupBg};
  padding: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  @media screen and (max-width: 768px) {
    width: 350px;
  }
  @media screen and (max-width: 576px) {
    width: 270px;
    text-align: center;
  }
`
export const LogoutPara = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.logoutBtnPara};
`
export const LogoutButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 75%;
  flex-direction: row;
`
export const CustomButtonOne = styled.button`
  height: 3rem;
  width: 7rem;
  font-size: 18px;
  font-weight: 600;
  border: 1px solid ${props => props.outline};
  color: ${props => props.outline};
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  @media screen and (max-width: 576px) {
    height: 2rem;
    width: 5rem;
  }
`
export const CustomButtonTwo = styled.button`
  height: 3rem;
  width: 7rem;
  font-size: 18px;
  font-weight: 600;
  background-color: #3b82f6;
  border: none;
  cursor: pointer;
  color: #ffffff;
  border-radius: 5px;
  @media screen and (max-width: 576px) {
    height: 2rem;
    width: 5rem;
  }
`
export const MobileButton = styled.button`
  height: 2rem;
  background-color: transparent;
  font-size: 40px;
  border: none;
  color: ${props => props.mobileResponsiveLogoutBtn};
  @media screen and (min-width: 768px) {
    display: none;
    font-size: 25px;
  }
`
export const MobileResponsiveMenuBtn = styled.button`
  height: 2rem;
  background-color: transparent;
  border: none;
  font-size: 40px;
  margin: 0px;
  align-self: flex-start;
  color: ${props => props.mobileResponsiveLogoutBtn};
  @media screen and (min-width: 768px) {
    display: none;
    font-size: 20px;
  }
`
export const MenuPagePopup = styled.div`
  background-color: ${props => props.menuPopup};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const MenuCloseButton = styled.button`
  height: 50px;
  background-color: transparent;
  border: none;
  color: ${props => props.menuColor};
  margin-top: 10px;
  margin-right: 20px;
  align-self: flex-end;
  font-weight: bold;
`
export const NavListItems = styled.ul`
  list-style: none;
  margin-top: 25%;
  width: 100%;
  padding: 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  height: 35px;
  width: 100%;
  gap: 25px;
  margin-bottom: 15px;
  &:hover {
    color: #ff0b37;
  }
`
export const NavName = styled.p`
  font-weight: 400;
  &:hover {
    color: #212121;
  }
`

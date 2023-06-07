import styled from 'styled-components'

export const LoginMainPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
`
export const LoginCard = styled.div`
  width: 25%;
  border-radius: 8px;
  box-shadow: 1px 4px 16px 8px ${props => props.bgShadow};
  background-color: ${props => (props.loginCard ? '#000000' : 'transparent')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 25px;
  @media screen and (max-width: 1050px) {
    width: 35%;
  }
  @media screen and (max-width: 850px) {
    width: 43%;
  }
  @media screen and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (max-width: 576px) {
    width: 75%;
  }
`
export const LoginFromLogo = styled.img`
  height: 60px;
  width: 50%;
`

export const FormLogin = styled.form`
  height: 60%;
  width: 80%;
  display: flex;
  flex-direction: column;
`
export const UserInputs = styled.input`
  height: 2.4rem;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #475569;
  background-color: transparent;
  font-size: 16px;
  padding-left: 15px;
  color: ${props => props.inputColor};
`
export const FormLabel = styled.label`
  font-size: 16px;
  margin-top: 15px;
  color: ${props => props.labelText};
  font-weight: 500;
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
export const CheckboxInput = styled.input`
  height: 2.4rem;
  cursor: pointer;
`
export const CheckboxLabel = styled.label`
  font-size: 18px;
  color: #1e293b;
  cursor: pointer;
  font-weight: 500;
  color: ${props => props.labelText};
`
export const LoginFormButton = styled.button`
  height: 2.7rem;
  width: 100%;
  background-color: #3b82f6;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: #ffffff;
  margin-top: 20px;
  cursor: pointer;
`
export const ErrorMessage = styled.p`
  color: ${props => props.errorStyle};
  font-weight: 500;
  font-size: 18px;
`

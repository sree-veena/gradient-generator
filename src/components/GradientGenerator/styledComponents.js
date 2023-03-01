// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-image: linear-gradient(${props => props.bgImg});
`

export const HeadingEl = styled.h1`
  font-size: 28px;
  color: #ededed;
  font-family: 'Roboto';
  text-align: center;
`

export const DirectionHeading = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  color: #ededed;
  font-family: 'Roboto';
  text-align: center;
`

export const ButtonContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-left: 0;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

export const ColorHeading = styled(DirectionHeading)`
  color: #ededed;
  font-size: 20px;
`

export const ColorInputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorCode = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`

export const ColorInput = styled.input`
  border: none;
  outline: none;
  padding: 0;
  height: 35px;
  width: 80px;
  background-color: transparent;
`

export const GenerateButton = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 6px;
  background-color: #00c9b7;
  color: #1e293b;
`
